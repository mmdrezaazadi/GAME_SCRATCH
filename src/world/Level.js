/**
 * Level — a fully modeled urban block ("Dead Sector 7").
 *
 * Nothing here is a bare plane or cube: the ground is a displaced terrain mesh
 * with modeled road slabs, cast kerbstones, gutter channels, manhole castings
 * and drain grates; the walls are masonry volumes with plinths and cornices;
 * every prop comes from props.js and is assembled from bevelled, lathed,
 * extruded or displaced geometry.
 *
 * The level also owns:
 *   - physics collider registration (OBB boxes derived from prop footprints)
 *   - the surface-type lookup used to pick impact FX
 *   - persistent bullet-hole decals
 *   - zombie spawn points, player spawn and pickup nodes
 */
import * as THREE from 'three';
import {
  roundedBox, chamferCyl, lathe, extrude, merge, xform, boxUV, cylUV, scaleUV,
  ringGeo, bolts, tubeAlong, displace, rock, terrainGeo, flatShade, greebleFace
} from '../gfx/geometry.js';
import { Rng, fbm2, noise2 } from '../gfx/noise.js';
import * as P from './props.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3();
const _q = new THREE.Quaternion(), _m = new THREE.Matrix4();
const FWD = new THREE.Vector3(0, 0, 1);

/* Terrain elevation — gentle, sub-step undulation so the ground reads as real
 * dirt and rubble rather than a mathematical plane, but never blocks movement. */
export function terrainHeight(x, z) {
  const a = fbm2(x * 0.018, z * 0.018, 4) * 0.34;
  const b = fbm2(x * 0.085, z * 0.085, 3) * 0.085;
  const c = noise2(x * 0.42, z * 0.42) * 0.022;
  return a + b + c - 0.30;
}

/* ============================================================ BULLET HOLES = */
function makeHoleTexture(size = 128) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(size, size);
  const d = img.data;
  const cx = size / 2, cy = size / 2;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (x - cx) / cx, dy = (y - cy) / cy;
      const r = Math.hypot(dx, dy);
      // irregular crater rim
      const ang = Math.atan2(dy, dx);
      const wob = 0.10 * Math.sin(ang * 5.0 + x * 0.03) + 0.07 * Math.sin(ang * 9.0 - y * 0.05);
      const rr = r * (1 + wob * 0.55);
      let a = 0;
      if (rr < 0.30) a = 1;
      else if (rr < 0.92) a = Math.pow(1 - (rr - 0.30) / 0.62, 1.7);
      // speckled dust ring
      const spec = (Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1;
      if (rr > 0.35 && rr < 1.0) a *= 0.55 + 0.45 * Math.abs(spec);
      const core = rr < 0.30 ? 0 : Math.min(1, (rr - 0.30) / 0.45);
      const l = Math.round(12 + core * 120);
      const i = (y * size + x) * 4;
      d[i] = l; d[i + 1] = l; d[i + 2] = l;
      d[i + 3] = Math.round(Math.max(0, Math.min(1, a)) * 255);
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

class HolePool {
  constructor(scene, cap = 420) {
    const tex = makeHoleTexture(128);
    const mat = new THREE.MeshStandardMaterial({
      map: tex, alphaMap: tex, transparent: true, alphaTest: 0.03,
      roughness: 0.92, metalness: 0.0, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5
    });
    const geo = new THREE.PlaneGeometry(1, 1, 1, 1);
    this.mesh = new THREE.InstancedMesh(geo, mat, cap);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = false;
    this.mesh.receiveShadow = false;
    this.mesh.renderOrder = 3;
    scene.add(this.mesh);
    this.cap = cap;
    this.next = 0;
  }
  add(pos, normal, size) {
    const i = this.next % this.cap;
    this.next++;
    if (this.mesh.count < this.cap) this.mesh.count = Math.min(this.cap, this.next);
    _q.setFromUnitVectors(FWD, normal);
    _q.multiply(new THREE.Quaternion().setFromAxisAngle(FWD, Math.random() * Math.PI * 2));
    _m.compose(
      _v.copy(pos).addScaledVector(normal, 0.008 + Math.random() * 0.004),
      _q,
      _v2.set(size, size, 1)
    );
    this.mesh.setMatrixAt(i, _m);
    this.mesh.instanceMatrix.needsUpdate = true;
  }
  clear() { this.mesh.count = 0; this.next = 0; }
}

/* ==================================================================== LEVEL */
export class Level {
  constructor(game) {
    this.game = game;
    this.scene = game.scene;
    this.mats = game.mats;
    this.physics = game.physics;
    this.rng = new Rng(20260726);

    this.root = new THREE.Group();
    this.root.name = 'level';
    this.scene.add(this.root);

    this.spawnPoints = [];      // zombie spawn nodes
    this.pickupNodes = [];      // {pos, kind}
    this.playerSpawn = new THREE.Vector3(0, 0.1, 26);
    this.lamps = [];
    this.flickerLights = [];
    this.animated = [];
    this.bounds = { min: -74, max: 74 };

    this.holes = null;
    this._surfaceByCollider = new WeakMap();
  }

  /* --------------------------------------------------------- collider util */
  addCollider(cx, cy, cz, hx, hy, hz, yaw = 0, tag = 'wall', surface = 'concrete') {
    const col = this.physics.addBox(cx, cy, cz, hx, hy, hz, yaw, tag);
    col.surface = surface;
    return col;
  }

  /** Register a prop's footprint volume. */
  addPropCollider(obj, surface = 'concrete', tag = 'prop') {
    const f = obj.userData.footprint;
    if (!f) return null;
    const p = obj.position;
    return this.addCollider(
      p.x, p.y + f.h / 2, p.z,
      f.w / 2, f.h / 2, f.d / 2,
      obj.rotation.y, tag, surface
    );
  }

  surfaceOf(collider) {
    if (!collider) return 'concrete';
    return collider.surface || 'concrete';
  }

  /* ---------------------------------------------------------------- build */
  /** Returns an array of step functions so the loader can show progress. */
  build() {
    const steps = [];
    const add = (label, fn) => steps.push({ label, fn });

    add('Surveying terrain', () => this.buildTerrain());
    add('Laying road network', () => this.buildRoads());
    add('Pouring kerbs and pavements', () => this.buildPavements());
    add('Raising city blocks', () => this.buildBlocks());
    add('Erecting perimeter', () => this.buildPerimeter());
    add('Dressing the streets', () => this.buildStreetProps());
    add('Scattering debris', () => this.buildDebris());
    add('Installing lighting', () => this.buildLighting());
    add('Marking spawn zones', () => this.buildSpawns());
    add('Priming decal systems', () => { this.holes = new HolePool(this.scene, 460); });

    return steps;
  }

  /* ================================================================ TERRAIN */
  buildTerrain() {
    const S = 190;
    const geo = terrainGeo(S, 190, (x, z) => terrainHeight(x, z));
    boxUV(geo, 2.6);
    const ground = new THREE.Mesh(geo, this.mats.m.dirt);
    ground.receiveShadow = true;
    ground.castShadow = false;
    ground.name = 'terrain';
    this.root.add(ground);
    this.terrain = ground;

    // physics: a thick slab whose top face is y = 0
    this.addCollider(0, -2.0, 0, 110, 2.0, 110, 0, 'ground', 'dirt');

    // distant skirt so the horizon never shows an edge — a huge displaced ring
    const skirt = new THREE.RingGeometry(S * 0.49, 320, 96, 8);
    skirt.rotateX(-Math.PI / 2);
    const sp = skirt.attributes.position;
    for (let i = 0; i < sp.count; i++) {
      const x = sp.getX(i), z = sp.getZ(i);
      const r = Math.hypot(x, z);
      const t = Math.min(1, (r - S * 0.49) / 60);
      sp.setY(i, terrainHeight(x, z) - 0.1 + fbm2(x * 0.01, z * 0.01, 4) * 9.0 * t * t);
    }
    sp.needsUpdate = true;
    skirt.computeVertexNormals();
    boxUV(skirt, 6.0);
    const sm = new THREE.Mesh(skirt, this.mats.m.dirt);
    sm.receiveShadow = false;
    this.root.add(sm);

    // far ruined skyline: real extruded building blocks, not a billboard
    const far = [];
    const rng = new Rng(99);
    for (let i = 0; i < 46; i++) {
      const a = (i / 46) * Math.PI * 2 + rng.range(-0.05, 0.05);
      const r = rng.range(150, 260);
      const w = rng.range(12, 34), d = rng.range(12, 34), h = rng.range(14, 62);
      const b = roundedBox(w, h, d, 0.4, 1);
      // broken top
      const bp = b.attributes.position;
      for (let k = 0; k < bp.count; k++) {
        if (bp.getY(k) > h / 2 - 0.6) {
          bp.setY(k, bp.getY(k) - Math.abs(fbm2(bp.getX(k) * 0.2 + i, bp.getZ(k) * 0.2, 3)) * h * 0.28);
        }
      }
      bp.needsUpdate = true;
      b.computeVertexNormals();
      xform(b, { pos: [Math.cos(a) * r, h / 2 - 2, Math.sin(a) * r], rot: [0, rng.range(0, 3.14), 0] });
      far.push(b);
    }
    const fg = merge(far);
    boxUV(fg, 6);
    const fm = new THREE.Mesh(fg, this.mats.m.concreteDark);
    fm.castShadow = false; fm.receiveShadow = false;
    this.root.add(fm);
  }

  /* ================================================================== ROADS */
  buildRoads() {
    const mats = this.mats;
    const slabs = [];
    const markings = [];

    /** A road slab modeled as a cambered, cracked volume (never a flat plane). */
    const roadSlab = (cx, cz, len, wid, horiz) => {
      const segL = Math.max(4, Math.round(len / 2));
      const segW = Math.max(4, Math.round(wid / 1.2));
      const g = new THREE.BoxGeometry(
        horiz ? len : wid, 0.22, horiz ? wid : len,
        horiz ? segL : segW, 1, horiz ? segW : segL
      );
      const pos = g.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        if (y > 0) {
          const x = pos.getX(i) + cx, z = pos.getZ(i) + cz;
          const across = horiz ? pos.getZ(i) / (wid / 2) : pos.getX(i) / (wid / 2);
          const camber = (1 - across * across) * 0.045;
          const wear = fbm2(x * 0.35, z * 0.35, 4) * 0.030 + noise2(x * 1.4, z * 1.4) * 0.010;
          pos.setY(i, y + camber + wear);
        }
      }
      pos.needsUpdate = true;
      g.computeVertexNormals();
      xform(g, { pos: [cx, -0.08, cz] });
      return g;
    };

    const ROADS = [
      // [cx, cz, length, width, horizontal?]
      [0, 0, 168, 11, true],
      [0, -46, 168, 9.5, true],
      [0, 46, 168, 9.5, true],
      [0, 0, 168, 11, false],
      [-46, 0, 168, 9.5, false],
      [46, 0, 168, 9.5, false]
    ];
    for (const [cx, cz, len, wid, h] of ROADS) slabs.push(roadSlab(cx, cz, len, wid, h));

    const roadG = merge(slabs);
    boxUV(roadG, 3.2);
    const road = new THREE.Mesh(roadG, mats.m.asphalt);
    road.receiveShadow = true;
    this.root.add(road);
    this.addCollider(0, -0.15, 0, 110, 0.15, 110, 0, 'ground', 'concrete');

    /* --- lane markings as thin raised extrusions with worn edges --- */
    const mk = (x, z, l, w, horiz) => {
      const g = roundedBox(horiz ? l : w, 0.012, horiz ? w : l, 0.004, 1);
      xform(g, { pos: [x, 0.055 + terrainHeight(x, z) * 0.0, z] });
      return g;
    };
    const rng = new Rng(7);
    for (const [cx, cz, len, wid, h] of ROADS) {
      const n = Math.floor(len / 6);
      for (let i = 0; i < n; i++) {
        if (rng.chance(0.22)) continue;   // worn away
        const off = -len / 2 + 3 + i * 6;
        markings.push(h ? mk(cx + off, cz, 3.0, 0.16, true) : mk(cx, cz + off, 3.0, 0.16, false));
      }
      // edge lines
      for (const s of [-1, 1]) {
        const e = (wid / 2) - 0.55;
        markings.push(h ? mk(cx, cz + s * e, len - 2, 0.13, true) : mk(cx + s * e, cz, len - 2, 0.13, false));
      }
    }
    const mkG = merge(markings);
    boxUV(mkG, 1.4);
    const mkM = new THREE.Mesh(mkG, mats.m.paintYellow);
    mkM.receiveShadow = true;
    mkM.castShadow = false;
    this.root.add(mkM);

    /* --- manhole castings & storm drains: real lathed iron parts --- */
    const covers = [];
    const grates = [];
    for (let i = 0; i < 14; i++) {
      const onX = rng.chance(0.5);
      const a = rng.pick([-46, 0, 46]);
      const b = rng.range(-70, 70);
      const x = onX ? b : a, z = onX ? a : b;
      const rim = lathe([[0, 0], [0.44, 0], [0.46, 0.03], [0.44, 0.055], [0.40, 0.055], [0.40, 0.012], [0, 0.012]], 26);
      xform(rim, { pos: [x, 0.055, z] });
      covers.push(cylUV(rim, 0.5));
      // radial tread pattern
      for (let k = 0; k < 10; k++) {
        const ang = (k / 10) * Math.PI * 2;
        const bar = roundedBox(0.30, 0.014, 0.055, 0.005, 1);
        xform(bar, { pos: [x + Math.cos(ang) * 0.21, 0.070, z + Math.sin(ang) * 0.21], rot: [0, -ang, 0] });
        covers.push(boxUV(bar, 0.3));
      }
    }
    for (let i = 0; i < 10; i++) {
      const onX = rng.chance(0.5);
      const a = rng.pick([-46, 0, 46]);
      const sgn = rng.sign();
      const wid = a === 0 ? 11 : 9.5;
      const b = rng.range(-66, 66);
      const x = onX ? b : a + sgn * (wid / 2 - 0.25);
      const z = onX ? a + sgn * (wid / 2 - 0.25) : b;
      const frame = roundedBox(0.86, 0.10, 0.50, 0.02, 1);
      xform(frame, { pos: [x, 0.02, z], rot: [0, onX ? 0 : Math.PI / 2, 0] });
      grates.push(boxUV(frame, 0.3));
      for (let k = 0; k < 6; k++) {
        const bar = roundedBox(0.72, 0.030, 0.038, 0.008, 1);
        const off = -0.19 + k * 0.076;
        xform(bar, { pos: [x + (onX ? 0 : off), 0.078, z + (onX ? off : 0)], rot: [0, onX ? 0 : Math.PI / 2, 0] });
        grates.push(boxUV(bar, 0.2));
      }
    }
    const cg = merge(covers);
    const cm = new THREE.Mesh(cg, mats.m.rustHeavy);
    cm.receiveShadow = true; cm.castShadow = true;
    this.root.add(cm);
    const gg = merge(grates);
    const gm = new THREE.Mesh(gg, mats.m.rust);
    gm.receiveShadow = true; gm.castShadow = true;
    this.root.add(gm);
  }

  /* ============================================================== PAVEMENTS */
  buildPavements() {
    const mats = this.mats;
    const slabs = [];
    const kerbs = [];
    const rng = new Rng(31);

    /** Kerbstone run: extruded profile with a chamfered nose, laid in blocks. */
    const kerbRun = (x0, z0, x1, z1) => {
      const dx = x1 - x0, dz = z1 - z0;
      const len = Math.hypot(dx, dz);
      const yaw = Math.atan2(dx, dz);
      const n = Math.max(1, Math.round(len / 1.05));
      for (let i = 0; i < n; i++) {
        const t = (i + 0.5) / n;
        const kx = x0 + dx * t, kz = z0 + dz * t;
        const prof = [
          [-0.155, 0], [0.155, 0], [0.155, 0.155], [0.115, 0.195], [-0.155, 0.195]
        ];
        const g = extrude(prof, 1.0, { bevel: 0.010, bevelSeg: 1 });
        g.rotateY(Math.PI / 2);
        xform(g, { pos: [kx, 0.0, kz], rot: [0, yaw, 0] });
        // tiny per-stone settle
        g.translate(0, rng.range(-0.012, 0.012), 0);
        kerbs.push(boxUV(g, 0.6));
      }
    };

    /** Pavement slab field: individual flagstones with joints and settling. */
    const paveField = (cx, cz, w, d) => {
      const nx = Math.max(1, Math.round(w / 1.25));
      const nz = Math.max(1, Math.round(d / 1.25));
      const sw = w / nx, sd = d / nz;
      for (let i = 0; i < nx; i++) {
        for (let k = 0; k < nz; k++) {
          if (rng.chance(0.04)) continue;   // missing flag
          const x = cx - w / 2 + sw * (i + 0.5);
          const z = cz - d / 2 + sd * (k + 0.5);
          const g = roundedBox(sw - 0.05, 0.17, sd - 0.05, 0.018, 1);
          xform(g, {
            pos: [x, 0.098 + rng.range(-0.018, 0.014), z],
            rot: [rng.range(-0.012, 0.012), rng.range(-0.03, 0.03), rng.range(-0.012, 0.012)]
          });
          slabs.push(boxUV(g, 1.1));
        }
      }
    };

    // pavements flank each road
    const LANES = [
      [0, 0, 168, 11, true], [0, -46, 168, 9.5, true], [0, 46, 168, 9.5, true],
      [0, 0, 168, 11, false], [-46, 0, 168, 9.5, false], [46, 0, 168, 9.5, false]
    ];
    const PW = 2.6;
    for (const [cx, cz, len, wid, h] of LANES) {
      for (const s of [-1, 1]) {
        if (h) {
          paveField(cx, cz + s * (wid / 2 + PW / 2), len, PW);
          kerbRun(cx - len / 2, cz + s * (wid / 2), cx + len / 2, cz + s * (wid / 2));
        } else {
          paveField(cx + s * (wid / 2 + PW / 2), cz, PW, len);
          kerbRun(cx + s * (wid / 2), cz - len / 2, cx + s * (wid / 2), cz + len / 2);
        }
      }
    }

    const sg = merge(slabs);
    const sm = new THREE.Mesh(sg, mats.m.tile);
    sm.receiveShadow = true; sm.castShadow = true;
    this.root.add(sm);

    const kg = merge(kerbs);
    const km = new THREE.Mesh(kg, mats.m.concreteDark);
    km.receiveShadow = true; km.castShadow = true;
    this.root.add(km);

    // step-up collider slabs along the pavements (walkable, 0.19 high)
    for (const [cx, cz, len, wid, h] of LANES) {
      for (const s of [-1, 1]) {
        if (h) this.addCollider(cx, 0.095, cz + s * (wid / 2 + PW / 2), len / 2, 0.095, PW / 2, 0, 'ground', 'concrete');
        else this.addCollider(cx + s * (wid / 2 + PW / 2), 0.095, cz, PW / 2, 0.095, len / 2, 0, 'ground', 'concrete');
      }
    }
  }

  /* ================================================================= BLOCKS */
  buildBlocks() {
    const rng = new Rng(1801);
    const CENTRES = [-69, -23, 23, 69];
    const HALF = 16.0;
    let bi = 0;
    this.buildings = [];

    for (const bx of CENTRES) {
      for (const bz of CENTRES) {
        bi++;
        if (bx === 23 && bz === 23) { this.buildYard(bx, bz, HALF, rng); continue; }
        const kind = rng.next();
        if (kind < 0.62) this.buildBuildingLot(bx, bz, HALF, rng, bi);
        else if (kind < 0.82) this.buildParkingLot(bx, bz, HALF, rng);
        else this.buildRuinLot(bx, bz, HALF, rng);
      }
    }
  }

  buildBuildingLot(bx, bz, half, rng, seed) {
    const n = rng.int(1, 2);
    const placed = [];
    for (let i = 0; i < n; i++) {
      const w = rng.range(11, 19);
      const d = rng.range(11, 18);
      const floors = rng.int(2, 5);
      let x = bx, z = bz, tries = 0, ok = false;
      while (tries++ < 24) {
        x = bx + rng.range(-half + w / 2, half - w / 2);
        z = bz + rng.range(-half + d / 2, half - d / 2);
        ok = true;
        for (const p of placed) {
          if (Math.abs(x - p.x) < (w + p.w) / 2 + 3.2 && Math.abs(z - p.z) < (d + p.d) / 2 + 3.2) { ok = false; break; }
        }
        if (ok) break;
      }
      if (!ok) continue;
      placed.push({ x, z, w, d });

      const b = P.building(this.mats, w, d, floors, {
        seed: seed * 97 + i * 13,
        mat: rng.chance(0.55) ? 'brick' : 'concrete',
        fireEscape: true
      });
      b.position.set(x, 0, z);
      b.rotation.y = rng.chance(0.5) ? 0 : Math.PI / 2;
      this.root.add(b);
      this.buildings.push(b);

      const yaw = b.rotation.y;
      const hw = (Math.abs(Math.cos(yaw)) * w + Math.abs(Math.sin(yaw)) * d) / 2;
      const hd = (Math.abs(Math.sin(yaw)) * w + Math.abs(Math.cos(yaw)) * d) / 2;
      const h = floors * 3.2 + 1.2;
      this.addCollider(x, h / 2, z, hw, h / 2, hd, 0, 'wall', 'concrete');
      this.spawnPoints.push({ pos: new THREE.Vector3(x, floors * 3.2 + 0.2, z), roof: true, weight: 0.25 });
    }
    this.scatterLotProps(bx, bz, half, rng, placed, 8);
  }

  buildParkingLot(bx, bz, half, rng) {
    const apron = new THREE.BoxGeometry(half * 2, 0.20, half * 2, 26, 1, 26);
    const pos = apron.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      if (pos.getY(i) > 0) {
        const x = pos.getX(i) + bx, z = pos.getZ(i) + bz;
        pos.setY(i, pos.getY(i) + fbm2(x * 0.3, z * 0.3, 4) * 0.035);
      }
    }
    pos.needsUpdate = true;
    apron.computeVertexNormals();
    xform(apron, { pos: [bx, -0.02, bz] });
    boxUV(apron, 2.4);
    const am = new THREE.Mesh(apron, this.mats.m.concrete);
    am.receiveShadow = true;
    this.root.add(am);
    this.addCollider(bx, 0.05, bz, half, 0.06, half, 0, 'ground', 'concrete');

    const lines = [];
    for (let i = 0; i <= 10; i++) {
      const z = bz - half + 1.6 + i * ((half * 2 - 3.2) / 10);
      for (const s of [-1, 1]) {
        const g = roundedBox(4.6, 0.012, 0.13, 0.004, 1);
        xform(g, { pos: [bx + s * (half * 0.5), 0.115, z] });
        lines.push(boxUV(g, 1.2));
      }
    }
    const lm = new THREE.Mesh(merge(lines), this.mats.m.paintYellow);
    lm.receiveShadow = true; lm.castShadow = false;
    this.root.add(lm);

    for (let i = 0; i < rng.int(4, 8); i++) {
      const c = P.wreckedCar(this.mats, rng);
      c.position.set(bx + rng.range(-half + 3, half - 3), 0, bz + rng.range(-half + 3, half - 3));
      c.rotation.y = rng.chance(0.75) ? (rng.chance(0.5) ? 0 : Math.PI) + rng.range(-0.12, 0.12) : rng.range(0, 6.28);
      this.root.add(c);
      this.addPropCollider(c, 'metal');
    }
    this.scatterLotProps(bx, bz, half, rng, [], 10);
    this.spawnPoints.push({ pos: new THREE.Vector3(bx, 0.1, bz), weight: 1 });
  }

  buildRuinLot(bx, bz, half, rng) {
    for (let i = 0; i < rng.int(3, 6); i++) {
      const w = rng.range(4, 11);
      const h = rng.range(1.6, 5.5);
      const wall = rng.chance(0.5)
        ? P.brickWall(this.mats, w, h, 0.55, { seed: rng.int(1, 9999), rubble: true })
        : P.concreteWall(this.mats, w, h, 0.5, { seed: rng.int(1, 9999), damaged: true });
      const x = bx + rng.range(-half + 3, half - 3);
      const z = bz + rng.range(-half + 3, half - 3);
      wall.position.set(x, 0, z);
      wall.rotation.y = rng.range(0, Math.PI * 2);
      this.root.add(wall);
      this.addCollider(x, h / 2, z, w / 2, h / 2, 0.32, wall.rotation.y, 'wall', 'concrete');
    }
    for (let i = 0; i < rng.int(6, 12); i++) {
      const r = P.rubblePile(this.mats, rng, rng.range(1.1, 2.6));
      r.position.set(bx + rng.range(-half + 2, half - 2), 0, bz + rng.range(-half + 2, half - 2));
      r.rotation.y = rng.range(0, 6.28);
      this.root.add(r);
      this.addPropCollider(r, 'concrete');
    }
    for (let i = 0; i < rng.int(2, 5); i++) {
      const t = P.deadTree(this.mats, rng);
      t.position.set(bx + rng.range(-half + 2, half - 2), 0, bz + rng.range(-half + 2, half - 2));
      t.rotation.y = rng.range(0, 6.28);
      this.root.add(t);
      this.addPropCollider(t, 'wood');
    }
    this.scatterLotProps(bx, bz, half, rng, [], 12);
    this.spawnPoints.push({ pos: new THREE.Vector3(bx, 0.1, bz), weight: 1.3 });
  }

  /** The player's starting yard: a fortified compound with supplies. */
  buildYard(bx, bz, half, rng) {
    this.playerSpawn.set(bx, 0.35, bz);

    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const sb = P.sandbagWall(this.mats, rng, rng.range(2.4, 4.0));
      sb.position.set(bx + Math.cos(a) * 8.5, 0, bz + Math.sin(a) * 8.5);
      sb.rotation.y = -a + Math.PI / 2;
      this.root.add(sb);
      this.addPropCollider(sb, 'dirt');
    }
    for (let i = 0; i < 6; i++) {
      const jb = P.jerseyBarrier(this.mats, rng);
      jb.position.set(bx + rng.range(-half + 3, half - 3), 0, bz + rng.range(-half + 3, half - 3));
      jb.rotation.y = rng.range(0, 6.28);
      this.root.add(jb);
      this.addPropCollider(jb, 'concrete');
    }
    for (let i = 0; i < 6; i++) {
      const c = rng.chance(0.5) ? P.crate(this.mats, rng) : P.ammoCrate(this.mats, rng);
      c.position.set(bx + rng.range(-7, 7), 0, bz + rng.range(-7, 7));
      c.rotation.y = rng.range(0, 6.28);
      this.root.add(c);
      this.addPropCollider(c, 'wood');
    }
    const stands = [
      [bx - 3.4, bz - 2.4, 'shotgun'], [bx + 3.4, bz - 2.4, 'smg'],
      [bx - 3.4, bz + 2.4, 'sniper'], [bx + 3.4, bz + 2.4, 'pistol']
    ];
    this.weaponStands = [];
    for (const [x, z, wk] of stands) {
      const s = P.weaponPickupStand(this.mats);
      s.position.set(x, 0.1, z);
      this.root.add(s);
      this.weaponStands.push({ obj: s, weapon: wk, pos: new THREE.Vector3(x, 0.1, z) });
      this.animated.push(s);
    }
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.4;
      this.pickupNodes.push({
        pos: new THREE.Vector3(bx + Math.cos(a) * 11, 0.1, bz + Math.sin(a) * 11),
        kind: i % 2 === 0 ? 'ammo' : 'health'
      });
    }
    this.scatterLotProps(bx, bz, half, rng, [{ x: bx, z: bz, w: 12, d: 12 }], 6);
  }

  /** Fills empty lot space with fences, bins, foliage and clutter. */
  scatterLotProps(bx, bz, half, rng, avoid, count) {
    const free = (x, z, pad = 1.6) => {
      for (const a of avoid) {
        if (Math.abs(x - a.x) < a.w / 2 + pad && Math.abs(z - a.z) < a.d / 2 + pad) return false;
      }
      return true;
    };
    for (let i = 0; i < count; i++) {
      let x = 0, z = 0, ok = false;
      for (let t = 0; t < 14; t++) {
        x = bx + rng.range(-half + 1.5, half - 1.5);
        z = bz + rng.range(-half + 1.5, half - 1.5);
        if (free(x, z)) { ok = true; break; }
      }
      if (!ok) continue;
      const roll = rng.next();
      let obj = null, surf = 'metal';
      if (roll < 0.18) { obj = P.barrel(this.mats, rng); surf = 'metal'; }
      else if (roll < 0.32) { obj = P.crate(this.mats, rng); surf = 'wood'; }
      else if (roll < 0.44) { obj = P.dumpster(this.mats, rng); surf = 'metal'; }
      else if (roll < 0.58) { obj = P.fenceSection(this.mats, rng, rng.range(2.8, 4.2)); surf = 'metal'; }
      else if (roll < 0.68) { obj = P.deadTree(this.mats, rng); surf = 'wood'; }
      else if (roll < 0.80) { obj = P.rubblePile(this.mats, rng, rng.range(0.9, 1.9)); surf = 'concrete'; }
      else if (roll < 0.92) { obj = P.grassTuft(this.mats, rng); surf = 'dirt'; }
      else { obj = P.jerseyBarrier(this.mats, rng); surf = 'concrete'; }
      obj.position.set(x, 0, z);
      obj.rotation.y = rng.range(0, Math.PI * 2);
      this.root.add(obj);
      this.addPropCollider(obj, surf);
    }
  }

  /* ============================================================= PERIMETER */
  buildPerimeter() {
    const rng = new Rng(5150);
    const R = 88;
    const H = 6.2;
    const segLen = 11;

    for (const axis of ['x', 'z']) {
      for (const s of [-1, 1]) {
        const n = Math.ceil((R * 2) / segLen);
        for (let i = 0; i < n; i++) {
          const t = -R + segLen * (i + 0.5);
          if (t < -R || t > R) continue;
          const x = axis === 'x' ? t : s * R;
          const z = axis === 'x' ? s * R : t;
          const yaw = axis === 'x' ? 0 : Math.PI / 2;
          const obj = rng.chance(0.55)
            ? P.brickWall(this.mats, segLen + 0.4, H, 0.85, { seed: rng.int(1, 9999), coping: true })
            : P.concreteWall(this.mats, segLen + 0.4, H, 0.75, { seed: rng.int(1, 9999), damaged: rng.chance(0.35) });
          obj.position.set(x, 0, z);
          obj.rotation.y = yaw;
          this.root.add(obj);
          const hw = axis === 'x' ? (segLen + 0.4) / 2 : 0.5;
          const hd = axis === 'x' ? 0.5 : (segLen + 0.4) / 2;
          this.addCollider(x, H / 2, z, hw, H / 2, hd, 0, 'wall', 'concrete');

          if (i % 2 === 0) {
            const pier = roundedBox(0.9, H * 0.85, 0.9, 0.05, 1);
            xform(pier, { pos: [0, H * 0.425, 0] });
            boxUV(pier, 1.4);
            const pm = new THREE.Mesh(pier, this.mats.m.concreteDark);
            pm.castShadow = pm.receiveShadow = true;
            pm.position.set(
              x + (axis === 'x' ? segLen / 2 : s * 0.8),
              0,
              z + (axis === 'x' ? s * 0.8 : segLen / 2)
            );
            this.root.add(pm);
          }
        }
      }
    }

    for (const [x, z, hx, hz] of [[0, -R - 3, R + 6, 3], [0, R + 3, R + 6, 3], [-R - 3, 0, 3, R + 6], [R + 3, 0, 3, R + 6]]) {
      this.addCollider(x, 30, z, hx, 30, hz, 0, 'wall', 'concrete');
    }
  }

  /* ========================================================== STREET PROPS */
  buildStreetProps() {
    const rng = new Rng(881);
    const ROADS = [
      [0, 0, 168, 11, true], [0, -46, 168, 9.5, true], [0, 46, 168, 9.5, true],
      [0, 0, 168, 11, false], [-46, 0, 168, 9.5, false], [46, 0, 168, 9.5, false]
    ];

    for (const [cx, cz, len, wid, h] of ROADS) {
      const n = Math.round(len / 16);
      for (let i = 0; i < n; i++) {
        if (rng.chance(0.35)) continue;
        const off = -len / 2 + 8 + i * 16 + rng.range(-3, 3);
        const lane = rng.sign() * rng.range(1.4, wid / 2 - 1.3);
        const x = h ? cx + off : cx + lane;
        const z = h ? cz + lane : cz + off;
        if (Math.abs(x) > 82 || Math.abs(z) > 82) continue;
        if (Math.hypot(x - 23, z - 23) < 15) continue;
        const c = P.wreckedCar(this.mats, rng);
        c.position.set(x, 0, z);
        c.rotation.y = (h ? 0 : Math.PI / 2) + (rng.chance(0.72) ? rng.range(-0.2, 0.2) : rng.range(-1.4, 1.4));
        this.root.add(c);
        this.addPropCollider(c, 'metal');
      }
    }

    const INTER = [[0, 0], [0, -46], [0, 46], [-46, 0], [46, 0], [-46, -46], [46, 46], [-46, 46], [46, -46]];
    for (const [ix, iz] of INTER) {
      if (rng.chance(0.4)) continue;
      for (let i = 0, n = rng.int(2, 4); i < n; i++) {
        const a = rng.range(0, Math.PI * 2);
        const r = rng.range(3.5, 6.5);
        const roll = rng.next();
        let obj, surf;
        if (roll < 0.45) { obj = P.jerseyBarrier(this.mats, rng); surf = 'concrete'; }
        else if (roll < 0.75) { obj = P.sandbagWall(this.mats, rng, rng.range(2.2, 3.6)); surf = 'dirt'; }
        else { obj = P.barrel(this.mats, rng); surf = 'metal'; }
        obj.position.set(ix + Math.cos(a) * r, 0, iz + Math.sin(a) * r);
        obj.rotation.y = -a;
        this.root.add(obj);
        this.addPropCollider(obj, surf);
      }
    }

    for (let i = 0; i < 90; i++) {
      const onX = rng.chance(0.5);
      const lane = rng.pick([-46, 0, 46]);
      const wid = lane === 0 ? 11 : 9.5;
      const s = rng.sign();
      const t = rng.range(-80, 80);
      const off = s * (wid / 2 + rng.range(0.8, 2.4));
      const x = onX ? t : lane + off;
      const z = onX ? lane + off : t;
      if (Math.abs(x) > 84 || Math.abs(z) > 84) continue;
      if (Math.hypot(x - 23, z - 23) < 13) continue;
      const roll = rng.next();
      let obj, surf;
      if (roll < 0.22) { obj = P.barrel(this.mats, rng); surf = 'metal'; }
      else if (roll < 0.38) { obj = P.crate(this.mats, rng); surf = 'wood'; }
      else if (roll < 0.50) { obj = P.dumpster(this.mats, rng); surf = 'metal'; }
      else if (roll < 0.62) { obj = P.rubblePile(this.mats, rng, rng.range(0.7, 1.5)); surf = 'concrete'; }
      else if (roll < 0.82) { obj = P.grassTuft(this.mats, rng); surf = 'dirt'; }
      else { obj = P.deadTree(this.mats, rng); surf = 'wood'; }
      obj.position.set(x, 0, z);
      obj.rotation.y = rng.range(0, Math.PI * 2);
      this.root.add(obj);
      this.addPropCollider(obj, surf);
    }

    for (let i = 0; i < 14; i++) {
      const a = rng.range(0, Math.PI * 2), r = rng.range(18, 72);
      this.pickupNodes.push({
        pos: new THREE.Vector3(Math.cos(a) * r, 0.1, Math.sin(a) * r),
        kind: rng.chance(0.55) ? 'ammo' : 'health'
      });
    }
  }

  /* =============================================================== DEBRIS */
  buildDebris() {
    const rng = new Rng(2277);
    const groups = { concrete: [], wood: [], rust: [] };
    for (let i = 0; i < 320; i++) {
      const x = rng.range(-82, 82), z = rng.range(-82, 82);
      const r = rng.range(0.06, 0.26);
      const g = rock(r, rng.int(1, 99999), 0);
      xform(g, {
        pos: [x, terrainHeight(x, z) + r * 0.45, z],
        rot: [rng.range(0, 6.28), rng.range(0, 6.28), rng.range(0, 6.28)]
      });
      boxUV(g, 0.5);
      const k = rng.next() < 0.6 ? 'concrete' : rng.next() < 0.5 ? 'wood' : 'rust';
      groups[k].push(g);
    }
    for (const k of Object.keys(groups)) {
      if (!groups[k].length) continue;
      const m = new THREE.Mesh(merge(groups[k]), this.mats.m[k]);
      m.castShadow = true; m.receiveShadow = true;
      this.root.add(m);
    }

    const litter = [];
    for (let i = 0; i < 180; i++) {
      const x = rng.range(-80, 80), z = rng.range(-80, 80);
      const w = rng.range(0.10, 0.34), l = rng.range(0.12, 0.42);
      const g = extrude([
        [0, 0], [w, rng.range(-0.03, 0.03)], [w * rng.range(0.8, 1.05), l], [rng.range(-0.03, 0.03), l * rng.range(0.85, 1.0)]
      ], 0.008, { bevel: 0.001, bevelSeg: 1 });
      xform(g, {
        pos: [x, terrainHeight(x, z) + 0.012, z],
        rot: [-Math.PI / 2 + rng.range(-0.08, 0.08), rng.range(0, 6.28), 0]
      });
      boxUV(g, 0.3);
      litter.push(g);
    }
    const lm = new THREE.Mesh(merge(litter), this.mats.m.ragsWhite);
    lm.castShadow = false; lm.receiveShadow = true;
    this.root.add(lm);
  }

  /* ============================================================== LIGHTING */
  buildLighting() {
    const scene = this.scene;
    const rng = new Rng(4711);

    const sun = new THREE.DirectionalLight(0xffc79a, 2.15);
    sun.position.set(0.42 * 90, 0.30 * 90, -0.86 * 90);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 260;
    const S = 60;
    sun.shadow.camera.left = -S; sun.shadow.camera.right = S;
    sun.shadow.camera.top = S; sun.shadow.camera.bottom = -S;
    sun.shadow.bias = -0.00035;
    sun.shadow.normalBias = 0.028;
    scene.add(sun);
    scene.add(sun.target);
    this.sun = sun;

    scene.add(new THREE.HemisphereLight(0x8fa3bd, 0x3a2d22, 0.55));
    scene.add(new THREE.AmbientLight(0x404a58, 0.30));
    scene.fog = new THREE.FogExp2(0x4a3d34, 0.0104);

    if (this.game.skyMat) {
      const sky = new THREE.Mesh(new THREE.IcosahedronGeometry(460, 3), this.game.skyMat);
      sky.frustumCulled = false;
      sky.renderOrder = -1;
      scene.add(sky);
      this.sky = sky;
    }

    const positions = [];
    for (const lane of [-46, 0, 46]) {
      const wid = lane === 0 ? 11 : 9.5;
      for (let t = -72; t <= 72; t += 24) {
        positions.push([t, lane + (wid / 2 + 1.5), 0]);
        positions.push([t, lane - (wid / 2 + 1.5), Math.PI]);
        positions.push([lane + (wid / 2 + 1.5), t, -Math.PI / 2]);
        positions.push([lane - (wid / 2 + 1.5), t, Math.PI / 2]);
      }
    }
    let lit = 0;
    for (const [x, z, yaw] of positions) {
      if (Math.abs(x) > 82 || Math.abs(z) > 82) continue;
      if (!rng.chance(0.40)) continue;
      const on = lit < 24 && rng.chance(0.62);
      if (on) lit++;
      const lamp = P.streetLamp(this.mats, rng, on);
      lamp.position.set(x, 0, z);
      lamp.rotation.y = yaw + Math.PI;
      this.root.add(lamp);
      this.addPropCollider(lamp, 'metal');
      if (on && lamp.userData.light) {
        this.lamps.push(lamp);
        if (rng.chance(0.30)) {
          this.flickerLights.push({
            light: lamp.userData.light,
            lamp: lamp.userData.lamp,
            base: lamp.userData.light.intensity,
            seed: rng.range(0, 100),
            rate: rng.range(5, 18)
          });
        }
      }
    }
  }

  /* ================================================================ SPAWNS */
  buildSpawns() {
    const rng = new Rng(6060);
    for (let i = 0; i < 34; i++) {
      const a = (i / 34) * Math.PI * 2 + rng.range(-0.06, 0.06);
      const r = rng.range(38, 78);
      const p = new THREE.Vector3(Math.cos(a) * r, 0.1, Math.sin(a) * r);
      if (Math.abs(p.x) > 82 || Math.abs(p.z) > 82) continue;
      this.spawnPoints.push({ pos: p, weight: 1 });
    }
    for (const x of [-69, -23, 23, 69]) {
      for (const z of [-69, -23, 23, 69]) {
        if (x === 23 && z === 23) continue;
        this.spawnPoints.push({ pos: new THREE.Vector3(x, 0.1, z), weight: 0.8 });
      }
    }
  }

  /* ============================================================== RUNTIME */
  /** Called by Effects.impact() — persistent bullet holes on hard surfaces. */
  bulletHole(point, normal, surface) {
    if (!this.holes) return;
    const size = surface === 'metal' ? 0.055 + Math.random() * 0.04
      : surface === 'glass' ? 0.10 + Math.random() * 0.08
        : 0.075 + Math.random() * 0.07;
    this.holes.add(point, normal, size);
  }

  /** Pick a spawn point far from the player and out of sight if possible. */
  pickSpawn(playerPos, minDist = 22, maxDist = 72, allowRoof = false) {
    let best = null, bestScore = -1e9;
    for (let i = 0; i < 26; i++) {
      const s = this.spawnPoints[(Math.random() * this.spawnPoints.length) | 0];
      if (!s) continue;
      if (s.roof && !allowRoof) continue;
      const d = s.pos.distanceTo(playerPos);
      if (d < minDist || d > maxDist) continue;
      const hidden = !this.physics.visible(
        _v.set(s.pos.x, s.pos.y + 1.5, s.pos.z),
        _v2.set(playerPos.x, playerPos.y + 1.6, playerPos.z)
      );
      const score = (hidden ? 30 : 0) + (s.weight || 1) * 8 - Math.abs(d - 38) * 0.4 + Math.random() * 6;
      if (score > bestScore) { bestScore = score; best = s; }
    }
    if (!best) {
      let far = null, fd = -1;
      for (const s of this.spawnPoints) {
        if (s.roof && !allowRoof) continue;
        const d = s.pos.distanceTo(playerPos);
        if (d > fd) { fd = d; far = s; }
      }
      best = far || this.spawnPoints[0];
    }
    const out = best.pos.clone();
    out.x += (Math.random() - 0.5) * 3.2;
    out.z += (Math.random() - 0.5) * 3.2;
    const gy = this.physics.groundAt(out.x, out.y + 2.5, out.z, 6, 0.4);
    out.y = gy > -1e8 ? gy + 0.05 : Math.max(0, terrainHeight(out.x, out.z)) + 0.05;
    return out;
  }

  update(dt, t) {
    for (const f of this.flickerLights) {
      const n = Math.sin(t * f.rate + f.seed) * Math.sin(t * f.rate * 2.7 + f.seed * 3.1);
      const on = n > -0.55;
      f.light.intensity = on ? f.base * (0.72 + 0.28 * Math.abs(n)) : f.base * 0.06;
      if (f.lamp) f.lamp.material.emissiveIntensity = on ? 6.5 : 0.4;
    }
    for (const a of this.animated) {
      if (a.userData.ring) {
        a.userData.ring.rotation.z = t * 1.4;
        a.userData.ring.position.y = 0.03 + Math.sin(t * 2.2) * 0.05;
      }
    }
    if (this.sky && this.game.camera) this.sky.position.copy(this.game.camera.position);
    if (this.sun && this.game.player) {
      const p = this.game.player.pos;
      this.sun.position.set(p.x + 0.42 * 90, 0.30 * 90, p.z - 0.86 * 90);
      this.sun.target.position.set(p.x, 0, p.z);
      this.sun.target.updateMatrixWorld();
    }
  }

  reset() { this.holes?.clear(); }
}
