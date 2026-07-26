/**
 * Lightweight physics used by Dead Sector.
 *
 * Two systems:
 *   1. A swept capsule-vs-AABB/OBB character solver for the player and zombies
 *      (with step-up, slide along walls, gravity, and ground snapping).
 *   2. A Verlet particle + distance/angular constraint solver that drives the
 *      ragdolls, gore chunks and debris. Verlet integration is used because it
 *      is unconditionally stable at large timesteps and gives believable,
 *      floppy-but-not-exploding corpses.
 */
import * as THREE from 'three';

export const GRAVITY = -22.0;

/* =============================================================== COLLIDERS = */
export class BoxCollider {
  /** @param {THREE.Vector3} center @param {THREE.Vector3} halfExtents @param {number} yaw */
  constructor(center, halfExtents, yaw = 0, tag = 'wall') {
    this.c = center.clone();
    this.h = halfExtents.clone();
    this.yaw = yaw;
    this.tag = tag;
    this.cos = Math.cos(-yaw);
    this.sin = Math.sin(-yaw);
    const rx = Math.abs(this.h.x * Math.cos(yaw)) + Math.abs(this.h.z * Math.sin(yaw));
    const rz = Math.abs(this.h.x * Math.sin(yaw)) + Math.abs(this.h.z * Math.cos(yaw));
    this.aabbMin = new THREE.Vector3(this.c.x - rx, this.c.y - this.h.y, this.c.z - rz);
    this.aabbMax = new THREE.Vector3(this.c.x + rx, this.c.y + this.h.y, this.c.z + rz);
  }
  toLocal(p, out) {
    const dx = p.x - this.c.x, dz = p.z - this.c.z;
    out.set(dx * this.cos - dz * this.sin, p.y - this.c.y, dx * this.sin + dz * this.cos);
    return out;
  }
  toWorldDir(v, out) {
    const c = Math.cos(this.yaw), s = Math.sin(this.yaw);
    out.set(v.x * c - v.z * s, v.y, v.x * s + v.z * c);
    return out;
  }
  /** closest point on the box to a world point */
  closest(p, out) {
    const l = this.toLocal(p, _v1);
    _v2.set(
      Math.max(-this.h.x, Math.min(this.h.x, l.x)),
      Math.max(-this.h.y, Math.min(this.h.y, l.y)),
      Math.max(-this.h.z, Math.min(this.h.z, l.z))
    );
    const c = Math.cos(this.yaw), s = Math.sin(this.yaw);
    out.set(
      this.c.x + _v2.x * c - _v2.z * s,
      this.c.y + _v2.y,
      this.c.z + _v2.x * s + _v2.z * c
    );
    return out;
  }
}

const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const _v4 = new THREE.Vector3(), _v5 = new THREE.Vector3();

/* ================================================================== WORLD == */
export class PhysicsWorld {
  constructor() {
    this.colliders = [];
    this.grid = new Map();
    this.cell = 8;
  }

  add(collider) {
    this.colliders.push(collider);
    const c = this.cell;
    const x0 = Math.floor(collider.aabbMin.x / c), x1 = Math.floor(collider.aabbMax.x / c);
    const z0 = Math.floor(collider.aabbMin.z / c), z1 = Math.floor(collider.aabbMax.z / c);
    for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) {
      const k = x + ',' + z;
      let a = this.grid.get(k);
      if (!a) { a = []; this.grid.set(k, a); }
      a.push(collider);
    }
    return collider;
  }

  addBox(cx, cy, cz, hx, hy, hz, yaw = 0, tag = 'wall') {
    return this.add(new BoxCollider(new THREE.Vector3(cx, cy, cz), new THREE.Vector3(hx, hy, hz), yaw, tag));
  }

  /** colliders whose cells overlap the query AABB */
  query(min, max, out) {
    out.length = 0;
    const c = this.cell;
    const x0 = Math.floor(min.x / c), x1 = Math.floor(max.x / c);
    const z0 = Math.floor(min.z / c), z1 = Math.floor(max.z / c);
    const seen = _querySeen; seen.clear();
    for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) {
      const a = this.grid.get(x + ',' + z);
      if (!a) continue;
      for (const col of a) {
        if (seen.has(col)) continue;
        seen.add(col);
        if (col.aabbMax.x < min.x || col.aabbMin.x > max.x) continue;
        if (col.aabbMax.y < min.y || col.aabbMin.y > max.y) continue;
        if (col.aabbMax.z < min.z || col.aabbMin.z > max.z) continue;
        out.push(col);
      }
    }
    return out;
  }

  /* ---------------------------------------------------- capsule resolution -- */
  /**
   * Resolve a vertical capsule (from feet + r to feet + height - r) against all
   * colliders using iterative depenetration; returns collision info.
   */
  resolveCapsule(pos, radius, height, iterations = 4) {
    const info = { grounded: false, groundY: -1e9, normal: new THREE.Vector3(0, 1, 0), hit: false, ceiling: false };
    const min = _v4.set(pos.x - radius - 0.1, pos.y - 0.1, pos.z - radius - 0.1);
    const max = _v5.set(pos.x + radius + 0.1, pos.y + height + 0.1, pos.z + radius + 0.1);
    const cands = this.query(min, max, _candBuf);
    if (!cands.length) return info;

    const segA = _segA.set(pos.x, pos.y + radius, pos.z);
    const segB = _segB.set(pos.x, pos.y + height - radius, pos.z);

    for (let it = 0; it < iterations; it++) {
      let moved = false;
      for (const col of cands) {
        // find the deepest overlap between the capsule segment and the box
        // approximate: test a few points along the segment
        const N = 4;
        for (let i = 0; i <= N; i++) {
          const t = i / N;
          _v3.lerpVectors(segA, segB, t);
          const cp = col.closest(_v3, _v1);
          const d = _v2.subVectors(_v3, cp);
          let len = d.length();
          if (len >= radius) continue;
          if (len < 1e-6) {
            // deep inside: push out along the smallest local axis
            const l = col.toLocal(_v3, _v1);
            const px = col.h.x - Math.abs(l.x), py = col.h.y - Math.abs(l.y), pz = col.h.z - Math.abs(l.z);
            if (px < py && px < pz) _v2.set(Math.sign(l.x) || 1, 0, 0);
            else if (py < pz) _v2.set(0, Math.sign(l.y) || 1, 0);
            else _v2.set(0, 0, Math.sign(l.z) || 1);
            col.toWorldDir(_v2.clone(), _v2);
            len = 0.0001;
          }
          d.copy(_v2).multiplyScalar(1 / Math.max(len, 1e-6));
          const push = radius - len;
          info.hit = true;

          if (d.y > 0.5) {
            info.grounded = true;
            info.groundY = Math.max(info.groundY, col.aabbMax.y);
            info.normal.copy(d);
            pos.y += push;
          } else if (d.y < -0.6) {
            info.ceiling = true;
            pos.y -= push;
          } else {
            pos.x += d.x * push;
            pos.z += d.z * push;
          }
          segA.set(pos.x, pos.y + radius, pos.z);
          segB.set(pos.x, pos.y + height - radius, pos.z);
          moved = true;
        }
      }
      if (!moved) break;
    }
    return info;
  }

  /** Highest surface directly under a point within `reach`. Returns y or -Infinity */
  groundAt(x, y, z, reach = 3.0, radius = 0.2) {
    const min = _v4.set(x - radius, y - reach, z - radius);
    const max = _v5.set(x + radius, y + 0.4, z + radius);
    const cands = this.query(min, max, _candBuf);
    let best = -Infinity;
    for (const c of cands) {
      if (c.tag === 'nowalk') continue;
      // point must be within the horizontal footprint
      const l = c.toLocal(_v1.set(x, y, z), _v2);
      if (Math.abs(l.x) > c.h.x + radius || Math.abs(l.z) > c.h.z + radius) continue;
      const top = c.aabbMax.y;
      if (top <= y + 0.4 && top > best) best = top;
    }
    return best;
  }

  /* ------------------------------------------------------------- raycast ---- */
  /**
   * Ray vs all colliders (slab test in each box's local space).
   * @returns {{t:number, point:THREE.Vector3, normal:THREE.Vector3, collider:BoxCollider}|null}
   */
  raycast(origin, dir, maxDist = 200) {
    const min = _v4.set(
      Math.min(origin.x, origin.x + dir.x * maxDist) - 0.5,
      Math.min(origin.y, origin.y + dir.y * maxDist) - 0.5,
      Math.min(origin.z, origin.z + dir.z * maxDist) - 0.5);
    const max = _v5.set(
      Math.max(origin.x, origin.x + dir.x * maxDist) + 0.5,
      Math.max(origin.y, origin.y + dir.y * maxDist) + 0.5,
      Math.max(origin.z, origin.z + dir.z * maxDist) + 0.5);
    const cands = this.query(min, max, _rayBuf);
    let bestT = maxDist, best = null, bestN = null;

    for (const c of cands) {
      // transform ray into box local
      const cos = c.cos, sin = c.sin;
      const ox = origin.x - c.c.x, oz = origin.z - c.c.z;
      const lox = ox * cos - oz * sin, loz = ox * sin + oz * cos;
      const loy = origin.y - c.c.y;
      const ldx = dir.x * cos - dir.z * sin, ldz = dir.x * sin + dir.z * cos;
      const ldy = dir.y;

      let t0 = 0, t1 = bestT, axis = -1, sgn = 1;
      const o = [lox, loy, loz], d = [ldx, ldy, ldz], h = [c.h.x, c.h.y, c.h.z];
      let ok = true;
      for (let a = 0; a < 3; a++) {
        if (Math.abs(d[a]) < 1e-8) {
          if (Math.abs(o[a]) > h[a]) { ok = false; break; }
          continue;
        }
        const inv = 1 / d[a];
        let ta = (-h[a] - o[a]) * inv;
        let tb = (h[a] - o[a]) * inv;
        let s = -1;
        if (ta > tb) { const tmp = ta; ta = tb; tb = tmp; s = 1; }
        if (ta > t0) { t0 = ta; axis = a; sgn = s; }
        if (tb < t1) t1 = tb;
        if (t0 > t1) { ok = false; break; }
      }
      if (!ok || t0 < 0 || t0 >= bestT || axis < 0) continue;
      bestT = t0; best = c;
      const ln = [0, 0, 0]; ln[axis] = sgn;
      bestN = _v1.set(ln[0], ln[1], ln[2]).clone();
      c.toWorldDir(bestN, bestN);
    }
    if (!best) return null;
    return {
      t: bestT,
      point: origin.clone().addScaledVector(dir, bestT),
      normal: bestN.normalize(),
      collider: best
    };
  }

  /** simple line-of-sight test */
  visible(a, b) {
    const d = _v1.subVectors(b, a);
    const len = d.length();
    if (len < 0.01) return true;
    d.multiplyScalar(1 / len);
    const hit = this.raycast(a, d, len - 0.15);
    return !hit;
  }
}

const _candBuf = [], _rayBuf = [], _querySeen = new Set();
const _segA = new THREE.Vector3(), _segB = new THREE.Vector3();

/* ============================================================ VERLET SOLVER */
export class VParticle {
  constructor(x, y, z, radius = 0.09, mass = 1) {
    this.p = new THREE.Vector3(x, y, z);
    this.prev = this.p.clone();
    this.acc = new THREE.Vector3();
    this.r = radius;
    this.invMass = mass > 0 ? 1 / mass : 0;
    this.pinned = false;
    this.grounded = false;
  }
  addForce(v) { this.acc.addScaledVector(v, this.invMass); }
  addImpulse(v) { this.prev.addScaledVector(v, -1); }
  get vel() { return this.p.clone().sub(this.prev); }
}

export class DistanceConstraint {
  constructor(a, b, len = null, stiff = 1.0) {
    this.a = a; this.b = b;
    this.len = len ?? a.p.distanceTo(b.p);
    this.stiff = stiff;
  }
  solve() {
    const a = this.a, b = this.b;
    const d = _v1.subVectors(b.p, a.p);
    const dist = d.length();
    if (dist < 1e-8) return;
    const diff = (dist - this.len) / dist;
    const wsum = a.invMass + b.invMass;
    if (wsum <= 0) return;
    const k = this.stiff * diff / wsum;
    a.p.addScaledVector(d, k * a.invMass);
    b.p.addScaledVector(d, -k * b.invMass);
  }
}

/** Keeps two particles within a min/max distance — joint limits. */
export class RangeConstraint {
  constructor(a, b, min, max, stiff = 0.8) {
    this.a = a; this.b = b; this.min = min; this.max = max; this.stiff = stiff;
  }
  solve() {
    const a = this.a, b = this.b;
    const d = _v1.subVectors(b.p, a.p);
    const dist = d.length();
    if (dist < 1e-8) return;
    let target = null;
    if (dist < this.min) target = this.min;
    else if (dist > this.max) target = this.max;
    if (target === null) return;
    const diff = (dist - target) / dist;
    const wsum = a.invMass + b.invMass;
    if (wsum <= 0) return;
    const k = this.stiff * diff / wsum;
    a.p.addScaledVector(d, k * a.invMass);
    b.p.addScaledVector(d, -k * b.invMass);
  }
}

/**
 * Verlet body: a set of particles + constraints, integrated together with
 * collision against the physics world. Used for ragdolls and debris.
 */
export class VerletBody {
  constructor(world) {
    this.world = world;
    this.parts = [];
    this.cons = [];
    this.damping = 0.986;
    this.friction = 0.72;
    this.restitution = 0.24;
    this.sleeping = false;
    this.energy = 1;
  }
  particle(x, y, z, r, m) { const p = new VParticle(x, y, z, r, m); this.parts.push(p); return p; }
  link(a, b, len, stiff) { const c = new DistanceConstraint(a, b, len, stiff); this.cons.push(c); return c; }
  range(a, b, min, max, stiff) { const c = new RangeConstraint(a, b, min, max, stiff); this.cons.push(c); return c; }

  step(dt, iterations = 6) {
    if (this.sleeping) return;
    const g = _v3.set(0, GRAVITY, 0);
    let maxV = 0;
    for (const p of this.parts) {
      if (p.pinned) { p.prev.copy(p.p); p.acc.set(0, 0, 0); continue; }
      p.acc.add(g);
      const vx = (p.p.x - p.prev.x) * this.damping;
      const vy = (p.p.y - p.prev.y) * this.damping;
      const vz = (p.p.z - p.prev.z) * this.damping;
      p.prev.copy(p.p);
      p.p.x += vx + p.acc.x * dt * dt;
      p.p.y += vy + p.acc.y * dt * dt;
      p.p.z += vz + p.acc.z * dt * dt;
      p.acc.set(0, 0, 0);
      maxV = Math.max(maxV, Math.abs(vx) + Math.abs(vy) + Math.abs(vz));
    }
    for (let it = 0; it < iterations; it++) {
      for (const c of this.cons) c.solve();
      // limited self collision so limbs do not fully interpenetrate the torso
      if (it === iterations - 1) this.selfCollide();
      this.collideWorld();
    }
    this.energy = this.energy * 0.9 + maxV * 0.1;
    if (this.energy < 0.0012) this.sleeping = true;
  }

  selfCollide() {
    const n = this.parts.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 2; j < n; j++) {
        const a = this.parts[i], b = this.parts[j];
        const d = _v1.subVectors(b.p, a.p);
        const dist = d.length();
        const minD = (a.r + b.r) * 0.82;
        if (dist > minD || dist < 1e-6) continue;
        const push = (minD - dist) / dist * 0.5;
        a.p.addScaledVector(d, -push * 0.5);
        b.p.addScaledVector(d, push * 0.5);
      }
    }
  }

  collideWorld() {
    const w = this.world;
    if (!w) return;
    for (const p of this.parts) {
      if (p.pinned) continue;
      const min = _v4.set(p.p.x - p.r, p.p.y - p.r, p.p.z - p.r);
      const max = _v5.set(p.p.x + p.r, p.p.y + p.r, p.p.z + p.r);
      const cands = w.query(min, max, _candBuf);
      p.grounded = false;
      for (const c of cands) {
        const cp = c.closest(p.p, _v1);
        const d = _v2.subVectors(p.p, cp);
        let len = d.length();
        if (len >= p.r) continue;
        let nx, ny, nz;
        if (len < 1e-6) {
          const l = c.toLocal(p.p, _v1);
          const px = c.h.x - Math.abs(l.x), py = c.h.y - Math.abs(l.y), pz = c.h.z - Math.abs(l.z);
          if (py <= px && py <= pz) { nx = 0; ny = Math.sign(l.y) || 1; nz = 0; }
          else if (px < pz) { nx = Math.sign(l.x) || 1; ny = 0; nz = 0; }
          else { nx = 0; ny = 0; nz = Math.sign(l.z) || 1; }
          _v2.set(nx, ny, nz); c.toWorldDir(_v2.clone(), _v2);
          nx = _v2.x; ny = _v2.y; nz = _v2.z;
          len = 0.0001;
        } else {
          nx = d.x / len; ny = d.y / len; nz = d.z / len;
        }
        const push = p.r - len;
        p.p.x += nx * push; p.p.y += ny * push; p.p.z += nz * push;
        // tangential friction + normal restitution against the stored prev pos
        const vx = p.p.x - p.prev.x, vy = p.p.y - p.prev.y, vz = p.p.z - p.prev.z;
        const vn = vx * nx + vy * ny + vz * nz;
        const tx = vx - vn * nx, ty = vy - vn * ny, tz = vz - vn * nz;
        const f = this.friction;
        const nvx = tx * f - vn * nx * this.restitution;
        const nvy = ty * f - vn * ny * this.restitution;
        const nvz = tz * f - vn * nz * this.restitution;
        p.prev.set(p.p.x - nvx, p.p.y - nvy, p.p.z - nvz);
        if (ny > 0.5) p.grounded = true;
      }
    }
  }

  wake() { this.sleeping = false; this.energy = 1; }

  center(out = new THREE.Vector3()) {
    out.set(0, 0, 0);
    for (const p of this.parts) out.add(p.p);
    return out.multiplyScalar(1 / this.parts.length);
  }
}
