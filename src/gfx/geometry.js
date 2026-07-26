/**
 * Procedural geometry toolkit.
 *
 * Every model in Dead Sector is generated here — there is no primitive cube or
 * plane anywhere in the visible scene. The helpers below produce beveled,
 * chamfered, lathed, extruded, greebled and noise-displaced meshes with proper
 * smoothing groups and box-projected UVs.
 */
import * as THREE from 'three';
import * as BGU from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Rng, fbm3, noise3, clamp } from './noise.js';

export const V3 = (x, y, z) => new THREE.Vector3(x, y, z);

/* ------------------------------------------------------------------ merge -- */
export function merge(geos, useGroups = false) {
  const list = geos.filter(Boolean);
  if (list.length === 1 && !useGroups) return list[0];
  const g = BGU.mergeGeometries(list, useGroups);
  if (!g) throw new Error('merge failed');
  return g;
}

export function xform(geo, { pos, rot, scale, quat } = {}) {
  const m = new THREE.Matrix4();
  const q = quat || new THREE.Quaternion();
  if (rot && !quat) q.setFromEuler(new THREE.Euler(rot[0] || 0, rot[1] || 0, rot[2] || 0));
  m.compose(
    pos ? new THREE.Vector3(...pos) : new THREE.Vector3(),
    q,
    scale ? (Array.isArray(scale) ? new THREE.Vector3(...scale) : new THREE.Vector3(scale, scale, scale)) : new THREE.Vector3(1, 1, 1)
  );
  geo.applyMatrix4(m);
  return geo;
}

/* -------------------------------------------------------------- rounded box */
/** True chamfered/rounded box built from a subdivided sphere-projection —
 *  produces smooth beveled edges with correct normals. */
export function roundedBox(w, h, d, r = 0.05, seg = 3) {
  r = Math.min(r, w / 2 - 1e-4, h / 2 - 1e-4, d / 2 - 1e-4);
  const g = new THREE.BoxGeometry(1, 1, 1, seg + 1, seg + 1, seg + 1);
  const pos = g.attributes.position;
  const nrm = g.attributes.normal;
  const half = new THREE.Vector3(w / 2 - r, h / 2 - r, d / 2 - r);
  const v = new THREE.Vector3(), inner = new THREE.Vector3(), n = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    v.multiply(new THREE.Vector3(w, h, d));
    inner.set(
      clamp(v.x, -half.x, half.x),
      clamp(v.y, -half.y, half.y),
      clamp(v.z, -half.z, half.z)
    );
    n.copy(v).sub(inner);
    const len = n.length();
    if (len > 1e-6) n.multiplyScalar(1 / len); else n.set(0, 1, 0);
    v.copy(inner).addScaledVector(n, r);
    pos.setXYZ(i, v.x, v.y, v.z);
    nrm.setXYZ(i, n.x, n.y, n.z);
  }
  pos.needsUpdate = true; nrm.needsUpdate = true;
  g.computeBoundingBox();
  return g;
}

/* ---------------------------------------------------------- chamfer cylinder */
export function chamferCyl(rTop, rBot, h, seg = 24, chamfer = 0.02, capTop = true, capBot = true) {
  const pts = [];
  if (capBot) pts.push(new THREE.Vector2(0, -h / 2));
  pts.push(new THREE.Vector2(Math.max(rBot - chamfer, 0.001), -h / 2));
  pts.push(new THREE.Vector2(rBot, -h / 2 + chamfer));
  pts.push(new THREE.Vector2(rTop, h / 2 - chamfer));
  pts.push(new THREE.Vector2(Math.max(rTop - chamfer, 0.001), h / 2));
  if (capTop) pts.push(new THREE.Vector2(0, h / 2));
  return new THREE.LatheGeometry(pts, seg);
}

/** Lathe from a [x,y] profile list. */
export function lathe(profile, seg = 24, phiStart = 0, phiLen = Math.PI * 2) {
  return new THREE.LatheGeometry(profile.map(p => new THREE.Vector2(p[0], p[1])), seg, phiStart, phiLen);
}

/* ------------------------------------------------------------------- tube --- */
export function tubeAlong(points, radius, tubularSeg = 40, radialSeg = 10, closed = false) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => Array.isArray(p) ? V3(...p) : p), closed, 'catmullrom', 0.5);
  return new THREE.TubeGeometry(curve, tubularSeg, radius, radialSeg, closed);
}

/* ---------------------------------------------------------------- extrude --- */
export function extrude(shapePoints, depth, { bevel = 0.02, bevelSeg = 2, steps = 1, holes = [] } = {}) {
  const shape = new THREE.Shape(shapePoints.map(p => new THREE.Vector2(p[0], p[1])));
  for (const h of holes) shape.holes.push(new THREE.Path(h.map(p => new THREE.Vector2(p[0], p[1]))));
  const g = new THREE.ExtrudeGeometry(shape, {
    depth, steps,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel, bevelSize: bevel, bevelOffset: 0, bevelSegments: bevelSeg,
    curveSegments: 12
  });
  g.center();
  return g;
}

/* ------------------------------------------------------------------ torus --- */
export function ringGeo(r, t, seg = 32, tseg = 10, arc = Math.PI * 2) {
  return new THREE.TorusGeometry(r, t, tseg, seg, arc);
}

/* ------------------------------------------------------------- displacement */
/**
 * Push vertices along their normals by a noise field. Used to give walls,
 * terrain, rock and organic shapes real silhouette variation.
 */
export function displace(geo, { amp = 0.05, freq = 1.0, oct = 4, seed = 0, mask = null, along = null } = {}) {
  const pos = geo.attributes.position;
  if (!geo.attributes.normal) geo.computeVertexNormals();
  const nrm = geo.attributes.normal;
  const v = new THREE.Vector3(), n = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    n.fromBufferAttribute(nrm, i);
    let d = fbm3(v.x * freq + seed, v.y * freq + seed * 1.7, v.z * freq + seed * 3.1, oct);
    if (mask) d *= mask(v, i);
    if (along) n.copy(along);
    v.addScaledVector(n, d * amp);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

/* ------------------------------------------------------------------- UVs ---- */
/**
 * Box (triplanar) UV projection at a fixed world scale so tiling textures keep a
 * constant real-world size across every mesh regardless of dimensions.
 */
export function boxUV(geo, scale = 1, offset = [0, 0]) {
  geo.computeVertexNormals();
  const pos = geo.attributes.position, nrm = geo.attributes.normal;
  const uv = new Float32Array(pos.count * 2);
  const v = new THREE.Vector3(), n = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    n.fromBufferAttribute(nrm, i);
    const ax = Math.abs(n.x), ay = Math.abs(n.y), az = Math.abs(n.z);
    let u, t;
    if (ay >= ax && ay >= az) { u = v.x; t = v.z; }
    else if (ax >= az) { u = v.z; t = v.y; }
    else { u = v.x; t = v.y; }
    uv[i * 2] = u / scale + offset[0];
    uv[i * 2 + 1] = t / scale + offset[1];
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

/** Cylindrical UV mapping around Y (for pipes, poles, barrels). */
export function cylUV(geo, scale = 1) {
  const pos = geo.attributes.position;
  const uv = new Float32Array(pos.count * 2);
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const a = Math.atan2(v.z, v.x);
    const r = Math.hypot(v.x, v.z);
    uv[i * 2] = (a / (Math.PI * 2)) * (Math.PI * 2 * Math.max(r, 0.05)) / scale;
    uv[i * 2 + 1] = v.y / scale;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

export function scaleUV(geo, sx, sy) {
  const uv = geo.attributes.uv;
  if (!uv) return geo;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * sx, uv.getY(i) * sy);
  uv.needsUpdate = true;
  return geo;
}

/* ---------------------------------------------------------------- greeble --- */
/**
 * Scatter small beveled detail blocks over a rectangular face — used for
 * industrial panels, AC units, machinery and building facades so nothing reads
 * as a flat surface.
 */
export function greebleFace(w, h, { count = 24, seed = 1, minS = 0.05, maxS = 0.3, depth = 0.06 } = {}) {
  const rng = new Rng(seed);
  const parts = [];
  for (let i = 0; i < count; i++) {
    const sw = rng.range(minS, maxS) * w;
    const sh = rng.range(minS, maxS) * h;
    const dz = rng.range(depth * 0.3, depth);
    const g = roundedBox(sw, sh, dz, Math.min(sw, sh, dz) * 0.18, 1);
    xform(g, { pos: [rng.range(-w / 2 + sw / 2, w / 2 - sw / 2), rng.range(-h / 2 + sh / 2, h / 2 - sh / 2), dz / 2] });
    parts.push(g);
  }
  return merge(parts);
}

/** Ring of bolt/rivet heads. */
export function bolts(radius, count, r = 0.012, h = 0.01, axis = 'y') {
  const parts = [];
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const g = chamferCyl(r * 0.82, r, h, 8, h * 0.3);
    const p = axis === 'y' ? [Math.cos(a) * radius, 0, Math.sin(a) * radius]
      : [Math.cos(a) * radius, Math.sin(a) * radius, 0];
    xform(g, { pos: p, rot: axis === 'y' ? [0, 0, 0] : [Math.PI / 2, 0, 0] });
    parts.push(g);
  }
  return merge(parts);
}

/** Row of rivets along a line. */
export function rivetLine(from, to, count, r = 0.014) {
  const a = V3(...from), b = V3(...to);
  const parts = [];
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const p = a.clone().lerp(b, t);
    const g = new THREE.SphereGeometry(r, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.55);
    xform(g, { pos: [p.x, p.y, p.z] });
    parts.push(g);
  }
  return merge(parts);
}

/* --------------------------------------------------------------- capsules --- */
export function capsule(r, len, capSeg = 6, radialSeg = 12) {
  return new THREE.CapsuleGeometry(r, len, capSeg, radialSeg);
}

/**
 * Organic limb / body segment: a lathed spline profile with noise displacement,
 * used for zombie anatomy (thighs, arms, torso) so no limb is a plain capsule.
 */
export function organicLimb(profile, { seg = 16, amp = 0.012, freq = 6, seed = 3 } = {}) {
  const g = lathe(profile, seg);
  displace(g, { amp, freq, oct: 3, seed });
  return g;
}

/* ------------------------------------------------------------ metaball-ish -- */
/**
 * Blobby organic mesh by displacing a sphere with several gaussian bumps —
 * gives heads, muscle masses and gore chunks a believable irregular shape.
 */
export function blob(r, bumps, { seg = 24, seed = 1, noiseAmp = 0.04 } = {}) {
  const g = new THREE.SphereGeometry(r, seg, Math.max(8, seg >> 1));
  const pos = g.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const dir = v.clone().normalize();
    let add = 0;
    for (const b of bumps) {
      const bc = V3(b[0], b[1], b[2]);
      const w = Math.max(0, dir.dot(bc.clone().normalize()));
      add += b[3] * Math.pow(w, b[4] ?? 3);
    }
    const n = fbm3(dir.x * 3 + seed, dir.y * 3 + seed, dir.z * 3 + seed, 3) * noiseAmp;
    v.copy(dir).multiplyScalar(r + add + n);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  pos.needsUpdate = true;
  g.computeVertexNormals();
  return g;
}

/* ----------------------------------------------------------------- helpers -- */
export function weld(geo, tol = 1e-4) {
  const g = BGU.mergeVertices(geo, tol);
  g.computeVertexNormals();
  return g;
}

export function flatShade(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  g.computeVertexNormals();
  return g;
}

/** Terrain-style grid mesh with real elevation (never a flat plane). */
export function terrainGeo(size, segs, heightFn) {
  const g = new THREE.PlaneGeometry(size, size, segs, segs);
  g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    pos.setY(i, heightFn(x, z));
  }
  pos.needsUpdate = true;
  g.computeVertexNormals();
  return g;
}

/** Random irregular rock/rubble chunk. */
export function rock(r, seed = 1, detail = 1) {
  const g = new THREE.IcosahedronGeometry(r, detail);
  const pos = g.attributes.position;
  const rng = new Rng(seed * 977);
  const v = new THREE.Vector3();
  const jitter = [];
  for (let i = 0; i < 40; i++) jitter.push([rng.range(-1, 1), rng.range(-1, 1), rng.range(-1, 1)]);
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const d = v.clone().normalize();
    const n = noise3(d.x * 2.4 + seed, d.y * 2.4 + seed, d.z * 2.4 + seed);
    const n2 = noise3(d.x * 6 + seed, d.y * 6 + seed, d.z * 6 + seed);
    v.copy(d).multiplyScalar(r * (1 + n * 0.35 + n2 * 0.12));
    // flatten the bottom so rubble sits on the ground
    if (v.y < -r * 0.55) v.y = -r * 0.55;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  pos.needsUpdate = true;
  return flatShade(g);
}

export function disposeGeo(...gs) { for (const g of gs) g?.dispose?.(); }
