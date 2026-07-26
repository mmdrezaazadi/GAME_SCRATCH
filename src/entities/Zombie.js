/**
 * Zombie entity — procedural animation, steering AI, per-limb hit detection,
 * dismemberment and a full Verlet ragdoll on death.
 *
 * Animation is fully procedural (no clips): the shambling gait, arm sway, spine
 * twist, head bob and lunge attack are all driven by phase-shifted sinusoids
 * mixed by state weight, which lets us blend seamlessly between idle, walk,
 * sprint, attack, stagger and death without any authored data.
 */
import * as THREE from 'three';
import { buildZombie, ZOMBIE_TYPES } from './zombieModel.js';
import { VerletBody, GRAVITY } from '../core/physics.js';
import { Rng } from '../gfx/noise.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const _q = new THREE.Quaternion(), _m = new THREE.Matrix4();
const UP = new THREE.Vector3(0, 1, 0);

export const STATE = { IDLE: 0, WALK: 1, CHASE: 2, ATTACK: 3, STAGGER: 4, DEAD: 5, SPAWN: 6 };

/** Hit zones with damage multipliers. */
const ZONES = [
  { name: 'head', joint: 'head', r: 0.155, mul: 3.0, y: 0.06, gib: true },
  { name: 'chest', joint: 'chest', r: 0.215, mul: 1.0, y: 0.02 },
  { name: 'spine', joint: 'spine', r: 0.190, mul: 1.15, y: 0.0 },
  { name: 'hips', joint: 'hips', r: 0.175, mul: 0.9, y: 0.0 },
  { name: 'armL', joint: 'foreArmL', r: 0.115, mul: 0.62, y: -0.11, gib: true, limb: 'armL' },
  { name: 'armR', joint: 'foreArmR', r: 0.115, mul: 0.62, y: -0.11, gib: true, limb: 'armR' },
  { name: 'upArmL', joint: 'upperArmL', r: 0.120, mul: 0.7, y: -0.12 },
  { name: 'upArmR', joint: 'upperArmR', r: 0.120, mul: 0.7, y: -0.12 },
  { name: 'legL', joint: 'shinL', r: 0.120, mul: 0.55, y: -0.17, gib: true, limb: 'legL' },
  { name: 'legR', joint: 'shinR', r: 0.120, mul: 0.55, y: -0.17, gib: true, limb: 'legR' },
  { name: 'thighL', joint: 'thighL', r: 0.145, mul: 0.68, y: -0.17 },
  { name: 'thighR', joint: 'thighR', r: 0.145, mul: 0.68, y: -0.17 }
];

export class Zombie {
  constructor(game, typeKey, spawnPos, seed) {
    this.game = game;
    this.type = typeKey;
    this.def = ZOMBIE_TYPES[typeKey];
    this.rng = new Rng((seed || 1) * 3571 + 7);

    const built = buildZombie(game.mats, typeKey, seed);
    this.root = built.root;
    this.joints = built.joints;
    this.meshes = built.meshes;
    this.variant = built.variant;

    this.root.position.copy(spawnPos);
    this.root.rotation.y = this.rng.range(0, Math.PI * 2);
    game.scene.add(this.root);

    const waveScale = 1 + (game.wave - 1) * 0.075;
    this.maxHp = this.def.hp * waveScale;
    this.hp = this.maxHp;
    this.state = STATE.SPAWN;
    this.stateT = 0;
    this.phase = this.rng.range(0, Math.PI * 2);
    this.speedMul = this.rng.range(0.88, 1.14);
    this.speed = this.def.speed * this.speedMul * (1 + (game.wave - 1) * 0.018);
    this.vel = new THREE.Vector3();
    this.yaw = this.root.rotation.y;
    this.targetYaw = this.yaw;
    this.grounded = true;
    this.radius = 0.36 * this.def.scale;
    this.height = 1.78 * this.def.scale;
    this.dead = false;
    this.ragdoll = null;
    this.attackCd = 0;
    this.staggerT = 0;
    this.hitFlash = 0;
    this.limbsLost = {};
    this.crawling = !!this.def.crawler;
    this.wanderTarget = null;
    this.repathT = 0;
    this.moan = 0;
    this.moanCd = this.rng.range(1, 6);
    this.spawnT = 0;
    this.bloodBudget = 4;
    this.gibbed = false;
    this.headGibbed = false;
    this.lastBloodT = 0;
    this.exploded = false;

    // per-mesh original colours for hit flash
    this.flashMats = new Set();
    for (const m of this.meshes) this.flashMats.add(m.material);

    // spawn: rise from the ground
    this.root.position.y -= 1.4;
    this.spawnFrom = this.root.position.y;
    this.spawnTo = spawnPos.y;

    // seeded pose offsets so no two zombies move identically
    this.gaitScale = this.rng.range(0.82, 1.22);
    this.leanBase = this.rng.range(0.06, 0.24);
    this.armDroop = this.rng.range(0.15, 0.95);
    this.headTilt = this.rng.range(-0.22, 0.22);
    this.limpSide = this.rng.chance(0.4) ? (this.rng.chance(0.5) ? 1 : -1) : 0;
    this.limpAmt = this.limpSide ? this.rng.range(0.15, 0.45) : 0;

    if (this.crawling) {
      this.root.position.y = spawnPos.y;
      this.spawnFrom = this.root.position.y - 0.8;
      this.spawnTo = spawnPos.y;
    }

    this.boundSphere = new THREE.Sphere(new THREE.Vector3(), this.height * 0.7);
  }

  /* ------------------------------------------------------------- lifecycle -- */
  dispose() {
    this.game.scene.remove(this.root);
    this.root.traverse(o => {
      if (o.isMesh) { o.geometry?.dispose?.(); }
    });
    if (this.ragdollMeshes) for (const m of this.ragdollMeshes) { m.geometry?.dispose?.(); }
  }

  /* ------------------------------------------------------------- animation -- */
  poseIdle(t) {
    const j = this.joints;
    const s = Math.sin(t * 1.1 + this.phase);
    const s2 = Math.sin(t * 0.7 + this.phase * 1.7);
    j.spine.rotation.set(this.leanBase * 0.5 + s * 0.03, s2 * 0.06, s * 0.02);
    j.chest.rotation.set(0.06 + s2 * 0.03, -s2 * 0.04, 0);
    j.head.rotation.set(-0.10 + s * 0.05, s2 * 0.22, this.headTilt + s * 0.04);
    for (const k of ['L', 'R']) {
      const sd = k === 'L' ? -1 : 1;
      j['upperArm' + k].rotation.set(0.10 + s * 0.05, 0, sd * (0.14 + s2 * 0.03));
      j['foreArm' + k].rotation.set(-0.35 - this.armDroop * 0.3 + s * 0.06, 0, 0);
      j['thigh' + k].rotation.set(s * 0.02, 0, sd * 0.02);
      j['shin' + k].rotation.set(0.06, 0, 0);
      j['foot' + k].rotation.set(0, 0, 0);
    }
  }

  poseWalk(t, speedNorm) {
    const j = this.joints;
    const f = 2.35 * this.gaitScale * (0.55 + speedNorm * 0.85);
    const p = t * f + this.phase;
    const sw = Math.sin(p), sw2 = Math.sin(p * 2), cw = Math.cos(p);

    // hips: bob + sway + rotation
    j.hips.position.y = this.hipY0 + Math.abs(sw2) * 0.030 * speedNorm - 0.020 * speedNorm;
    j.hips.rotation.set(0, sw * 0.16 * speedNorm, cw * 0.05 * speedNorm);
    j.spine.rotation.set(this.leanBase + 0.10 * speedNorm, -sw * 0.13 * speedNorm, sw2 * 0.03);
    j.chest.rotation.set(0.10 * speedNorm, -sw * 0.10 * speedNorm, -cw * 0.05 * speedNorm);
    j.head.rotation.set(-0.18 * speedNorm + sw2 * 0.04, sw * 0.08, this.headTilt - cw * 0.06);

    for (const k of ['L', 'R']) {
      const sd = k === 'L' ? -1 : 1;
      const ph = sd > 0 ? p : p + Math.PI;
      const legS = Math.sin(ph), legC = Math.cos(ph);
      const limp = (this.limpSide === sd) ? this.limpAmt : 0;

      // legs: swing + knee flex synced to the step
      j['thigh' + k].rotation.set(legS * (0.62 * speedNorm) - 0.10 - limp * 0.3, 0, sd * 0.03);
      j['shin' + k].rotation.set(Math.max(0.05, (0.55 + limp) * (0.5 - legC * 0.5) * speedNorm + 0.08), 0, 0);
      j['foot' + k].rotation.set(-legS * 0.28 * speedNorm + 0.05, 0, 0);

      // arms: dangling, counter-swinging, zombie-style raised reach
      const reach = this.state === STATE.CHASE ? 0.9 : 0.25;
      const armPh = -ph;
      j['upperArm' + k].rotation.set(
        Math.sin(armPh) * 0.30 * speedNorm - reach * 1.05,
        0,
        sd * (0.16 + reach * 0.20 + Math.cos(armPh) * 0.06)
      );
      j['foreArm' + k].rotation.set(
        -0.45 - this.armDroop * 0.45 - reach * 0.55 + Math.sin(armPh + 1.0) * 0.16, 0, 0
      );
      j['hand' + k].rotation.set(0.25 + Math.sin(p * 1.7 + sd) * 0.12, 0, 0);
    }
  }

  poseCrawl(t, speedNorm) {
    const j = this.joints;
    const p = t * 3.0 * this.gaitScale + this.phase;
    const sw = Math.sin(p), cw = Math.cos(p);
    j.hips.position.y = this.hipY0 - 0.62 + Math.abs(sw) * 0.02;
    j.hips.rotation.set(-1.32, sw * 0.16, cw * 0.10);
    j.spine.rotation.set(0.42 + sw * 0.10, -sw * 0.14, 0);
    j.chest.rotation.set(0.30, sw * 0.10, 0);
    j.head.rotation.set(0.85 + sw * 0.10, sw * 0.16, this.headTilt);
    for (const k of ['L', 'R']) {
      const sd = k === 'L' ? -1 : 1;
      const ph = sd > 0 ? p : p + Math.PI;
      j['upperArm' + k].rotation.set(-2.0 + Math.sin(ph) * 0.75, 0, sd * 0.35);
      j['foreArm' + k].rotation.set(-0.55 + Math.max(0, Math.cos(ph)) * 0.55, 0, 0);
      j['thigh' + k].rotation.set(0.85 + Math.sin(ph + Math.PI) * 0.35, 0, sd * 0.28);
      j['shin' + k].rotation.set(0.95 + Math.max(0, -Math.cos(ph)) * 0.5, 0, 0);
      j['foot' + k].rotation.set(-0.35, 0, 0);
    }
  }

  poseAttack(t, k) {
    // k: 0..1 attack progress
    const j = this.joints;
    const lunge = Math.sin(Math.min(1, k * 1.25) * Math.PI);
    const wind = Math.max(0, 1 - k * 3);
    j.spine.rotation.set(this.leanBase + 0.28 * lunge - 0.16 * wind, 0, 0);
    j.chest.rotation.set(0.22 * lunge, 0, 0);
    j.head.rotation.set(-0.42 * lunge + 0.2 * wind, 0, this.headTilt);
    if (this.joints.skull) {
      const jw = this.joints.skull.getObjectByName('jaw');
      if (jw) jw.rotation.x = 0.10 + 0.62 * lunge;
    }
    for (const key of ['L', 'R']) {
      const sd = key === 'L' ? -1 : 1;
      const off = key === 'L' ? 0 : 0.14;
      const kk = Math.max(0, Math.min(1, (k - off) * 1.3));
      const l2 = Math.sin(Math.min(1, kk * 1.25) * Math.PI);
      j['upperArm' + key].rotation.set(-1.85 * l2 - 0.55 + wind * 0.5, 0, sd * (0.30 + 0.35 * l2));
      j['foreArm' + key].rotation.set(-0.30 - 0.45 * (1 - l2), 0, 0);
      j['hand' + key].rotation.set(0.5 + 0.4 * l2, 0, 0);
    }
  }

  poseStagger(t, k) {
    const j = this.joints;
    const s = Math.sin(k * Math.PI * 2.6) * (1 - k);
    j.spine.rotation.set(this.leanBase - 0.30 * (1 - k), s * 0.30, s * 0.16);
    j.chest.rotation.set(-0.20 * (1 - k), -s * 0.2, 0);
    j.head.rotation.set(-0.30 * (1 - k), s * 0.35, this.headTilt + s * 0.2);
    for (const key of ['L', 'R']) {
      const sd = key === 'L' ? -1 : 1;
      j['upperArm' + key].rotation.set(-0.35 - 0.55 * (1 - k), 0, sd * (0.5 + 0.4 * (1 - k)));
      j['foreArm' + key].rotation.set(-0.8 + s * 0.3, 0, 0);
      j['thigh' + key].rotation.set(-0.2 + s * sd * 0.3, 0, sd * 0.12);
      j['shin' + key].rotation.set(0.3 + Math.abs(s) * 0.3, 0, 0);
    }
  }

  /* ------------------------------------------------------------------- AI --- */
  update(dt, t) {
    if (this.dead) { this.updateRagdoll(dt); return; }

    if (this.hipY0 === undefined) this.hipY0 = this.joints.hips.position.y;

    const game = this.game;
    const player = game.player;
    const toPlayer = _v.subVectors(player.pos, this.root.position);
    toPlayer.y = 0;
    const dist = toPlayer.length();
    this.distToPlayer = dist;

    this.stateT += dt;
    if (this.hitFlash > 0) this.hitFlash = Math.max(0, this.hitFlash - dt * 4);
    if (this.attackCd > 0) this.attackCd -= dt;

    /* ---- spawn emerge ---- */
    if (this.state === STATE.SPAWN) {
      this.spawnT += dt;
      const k = Math.min(1, this.spawnT / 1.5);
      const e = 1 - Math.pow(1 - k, 3);
      this.root.position.y = this.spawnFrom + (this.spawnTo - this.spawnFrom) * e;
      this.poseIdle(t * 0.5);
      this.joints.spine.rotation.x += (1 - e) * 0.9;
      for (const key of ['L', 'R']) {
        this.joints['upperArm' + key].rotation.x -= (1 - e) * 1.6;
      }
      if (k >= 1) { this.state = STATE.WALK; this.stateT = 0; }
      this.applyFlash();
      return;
    }

    /* ---- stagger ---- */
    if (this.state === STATE.STAGGER) {
      const k = Math.min(1, this.stateT / this.staggerDur);
      this.poseStagger(t, k);
      // slide back from the hit
      this.vel.multiplyScalar(0.86);
      this.moveBy(this.vel.x * dt, this.vel.z * dt);
      if (k >= 1) { this.state = STATE.CHASE; this.stateT = 0; }
      this.applyFlash();
      this.syncCollider();
      return;
    }

    /* ---- attack ---- */
    if (this.state === STATE.ATTACK) {
      const dur = this.def.atkRate;
      const k = Math.min(1, this.stateT / dur);
      this.poseAttack(t, k);
      // face the player through the swing
      this.targetYaw = Math.atan2(toPlayer.x, toPlayer.z);
      this.yaw = lerpAngle(this.yaw, this.targetYaw, 1 - Math.pow(0.001, dt));
      this.root.rotation.y = this.yaw;
      // damage lands mid-swing
      if (!this.hitLanded && k > 0.38) {
        this.hitLanded = true;
        if (dist < this.def.atkRange * this.def.scale * 1.25 && game.player.alive) {
          const dmg = this.def.dmg * (1 + (game.wave - 1) * 0.05);
          game.player.damage(dmg, this.root.position);
          game.audio.play('zombieHit', this.root.position, 0.9);
          game.fx.bloodSpray(
            player.pos.clone().add(new THREE.Vector3(0, -0.2, 0)),
            toPlayer.clone().normalize().negate(), 8, 0.7
          );
        }
      }
      if (k >= 1) {
        this.hitLanded = false;
        this.state = STATE.CHASE; this.stateT = 0;
        this.attackCd = this.def.atkRate * 0.55;
      }
      this.applyFlash();
      this.syncCollider();
      return;
    }

    /* ---- perception ---- */
    const canSee = dist < 46 && (dist < 6 || game.physics.visible(
      _v2.copy(this.root.position).setY(this.root.position.y + 1.45 * this.def.scale),
      _v3.copy(player.pos).setY(player.pos.y + 1.0)
    ));
    const alerted = canSee || dist < 12 || game.noiseLevel > 0.4 || this.stateT > 4;

    if (alerted && this.state !== STATE.CHASE) { this.state = STATE.CHASE; this.stateT = 0; }

    /* ---- movement ---- */
    let moveDir = _v2.set(0, 0, 0);
    let speedNorm = 0;

    if (this.state === STATE.CHASE) {
      if (dist < this.def.atkRange * this.def.scale && this.attackCd <= 0) {
        this.state = STATE.ATTACK; this.stateT = 0; this.hitLanded = false;
        this.game.audio.play('zombieAttack', this.root.position, 0.8);
        return;
      }
      // steer toward the player with local obstacle avoidance + separation
      moveDir.copy(toPlayer).normalize();
      this.avoid(moveDir, dt);
      speedNorm = 1;
      // runners occasionally sprint-lunge
      if (this.type === 'runner' && dist < 14) speedNorm = 1.25;
    } else {
      // idle wander
      this.repathT -= dt;
      if (!this.wanderTarget || this.repathT <= 0) {
        this.repathT = this.rng.range(3, 7);
        const a = this.rng.range(0, Math.PI * 2);
        const r = this.rng.range(4, 14);
        this.wanderTarget = new THREE.Vector3(
          this.root.position.x + Math.cos(a) * r, this.root.position.y, this.root.position.z + Math.sin(a) * r
        );
      }
      const toW = _v3.subVectors(this.wanderTarget, this.root.position); toW.y = 0;
      if (toW.length() < 1.2) { this.wanderTarget = null; speedNorm = 0; }
      else { moveDir.copy(toW).normalize(); this.avoid(moveDir, dt); speedNorm = 0.45; }
    }

    const missingLegs = (this.limbsLost.legL ? 1 : 0) + (this.limbsLost.legR ? 1 : 0);
    if (missingLegs === 1) speedNorm *= 0.55;
    if (missingLegs === 2 && !this.crawling) { this.crawling = true; }
    if (this.crawling) speedNorm *= 0.72;

    const sp = this.speed * speedNorm;
    if (sp > 0.01) {
      this.vel.x = moveDir.x * sp;
      this.vel.z = moveDir.z * sp;
      this.targetYaw = Math.atan2(moveDir.x, moveDir.z);
    } else {
      this.vel.x *= 0.85; this.vel.z *= 0.85;
    }
    this.yaw = lerpAngle(this.yaw, this.targetYaw, 1 - Math.pow(0.0008, dt));
    this.root.rotation.y = this.yaw;
    this.moveBy(this.vel.x * dt, this.vel.z * dt);

    // gravity / ground follow
    const gy = game.physics.groundAt(this.root.position.x, this.root.position.y + 0.6, this.root.position.z, 4.0, this.radius * 0.7);
    const targetY = gy > -1e8 ? gy : 0;
    this.root.position.y += (targetY - this.root.position.y) * Math.min(1, dt * 12);

    // pose
    const animSpeed = Math.hypot(this.vel.x, this.vel.z) / Math.max(0.2, this.def.speed);
    if (this.crawling) this.poseCrawl(t, Math.max(0.35, animSpeed));
    else if (animSpeed > 0.08) this.poseWalk(t, Math.min(1.4, Math.max(0.35, animSpeed)));
    else this.poseIdle(t);

    // jaw idle chatter
    const jw = this.joints.skull?.getObjectByName('jaw');
    if (jw) jw.rotation.x = 0.08 + Math.max(0, Math.sin(t * 2.4 + this.phase)) * 0.22;

    // moaning
    this.moanCd -= dt;
    if (this.moanCd <= 0) {
      this.moanCd = this.rng.range(4, 11);
      if (dist < 34) this.game.audio.play('zombieMoan', this.root.position, 0.55 * (1 - dist / 40));
    }

    this.applyFlash();
    this.syncCollider();
  }

  avoid(dir, dt) {
    const game = this.game;
    // separation from other zombies
    const sep = _v3.set(0, 0, 0);
    let n = 0;
    for (const z of game.zombies) {
      if (z === this || z.dead) continue;
      const dx = this.root.position.x - z.root.position.x;
      const dz = this.root.position.z - z.root.position.z;
      const d2 = dx * dx + dz * dz;
      const minD = (this.radius + z.radius) * 1.9;
      if (d2 < minD * minD && d2 > 1e-5) {
        const d = Math.sqrt(d2);
        sep.x += dx / d * (1 - d / minD);
        sep.z += dz / d * (1 - d / minD);
        n++;
      }
    }
    if (n) { dir.x += sep.x * 1.5; dir.z += sep.z * 1.5; }

    // wall avoidance: probe left/right
    const p = _v.copy(this.root.position).setY(this.root.position.y + 0.9);
    const probe = 1.5;
    const fwd = _v2.set(dir.x, 0, dir.z).normalize();
    const hitF = game.physics.raycast(p, fwd, probe);
    if (hitF) {
      // slide along the wall
      const nrm = hitF.normal;
      const dot = fwd.dot(nrm);
      dir.x -= nrm.x * dot * 1.6;
      dir.z -= nrm.z * dot * 1.6;
      // add a tangential nudge to break symmetry
      dir.x += -nrm.z * 0.5 * (this.rng.next() < 0.5 ? 1 : -1);
      dir.z += nrm.x * 0.5;
    }
    const len = Math.hypot(dir.x, dir.z);
    if (len > 1e-5) { dir.x /= len; dir.z /= len; }
  }

  moveBy(dx, dz) {
    const p = this.root.position;
    p.x += dx; p.z += dz;
    // resolve against the world
    const tmp = _v.set(p.x, p.y, p.z);
    this.game.physics.resolveCapsule(tmp, this.radius, this.height, 3);
    p.x = tmp.x; p.z = tmp.z;
    if (tmp.y > p.y) p.y = tmp.y;
  }

  syncCollider() {
    this.boundSphere.center.set(
      this.root.position.x,
      this.root.position.y + this.height * 0.5,
      this.root.position.z
    );
  }

  applyFlash() {
    // white/red rim flash driven through emissive on the shared materials would
    // affect every zombie, so instead we scale the hit limb briefly (cheap and
    // readable) plus spawn FX at the hit site.
    if (this.flashScaleTarget) {
      const o = this.flashScaleTarget;
      const k = this.hitFlash;
      o.scale.setScalar(1 + k * 0.11);
      if (k <= 0) this.flashScaleTarget = null;
    }
  }

  /* --------------------------------------------------------- hit detection -- */
  /**
   * Ray vs the zone spheres in world space.
   * @returns {{dist:number, zone:object, point:THREE.Vector3, joint:THREE.Object3D}|null}
   */
  raycastZones(origin, dir, maxDist) {
    if (this.dead) return null;
    // early out on the bounding sphere
    const oc = _v.subVectors(origin, this.boundSphere.center);
    const b = oc.dot(dir);
    const c = oc.lengthSq() - this.boundSphere.radius * this.boundSphere.radius;
    if (c > 0 && b > 0) return null;
    const disc = b * b - c;
    if (disc < 0) return null;

    let best = null;
    for (const z of ZONES) {
      if (z.limb && this.limbsLost[z.limb]) continue;
      if (z.name === 'head' && this.headGibbed) continue;
      const j = this.joints[z.joint];
      if (!j) continue;
      j.getWorldPosition(_v2);
      if (z.y) _v2.y += z.y * this.def.scale;
      const r = z.r * this.def.scale;
      const L = _v3.subVectors(_v2, origin);
      const tca = L.dot(dir);
      if (tca < 0) continue;
      const d2 = L.lengthSq() - tca * tca;
      const r2 = r * r;
      if (d2 > r2) continue;
      const thc = Math.sqrt(r2 - d2);
      let t = tca - thc;
      if (t < 0) t = tca + thc;
      if (t < 0 || t > maxDist) continue;
      if (!best || t < best.dist) {
        best = { dist: t, zone: z, joint: j, point: origin.clone().addScaledVector(dir, t) };
      }
    }
    return best;
  }

  /** Apply damage. Returns true if this shot killed it. */
  hit(dmg, zone, point, dir, weapon) {
    if (this.dead) return false;
    const mul = zone ? zone.mul : 1;
    const dmgFinal = dmg * mul;
    this.hp -= dmgFinal;
    this.hitFlash = 1;
    if (zone) this.flashScaleTarget = this.joints[zone.joint];

    const game = this.game;
    game.fx.bloodSpray(point, dir, zone?.name === 'head' ? 26 : 15, mul > 2 ? 1.35 : 0.95);
    game.fx.bloodMist(point, dir);
    game.hud.showHitmarker(zone?.name === 'head');
    game.audio.play(zone?.name === 'head' ? 'headshot' : 'flesh', point, 0.85);
    game.stats.hits++;
    if (zone?.name === 'head') game.stats.headshots++;

    // blood decal behind on walls
    const back = game.physics.raycast(point, dir, 6);
    if (back) game.fx.bloodDecal(back.point, back.normal, 0.5 + Math.random() * 0.9);

    // limb dismemberment on heavy damage
    if (zone?.gib && !this.dead) {
      const heavy = dmgFinal > this.maxHp * 0.30 || (weapon?.penetration || 1) > 2;
      if (zone.name === 'head' && (heavy || this.hp <= 0)) {
        this.gibHead(dir);
      } else if (zone.limb && (heavy || (this.hp <= 0 && Math.random() < 0.55))) {
        this.gibLimb(zone.limb, dir);
      }
    }

    if (this.hp <= 0) { this.die(dir, dmgFinal, point); return true; }

    // stagger on big hits
    const stagChance = dmgFinal / this.maxHp;
    if (stagChance > 0.14 && this.state !== STATE.STAGGER && Math.random() < stagChance * 1.7) {
      this.state = STATE.STAGGER; this.stateT = 0;
      this.staggerDur = 0.42 + Math.min(0.5, stagChance);
      this.vel.set(dir.x, 0, dir.z).multiplyScalar(2.6 * Math.min(1.6, stagChance * 3) / (this.def.mass / 80));
    }
    return false;
  }

  gibHead(dir) {
    if (this.headGibbed) return;
    this.headGibbed = true;
    const skull = this.joints.skull;
    if (!skull) return;
    skull.getWorldPosition(_v);
    this.joints.head.visible = false;
    this.game.fx.gibChunk(_v, dir, 'head', this.def.scale);
    this.game.fx.bloodSpray(_v, new THREE.Vector3(0, 1, 0), 40, 1.7);
    this.game.fx.bloodSpray(_v, dir, 30, 1.5);
    // neck stump geyser
    this.game.fx.attachGeyser(this.joints.neck, 1.9);
    this.game.audio.play('gib', _v, 1.0);
  }

  gibLimb(limb, dir) {
    if (this.limbsLost[limb]) return;
    this.limbsLost[limb] = true;
    const map = { armL: 'foreArmL', armR: 'foreArmR', legL: 'shinL', legR: 'shinR' };
    const j = this.joints[map[limb]];
    if (!j) return;
    j.getWorldPosition(_v);
    j.visible = false;
    this.game.fx.gibChunk(_v, dir, limb.startsWith('arm') ? 'arm' : 'leg', this.def.scale);
    this.game.fx.bloodSpray(_v, dir, 24, 1.3);
    const parent = limb === 'armL' ? this.joints.upperArmL : limb === 'armR' ? this.joints.upperArmR
      : limb === 'legL' ? this.joints.thighL : this.joints.thighR;
    this.game.fx.attachGeyser(parent, 1.2);
    this.game.audio.play('gib', _v, 0.9);
  }

  /* ------------------------------------------------------------- ragdoll ---- */
  die(dir, dmg, point) {
    if (this.dead) return;
    this.dead = true;
    this.state = STATE.DEAD;
    this.deathT = 0;
    const game = this.game;
    game.stats.kills++;
    game.onZombieKilled(this);
    game.audio.play('zombieDie', this.root.position, 0.95);

    // bloater bursts
    if (this.def.explodes && !this.exploded) {
      this.exploded = true;
      const c = this.root.position.clone().setY(this.root.position.y + 1.0 * this.def.scale);
      game.fx.goreExplosion(c, this.def.scale);
      game.audio.play('burst', c, 1.0);
      // splash damage to the player and nearby zombies
      const pd = game.player.pos.distanceTo(c);
      if (pd < 4.5) game.player.damage(38 * (1 - pd / 4.5), c);
      for (const z of game.zombies) {
        if (z === this || z.dead) continue;
        const d = z.root.position.distanceTo(c);
        if (d < 5) z.hit(70 * (1 - d / 5), ZONES[1], z.root.position.clone().setY(c.y), _v.copy(z.root.position).sub(c).normalize(), null);
      }
    }

    this.buildRagdoll(dir, Math.min(3.4, 0.9 + dmg / 55));
  }

  /**
   * Build the Verlet ragdoll. Each body segment becomes a particle; the meshes
   * are re-parented into standalone Object3Ds whose transform is derived from
   * particle pairs each frame (position = midpoint, orientation = look-at).
   */
  buildRagdoll(dir, force) {
    const game = this.game;
    const body = new VerletBody(game.physics);
    const s = this.def.scale;
    const J = this.joints;
    const wp = (name) => { const o = J[name]; const v = new THREE.Vector3(); o.getWorldPosition(v); return v; };

    const P = {};
    const mk = (name, pos, r, m) => { P[name] = body.particle(pos.x, pos.y, pos.z, r * s, m); return P[name]; };

    const hips = wp('hips'), spine = wp('spine'), chest = wp('chest'), neck = wp('neck'), head = wp('head');
    mk('hips', hips, 0.16, 5.0);
    mk('spine', spine, 0.15, 4.0);
    mk('chest', chest, 0.17, 5.5);
    mk('neck', neck, 0.10, 1.6);
    mk('head', head.clone().setY(head.y + 0.09 * s), 0.13, 2.4);

    for (const k of ['L', 'R']) {
      const sh = wp('shoulder' + k), el = wp('foreArm' + k), ha = wp('hand' + k);
      mk('sh' + k, sh, 0.10, 1.8);
      mk('el' + k, el, 0.085, 1.4);
      mk('ha' + k, ha, 0.07, 0.9);
      const th = wp('thigh' + k), kn = wp('shin' + k), ft = wp('foot' + k);
      mk('th' + k, th, 0.13, 3.0);
      mk('kn' + k, kn, 0.10, 2.4);
      mk('ft' + k, ft, 0.09, 1.4);
    }

    // skeleton links
    const L = (a, b, stiff = 1) => body.link(P[a], P[b], undefined, stiff);
    L('hips', 'spine'); L('spine', 'chest'); L('chest', 'neck'); L('neck', 'head');
    for (const k of ['L', 'R']) {
      L('chest', 'sh' + k); L('sh' + k, 'el' + k); L('el' + k, 'ha' + k);
      L('hips', 'th' + k); L('th' + k, 'kn' + k); L('kn' + k, 'ft' + k);
      // shoulder/hip stabilisers keep the silhouette from collapsing
      L('spine', 'sh' + k, 0.55); L('spine', 'th' + k, 0.65);
      body.range(P['sh' + k], P['ha' + k], 0.22 * s, 0.48 * s, 0.55);
      body.range(P['th' + k], P['ft' + k], 0.30 * s, 0.72 * s, 0.60);
      body.range(P['head'], P['sh' + k], 0.16 * s, 0.42 * s, 0.35);
    }
    L('shL', 'shR', 0.75); L('thL', 'thR', 0.70);
    L('chest', 'hips', 0.55);
    body.range(P.head, P.hips, 0.42 * s, 0.80 * s, 0.4);

    // launch impulse: strongest at the impact site, plus spin
    const imp = dir.clone().normalize().multiplyScalar(force * 0.032);
    const spin = (Math.random() - 0.5) * force * 0.020;
    for (const key in P) {
      const p = P[key];
      p.prev.sub(imp);
      p.prev.x -= spin * (p.p.y - hips.y);
      p.prev.z += spin * (p.p.x - hips.x);
      // slight randomisation so limbs flail
      p.prev.x -= (Math.random() - 0.5) * 0.012;
      p.prev.y -= (Math.random() - 0.5) * 0.010;
      p.prev.z -= (Math.random() - 0.5) * 0.012;
    }
    // extra kick to the upper body for a believable fall
    P.chest.prev.sub(imp.clone().multiplyScalar(0.7));
    P.head.prev.sub(imp.clone().multiplyScalar(0.55));

    /* --- reparent the visual meshes onto ragdoll segments --- */
    this.ragdollSegs = [];
    const seg = (meshSrc, a, b, upRef) => {
      if (!meshSrc || !meshSrc.parent) return;
      const holder = new THREE.Group();
      game.scene.add(holder);
      // capture the world transform of the source joint
      meshSrc.updateWorldMatrix(true, false);
      const wm = meshSrc.matrixWorld.clone();
      // move all children of the joint into the holder, preserving world transform
      const kids = [...meshSrc.children].filter(c => !c.isGroup || c.children.length);
      const inv = new THREE.Matrix4();
      for (const kid of [...meshSrc.children]) {
        kid.updateWorldMatrix(true, false);
        const kwm = kid.matrixWorld.clone();
        holder.add(kid);
        inv.copy(holder.matrixWorld).invert();
        kid.matrix.copy(inv.multiply(kwm));
        kid.matrix.decompose(kid.position, kid.quaternion, kid.scale);
      }
      this.ragdollSegs.push({ holder, a: P[a], b: P[b], upRef: upRef || null, off: new THREE.Vector3() });
    };

    // ordering matters: take children before the joint hierarchy is broken
    const cap = (jointName, a, b) => seg(this.joints[jointName], a, b);
    cap('head', 'head', 'neck');
    cap('neck', 'neck', 'chest');
    cap('chest', 'chest', 'spine');
    cap('spine', 'spine', 'hips');
    cap('hips', 'hips', 'spine');
    for (const k of ['L', 'R']) {
      cap('shoulder' + k, 'sh' + k, 'el' + k);
      cap('upperArm' + k, 'sh' + k, 'el' + k);
      cap('foreArm' + k, 'el' + k, 'ha' + k);
      cap('hand' + k, 'ha' + k, 'el' + k);
      cap('thigh' + k, 'th' + k, 'kn' + k);
      cap('shin' + k, 'kn' + k, 'ft' + k);
      cap('foot' + k, 'ft' + k, 'kn' + k);
    }

    // record rest lengths & the initial local transforms so the meshes keep
    // their proportions while following the particles
    for (const sg of this.ragdollSegs) {
      sg.restLen = Math.max(0.02, sg.a.p.distanceTo(sg.b.p));
      sg.holder.updateMatrixWorld();
      sg.q0 = new THREE.Quaternion();
      _m.lookAt(sg.a.p, sg.b.p, UP);
      sg.q0.setFromRotationMatrix(_m);
      sg.qInv = sg.q0.clone().invert();
      sg.p0 = sg.a.p.clone();
      // store child transforms relative to the initial segment frame
      sg.children = sg.holder.children.map(c => ({
        obj: c,
        pos: c.position.clone(),
        quat: c.quaternion.clone(),
        scale: c.scale.clone()
      }));
      // convert to segment-local space
      const inv = new THREE.Matrix4().compose(sg.p0, sg.q0, new THREE.Vector3(1, 1, 1)).invert();
      for (const c of sg.children) {
        const wm = new THREE.Matrix4().compose(c.pos, c.quat, c.scale);
        const lm = inv.clone().multiply(wm);
        c.lp = new THREE.Vector3(); c.lq = new THREE.Quaternion(); c.ls = new THREE.Vector3();
        lm.decompose(c.lp, c.lq, c.ls);
      }
      sg.holder.position.set(0, 0, 0);
      sg.holder.quaternion.identity();
      sg.holder.scale.set(1, 1, 1);
    }

    this.root.visible = false;
    this.ragdoll = body;
    this.ragdollT = 0;

    // blood pool grows under the corpse
    this.poolSpawned = false;
    this.poolTimer = 0.35;
  }

  updateRagdoll(dt) {
    if (!this.ragdoll) return;
    this.ragdollT += dt;
    const steps = Math.min(3, Math.ceil(dt / 0.0125));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) this.ragdoll.step(h, 6);

    const _a = new THREE.Vector3(), _b = new THREE.Vector3();
    for (const sg of this.ragdollSegs) {
      _a.copy(sg.a.p); _b.copy(sg.b.p);
      _m.lookAt(_a, _b, UP);
      _q.setFromRotationMatrix(_m);
      // apply the segment frame to each child using the stored local transform
      const segMat = new THREE.Matrix4().compose(_a, _q, new THREE.Vector3(1, 1, 1));
      for (const c of sg.children) {
        const lm = new THREE.Matrix4().compose(c.lp, c.lq, c.ls);
        const wm = segMat.clone().multiply(lm);
        wm.decompose(c.obj.position, c.obj.quaternion, c.obj.scale);
      }
    }

    // pooling blood after the body settles
    this.poolTimer -= dt;
    if (!this.poolSpawned && (this.poolTimer <= 0 || this.ragdoll.sleeping)) {
      this.poolSpawned = true;
      const c = this.ragdoll.center();
      const gy = this.game.physics.groundAt(c.x, c.y + 0.5, c.z, 3.0, 0.3);
      const y = gy > -1e8 ? gy : 0;
      this.game.fx.bloodPool(new THREE.Vector3(c.x, y, c.z), 1.4 + Math.random() * 1.1, this.def.scale);
      // a couple of extra splats around the body
      for (let i = 0; i < 3; i++) {
        const a = Math.random() * Math.PI * 2, r = Math.random() * 1.4 * this.def.scale;
        this.game.fx.bloodPool(
          new THREE.Vector3(c.x + Math.cos(a) * r, y, c.z + Math.sin(a) * r),
          0.5 + Math.random() * 0.8, this.def.scale
        );
      }
    }

    // slowly sink & fade corpses to keep the scene manageable
    if (this.ragdollT > 26) {
      const k = Math.min(1, (this.ragdollT - 26) / 4);
      for (const sg of this.ragdollSegs) {
        for (const c of sg.children) {
          c.obj.traverse?.(o => {
            if (o.isMesh && o.material) {
              if (!o.material.transparent) { o.material = o.material.clone(); o.material.transparent = true; }
              o.material.opacity = 1 - k;
            }
          });
        }
      }
      if (k >= 1) this.markForRemoval = true;
    }
  }

  disposeRagdoll() {
    if (!this.ragdollSegs) return;
    for (const sg of this.ragdollSegs) {
      sg.holder.traverse(o => { if (o.isMesh) o.geometry?.dispose?.(); });
      this.game.scene.remove(sg.holder);
    }
    this.ragdollSegs = null;
  }
}

function lerpAngle(a, b, t) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

export { ZONES };
