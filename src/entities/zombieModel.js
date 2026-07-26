/**
 * Procedural zombie anatomy.
 *
 * Builds a full humanoid out of lathed organic limb profiles, blobby muscle
 * masses, a sculpted skull with jaw/teeth/eye sockets, exposed rib cage,
 * torn clothing and dangling entrails. Every part is a separate Object3D in a
 * proper joint hierarchy so the same rig drives both keyframe animation and the
 * ragdoll (each bone maps to a Verlet particle pair).
 *
 * Joint hierarchy:
 *   root -> hips -> spine -> chest -> neck -> head
 *                              |-> shoulderL/R -> upperArmL/R -> foreArmL/R -> handL/R
 *           hips -> thighL/R -> shinL/R -> footL/R
 */
import * as THREE from 'three';
import {
  lathe, roundedBox, chamferCyl, merge, xform, boxUV, cylUV, blob, ringGeo,
  tubeAlong, displace, organicLimb, rock, flatShade
} from '../gfx/geometry.js';
import { Rng } from '../gfx/noise.js';

const M = (geo, mat, cast = true) => {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast; m.receiveShadow = true;
  return m;
};

/* ------------------------------------------------------------------ skull -- */
function buildSkull(mats, rng, variant) {
  const grp = new THREE.Group();
  const skin = mats.m[variant.skin] || mats.m.skin;
  const bone = mats.m.bone;

  // cranium: sphere with brow ridge, occipital bulge, temporal flattening
  const cran = blob(0.098, [
    [0, 0.3, 1, 0.014, 2],     // brow forward
    [0, -0.2, -1, 0.016, 2],   // occipital back
    [0, 1, 0, 0.010, 3]        // crown
  ], { seg: 26, seed: rng.int(1, 999), noiseAmp: 0.004 });
  cran.scale(0.86, 1.02, 0.98);
  const cranMesh = M(boxUV(cran, 0.12), skin);
  grp.add(cranMesh);

  // face plate: cheekbones, nose bridge, sunken sockets
  const face = blob(0.072, [
    [0, -0.3, 1, 0.020, 2],
    [0.7, -0.1, 0.7, 0.012, 3],
    [-0.7, -0.1, 0.7, 0.012, 3]
  ], { seg: 22, seed: rng.int(1, 999), noiseAmp: 0.003 });
  face.scale(0.92, 0.84, 0.80);
  xform(face, { pos: [0, -0.026, 0.040] });
  grp.add(M(boxUV(face, 0.10), skin));

  // nose
  const nose = blob(0.020, [[0, -0.5, 1, 0.014, 2]], { seg: 14, seed: 3, noiseAmp: 0.001 });
  nose.scale(0.7, 1.2, 1.3);
  xform(nose, { pos: [0, -0.020, 0.088] });
  grp.add(M(boxUV(nose, 0.05), skin));

  // eye sockets: dark recessed spheres + glowing iris
  for (const s of [-1, 1]) {
    const socket = new THREE.Mesh(
      new THREE.SphereGeometry(0.019, 14, 10),
      new THREE.MeshStandardMaterial({ color: 0x0a0806, roughness: 0.35, metalness: 0 })
    );
    socket.position.set(s * 0.032, 0.004, 0.070);
    grp.add(socket);
    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.0095, 12, 8),
      new THREE.MeshStandardMaterial({
        color: 0x2a1a06,
        emissive: new THREE.Color(variant.eyeColor),
        emissiveIntensity: variant.eyeGlow,
        roughness: 0.15, metalness: 0
      })
    );
    iris.position.set(s * 0.032, 0.004, 0.083);
    iris.name = 'eye';
    grp.add(iris);
  }

  // jaw: hinged group so it can hang open when biting / dead
  const jaw = new THREE.Group();
  jaw.name = 'jaw';
  jaw.position.set(0, -0.048, 0.010);
  const jawGeo = blob(0.058, [
    [0, -0.6, 0.6, 0.018, 2], [0, -1, 0, 0.010, 3]
  ], { seg: 20, seed: rng.int(1, 999), noiseAmp: 0.003 });
  jawGeo.scale(0.86, 0.52, 0.92);
  xform(jawGeo, { pos: [0, -0.014, 0.034] });
  jaw.add(M(boxUV(jawGeo, 0.09), skin));

  // teeth: two rows of tapered cones
  const teethGeos = [];
  for (let i = 0; i < 11; i++) {
    const a = (i / 10 - 0.5) * Math.PI * 0.92;
    const r = 0.046;
    const len = 0.011 + (Math.abs(i - 5) < 2 ? 0.006 : 0) + rng.range(-0.001, 0.002);
    const t = lathe([[0, 0], [0.0044, 0.001], [0.0032, len * 0.6], [0, len]], 7);
    xform(t, {
      pos: [Math.sin(a) * r, 0.004, Math.cos(a) * r + 0.010],
      rot: [Math.PI + rng.range(-0.2, 0.2), a, rng.range(-0.15, 0.15)]
    });
    teethGeos.push(t);
  }
  jaw.add(M(boxUV(merge(teethGeos), 0.04), mats.m.bone));
  grp.add(jaw);

  // upper teeth (fixed to skull)
  const upTeeth = [];
  for (let i = 0; i < 11; i++) {
    const a = (i / 10 - 0.5) * Math.PI * 0.92;
    const r = 0.045;
    const len = 0.010 + (Math.abs(i - 5) < 2 ? 0.005 : 0);
    const t = lathe([[0, 0], [0.0042, 0.001], [0.0030, len * 0.6], [0, len]], 7);
    xform(t, { pos: [Math.sin(a) * r, -0.044, Math.cos(a) * r + 0.018], rot: [0, a, 0] });
    upTeeth.push(t);
  }
  grp.add(M(boxUV(merge(upTeeth), 0.04), bone));

  // exposed skull patch: a bone cap where the scalp is torn away
  if (variant.exposedSkull) {
    const cap = new THREE.SphereGeometry(0.100, 20, 12, rng.range(0, 6), 1.5, 0, 0.9);
    grp.add(M(boxUV(cap, 0.10), bone));
  }

  // stringy hair clumps
  if (variant.hair) {
    const hairGeos = [];
    for (let i = 0; i < 26; i++) {
      const a = rng.range(0, Math.PI * 2);
      const el = rng.range(0.15, 0.95);
      const r = 0.096;
      const p0 = [Math.cos(a) * r * Math.sin(Math.acos(el)), el * r, Math.sin(a) * r * Math.sin(Math.acos(el))];
      const droop = rng.range(0.05, 0.16);
      const h = tubeAlong([
        p0,
        [p0[0] * 1.15, p0[1] - droop * 0.4, p0[2] * 1.15],
        [p0[0] * 1.25 + rng.range(-0.02, 0.02), p0[1] - droop, p0[2] * 1.25 + rng.range(-0.02, 0.02)]
      ], rng.range(0.0018, 0.0034), 8, 5);
      hairGeos.push(h);
    }
    const hm = new THREE.MeshStandardMaterial({
      color: variant.hairColor, roughness: 0.92, metalness: 0
    });
    grp.add(M(merge(hairGeos), hm));
  }

  grp.name = 'skull';
  return grp;
}

/* ------------------------------------------------------------------ torso -- */
function buildTorso(mats, rng, variant) {
  const grp = new THREE.Group();
  const skin = mats.m[variant.skin] || mats.m.skin;
  const cloth = mats.m[variant.cloth] || mats.m.rags;
  const bone = mats.m.bone;
  const gore = mats.m.gore;

  // rib cage volume — asymmetric, emaciated
  const chest = blob(0.150, [
    [0, 0.6, 0.5, 0.030, 2],
    [0, 0.2, -0.8, 0.022, 2],
    [1, 0.3, 0, 0.018, 3],
    [-1, 0.3, 0, 0.016, 3]
  ], { seg: 26, seed: rng.int(1, 999), noiseAmp: 0.006 });
  chest.scale(1.0, 0.90, 0.66);
  grp.add(M(boxUV(chest, 0.16), skin));

  // pectoral / shoulder muscle masses
  for (const s of [-1, 1]) {
    const pec = blob(0.058, [[0, 0.2, 1, 0.012, 2]], { seg: 16, seed: rng.int(1, 999), noiseAmp: 0.002 });
    pec.scale(1.1, 0.75, 0.65);
    xform(pec, { pos: [s * 0.062, 0.048, 0.052] });
    grp.add(M(boxUV(pec, 0.09), skin));
  }

  // visible rib arcs (torn open chest)
  if (variant.exposedRibs) {
    const ribs = [];
    for (let i = 0; i < 6; i++) {
      const y = 0.070 - i * 0.030;
      const w = 0.115 - Math.abs(i - 2) * 0.008;
      for (const s of [-1, 1]) {
        const arc = tubeAlong([
          [s * 0.012, y + 0.012, -0.052],
          [s * w * 0.75, y + 0.004, 0.010],
          [s * w * 0.55, y - 0.010, 0.062],
          [s * 0.020, y - 0.014, 0.078]
        ], 0.0072, 16, 7);
        ribs.push(arc);
      }
    }
    // sternum
    ribs.push(xform(roundedBox(0.026, 0.130, 0.014, 0.005, 1), { pos: [0, 0.010, 0.074] }));
    grp.add(M(merge(ribs), bone));

    // wet cavity behind the ribs
    const cav = blob(0.088, [], { seg: 16, seed: rng.int(1, 999), noiseAmp: 0.010 });
    cav.scale(1.0, 1.05, 0.5);
    xform(cav, { pos: [0, 0.005, 0.020] });
    grp.add(M(boxUV(cav, 0.08), gore));
  }

  // abdomen
  const abd = blob(0.115, [[0, -0.4, 0.8, 0.016, 2]], { seg: 22, seed: rng.int(1, 999), noiseAmp: 0.005 });
  abd.scale(0.95, 0.80, 0.70);
  xform(abd, { pos: [0, -0.130, 0.006] });
  grp.add(M(boxUV(abd, 0.13), skin));

  // dangling entrails
  if (variant.entrails) {
    const guts = [];
    for (let i = 0; i < 4; i++) {
      const x = rng.range(-0.05, 0.05);
      const pts = [[x, -0.16, 0.055]];
      let cy = -0.16;
      for (let k = 0; k < 4; k++) {
        cy -= rng.range(0.045, 0.080);
        pts.push([x + rng.range(-0.045, 0.045), cy, 0.055 + rng.range(-0.03, 0.035)]);
      }
      guts.push(tubeAlong(pts, rng.range(0.012, 0.020), 22, 8));
    }
    const g = merge(guts);
    const gm = M(g, gore);
    gm.name = 'entrails';
    grp.add(gm);
  }

  // torn shirt/jacket — a shell around the torso with jagged hem
  const shellPts = [];
  const N = 16;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const y = 0.115 - t * 0.290;
    let r = 0.150 * (1 - Math.pow(Math.abs(t - 0.45) * 2, 2) * 0.22);
    if (t > 0.80) r *= 1 - (t - 0.80) * 2.2;   // jagged shredded hem
    r *= 1 + rng.range(-0.02, 0.02);
    shellPts.push([Math.max(r * 1.03, 0.01), y]);
  }
  const shell = lathe(shellPts, 22);
  // slice open the front to expose the chest
  const pos = shell.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const a = Math.atan2(v.x, v.z);
    if (Math.abs(a) < 0.55 && v.y > -0.10) {
      // pull the flap open
      v.z *= 0.55; v.x *= 1.30;
    }
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  pos.needsUpdate = true;
  shell.computeVertexNormals();
  displace(shell, { amp: 0.014, freq: 8, oct: 3, seed: rng.int(1, 99) });
  const shirt = M(boxUV(shell, 0.14), cloth);
  shirt.material.side = THREE.DoubleSide;
  grp.add(shirt);

  // collar
  const collar = lathe([[0.062, 0], [0.078, 0.012], [0.076, 0.030], [0.060, 0.032]], 18);
  xform(collar, { pos: [0, 0.112, 0.004] });
  grp.add(M(boxUV(collar, 0.06), cloth));

  // shoulder straps / harness on some variants
  if (variant.harness) {
    for (const s of [-1, 1]) {
      const strap = tubeAlong([
        [s * 0.070, 0.100, 0.010], [s * 0.040, 0.020, 0.070], [s * -0.010, -0.090, 0.055]
      ], 0.014, 18, 7);
      grp.add(M(cylUV(strap, 0.10), mats.m.leather));
    }
    const pouch = roundedBox(0.070, 0.060, 0.036, 0.008, 2);
    xform(pouch, { pos: [0.055, -0.100, 0.052] });
    grp.add(M(boxUV(pouch, 0.08), mats.m.leather));
  }

  grp.name = 'torso';
  return grp;
}

/* ------------------------------------------------------------------- limbs -- */
function buildUpperArm(mats, rng, variant, side) {
  const g = new THREE.Group();
  const skin = mats.m[variant.skin] || mats.m.skin;
  const len = 0.255;
  // deltoid -> bicep -> elbow taper
  const prof = [
    [0.000, 0.010], [0.052, 0.000], [0.056, -0.045],
    [0.048, -0.120], [0.040, -0.200], [0.037, -len], [0.000, -len - 0.006]
  ];
  const arm = organicLimb(prof, { seg: 16, amp: 0.005, freq: 12, seed: rng.int(1, 999) });
  g.add(M(cylUV(arm, 0.12), skin));
  // torn sleeve stub
  if (variant.sleeves) {
    const sl = lathe([[0.056, 0.010], [0.066, -0.010], [0.062, -0.090], [0.050, -0.105]], 18);
    displace(sl, { amp: 0.006, freq: 14, oct: 3, seed: rng.int(1, 99) });
    const m = M(boxUV(sl, 0.08), mats.m[variant.cloth] || mats.m.rags);
    m.material.side = THREE.DoubleSide;
    g.add(m);
  }
  return g;
}

function buildForeArm(mats, rng, variant, side) {
  const g = new THREE.Group();
  const skin = mats.m[variant.skin] || mats.m.skin;
  const bone = mats.m.bone;
  const len = 0.235;
  const prof = [
    [0.000, 0.008], [0.041, 0.000], [0.043, -0.050],
    [0.034, -0.140], [0.026, -len], [0.000, -len - 0.004]
  ];
  const fa = organicLimb(prof, { seg: 14, amp: 0.004, freq: 14, seed: rng.int(1, 999) });
  g.add(M(cylUV(fa, 0.10), skin));
  // exposed radius/ulna on stripped arms
  if (variant.boneArm && side < 0) {
    const b1 = tubeAlong([[0.010, -0.100, 0], [0.012, -0.180, 0.004], [0.010, -len, 0]], 0.010, 12, 7);
    const b2 = tubeAlong([[-0.010, -0.100, 0], [-0.012, -0.180, -0.004], [-0.008, -len, 0]], 0.009, 12, 7);
    g.add(M(merge([b1, b2]), bone));
  }
  return g;
}

function buildHand(mats, rng, variant) {
  const g = new THREE.Group();
  const skin = mats.m[variant.skin] || mats.m.skin;
  const palm = blob(0.038, [[0, -1, 0, 0.008, 2]], { seg: 14, seed: rng.int(1, 999), noiseAmp: 0.002 });
  palm.scale(0.85, 0.95, 0.50);
  g.add(M(boxUV(palm, 0.07), skin));
  // clawed fingers, splayed and curled
  for (let f = 0; f < 4; f++) {
    const fg = new THREE.Group();
    fg.position.set((f - 1.5) * 0.019, -0.030, 0.002);
    fg.rotation.set(rng.range(-0.15, 0.15), (f - 1.5) * 0.12, 0);
    let p = fg;
    for (let s = 0; s < 3; s++) {
      const len = 0.030 - s * 0.006;
      const r = 0.0085 - s * 0.0016;
      const sg = new THREE.Group();
      sg.position.y = s === 0 ? 0 : -(0.030 - (s - 1) * 0.006);
      sg.rotation.x = rng.range(0.15, 0.55);
      const geo = lathe([[0, 0], [r, -0.002], [r * 1.06, -len * 0.5], [r * 0.82, -len]], 10);
      sg.add(M(cylUV(geo, 0.035), skin));
      p.add(sg); p = sg;
    }
    // nail / claw
    const claw = lathe([[0, 0], [0.0042, -0.002], [0.0022, -0.014], [0, -0.020]], 8);
    xform(claw, { pos: [0, -0.017, 0.002], rot: [0.5, 0, 0] });
    p.add(M(cylUV(claw, 0.02), mats.m.bone));
    g.add(fg);
  }
  // thumb
  const th = new THREE.Group();
  th.position.set(-0.030, -0.010, 0.004);
  th.rotation.set(0, 0, 1.0);
  let tp = th;
  for (let s = 0; s < 2; s++) {
    const len = 0.026 - s * 0.005;
    const r = 0.0095 - s * 0.0018;
    const sg = new THREE.Group();
    sg.position.y = s === 0 ? 0 : -0.026;
    sg.rotation.x = 0.3;
    const geo = lathe([[0, 0], [r, -0.002], [r * 1.05, -len * 0.5], [r * 0.8, -len]], 10);
    sg.add(M(cylUV(geo, 0.03), skin));
    tp.add(sg); tp = sg;
  }
  g.add(th);
  return g;
}

function buildThigh(mats, rng, variant) {
  const g = new THREE.Group();
  const skin = mats.m[variant.skin] || mats.m.skin;
  const len = 0.365;
  const prof = [
    [0.000, 0.012], [0.075, 0.000], [0.080, -0.070],
    [0.070, -0.180], [0.058, -0.300], [0.052, -len], [0.000, -len - 0.008]
  ];
  const th = organicLimb(prof, { seg: 18, amp: 0.006, freq: 9, seed: rng.int(1, 999) });
  g.add(M(cylUV(th, 0.16), skin));
  // trousers: shredded shell, ends mid-shin
  const tr = lathe([
    [0.082, 0.020], [0.092, -0.010], [0.086, -0.150], [0.076, -0.280], [0.068, -len - 0.03], [0.060, -len - 0.05]
  ], 20);
  displace(tr, { amp: 0.008, freq: 10, oct: 3, seed: rng.int(1, 99) });
  const trm = M(boxUV(tr, 0.14), mats.m[variant.pants] || mats.m.rags);
  trm.material.side = THREE.DoubleSide;
  g.add(trm);
  return g;
}

function buildShin(mats, rng, variant) {
  const g = new THREE.Group();
  const skin = mats.m[variant.skin] || mats.m.skin;
  const len = 0.360;
  const prof = [
    [0.000, 0.010], [0.055, 0.000], [0.058, -0.055],
    [0.046, -0.170], [0.032, -0.290], [0.026, -len], [0.000, -len - 0.004]
  ];
  const sh = organicLimb(prof, { seg: 16, amp: 0.005, freq: 11, seed: rng.int(1, 999) });
  g.add(M(cylUV(sh, 0.14), skin));
  if (variant.boneLeg) {
    const tib = tubeAlong([[0, -0.150, 0.010], [0, -0.250, 0.014], [0, -len, 0.008]], 0.013, 12, 8);
    g.add(M(tib, mats.m.bone));
  }
  return g;
}

function buildFoot(mats, rng, variant) {
  const g = new THREE.Group();
  const skin = mats.m[variant.skin] || mats.m.skin;
  if (variant.boots) {
    // work boot: sole, upper, laces
    const sole = roundedBox(0.098, 0.028, 0.250, 0.012, 2);
    xform(sole, { pos: [0, -0.022, 0.048] });
    g.add(M(boxUV(sole, 0.10), mats.m.rubber));
    // tread
    for (let i = 0; i < 7; i++) {
      const t = roundedBox(0.092, 0.008, 0.018, 0.003, 1);
      xform(t, { pos: [0, -0.036, -0.048 + i * 0.032] });
      g.add(M(boxUV(t, 0.05), mats.m.rubber));
    }
    const upper = blob(0.070, [[0, 0.2, 1, 0.030, 2], [0, 1, 0, 0.010, 3]], { seg: 18, seed: rng.int(1, 999), noiseAmp: 0.003 });
    upper.scale(0.68, 0.72, 1.55);
    xform(upper, { pos: [0, 0.010, 0.045] });
    g.add(M(boxUV(upper, 0.10), mats.m.leather));
    const cuff = lathe([[0.046, 0], [0.056, 0.010], [0.054, 0.070], [0.044, 0.076]], 16);
    xform(cuff, { pos: [0, 0.020, -0.015] });
    g.add(M(boxUV(cuff, 0.07), mats.m.leather));
    // laces
    for (let i = 0; i < 4; i++) {
      const l = tubeAlong([[-0.030, 0.036 + i * 0.016, 0.030 - i * 0.008], [0.030, 0.040 + i * 0.016, 0.026 - i * 0.008]], 0.0032, 8, 5);
      g.add(M(l, mats.m.rags));
    }
  } else {
    // bare, mangled foot
    const f = blob(0.062, [[0, -0.2, 1, 0.026, 2]], { seg: 16, seed: rng.int(1, 999), noiseAmp: 0.004 });
    f.scale(0.72, 0.52, 1.55);
    xform(f, { pos: [0, -0.020, 0.045] });
    g.add(M(boxUV(f, 0.09), skin));
    for (let i = 0; i < 5; i++) {
      const t = lathe([[0, 0], [0.0095 - i * 0.0009, 0.002], [0.0080 - i * 0.0008, 0.020], [0, 0.026]], 8);
      xform(t, { pos: [(i - 2) * 0.017, -0.028, 0.118], rot: [Math.PI / 2, 0, 0] });
      g.add(M(cylUV(t, 0.03), skin));
    }
  }
  return g;
}

/* ------------------------------------------------------------- variants ----- */
export const ZOMBIE_TYPES = {
  walker: {
    hp: 100, speed: 1.55, dmg: 11, scale: 1.0, mass: 78,
    skin: 'skin', cloth: 'rags', pants: 'ragsBlue',
    eyeColor: 0xffd45a, eyeGlow: 2.2, hair: true, hairColor: 0x1a1410,
    exposedRibs: false, exposedSkull: false, entrails: false,
    boots: true, sleeves: true, harness: false, boneArm: false, boneLeg: false,
    label: 'WALKER', tint: 0xffffff, atkRange: 1.55, atkRate: 1.25
  },
  runner: {
    hp: 62, speed: 4.55, dmg: 9, scale: 0.94, mass: 62,
    skin: 'skinPale', cloth: 'ragsRed', pants: 'rags',
    eyeColor: 0xff5a20, eyeGlow: 4.2, hair: false, hairColor: 0x140c08,
    exposedRibs: true, exposedSkull: true, entrails: false,
    boots: false, sleeves: false, harness: false, boneArm: true, boneLeg: false,
    label: 'RUNNER', tint: 0xffffff, atkRange: 1.5, atkRate: 0.75
  },
  brute: {
    hp: 420, speed: 1.28, dmg: 34, scale: 1.42, mass: 190,
    skin: 'skinRot', cloth: 'ragsGreen', pants: 'ragsGreen',
    eyeColor: 0x40ff70, eyeGlow: 3.2, hair: false, hairColor: 0x0a0806,
    exposedRibs: true, exposedSkull: false, entrails: true,
    boots: true, sleeves: false, harness: true, boneArm: false, boneLeg: false,
    label: 'BRUTE', tint: 0xffffff, atkRange: 2.15, atkRate: 1.7
  },
  crawler: {
    hp: 55, speed: 2.15, dmg: 13, scale: 0.88, mass: 48,
    skin: 'skinBurn', cloth: 'ragsWhite', pants: 'rags',
    eyeColor: 0xff2a10, eyeGlow: 3.6, hair: true, hairColor: 0x0e0a06,
    exposedRibs: true, exposedSkull: true, entrails: true,
    boots: false, sleeves: false, harness: false, boneArm: true, boneLeg: true,
    label: 'CRAWLER', tint: 0xffffff, crawler: true, atkRange: 1.4, atkRate: 0.95
  },
  bloater: {
    hp: 240, speed: 1.05, dmg: 20, scale: 1.22, mass: 150,
    skin: 'skinRot', cloth: 'ragsWhite', pants: 'ragsBlue',
    eyeColor: 0xaaff40, eyeGlow: 2.8, hair: false, hairColor: 0x100c08,
    exposedRibs: false, exposedSkull: false, entrails: true,
    boots: true, sleeves: true, harness: false, boneArm: false, boneLeg: false,
    label: 'BLOATER', tint: 0xffffff, bloated: true, explodes: true, atkRange: 1.8, atkRate: 1.5
  }
};

/* ----------------------------------------------------------- full builder -- */
/**
 * @returns {{root:THREE.Group, joints:object, meshes:THREE.Mesh[], variant:object,
 *            bones:{name:string,obj:THREE.Object3D,len:number}[]}}
 */
export function buildZombie(mats, typeKey = 'walker', seed = 1) {
  const variant = { ...ZOMBIE_TYPES[typeKey], type: typeKey };
  const rng = new Rng(seed * 7919 + 13);

  const root = new THREE.Group();
  root.name = 'zombie-' + typeKey;

  const hips = new THREE.Group(); hips.name = 'hips';
  hips.position.y = 0.92 * variant.scale;
  root.add(hips);

  // pelvis mass
  const pelvis = blob(0.115, [[0, -0.4, 0, 0.014, 2]], { seg: 18, seed: rng.int(1, 999), noiseAmp: 0.004 });
  pelvis.scale(1.05, 0.72, 0.80);
  hips.add(M(boxUV(pelvis, 0.12), mats.m[variant.skin] || mats.m.skin));

  const spine = new THREE.Group(); spine.name = 'spine';
  spine.position.y = 0.105;
  hips.add(spine);

  const chest = new THREE.Group(); chest.name = 'chest';
  chest.position.y = 0.175;
  spine.add(chest);
  chest.add(buildTorso(mats, rng, variant));

  const neck = new THREE.Group(); neck.name = 'neck';
  neck.position.y = 0.150;
  chest.add(neck);
  const neckGeo = lathe([[0.040, 0], [0.046, 0.020], [0.044, 0.058], [0.050, 0.072]], 14);
  displace(neckGeo, { amp: 0.004, freq: 16, oct: 3, seed: rng.int(1, 99) });
  neck.add(M(cylUV(neckGeo, 0.06), mats.m[variant.skin] || mats.m.skin));

  const head = new THREE.Group(); head.name = 'head';
  head.position.y = 0.098;
  neck.add(head);
  const skull = buildSkull(mats, rng, variant);
  head.add(skull);

  const joints = { root, hips, spine, chest, neck, head, skull };

  // arms
  for (const side of [-1, 1]) {
    const key = side < 0 ? 'L' : 'R';
    const sh = new THREE.Group(); sh.name = 'shoulder' + key;
    sh.position.set(side * 0.148 * variant.scale, 0.108, 0.004);
    chest.add(sh);
    const shMass = blob(0.056, [], { seg: 14, seed: rng.int(1, 999), noiseAmp: 0.003 });
    shMass.scale(1.0, 0.85, 0.95);
    sh.add(M(boxUV(shMass, 0.08), mats.m[variant.skin] || mats.m.skin));

    const ua = new THREE.Group(); ua.name = 'upperArm' + key;
    sh.add(ua);
    ua.add(buildUpperArm(mats, rng, variant, side));

    const fa = new THREE.Group(); fa.name = 'foreArm' + key;
    fa.position.y = -0.255;
    ua.add(fa);
    fa.add(buildForeArm(mats, rng, variant, side));
    // elbow joint mass
    const el = blob(0.040, [], { seg: 12, seed: rng.int(1, 999), noiseAmp: 0.002 });
    fa.add(M(boxUV(el, 0.06), mats.m[variant.skin] || mats.m.skin));

    const hd = new THREE.Group(); hd.name = 'hand' + key;
    hd.position.y = -0.235;
    fa.add(hd);
    hd.add(buildHand(mats, rng, variant));

    joints['shoulder' + key] = sh;
    joints['upperArm' + key] = ua;
    joints['foreArm' + key] = fa;
    joints['hand' + key] = hd;
  }

  // legs
  for (const side of [-1, 1]) {
    const key = side < 0 ? 'L' : 'R';
    const th = new THREE.Group(); th.name = 'thigh' + key;
    th.position.set(side * 0.088 * variant.scale, -0.055, 0);
    hips.add(th);
    th.add(buildThigh(mats, rng, variant));

    const sn = new THREE.Group(); sn.name = 'shin' + key;
    sn.position.y = -0.365;
    th.add(sn);
    sn.add(buildShin(mats, rng, variant));
    const kn = blob(0.050, [[0, 0, 1, 0.010, 2]], { seg: 12, seed: rng.int(1, 999), noiseAmp: 0.003 });
    sn.add(M(boxUV(kn, 0.07), mats.m[variant.skin] || mats.m.skin));

    const ft = new THREE.Group(); ft.name = 'foot' + key;
    ft.position.y = -0.360;
    sn.add(ft);
    ft.add(buildFoot(mats, rng, variant));

    joints['thigh' + key] = th;
    joints['shin' + key] = sn;
    joints['foot' + key] = ft;
  }

  // per-type morphology tweaks
  if (variant.bloated) {
    chest.scale.set(1.30, 1.10, 1.35);
    hips.scale.set(1.20, 1.0, 1.25);
  }
  if (variant.type === 'brute') {
    chest.scale.set(1.28, 1.14, 1.20);
    joints.shoulderL.scale.setScalar(1.30);
    joints.shoulderR.scale.setScalar(1.30);
    head.scale.setScalar(0.88);
  }
  if (variant.type === 'runner') {
    chest.scale.set(0.88, 1.02, 0.86);
  }

  root.scale.setScalar(variant.scale);
  root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });

  const meshes = [];
  root.traverse(o => { if (o.isMesh) meshes.push(o); });

  return { root, joints, meshes, variant, rng };
}
