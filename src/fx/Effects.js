/**
 * Effects system.
 *
 * Everything is pooled and instanced:
 *   - GPU particle sprites (blood droplets, sparks, smoke, embers, dust, mist)
 *     rendered as a single InstancedMesh with a custom shader.
 *   - Blood decals as pooled instanced quads that conform to surface normals and
 *     PERSIST for the whole match, plus growing pools under corpses.
 *   - Physical gore chunks & shell casings driven by the Verlet solver.
 *   - Muzzle flashes with real point lights, tracers and impact debris.
 */
import * as THREE from 'three';
import { VerletBody } from '../core/physics.js';
import { lathe, boxUV, cylUV, blob, rock } from '../gfx/geometry.js';
import { Rng } from '../gfx/noise.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const _q = new THREE.Quaternion(), _m = new THREE.Matrix4();
const _euler = new THREE.Euler();
const UP = new THREE.Vector3(0, 1, 0);

/* ====================================================== PARTICLE SYSTEM ==== */
const PART_VS = /* glsl */`
precision highp float;
attribute vec3 iPos;
attribute vec3 iVel;
attribute vec4 iData;   // x: life, y: maxLife, z: size, w: type
attribute vec4 iColor;
varying vec4 vColor;
varying vec2 vUv;
varying float vType;
varying float vAge;
uniform float uTime;

void main(){
  float life = iData.x;
  float maxLife = max(iData.y, 0.0001);
  float age = clamp(1.0 - life/maxLife, 0.0, 1.0);
  vAge = age;
  vType = iData.w;

  vec3 p = iPos;
  float size = iData.z;

  if(vType < 0.5)       size *= (1.0 - age*0.45);
  else if(vType < 1.5)  size *= (1.0 - age*0.85);
  else if(vType < 2.5)  size *= (1.0 + age*2.4);
  else if(vType < 3.5)  size *= (1.0 + age*3.2);
  else if(vType < 4.5)  size *= (1.0 - age*0.6)*(0.7+0.3*sin(uTime*40.0+iPos.x*10.0));
  else                  size *= (1.0 + age*1.6);

  vec4 mv = viewMatrix * vec4(p, 1.0);
  vec2 corner = position.xy;
  vUv = uv;

  if(vType < 1.5){
    vec3 vv = (viewMatrix * vec4(iVel, 0.0)).xyz;
    float sp = length(vv.xy);
    if(sp > 0.001){
      vec2 dir = normalize(vv.xy);
      vec2 perp = vec2(-dir.y, dir.x);
      float stretch = 1.0 + min(sp*0.22, 4.5);
      corner = dir * corner.y * stretch + perp * corner.x;
    }
  }
  mv.xy += corner * size;
  gl_Position = projectionMatrix * mv;
  vColor = iColor;
}
`;

const PART_FS = /* glsl */`
precision highp float;
varying vec4 vColor;
varying vec2 vUv;
varying float vType;
varying float vAge;

float h(vec2 p){ p=fract(p*vec2(443.9,441.4)); p+=dot(p,p+19.19); return fract(p.x*p.y); }

void main(){
  vec2 c = vUv*2.0-1.0;
  float r = length(c);
  if(r > 1.0) discard;

  float a = vColor.a;
  vec3 col = vColor.rgb;

  if(vType < 0.5){
    float core = smoothstep(1.0, 0.25, r);
    float rim = smoothstep(0.55, 1.0, r);
    col *= 1.0 - rim*0.55;
    col += vec3(0.35,0.10,0.08) * pow(max(0.0, 1.0 - length(c - vec2(-0.28,0.30))), 6.0);
    a *= core * (1.0 - vAge*0.35);
  } else if(vType < 1.5){
    float core = smoothstep(1.0, 0.0, r);
    col = mix(vec3(1.0,0.55,0.12), vec3(1.0,0.98,0.85), pow(core,3.0));
    col *= 1.0 + (1.0-vAge)*3.5;
    a *= core*(1.0-vAge*0.9);
  } else if(vType < 2.5){
    float n = h(floor(vUv*11.0)+vAge);
    a *= smoothstep(1.0, 0.05, r) * (0.6+0.4*n) * (1.0-vAge) * 0.75;
  } else if(vType < 3.5){
    float n = h(floor(vUv*22.0));
    a *= smoothstep(1.0, 0.1, r) * (1.0-vAge) * (0.35+0.65*n) * 0.8;
  } else if(vType < 4.5){
    float core = smoothstep(1.0, 0.0, r);
    col = mix(vec3(1.0,0.30,0.05), vec3(1.0,0.85,0.45), pow(core,2.0)) * 2.2;
    a *= core*(1.0-vAge*0.7);
  } else {
    float n = h(floor(vUv*8.0)+vAge*2.0);
    a *= smoothstep(1.0,0.05,r)*(1.0-vAge)*0.45*(0.6+0.4*n);
  }

  if(a < 0.004) discard;
  gl_FragColor = vec4(col, a);
}
`;

class ParticleSystem {
  constructor(scene, max = 5200) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.data = new Float32Array(max * 4);
    this.color = new Float32Array(max * 4);
    this.drag = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.free = [];
    for (let i = max - 1; i >= 0; i--) this.free.push(i);
    this.active = new Set();

    const base = new THREE.PlaneGeometry(1, 1);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = base.index;
    geo.attributes.position = base.attributes.position;
    geo.attributes.uv = base.attributes.uv;
    geo.setAttribute('iPos', new THREE.InstancedBufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('iVel', new THREE.InstancedBufferAttribute(this.vel, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('iData', new THREE.InstancedBufferAttribute(this.data, 4).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('iColor', new THREE.InstancedBufferAttribute(this.color, 4).setUsage(THREE.DynamicDrawUsage));
    geo.instanceCount = 0;
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);

    this.mat = new THREE.ShaderMaterial({
      vertexShader: PART_VS, fragmentShader: PART_FS,
      uniforms: { uTime: { value: 0 } },
      transparent: true, depthWrite: false, depthTest: true,
      blending: THREE.NormalBlending, side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 8;
    scene.add(this.mesh);

    this.geo = geo;
    this.highWater = 0;
  }

  spawn(p, v, opts) {
    const i = this.free.pop();
    if (i === undefined) return -1;
    this.active.add(i);
    this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
    this.vel[i * 3] = v.x; this.vel[i * 3 + 1] = v.y; this.vel[i * 3 + 2] = v.z;
    const life = opts.life ?? 1;
    this.data[i * 4] = life;
    this.data[i * 4 + 1] = life;
    this.data[i * 4 + 2] = opts.size ?? 0.05;
    this.data[i * 4 + 3] = opts.type ?? 0;
    const c = opts.color || [0.5, 0.02, 0.02];
    this.color[i * 4] = c[0]; this.color[i * 4 + 1] = c[1];
    this.color[i * 4 + 2] = c[2]; this.color[i * 4 + 3] = opts.alpha ?? 1;
    this.drag[i] = opts.drag ?? 0.6;
    this.grav[i] = opts.gravity ?? -18;
    if (i + 1 > this.highWater) this.highWater = i + 1;
    return i;
  }

  update(dt, t, physics, fx) {
    this.mat.uniforms.uTime.value = t;
    const dead = [];
    // Iterate over a snapshot array of the active indices. The Set iteration
    // was fine, but converting to an array first avoids the per-item delete-while
    // iterating hazard and lets us use a tight index loop.
    const activeArr = Array.from(this.active);
    for (let ai = 0; ai < activeArr.length; ai++) {
      const i = activeArr[ai];
      const life = this.data[i * 4] - dt;
      if (life <= 0) { dead.push(i); continue; }
      this.data[i * 4] = life;
      const i3 = i * 3;
      let vx = this.vel[i3], vy = this.vel[i3 + 1], vz = this.vel[i3 + 2];
      vy += this.grav[i] * dt;
      const d = Math.pow(1 - this.drag[i], dt * 3);
      vx *= d; vy *= d; vz *= d;
      const px = this.pos[i3] + vx * dt;
      const py = this.pos[i3 + 1] + vy * dt;
      const pz = this.pos[i3 + 2] + vz * dt;

      const type = this.data[i * 4 + 3];
      // Blood droplets (type 0) check the ground — but only when actually
      // descending and close to where the ground might be. The old code queried
      // the physics grid for EVERY blood droplet EVERY frame even when it was
      // flying upward 2m above the floor. Skipping the query unless the particle
      // is falling AND within 0.5m of likely ground cuts the vast majority of
      // these queries (each is a broadphase hash lookup + AABB scan).
      if (type < 0.5 && physics && vy < 0 && py < 1.6) {
        const gy = physics.groundAt(px, this.pos[i3 + 1] + 0.1, pz, Math.max(0.4, Math.abs(vy) * dt + 0.25), 0.05);
        if (gy > -1e8 && py <= gy + 0.02) {
          if (Math.random() < 0.5) fx?.bloodPool(_v.set(px, gy, pz), 0.10 + Math.random() * 0.22, 1, true);
          dead.push(i); continue;
        }
      }
      this.pos[i3] = px; this.pos[i3 + 1] = py; this.pos[i3 + 2] = pz;
      this.vel[i3] = vx; this.vel[i3 + 1] = vy; this.vel[i3 + 2] = vz;
    }
    for (let di = 0; di < dead.length; di++) {
      const i = dead[di];
      this.active.delete(i);
      this.free.push(i);
      this.data[i * 4 + 2] = 0;
      this.color[i * 4 + 3] = 0;
    }
    // Trim the high-water mark when many slots have freed, so we don't keep
    // uploading thousands of zeroed instances every frame after a big fight.
    if (dead.length > 64) {
      let hw = 0;
      for (const i of this.active) if (i > hw) hw = i;
      this.highWater = hw + 1;
    }
    this.geo.instanceCount = this.highWater;
    this.geo.attributes.iPos.needsUpdate = true;
    this.geo.attributes.iVel.needsUpdate = true;
    this.geo.attributes.iData.needsUpdate = true;
    this.geo.attributes.iColor.needsUpdate = true;
  }

  clear() {
    for (const i of [...this.active]) {
      this.active.delete(i);
      this.free.push(i);
      this.data[i * 4 + 2] = 0;
      this.color[i * 4 + 3] = 0;
    }
  }
}

/* ========================================================== DECAL POOL ===== */
class DecalPool {
  constructor(scene, materials, capacityPer = 420) {
    this.groups = materials.map((mat) => {
      const geo = new THREE.PlaneGeometry(1, 1, 1, 1);
      const mesh = new THREE.InstancedMesh(geo, mat, capacityPer);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.count = 0;
      mesh.frustumCulled = false;
      mesh.receiveShadow = false;
      mesh.castShadow = false;
      mesh.renderOrder = 2;
      scene.add(mesh);
      return { mesh, next: 0, cap: capacityPer };
    });
    this.total = 0;
  }
  add(pos, normal, size, rotJitter = true) {
    const g = this.groups[(Math.random() * this.groups.length) | 0];
    const idx = g.next % g.cap;
    g.next++;
    if (g.mesh.count < g.cap) g.mesh.count = Math.min(g.cap, g.next);
    _q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
    if (rotJitter) {
      _q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.random() * Math.PI * 2));
    }
    const sc = new THREE.Vector3(size * (0.85 + Math.random() * 0.3), size * (0.85 + Math.random() * 0.3), 1);
    _m.compose(_v.copy(pos).addScaledVector(normal, 0.012 + Math.random() * 0.010), _q, sc);
    g.mesh.setMatrixAt(idx, _m);
    g.mesh.instanceMatrix.needsUpdate = true;
    this.total++;
  }
  clear() {
    for (const g of this.groups) { g.mesh.count = 0; g.next = 0; }
    this.total = 0;
  }
}

/* ============================================================== EFFECTS ==== */
export class Effects {
  constructor(game) {
    this.game = game;
    this.scene = game.scene;
    this.mats = game.mats;
    this.rng = new Rng(4242);

    this.particles = new ParticleSystem(this.scene, 5200);
    this.decals = new DecalPool(this.scene, this.mats.bloodMats, 340);
    this.pools = new DecalPool(this.scene, this.mats.bloodMats, 300);

    /* --- muzzle flash --- */
    this.flashGroup = new THREE.Group();
    this.flashGroup.visible = false;
    this.flashStar = new THREE.Mesh(this.makeFlashStar(), this.mats.m.muzzle.clone());
    this.flashGroup.add(this.flashStar);
    const cone = new THREE.ConeGeometry(0.055, 0.32, 14, 3, true);
    cone.rotateX(Math.PI / 2);
    cone.translate(0, 0, 0.16);
    this.flashCone = new THREE.Mesh(cone, new THREE.MeshBasicMaterial({
      color: 0xffd890, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending,
      depthWrite: false, side: THREE.DoubleSide
    }));
    this.flashGroup.add(this.flashCone);
    this.flashLight = new THREE.PointLight(0xffc070, 0, 14, 2.0);
    this.flashGroup.add(this.flashLight);
    this.scene.add(this.flashGroup);
    this.flashT = 0;
    this.flashScale = 1;

    /* --- tracers --- */
    const tg = new THREE.PlaneGeometry(1, 1);
    tg.translate(0, 0.5, 0);
    this.tracerMat = new THREE.MeshBasicMaterial({
      color: 0xffd070, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
    });
    this.tracerMesh = new THREE.InstancedMesh(tg, this.tracerMat, 96);
    this.tracerMesh.count = 96;
    this.tracerMesh.frustumCulled = false;
    this.tracerMesh.renderOrder = 7;
    this.scene.add(this.tracerMesh);
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < 96; i++) this.tracerMesh.setMatrixAt(i, zero);
    this.tracerMesh.instanceMatrix.needsUpdate = true;
    this.tracerPool = [];
    for (let i = 0; i < 96; i++) this.tracerPool.push({ idx: i, active: false, t: 0, life: 0 });

    /* --- debris / gibs --- */
    this.debris = [];
    this.gibGeos = this.makeGibGeometries();
    this.casingGeo = this.makeCasing();
    this.geysers = [];

    this.impactLight = new THREE.PointLight(0xffa050, 0, 6, 2);
    this.impactLight.visible = false;
    this.scene.add(this.impactLight);
    this.impactT = 0;

    this.explosionLights = [];
    for (let i = 0; i < 3; i++) {
      const l = new THREE.PointLight(0xff6020, 0, 20, 2);
      l.visible = false;
      this.scene.add(l);
      this.explosionLights.push({ light: l, t: 0 });
    }
  }

  makeFlashStar() {
    const shape = [];
    const pts = 7;
    for (let i = 0; i < pts * 2; i++) {
      const a = (i / (pts * 2)) * Math.PI * 2;
      const r = i % 2 === 0 ? 0.16 : 0.055 + Math.random() * 0.02;
      shape.push(new THREE.Vector2(Math.cos(a) * r, Math.sin(a) * r));
    }
    return new THREE.ShapeGeometry(new THREE.Shape(shape), 3);
  }

  makeGibGeometries() {
    const out = { head: [], arm: [], leg: [], chunk: [], bone: [] };
    const rng = new Rng(917);
    for (let i = 0; i < 4; i++) {
      const h = blob(0.075, [[0, 0.5, 1, 0.014, 2], [rng.range(-1, 1), 0, 0, 0.010, 2]],
        { seg: 14, seed: rng.int(1, 999), noiseAmp: 0.006 });
      h.scale(1, 0.9, 0.95);
      out.head.push(boxUV(h, 0.09));
      out.arm.push(cylUV(lathe([[0, 0], [0.036, 0.010], [0.030, 0.110], [0.020, 0.190], [0, 0.200]], 12), 0.10));
      out.leg.push(cylUV(lathe([[0, 0], [0.050, 0.014], [0.042, 0.150], [0.026, 0.280], [0, 0.290]], 14), 0.12));
      const c = blob(rng.range(0.030, 0.062),
        [[rng.range(-1, 1), rng.range(-1, 1), rng.range(-1, 1), 0.016, 2]],
        { seg: 12, seed: rng.int(1, 999), noiseAmp: 0.010 });
      out.chunk.push(boxUV(c, 0.06));
      out.bone.push(cylUV(lathe([[0, 0], [0.012, 0.006], [0.009, 0.070], [0.014, 0.090], [0, 0.098]], 8), 0.05));
    }
    return out;
  }

  makeCasing() {
    return cylUV(lathe([
      [0, 0], [0.0043, 0.0006], [0.0045, 0.004], [0.0043, 0.026],
      [0.0040, 0.030], [0.0032, 0.0315], [0, 0.032]
    ], 12), 0.02);
  }

  /* -------------------------------------------------------------- muzzle ---- */
  muzzleFlash(worldPos, dir, scale = 1, suppressed = false) {
    this.flashGroup.position.copy(worldPos);
    this.flashGroup.lookAt(_v.copy(worldPos).add(dir));
    this.flashGroup.visible = true;
    this.flashT = suppressed ? 0.028 : 0.055;
    this.flashMax = this.flashT;
    this.flashScale = scale * (suppressed ? 0.45 : 1);
    this.flashStar.rotation.z = Math.random() * Math.PI * 2;
    this.flashLight.intensity = suppressed ? 5 : 22 * scale;
    this.flashLight.distance = suppressed ? 6 : 14;

    const n = suppressed ? 3 : 7;
    for (let i = 0; i < n; i++) {
      this.particles.spawn(worldPos,
        _v.copy(dir).multiplyScalar(this.rng.range(1.2, 4.5))
          .add(_v2.set(this.rng.gauss(0, 0.5), this.rng.gauss(0, 0.5), this.rng.gauss(0, 0.5))),
        {
          life: this.rng.range(0.35, 0.85), size: this.rng.range(0.045, 0.11), type: 2,
          color: [0.30, 0.28, 0.26], alpha: 0.45, drag: 0.85, gravity: 1.0
        });
    }
    if (!suppressed) {
      for (let i = 0; i < 6; i++) {
        this.particles.spawn(worldPos,
          _v.copy(dir).multiplyScalar(this.rng.range(2, 8))
            .add(_v2.set(this.rng.gauss(0, 1.5), this.rng.gauss(0, 1.5), this.rng.gauss(0, 1.5))),
          { life: this.rng.range(0.10, 0.30), size: this.rng.range(0.012, 0.030), type: 1, color: [1, 0.6, 0.2], alpha: 1, drag: 0.5, gravity: -12 });
      }
    }
  }

  tracer(from, to, width = 0.014, life = 0.055) {
    const slot = this.tracerPool.find(s => !s.active);
    if (!slot) return;
    const d = _v.subVectors(to, from);
    const len = d.length();
    if (len < 0.01) return;
    slot.active = true; slot.t = 0; slot.life = life;
    _q.setFromUnitVectors(UP, d.normalize());
    _m.compose(from, _q, _v2.set(width, len, width));
    this.tracerMesh.setMatrixAt(slot.idx, _m);
    this.tracerMesh.instanceMatrix.needsUpdate = true;
  }

  ejectCasing(worldPos, dirRight, up) {
    if (this.debris.length > 200) this.removeOldestDebris();
    const body = new VerletBody(this.game.physics);
    body.friction = 0.55; body.restitution = 0.42; body.damping = 0.985;
    const p = body.particle(worldPos.x, worldPos.y, worldPos.z, 0.012, 0.6);
    const v = _v.copy(dirRight).multiplyScalar(this.rng.range(1.6, 3.0))
      .addScaledVector(up, this.rng.range(1.2, 2.4))
      .add(_v2.set(this.rng.gauss(0, 0.4), 0, this.rng.gauss(0, 0.4)));
    p.prev.copy(p.p).addScaledVector(v, -1 / 60);
    const mesh = new THREE.Mesh(this.casingGeo, this.mats.m.brass);
    this.scene.add(mesh);
    this.debris.push({
      body, mesh,
      spin: new THREE.Vector3(this.rng.range(-18, 18), this.rng.range(-18, 18), this.rng.range(-18, 18)),
      quat: new THREE.Quaternion().random(), life: 14, kind: 'casing'
    });
  }

  /* --------------------------------------------------------------- blood ---- */
  bloodSpray(pos, dir, count = 14, power = 1) {
    const amount = this.game.settings.goreAmount;
    if (amount <= 0) return;
    const n = Math.round(count * amount);
    for (let i = 0; i < n; i++) {
      const v = _v.copy(dir).multiplyScalar(this.rng.range(1.5, 8.5) * power)
        .add(_v2.set(this.rng.gauss(0, 1.95), this.rng.gauss(0, 1.65) + 1.2, this.rng.gauss(0, 1.95)));
      const dark = this.rng.range(0.55, 1.0);
      this.particles.spawn(pos, v, {
        life: this.rng.range(0.7, 2.0),
        size: this.rng.range(0.014, 0.055) * power,
        type: 0,
        color: [0.34 * dark, 0.020 * dark, 0.016 * dark],
        alpha: 1, drag: 0.22, gravity: -20
      });
    }
    if (power > 1.1) {
      for (let i = 0; i < Math.round(3 * amount); i++) {
        this.gibChunk(pos,
          _v.copy(dir).add(_v2.set(this.rng.gauss(0, 0.6), this.rng.range(0.2, 1.0), this.rng.gauss(0, 0.6))),
          'chunk', 1);
      }
    }
  }

  bloodMist(pos, dir) {
    const amount = this.game.settings.goreAmount;
    if (amount <= 0) return;
    const n = Math.round(9 * amount);
    for (let i = 0; i < n; i++) {
      this.particles.spawn(pos,
        _v.copy(dir).multiplyScalar(this.rng.range(0.6, 3.2))
          .add(_v2.set(this.rng.gauss(0, 1.1), this.rng.gauss(0, 0.9) + 0.4, this.rng.gauss(0, 1.1))),
        {
          life: this.rng.range(0.25, 0.65), size: this.rng.range(0.05, 0.16), type: 3,
          color: [0.42, 0.045, 0.035], alpha: 0.55, drag: 0.9, gravity: -3.0
        });
    }
  }

  bloodDecal(pos, normal, size) {
    if (this.game.settings.goreAmount <= 0) return;
    this.decals.add(pos, normal, size * this.rng.range(0.8, 1.35));
  }

  bloodPool(pos, size, scale = 1, small = false) {
    if (this.game.settings.goreAmount <= 0) return;
    this.pools.add(pos, UP, size * scale * (small ? 1 : this.rng.range(0.9, 1.3)));
  }

  attachGeyser(joint, power) {
    this.geysers.push({ joint, power, t: 0, life: 4.5 + Math.random() * 3 });
  }

  /* ----------------------------------------------------------- gibs / gore -- */
  gibChunk(pos, dir, kind = 'chunk', scale = 1) {
    if (this.game.settings.goreAmount <= 0) return;
    if (this.debris.length > 190) this.removeOldestDebris();
    const geos = this.gibGeos[kind] || this.gibGeos.chunk;
    const geo = geos[(Math.random() * geos.length) | 0];
    const mat = kind === 'bone' ? this.mats.m.bone : this.mats.m.gore;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.scale.setScalar(scale);
    mesh.castShadow = true;
    this.scene.add(mesh);

    const body = new VerletBody(this.game.physics);
    body.friction = 0.72; body.restitution = 0.14; body.damping = 0.982;
    const r = (kind === 'head' ? 0.085 : kind === 'chunk' ? 0.045 : 0.070) * scale;
    const p = body.particle(pos.x, pos.y, pos.z, r, 1.2);
    const v = _v.copy(dir).normalize().multiplyScalar(this.rng.range(2.2, 7.0))
      .add(_v2.set(this.rng.gauss(0, 1.2), this.rng.range(1.0, 3.5), this.rng.gauss(0, 1.2)));
    p.prev.copy(p.p).addScaledVector(v, -1 / 60);

    this.debris.push({
      body, mesh,
      spin: new THREE.Vector3(this.rng.range(-14, 14), this.rng.range(-14, 14), this.rng.range(-14, 14)),
      quat: new THREE.Quaternion().random(),
      life: 30, trail: kind !== 'casing', kind
    });
  }

  goreExplosion(center, scale = 1) {
    const amount = this.game.settings.goreAmount;
    for (let i = 0; i < Math.round(16 * amount); i++) {
      const d = _v.set(this.rng.gauss(0, 1), this.rng.range(0.1, 1.4), this.rng.gauss(0, 1)).normalize();
      this.gibChunk(center, d, this.rng.chance(0.25) ? 'bone' : 'chunk', scale * this.rng.range(0.7, 1.3));
    }
    this.bloodSpray(center, UP, 80, 1.9);
    for (let i = 0; i < 8; i++) {
      const a = Math.random() * Math.PI * 2;
      this.bloodSpray(center, _v.set(Math.cos(a), this.rng.range(-0.2, 0.5), Math.sin(a)).normalize(), 20, 1.5);
    }
    const gy = this.game.physics.groundAt(center.x, center.y, center.z, 4, 0.3);
    const y = gy > -1e8 ? gy : 0;
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * Math.PI * 2, r = Math.random() * 3.4 * scale;
      this.bloodPool(new THREE.Vector3(center.x + Math.cos(a) * r, y, center.z + Math.sin(a) * r), 0.6 + Math.random() * 1.5, scale);
    }
    const l = this.explosionLights.find(e => !e.light.visible) || this.explosionLights[0];
    l.light.position.copy(center);
    l.light.color.setHex(0xff3020);
    l.light.intensity = 26;
    l.light.visible = true;
    l.t = 0.22;
    this.game.shake(0.75, 0.35);
  }

  /* ---------------------------------------------------------- impact FX ----- */
  impact(point, normal, surface = 'concrete') {
    const cfg = {
      concrete: { sparks: 2, dust: 12, color: [0.55, 0.53, 0.50], chips: 3 },
      metal: { sparks: 16, dust: 4, color: [0.45, 0.45, 0.47], chips: 1 },
      wood: { sparks: 1, dust: 9, color: [0.34, 0.22, 0.12], chips: 4 },
      dirt: { sparks: 0, dust: 18, color: [0.30, 0.22, 0.14], chips: 2 },
      glass: { sparks: 8, dust: 6, color: [0.6, 0.68, 0.7], chips: 5 },
      flesh: { sparks: 0, dust: 0, color: [0.35, 0.03, 0.02], chips: 0 }
    }[surface] || { sparks: 3, dust: 10, color: [0.5, 0.5, 0.5], chips: 2 };

    for (let i = 0; i < cfg.sparks; i++) {
      this.particles.spawn(point,
        _v.copy(normal).multiplyScalar(this.rng.range(2, 7))
          .add(_v2.set(this.rng.gauss(0, 2.6), this.rng.gauss(0, 2.6), this.rng.gauss(0, 2.6))),
        { life: this.rng.range(0.15, 0.55), size: this.rng.range(0.010, 0.028), type: 1, color: [1, 0.65, 0.2], alpha: 1, drag: 0.35, gravity: -22 });
    }
    for (let i = 0; i < cfg.dust; i++) {
      this.particles.spawn(point,
        _v.copy(normal).multiplyScalar(this.rng.range(0.5, 2.6))
          .add(_v2.set(this.rng.gauss(0, 0.9), this.rng.gauss(0, 0.9) + 0.3, this.rng.gauss(0, 0.9))),
        { life: this.rng.range(0.4, 1.3), size: this.rng.range(0.04, 0.16), type: 5, color: cfg.color, alpha: 0.5, drag: 0.88, gravity: -1.5 });
    }
    for (let i = 0; i < cfg.chips; i++) {
      if (this.debris.length > 210) break;
      const body = new VerletBody(this.game.physics);
      body.friction = 0.7; body.restitution = 0.30;
      const r = this.rng.range(0.012, 0.032);
      const p = body.particle(point.x, point.y, point.z, r, 0.5);
      const v = _v.copy(normal).multiplyScalar(this.rng.range(1.5, 5))
        .add(_v2.set(this.rng.gauss(0, 1.4), this.rng.range(0.5, 2.5), this.rng.gauss(0, 1.4)));
      p.prev.copy(p.p).addScaledVector(v, -1 / 60);
      const mat = surface === 'wood' ? this.mats.m.wood : surface === 'metal' ? this.mats.m.rust : this.mats.m.concrete;
      const mesh = new THREE.Mesh(rock(r * 1.4, this.rng.int(1, 999), 0), mat);
      this.scene.add(mesh);
      this.debris.push({
        body, mesh, spin: new THREE.Vector3(this.rng.range(-20, 20), this.rng.range(-20, 20), this.rng.range(-20, 20)),
        quat: new THREE.Quaternion().random(), life: 12, kind: 'chip', ownGeo: true
      });
    }
    if (cfg.sparks > 6) {
      this.impactLight.position.copy(point);
      this.impactLight.intensity = 6;
      this.impactLight.visible = true;
      this.impactT = 0.08;
    }
    if (surface !== 'flesh' && Math.random() < 0.9) {
      this.game.world?.bulletHole?.(point, normal, surface);
    }
  }

  removeOldestDebris() {
    const d = this.debris.shift();
    if (!d) return;
    this.scene.remove(d.mesh);
    if (d.ownGeo) d.mesh.geometry.dispose();
  }

  /* ------------------------------------------------------------- update ----- */
  update(dt, t) {
    this.particles.update(dt, t, this.game.physics, this);

    if (this.flashT > 0) {
      this.flashT -= dt;
      const k = Math.max(0, this.flashT / (this.flashMax || 0.055));
      const s = this.flashScale * (0.6 + k * 0.9);
      this.flashStar.scale.setScalar(s * (0.8 + Math.random() * 0.5));
      this.flashCone.scale.set(s, s, s * (0.7 + Math.random() * 0.6));
      this.flashStar.material.opacity = k;
      this.flashCone.material.opacity = k * 0.8;
      this.flashLight.intensity *= 0.72;
      if (this.flashT <= 0) { this.flashGroup.visible = false; this.flashLight.intensity = 0; }
    }
    if (this.impactT > 0) {
      this.impactT -= dt;
      this.impactLight.intensity *= 0.62;
      if (this.impactT <= 0) { this.impactLight.visible = false; this.impactLight.intensity = 0; }
    }
    for (const e of this.explosionLights) {
      if (!e.light.visible) continue;
      e.t -= dt;
      e.light.intensity *= 0.80;
      if (e.t <= 0) { e.light.visible = false; e.light.intensity = 0; }
    }

    const zero = _m.makeScale(0, 0, 0);
    let dirty = false;
    for (const s of this.tracerPool) {
      if (!s.active) continue;
      s.t += dt;
      if (s.t >= s.life) {
        s.active = false;
        this.tracerMesh.setMatrixAt(s.idx, zero);
        dirty = true;
      }
    }
    if (dirty) this.tracerMesh.instanceMatrix.needsUpdate = true;

    for (let i = this.debris.length - 1; i >= 0; i--) {
      const d = this.debris[i];
      d.life -= dt;
      // Sleeping debris (settled casings, gibs at rest) skip the solver + spin
      // entirely. With 200 casings on the ground after a firefight this is a
      // big saving. Only step non-sleeping bodies, and only substep when the
      // frame is long enough to need it.
      if (!d.body.sleeping) {
        const steps = dt > 0.024 ? 2 : 1;
        const h = dt / steps;
        for (let k = 0; k < steps; k++) d.body.step(h, 3);
        const p = d.body.parts[0];
        d.mesh.position.copy(p.p);
        const sp = p.vel.length();
        const spinScale = Math.min(1, sp * 22);
        _euler.set(d.spin.x * dt * spinScale, d.spin.y * dt * spinScale, d.spin.z * dt * spinScale);
        _q.setFromEuler(_euler);
        d.quat.multiply(_q);
        d.mesh.quaternion.copy(d.quat);
        if (d.trail && sp > 0.02 && Math.random() < 0.5) {
          this.particles.spawn(p.p, _v.set(this.rng.gauss(0, 0.4), this.rng.gauss(0, 0.3), this.rng.gauss(0, 0.4)), {
            life: this.rng.range(0.3, 0.9), size: this.rng.range(0.012, 0.030), type: 0,
            color: [0.30, 0.018, 0.014], alpha: 1, drag: 0.3, gravity: -19
          });
        }
        if (d.body.sleeping && d.trail && !d.pooled) {
          d.pooled = true;
          const gy = this.game.physics.groundAt(p.p.x, p.p.y + 0.3, p.p.z, 1.0, 0.1);
          if (gy > -1e8) this.bloodPool(_v.set(p.p.x, gy, p.p.z), 0.30 + Math.random() * 0.5);
        }
      } else if (d.trail && !d.pooled) {
        d.pooled = true;
        const p = d.body.parts[0];
        const gy = this.game.physics.groundAt(p.p.x, p.p.y + 0.3, p.p.z, 1.0, 0.1);
        if (gy > -1e8) this.bloodPool(_v.set(p.p.x, gy, p.p.z), 0.30 + Math.random() * 0.5);
      }
      if (d.life <= 0) {
        this.scene.remove(d.mesh);
        if (d.ownGeo) d.mesh.geometry.dispose();
        this.debris.splice(i, 1);
      }
    }

    for (let i = this.geysers.length - 1; i >= 0; i--) {
      const g = this.geysers[i];
      g.t += dt; g.life -= dt;
      if (g.life <= 0 || !g.joint.parent) { this.geysers.splice(i, 1); continue; }
      g.joint.getWorldPosition(_v3);
      const pulse = 0.55 + 0.45 * Math.sin(g.t * 9.5);
      const n = Math.round(3 * pulse * this.game.settings.goreAmount);
      for (let k = 0; k < n; k++) {
        this.particles.spawn(_v3,
          _v.set(this.rng.gauss(0, 1.2), this.rng.range(1.5, 4.5) * g.power * pulse, this.rng.gauss(0, 1.2)),
          {
            life: this.rng.range(0.5, 1.3), size: this.rng.range(0.014, 0.040), type: 0,
            color: [0.36, 0.022, 0.018], alpha: 1, drag: 0.25, gravity: -20
          });
      }
    }
  }

  clear() {
    for (const d of this.debris) {
      this.scene.remove(d.mesh);
      if (d.ownGeo) d.mesh.geometry.dispose();
    }
    this.debris.length = 0;
    this.geysers.length = 0;
    this.decals.clear();
    this.pools.clear();
    this.particles.clear();
  }
}
