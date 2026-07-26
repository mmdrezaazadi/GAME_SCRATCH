/**
 * Procedural weapon models.
 *
 * Each firearm is assembled from lathed, extruded, chamfered and greebled parts
 * — receivers with beveled edges, fluted barrels, machined muzzle brakes,
 * ribbed handguards, textured polymer grips, optics with lens elements, sling
 * loops, charging handles and magazines with witness holes. No plain cubes.
 */
import * as THREE from 'three';
import {
  roundedBox, chamferCyl, lathe, extrude, merge, xform, boxUV, cylUV, scaleUV,
  ringGeo, bolts, rivetLine, tubeAlong, displace, blob
} from '../gfx/geometry.js';

const G = (mat, geo) => { const m = new THREE.Mesh(geo, mat); m.castShadow = false; m.receiveShadow = false; return m; };

/* -------------------------------------------------------------- helpers ----- */
function fluteBarrel(r, len, flutes = 8, depth = 0.0025, seg = 28) {
  const g = chamferCyl(r, r, len, seg, r * 0.15);
  const pos = g.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const rad = Math.hypot(v.x, v.z);
    if (rad < r * 0.6) continue;
    const a = Math.atan2(v.z, v.x);
    const f = Math.cos(a * flutes);
    const s = 1 - Math.max(0, f) * depth / r;
    v.x *= s; v.z *= s;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  pos.needsUpdate = true;
  g.computeVertexNormals();
  g.rotateX(Math.PI / 2);
  return g;
}

function muzzleBrake(r, len) {
  const parts = [];
  const body = lathe([
    [0, -len / 2], [r * 1.05, -len / 2], [r * 1.15, -len / 2 + 0.004],
    [r * 1.15, len / 2 - 0.010], [r * 1.28, len / 2 - 0.008],
    [r * 1.28, len / 2 - 0.002], [r * 0.62, len / 2], [0, len / 2]
  ], 24);
  parts.push(body);
  // port cuts
  for (let i = 0; i < 3; i++) {
    for (const s of [-1, 1]) {
      const p = ringGeo(r * 1.2, 0.0035, 16, 6, Math.PI * 0.5);
      xform(p, { pos: [0, -len * 0.2 + i * len * 0.22, 0], rot: [Math.PI / 2, 0, s * Math.PI / 2] });
      parts.push(p);
    }
  }
  const g = merge(parts);
  g.rotateX(Math.PI / 2);
  return g;
}

function picatinnyRail(len, w = 0.021, slots = 10) {
  const parts = [];
  const base = roundedBox(w, 0.007, len, 0.0015, 1);
  parts.push(base);
  for (let i = 0; i < slots; i++) {
    const z = -len / 2 + (i + 0.5) * (len / slots);
    const t = roundedBox(w * 0.92, 0.0055, len / slots * 0.52, 0.0012, 1);
    // trapezoid taper for the classic rail cross section
    const pos = t.attributes.position;
    for (let k = 0; k < pos.count; k++) {
      const y = pos.getY(k);
      if (y > 0) { pos.setX(k, pos.getX(k) * 0.78); }
    }
    pos.needsUpdate = true; t.computeVertexNormals();
    xform(t, { pos: [0, 0.006, z] });
    parts.push(t);
  }
  return merge(parts);
}

function magazine(w, h, d, curve = 0.16, mat) {
  const parts = [];
  const seg = 8;
  for (let i = 0; i < seg; i++) {
    const t = i / (seg - 1);
    const y = -h / 2 + t * h;
    const bend = Math.pow(t, 1.5) * curve;
    const taper = 1 - t * 0.06;
    const s = roundedBox(w * taper, h / seg * 1.35, d * taper, 0.0035, 1);
    xform(s, { pos: [0, y, bend * d], rot: [-bend * 1.2, 0, 0] });
    parts.push(s);
  }
  // floor plate
  const fp = roundedBox(w * 1.06, 0.008, d * 1.05, 0.002, 1);
  xform(fp, { pos: [0, -h / 2 - 0.004, 0] });
  parts.push(fp);
  // witness holes (raised rings)
  for (let i = 0; i < 4; i++) {
    const ring = ringGeo(0.0055, 0.0012, 12, 6);
    xform(ring, { pos: [w / 2 * 0.99, -h * 0.30 + i * h * 0.17, 0.004], rot: [0, Math.PI / 2, 0] });
    parts.push(ring);
  }
  return merge(parts);
}

function pistolGrip(h, mat) {
  const parts = [];
  const seg = 10;
  for (let i = 0; i < seg; i++) {
    const t = i / (seg - 1);
    const y = -h * t;
    const w = 0.030 - t * 0.004 + Math.sin(t * Math.PI) * 0.003;
    const d = 0.038 - t * 0.010;
    const s = roundedBox(w, h / seg * 1.4, d, 0.005, 1);
    xform(s, { pos: [0, y, t * 0.020], rot: [0.30, 0, 0] });
    parts.push(s);
  }
  // beavertail + finger grooves
  for (let i = 0; i < 3; i++) {
    const gr = ringGeo(0.017, 0.0035, 14, 6, Math.PI);
    xform(gr, { pos: [0, -h * (0.22 + i * 0.22), 0.006 + i * 0.006], rot: [Math.PI / 2 + 0.3, 0, Math.PI / 2] });
    parts.push(gr);
  }
  return merge(parts);
}

function opticSight(matBody, matGlass, matMetal) {
  const grp = new THREE.Group();
  const tube = lathe([
    [0, -0.052], [0.0175, -0.052], [0.0185, -0.048],
    [0.0155, -0.030], [0.0155, 0.024], [0.0195, 0.030],
    [0.0205, 0.046], [0.0195, 0.052], [0, 0.052]
  ], 28);
  tube.rotateX(Math.PI / 2);
  grp.add(G(matBody, cylUV(tube, 0.06)));
  // turrets
  for (const [rot, pos] of [[[0, 0, 0], [0, 0.020, 0]], [[0, 0, Math.PI / 2], [0.020, 0, 0]]]) {
    const tr = lathe([[0, 0], [0.008, 0], [0.0095, 0.003], [0.0095, 0.014], [0.007, 0.017], [0, 0.017]], 16);
    xform(tr, { pos, rot });
    grp.add(G(matMetal, cylUV(tr, 0.03)));
  }
  // mount + rail clamp
  const mount = roundedBox(0.024, 0.026, 0.052, 0.003, 1);
  xform(mount, { pos: [0, -0.022, 0.004] });
  grp.add(G(matBody, boxUV(mount, 0.08)));
  const clamp = roundedBox(0.030, 0.008, 0.020, 0.002, 1);
  xform(clamp, { pos: [0, -0.034, 0.004] });
  grp.add(G(matMetal, boxUV(clamp, 0.06)));
  // lens elements (front objective + rear ocular)
  for (const [z, r, col] of [[0.050, 0.0155, 0x1a3550], [-0.049, 0.0135, 0x102030]]) {
    const lensGeo = new THREE.SphereGeometry(r, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.32);
    const lm = new THREE.MeshPhysicalMaterial({
      color: col, roughness: 0.04, metalness: 0.15, transmission: 0.35, thickness: 0.01,
      ior: 1.52, iridescence: 0.85, iridescenceIOR: 1.9, iridescenceThicknessRange: [180, 520],
      clearcoat: 1.0, clearcoatRoughness: 0.02, envMapIntensity: 2.0
    });
    const lens = new THREE.Mesh(lensGeo, lm);
    lens.position.z = z;
    lens.rotation.x = z > 0 ? -Math.PI / 2 : Math.PI / 2;
    grp.add(lens);
  }
  // reticle plate (glowing red dot / crosshair)
  const retMat = new THREE.MeshBasicMaterial({
    color: 0xff2a18, transparent: true, opacity: 0.95,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const dot = new THREE.Mesh(new THREE.SphereGeometry(0.0011, 8, 6), retMat);
  dot.position.z = -0.030;
  grp.add(dot);
  const cross = merge([
    xform(roundedBox(0.0009, 0.010, 0.0004, 0.0002, 0), { pos: [0, 0, 0] }),
    xform(roundedBox(0.010, 0.0009, 0.0004, 0.0002, 0), { pos: [0, 0, 0] })
  ]);
  const cm = new THREE.Mesh(cross, retMat);
  cm.position.z = -0.031;
  grp.add(cm);
  return grp;
}

function ironSights(matMetal) {
  const grp = new THREE.Group();
  // front post in a protected hood
  const hood = lathe([[0.010, 0], [0.013, 0], [0.013, 0.026], [0.010, 0.026]], 16, 0, Math.PI * 1.35);
  xform(hood, { rot: [0, -Math.PI * 0.17, 0] });
  grp.add(G(matMetal, cylUV(hood, 0.04)));
  const post = roundedBox(0.0028, 0.020, 0.0028, 0.0006, 0);
  xform(post, { pos: [0, 0.010, 0] });
  grp.add(G(matMetal, boxUV(post, 0.03)));
  return grp;
}

/* ============================================================== RIFLE ====== */
/** Assault rifle — the primary. */
export function buildRifle(mats) {
  const grp = new THREE.Group();
  grp.name = 'rifle';
  const gm = mats.m.gunmetal, pm = mats.m.polymer, pt = mats.m.polymerTan, ch = mats.m.chrome, rb = mats.m.rubber;

  /* upper receiver: chamfered slab with an integral rail and ejection port */
  const upperParts = [];
  const upper = roundedBox(0.038, 0.048, 0.235, 0.005, 2);
  upperParts.push(upper);
  // forward assist + brass deflector bulge
  const fa = chamferCyl(0.007, 0.008, 0.020, 12, 0.002);
  xform(fa, { pos: [0.018, 0.008, -0.098], rot: [Math.PI / 2, 0, 0] });
  upperParts.push(fa);
  const defl = blob(0.014, [[1, 0.4, 0, 0.006, 2]], { seg: 14, seed: 3, noiseAmp: 0.0005 });
  xform(defl, { pos: [0.019, 0.002, -0.082], scale: [0.7, 0.9, 1.3] });
  upperParts.push(defl);
  const upperG = merge(upperParts);
  boxUV(upperG, 0.09);
  const upperMesh = G(gm, upperG);
  grp.add(upperMesh);

  // ejection port cut cover
  const portCover = roundedBox(0.004, 0.020, 0.044, 0.0012, 1);
  xform(portCover, { pos: [0.020, 0.004, -0.055] });
  grp.add(G(gm, boxUV(portCover, 0.05)));

  // top rail
  const rail = picatinnyRail(0.215, 0.022, 12);
  xform(rail, { pos: [0, 0.027, -0.012] });
  grp.add(G(gm, boxUV(rail, 0.06)));

  /* lower receiver + magwell + trigger guard */
  const lowerParts = [];
  const lower = roundedBox(0.034, 0.040, 0.150, 0.005, 2);
  xform(lower, { pos: [0, -0.040, -0.036] });
  lowerParts.push(lower);
  const magwell = roundedBox(0.036, 0.048, 0.052, 0.004, 2);
  xform(magwell, { pos: [0, -0.056, -0.020] });
  lowerParts.push(magwell);
  // trigger guard loop
  const tg = ringGeo(0.019, 0.0042, 18, 8, Math.PI * 1.15);
  xform(tg, { pos: [0, -0.062, -0.072], rot: [0, Math.PI / 2, Math.PI * 0.42] });
  lowerParts.push(tg);
  const lowerG = merge(lowerParts);
  boxUV(lowerG, 0.09);
  grp.add(G(pm, lowerG));

  // magazine (curved, textured polymer)
  const mag = magazine(0.028, 0.135, 0.044, 0.22);
  xform(mag, { pos: [0, -0.130, -0.014], rot: [0.06, 0, 0] });
  const magMesh = G(pt, boxUV(mag, 0.08));
  magMesh.name = 'magazine';
  grp.add(magMesh);

  // grip
  const grip = pistolGrip(0.098);
  xform(grip, { pos: [0, -0.062, -0.100], rot: [-0.22, 0, 0] });
  grp.add(G(pm, boxUV(grip, 0.07)));

  // trigger (curved blade)
  const trig = extrude([[0, 0], [0.010, -0.002], [0.012, -0.016], [0.008, -0.024], [0.002, -0.022], [0.001, -0.010]], 0.0055, { bevel: 0.0008 });
  xform(trig, { pos: [0, -0.056, -0.076], rot: [0, Math.PI / 2, 0] });
  grp.add(G(ch, boxUV(trig, 0.03)));

  /* handguard: ribbed tube with M-LOK style slots */
  const hgParts = [];
  const hg = lathe([
    [0.0225, -0.130], [0.0250, -0.126], [0.0250, 0.116], [0.0225, 0.122], [0.0180, 0.122]
  ], 20);
  hg.rotateX(Math.PI / 2);
  hgParts.push(hg);
  for (let i = 0; i < 9; i++) {
    const rr = ringGeo(0.0255, 0.0022, 20, 6);
    xform(rr, { pos: [0, 0, -0.115 + i * 0.028] });
    hgParts.push(rr);
  }
  // M-LOK slots (recessed rails)
  for (const ang of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) {
    for (let i = 0; i < 4; i++) {
      const sl = roundedBox(0.010, 0.0035, 0.026, 0.0008, 1);
      xform(sl, {
        pos: [Math.cos(ang) * 0.0245, Math.sin(ang) * 0.0245, -0.095 + i * 0.056],
        rot: [0, 0, ang]
      });
      hgParts.push(sl);
    }
  }
  const hgG = merge(hgParts);
  xform(hgG, { pos: [0, 0.002, 0.128] });
  grp.add(G(gm, cylUV(hgG, 0.10)));

  /* barrel + gas block + brake */
  const barrel = fluteBarrel(0.0085, 0.300, 10, 0.002);
  xform(barrel, { pos: [0, 0.002, 0.255] });
  grp.add(G(gm, cylUV(barrel, 0.06)));

  const gasBlock = roundedBox(0.020, 0.024, 0.030, 0.003, 1);
  xform(gasBlock, { pos: [0, 0.006, 0.252] });
  grp.add(G(gm, boxUV(gasBlock, 0.05)));
  const gasTube = chamferCyl(0.0028, 0.0028, 0.240, 10, 0.001);
  xform(gasTube, { pos: [0, 0.016, 0.135], rot: [Math.PI / 2, 0, 0] });
  grp.add(G(ch, cylUV(gasTube, 0.04)));

  const brake = muzzleBrake(0.0105, 0.055);
  xform(brake, { pos: [0, 0.002, 0.410] });
  const brakeMesh = G(gm, cylUV(brake, 0.05));
  brakeMesh.name = 'muzzleDevice';
  grp.add(brakeMesh);

  /* charging handle */
  const chParts = [];
  chParts.push(xform(roundedBox(0.030, 0.010, 0.014, 0.002, 1), { pos: [0, 0, 0] }));
  chParts.push(xform(roundedBox(0.010, 0.008, 0.055, 0.0018, 1), { pos: [0.014, 0, 0.030] }));
  const chg = merge(chParts);
  xform(chg, { pos: [0, 0.020, -0.128] });
  const chgMesh = G(gm, boxUV(chg, 0.05));
  chgMesh.name = 'chargingHandle';
  grp.add(chgMesh);

  /* buffer tube + adjustable stock + cheek riser */
  const bt = lathe([[0, 0], [0.0155, 0], [0.0165, 0.006], [0.0165, 0.150], [0.0155, 0.156], [0, 0.156]], 18);
  xform(bt, { pos: [0, -0.010, -0.150], rot: [Math.PI / 2, 0, 0] });
  grp.add(G(gm, cylUV(bt, 0.06)));

  const stockParts = [];
  stockParts.push(xform(roundedBox(0.042, 0.052, 0.090, 0.008, 2), { pos: [0, 0, 0] }));
  stockParts.push(xform(roundedBox(0.036, 0.030, 0.050, 0.006, 1), { pos: [0, 0.028, -0.020] }));
  // sling loop
  const loop = ringGeo(0.008, 0.0022, 14, 6);
  xform(loop, { pos: [0.020, -0.014, 0.030], rot: [0, Math.PI / 2, 0] });
  stockParts.push(loop);
  const stock = merge(stockParts);
  xform(stock, { pos: [0, -0.014, -0.230] });
  grp.add(G(pm, boxUV(stock, 0.10)));

  const pad = roundedBox(0.040, 0.056, 0.020, 0.006, 2);
  xform(pad, { pos: [0, -0.014, -0.282] });
  grp.add(G(rb, boxUV(pad, 0.05)));

  /* optic + backup irons */
  const optic = opticSight(pm, null, gm);
  optic.position.set(0, 0.052, -0.010);
  grp.add(optic);

  const irons = ironSights(gm);
  irons.position.set(0, 0.030, 0.230);
  grp.add(irons);

  /* vertical foregrip */
  const fgParts = [];
  fgParts.push(xform(lathe([[0, 0], [0.0125, 0], [0.0135, -0.006], [0.0125, -0.055], [0.0105, -0.062], [0, -0.062]], 16), { pos: [0, 0, 0] }));
  for (let i = 0; i < 4; i++) fgParts.push(xform(ringGeo(0.0132, 0.0018, 16, 6), { pos: [0, -0.012 - i * 0.013, 0] }));
  const fg = merge(fgParts);
  xform(fg, { pos: [0, -0.024, 0.185] });
  grp.add(G(pm, cylUV(fg, 0.05)));

  // laser/light module
  const lm = roundedBox(0.020, 0.018, 0.056, 0.003, 1);
  xform(lm, { pos: [-0.026, 0.006, 0.180] });
  grp.add(G(gm, boxUV(lm, 0.05)));
  const lens = chamferCyl(0.0065, 0.0065, 0.004, 14, 0.001);
  xform(lens, { pos: [-0.026, 0.006, 0.209], rot: [Math.PI / 2, 0, 0] });
  grp.add(new THREE.Mesh(cylUV(lens, 0.02), mats.m.neonRed));

  // sling strap
  const strap = tubeAlong([
    [0.020, -0.026, -0.200], [0.035, -0.10, -0.12], [0.030, -0.16, 0.02], [0.012, -0.07, 0.16]
  ], 0.006, 26, 8);
  grp.add(G(mats.m.rags, cylUV(strap, 0.08)));

  grp.traverse(o => { if (o.isMesh) { o.frustumCulled = false; o.renderOrder = 3; } });

  return {
    group: grp,
    muzzleLocal: new THREE.Vector3(0, 0.004, 0.442),
    ejectLocal: new THREE.Vector3(0.024, 0.006, -0.055),
    magMesh,
    chgMesh,
    stats: {
      name: 'MK-7 CARBINE', dmg: 27, headMul: 3.1, rpm: 720, mag: 30, reserve: 240,
      spread: 0.0075, adsSpread: 0.0022, recoil: 0.0105, kick: 0.030, auto: true,
      reloadTime: 2.05, adsFov: 47, pellets: 1, range: 140, penetration: 1
    }
  };
}

/* ============================================================ SHOTGUN ====== */
export function buildShotgun(mats) {
  const grp = new THREE.Group();
  grp.name = 'shotgun';
  const gm = mats.m.gunmetal, wd = mats.m.woodDark, rb = mats.m.rubber, ch = mats.m.chrome;

  // receiver — machined block with loading port and shell lifter
  const recParts = [];
  recParts.push(roundedBox(0.042, 0.052, 0.185, 0.006, 2));
  recParts.push(xform(roundedBox(0.046, 0.026, 0.070, 0.004, 1), { pos: [0, -0.020, -0.030] }));
  const rec = merge(recParts);
  grp.add(G(gm, boxUV(rec, 0.10)));

  // barrel: heavy, with vent rib
  const barrel = lathe([
    [0, -0.19], [0.0155, -0.19], [0.0165, -0.184], [0.0150, 0.150], [0.0165, 0.176], [0.0155, 0.19], [0, 0.19]
  ], 24);
  barrel.rotateX(Math.PI / 2);
  xform(barrel, { pos: [0, 0.006, 0.290] });
  grp.add(G(gm, cylUV(barrel, 0.07)));

  const rib = roundedBox(0.012, 0.010, 0.360, 0.002, 1);
  xform(rib, { pos: [0, 0.024, 0.280] });
  grp.add(G(gm, boxUV(rib, 0.06)));
  for (let i = 0; i < 8; i++) {
    const vent = roundedBox(0.014, 0.005, 0.016, 0.001, 0);
    xform(vent, { pos: [0, 0.026, 0.150 + i * 0.036] });
    grp.add(G(gm, boxUV(vent, 0.04)));
  }

  // magazine tube under the barrel
  const tube = lathe([[0, -0.16], [0.0115, -0.16], [0.0125, -0.154], [0.0125, 0.154], [0.0115, 0.16], [0, 0.16]], 18);
  tube.rotateX(Math.PI / 2);
  xform(tube, { pos: [0, -0.020, 0.260] });
  grp.add(G(gm, cylUV(tube, 0.06)));
  const tubeCap = lathe([[0, 0], [0.014, 0], [0.015, 0.004], [0.013, 0.016], [0, 0.018]], 16);
  xform(tubeCap, { pos: [0, -0.020, 0.420], rot: [Math.PI / 2, 0, 0] });
  grp.add(G(ch, cylUV(tubeCap, 0.03)));

  // pump forend — ribbed wood
  const pumpParts = [];
  pumpParts.push(xform(lathe([[0.020, -0.070], [0.024, -0.064], [0.024, 0.064], [0.020, 0.070]], 20), { rot: [Math.PI / 2, 0, 0] }));
  for (let i = 0; i < 7; i++) pumpParts.push(xform(ringGeo(0.0248, 0.0026, 20, 6), { pos: [0, 0, -0.054 + i * 0.018] }));
  const pump = merge(pumpParts);
  xform(pump, { pos: [0, -0.020, 0.215] });
  const pumpMesh = G(wd, cylUV(pump, 0.08));
  pumpMesh.name = 'pump';
  grp.add(pumpMesh);

  // trigger group
  const tg = ringGeo(0.020, 0.0045, 18, 8, Math.PI * 1.2);
  xform(tg, { pos: [0, -0.048, -0.048], rot: [0, Math.PI / 2, Math.PI * 0.44] });
  grp.add(G(gm, boxUV(tg, 0.04)));
  const trig = extrude([[0, 0], [0.010, -0.003], [0.011, -0.018], [0.005, -0.024], [0.001, -0.014]], 0.006, { bevel: 0.0008 });
  xform(trig, { pos: [0, -0.042, -0.050], rot: [0, Math.PI / 2, 0] });
  grp.add(G(ch, boxUV(trig, 0.03)));

  // wooden stock with grip swell + comb
  const stockParts = [];
  const seg = 12;
  for (let i = 0; i < seg; i++) {
    const t = i / (seg - 1);
    const z = -0.100 - t * 0.230;
    const w = 0.040 - t * 0.004;
    const h = 0.052 + Math.sin(t * Math.PI * 0.9) * 0.030 - t * 0.008;
    const yy = -0.020 - t * 0.030;
    const s = roundedBox(w, h, 0.235 / seg * 1.5, 0.008, 1);
    xform(s, { pos: [0, yy, z], rot: [0.10, 0, 0] });
    stockParts.push(s);
  }
  const stock = merge(stockParts);
  grp.add(G(wd, boxUV(stock, 0.12)));

  const pad = roundedBox(0.042, 0.086, 0.022, 0.008, 2);
  xform(pad, { pos: [0, -0.058, -0.338], rot: [0.12, 0, 0] });
  grp.add(G(rb, boxUV(pad, 0.05)));

  // bead front sight
  const bead = new THREE.Mesh(new THREE.SphereGeometry(0.0032, 12, 8), mats.m.neonGreen);
  bead.position.set(0, 0.032, 0.452);
  grp.add(bead);

  // shell carrier on the receiver side
  for (let i = 0; i < 4; i++) {
    const shell = lathe([[0, 0], [0.0092, 0], [0.0095, 0.004], [0.0095, 0.040], [0.0085, 0.046], [0, 0.048]], 14);
    xform(shell, { pos: [-0.028, -0.006, -0.070 + i * 0.024], rot: [Math.PI / 2, 0, 0] });
    grp.add(G(mats.m.paintRed, cylUV(shell, 0.04)));
    const base = chamferCyl(0.0098, 0.0098, 0.014, 14, 0.002);
    xform(base, { pos: [-0.028 + 0.021, -0.006, -0.070 + i * 0.024], rot: [0, 0, Math.PI / 2] });
    grp.add(G(mats.m.brass, cylUV(base, 0.03)));
  }

  grp.traverse(o => { if (o.isMesh) { o.frustumCulled = false; o.renderOrder = 3; } });

  return {
    group: grp,
    muzzleLocal: new THREE.Vector3(0, 0.006, 0.480),
    ejectLocal: new THREE.Vector3(0.026, 0.004, -0.020),
    magMesh: pumpMesh,
    pumpMesh,
    stats: {
      name: 'BREAKER 12G', dmg: 17, headMul: 2.0, rpm: 78, mag: 8, reserve: 64,
      spread: 0.048, adsSpread: 0.030, recoil: 0.040, kick: 0.115, auto: false,
      reloadTime: 3.0, adsFov: 55, pellets: 10, range: 45, penetration: 1, perShell: true
    }
  };
}

/* ============================================================== PISTOL ===== */
export function buildPistol(mats) {
  const grp = new THREE.Group();
  grp.name = 'pistol';
  const gm = mats.m.gunmetal, pm = mats.m.polymer, ch = mats.m.chrome;

  // slide with serrations and beveled nose
  const slideParts = [];
  slideParts.push(roundedBox(0.028, 0.030, 0.175, 0.005, 2));
  for (let i = 0; i < 7; i++) {
    const ser = roundedBox(0.030, 0.020, 0.0035, 0.0008, 0);
    xform(ser, { pos: [0, 0.002, -0.070 + i * 0.009] });
    slideParts.push(ser);
  }
  for (let i = 0; i < 5; i++) {
    const ser = roundedBox(0.030, 0.018, 0.0035, 0.0008, 0);
    xform(ser, { pos: [0, 0.002, 0.048 + i * 0.009] });
    slideParts.push(ser);
  }
  // ejection port
  slideParts.push(xform(roundedBox(0.006, 0.014, 0.038, 0.001, 1), { pos: [0.014, 0.006, 0.006] }));
  const slide = merge(slideParts);
  xform(slide, { pos: [0, 0.014, 0.028] });
  const slideMesh = G(gm, boxUV(slide, 0.07));
  slideMesh.name = 'slide';
  grp.add(slideMesh);

  // frame + rail + accessory rail
  const frameParts = [];
  frameParts.push(xform(roundedBox(0.026, 0.024, 0.150, 0.004, 2), { pos: [0, -0.008, 0.020] }));
  frameParts.push(xform(roundedBox(0.020, 0.008, 0.040, 0.002, 1), { pos: [0, -0.022, 0.070] }));
  const tg = ringGeo(0.018, 0.0040, 18, 8, Math.PI * 1.2);
  xform(tg, { pos: [0, -0.034, -0.010], rot: [0, Math.PI / 2, Math.PI * 0.45] });
  frameParts.push(tg);
  const frame = merge(frameParts);
  grp.add(G(pm, boxUV(frame, 0.08)));

  // grip with stippling (the polymer texture provides the stipple)
  const grip = pistolGrip(0.105);
  xform(grip, { pos: [0, -0.030, -0.048], rot: [-0.30, 0, 0], scale: [0.92, 1, 0.95] });
  grp.add(G(pm, boxUV(grip, 0.06)));

  // magazine base plate showing at the grip bottom
  const mag = roundedBox(0.020, 0.012, 0.036, 0.003, 1);
  xform(mag, { pos: [0, -0.132, -0.014] });
  const magMesh = G(gm, boxUV(mag, 0.04));
  magMesh.name = 'magazine';
  grp.add(magMesh);

  // barrel crown visible at the muzzle
  const crown = lathe([[0.005, 0], [0.010, 0], [0.011, 0.003], [0.011, 0.012], [0.005, 0.012]], 16);
  xform(crown, { pos: [0, 0.014, 0.112], rot: [Math.PI / 2, 0, 0] });
  grp.add(G(ch, cylUV(crown, 0.02)));

  // trigger
  const trig = extrude([[0, 0], [0.008, -0.002], [0.009, -0.016], [0.004, -0.021], [0.001, -0.012]], 0.005, { bevel: 0.0006 });
  xform(trig, { pos: [0, -0.028, -0.012], rot: [0, Math.PI / 2, 0] });
  grp.add(G(ch, boxUV(trig, 0.03)));

  // sights: tritium dots
  const rear = roundedBox(0.020, 0.008, 0.008, 0.0015, 1);
  xform(rear, { pos: [0, 0.032, -0.052] });
  grp.add(G(gm, boxUV(rear, 0.03)));
  for (const dx of [-0.006, 0.006]) {
    const d = new THREE.Mesh(new THREE.SphereGeometry(0.0016, 8, 6), mats.m.neonGreen);
    d.position.set(dx, 0.034, -0.049);
    grp.add(d);
  }
  const front = roundedBox(0.006, 0.010, 0.006, 0.0012, 1);
  xform(front, { pos: [0, 0.033, 0.100] });
  grp.add(G(gm, boxUV(front, 0.02)));
  const fd = new THREE.Mesh(new THREE.SphereGeometry(0.0017, 8, 6), mats.m.neonGreen);
  fd.position.set(0, 0.036, 0.100);
  grp.add(fd);

  // weapon light
  const light = roundedBox(0.018, 0.016, 0.044, 0.003, 1);
  xform(light, { pos: [0, -0.028, 0.078] });
  grp.add(G(gm, boxUV(light, 0.04)));

  grp.traverse(o => { if (o.isMesh) { o.frustumCulled = false; o.renderOrder = 3; } });

  return {
    group: grp,
    muzzleLocal: new THREE.Vector3(0, 0.014, 0.126),
    ejectLocal: new THREE.Vector3(0.018, 0.020, 0.006),
    magMesh,
    slideMesh,
    stats: {
      name: 'P-9 SIDEARM', dmg: 22, headMul: 3.4, rpm: 420, mag: 17, reserve: 170,
      spread: 0.010, adsSpread: 0.0030, recoil: 0.013, kick: 0.032, auto: false,
      reloadTime: 1.55, adsFov: 55, pellets: 1, range: 90, penetration: 1
    }
  };
}

/* ================================================================= SMG ===== */
export function buildSMG(mats) {
  const grp = new THREE.Group();
  grp.name = 'smg';
  const gm = mats.m.gunmetal, pm = mats.m.polymer, pt = mats.m.polymerTan;

  const body = merge([
    roundedBox(0.036, 0.052, 0.190, 0.006, 2),
    xform(roundedBox(0.040, 0.026, 0.060, 0.004, 1), { pos: [0, 0.024, -0.020] })
  ]);
  grp.add(G(gm, boxUV(body, 0.09)));

  // ventilated barrel shroud
  const shParts = [];
  shParts.push(xform(lathe([[0.019, -0.075], [0.022, -0.070], [0.022, 0.070], [0.019, 0.075]], 20), { rot: [Math.PI / 2, 0, 0] }));
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      const a = (j / 6) * Math.PI * 2;
      const hole = ringGeo(0.006, 0.0018, 10, 5);
      xform(hole, { pos: [Math.cos(a) * 0.021, Math.sin(a) * 0.021, -0.058 + i * 0.023], rot: [0, Math.PI / 2 - a, 0] });
      shParts.push(hole);
    }
  }
  const shroud = merge(shParts);
  xform(shroud, { pos: [0, 0.006, 0.190] });
  grp.add(G(gm, cylUV(shroud, 0.08)));

  const barrel = fluteBarrel(0.0068, 0.190, 8, 0.0015, 20);
  xform(barrel, { pos: [0, 0.006, 0.200] });
  grp.add(G(gm, cylUV(barrel, 0.05)));

  const supp = lathe([
    [0, -0.075], [0.0135, -0.075], [0.0145, -0.070], [0.0145, 0.070], [0.0135, 0.075], [0.006, 0.075], [0, 0.070]
  ], 22);
  supp.rotateX(Math.PI / 2);
  xform(supp, { pos: [0, 0.006, 0.352] });
  grp.add(G(gm, cylUV(supp, 0.06)));
  for (let i = 0; i < 5; i++) {
    const r = ringGeo(0.0148, 0.0018, 20, 6);
    xform(r, { pos: [0, 0.006, 0.300 + i * 0.026] });
    grp.add(G(gm, cylUV(r, 0.03)));
  }

  const rail = picatinnyRail(0.150, 0.020, 8);
  xform(rail, { pos: [0, 0.040, -0.010] });
  grp.add(G(gm, boxUV(rail, 0.05)));

  const mag = magazine(0.024, 0.150, 0.036, 0.10);
  xform(mag, { pos: [0, -0.120, 0.008], rot: [0.04, 0, 0] });
  const magMesh = G(pt, boxUV(mag, 0.07));
  magMesh.name = 'magazine';
  grp.add(magMesh);

  const grip = pistolGrip(0.092);
  xform(grip, { pos: [0, -0.042, -0.088], rot: [-0.26, 0, 0], scale: 0.95 });
  grp.add(G(pm, boxUV(grip, 0.06)));

  const tg = ringGeo(0.018, 0.0040, 18, 8, Math.PI * 1.15);
  xform(tg, { pos: [0, -0.042, -0.060], rot: [0, Math.PI / 2, Math.PI * 0.44] });
  grp.add(G(gm, boxUV(tg, 0.04)));

  // folding stock
  const st = merge([
    xform(tubeAlong([[0, 0, 0], [0, -0.006, -0.090], [0, -0.010, -0.150]], 0.0062, 18, 8), {}),
    xform(roundedBox(0.030, 0.044, 0.014, 0.005, 1), { pos: [0, -0.012, -0.156] })
  ]);
  xform(st, { pos: [0, 0.004, -0.098] });
  grp.add(G(gm, cylUV(st, 0.07)));

  // red dot
  const dot = new THREE.Group();
  const housing = merge([
    xform(roundedBox(0.030, 0.026, 0.040, 0.004, 1), { pos: [0, 0, 0] }),
    xform(roundedBox(0.024, 0.010, 0.026, 0.002, 1), { pos: [0, -0.017, 0] })
  ]);
  dot.add(G(pm, boxUV(housing, 0.06)));
  const window = new THREE.Mesh(
    new THREE.PlaneGeometry(0.021, 0.019, 4, 4),
    new THREE.MeshPhysicalMaterial({
      color: 0x0a2030, roughness: 0.05, metalness: 0.1, transmission: 0.6, thickness: 0.005,
      iridescence: 1.0, iridescenceIOR: 1.8, iridescenceThicknessRange: [200, 600], transparent: true, opacity: 0.5
    })
  );
  window.rotation.y = Math.PI;
  dot.add(window);
  const rd = new THREE.Mesh(new THREE.SphereGeometry(0.0013, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xff3020, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }));
  rd.position.z = 0.001;
  dot.add(rd);
  dot.position.set(0, 0.058, -0.005);
  grp.add(dot);

  grp.traverse(o => { if (o.isMesh) { o.frustumCulled = false; o.renderOrder = 3; } });

  return {
    group: grp,
    muzzleLocal: new THREE.Vector3(0, 0.006, 0.430),
    ejectLocal: new THREE.Vector3(0.022, 0.010, -0.010),
    magMesh,
    stats: {
      name: 'VECTOR-9', dmg: 18, headMul: 2.6, rpm: 1050, mag: 40, reserve: 320,
      spread: 0.011, adsSpread: 0.0040, recoil: 0.0080, kick: 0.021, auto: true,
      reloadTime: 1.85, adsFov: 52, pellets: 1, range: 70, penetration: 1, suppressed: true
    }
  };
}

/* ============================================================== SNIPER ===== */
export function buildSniper(mats) {
  const grp = new THREE.Group();
  grp.name = 'sniper';
  const gm = mats.m.gunmetal, pm = mats.m.polymer, rb = mats.m.rubber;

  const rec = merge([
    roundedBox(0.040, 0.050, 0.250, 0.006, 2),
    xform(roundedBox(0.044, 0.020, 0.080, 0.004, 1), { pos: [0, 0.024, -0.040] })
  ]);
  grp.add(G(gm, boxUV(rec, 0.10)));

  const barrel = fluteBarrel(0.0115, 0.480, 12, 0.003, 26);
  xform(barrel, { pos: [0, 0.004, 0.375] });
  grp.add(G(gm, cylUV(barrel, 0.08)));

  const brake = muzzleBrake(0.014, 0.070);
  xform(brake, { pos: [0, 0.004, 0.640] });
  grp.add(G(gm, cylUV(brake, 0.06)));

  const chassisParts = [];
  chassisParts.push(xform(roundedBox(0.048, 0.030, 0.240, 0.006, 2), { pos: [0, -0.038, 0.060] }));
  for (let i = 0; i < 8; i++) {
    chassisParts.push(xform(ringGeo(0.013, 0.0035, 12, 6), { pos: [0.022, -0.038, -0.020 + i * 0.030], rot: [0, Math.PI / 2, 0] }));
    chassisParts.push(xform(ringGeo(0.013, 0.0035, 12, 6), { pos: [-0.022, -0.038, -0.020 + i * 0.030], rot: [0, Math.PI / 2, 0] }));
  }
  const chassis = merge(chassisParts);
  grp.add(G(pm, boxUV(chassis, 0.10)));

  // bolt handle
  const boltH = merge([
    xform(chamferCyl(0.0062, 0.0062, 0.055, 12, 0.002), { pos: [0, 0, 0], rot: [0, 0, Math.PI / 2] }),
    xform(new THREE.SphereGeometry(0.011, 14, 10), { pos: [0.032, 0, 0] })
  ]);
  xform(boltH, { pos: [0.020, 0.010, -0.080], rot: [0, 0, -0.35] });
  const boltMesh = G(gm, cylUV(boltH, 0.05));
  boltMesh.name = 'bolt';
  grp.add(boltMesh);

  const mag = magazine(0.026, 0.090, 0.052, 0.0);
  xform(mag, { pos: [0, -0.086, -0.020] });
  const magMesh = G(gm, boxUV(mag, 0.07));
  magMesh.name = 'magazine';
  grp.add(magMesh);

  const grip = pistolGrip(0.105);
  xform(grip, { pos: [0, -0.052, -0.120], rot: [-0.18, 0, 0] });
  grp.add(G(pm, boxUV(grip, 0.07)));

  const tg = ringGeo(0.019, 0.0042, 18, 8, Math.PI * 1.15);
  xform(tg, { pos: [0, -0.052, -0.090], rot: [0, Math.PI / 2, Math.PI * 0.44] });
  grp.add(G(gm, boxUV(tg, 0.04)));

  // skeleton stock with adjustable cheek rest
  const stParts = [];
  stParts.push(xform(roundedBox(0.036, 0.048, 0.160, 0.008, 2), { pos: [0, -0.016, -0.220] }));
  stParts.push(xform(roundedBox(0.030, 0.024, 0.070, 0.006, 1), { pos: [0, 0.018, -0.190] }));
  // cut-out
  stParts.push(xform(ringGeo(0.026, 0.008, 20, 8), { pos: [0, -0.016, -0.240], rot: [0, Math.PI / 2, 0] }));
  const st = merge(stParts);
  grp.add(G(pm, boxUV(st, 0.10)));
  const pad = roundedBox(0.036, 0.070, 0.020, 0.007, 2);
  xform(pad, { pos: [0, -0.020, -0.308] });
  grp.add(G(rb, boxUV(pad, 0.05)));

  // bipod
  for (const s of [-1, 1]) {
    const leg = tubeAlong([[0, 0, 0], [s * 0.030, -0.070, 0.010], [s * 0.050, -0.135, 0.020]], 0.0048, 14, 8);
    xform(leg, { pos: [0, -0.050, 0.230] });
    grp.add(G(gm, cylUV(leg, 0.05)));
    const foot = new THREE.Mesh(new THREE.SphereGeometry(0.008, 10, 8), rb);
    foot.position.set(s * 0.050, -0.185, 0.250);
    grp.add(foot);
  }

  const rail = picatinnyRail(0.230, 0.022, 14);
  xform(rail, { pos: [0, 0.036, -0.030] });
  grp.add(G(gm, boxUV(rail, 0.06)));

  const optic = opticSight(pm, null, gm);
  optic.scale.set(1.35, 1.35, 1.7);
  optic.position.set(0, 0.078, -0.020);
  grp.add(optic);

  grp.traverse(o => { if (o.isMesh) { o.frustumCulled = false; o.renderOrder = 3; } });

  return {
    group: grp,
    muzzleLocal: new THREE.Vector3(0, 0.004, 0.680),
    ejectLocal: new THREE.Vector3(0.024, 0.012, -0.070),
    magMesh,
    boltMesh,
    stats: {
      name: 'LONGSHOT .338', dmg: 165, headMul: 2.4, rpm: 48, mag: 5, reserve: 40,
      spread: 0.016, adsSpread: 0.0002, recoil: 0.055, kick: 0.150, auto: false,
      reloadTime: 3.1, adsFov: 22, pellets: 1, range: 400, penetration: 4, scoped: true
    }
  };
}

/* ============================================================ GRENADE ====== */
export function buildGrenade(mats) {
  const parts = [];
  // fragmentation body with hexagonal facets
  const body = blob(0.032, [], { seg: 22, seed: 5, noiseAmp: 0.0015 });
  const pos = body.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const d = v.clone().normalize();
    const fac = Math.sin(d.y * 14) * Math.sin(Math.atan2(d.z, d.x) * 8);
    v.multiplyScalar(1 + fac * 0.030);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  pos.needsUpdate = true; body.computeVertexNormals();
  parts.push(body);
  // fuse assembly
  parts.push(xform(lathe([[0, 0], [0.010, 0], [0.011, 0.004], [0.010, 0.020], [0.008, 0.024], [0, 0.024]], 16), { pos: [0, 0.028, 0] }));
  // safety lever
  parts.push(xform(roundedBox(0.007, 0.040, 0.010, 0.002, 1), { pos: [0.012, 0.030, 0], rot: [0, 0, 0.10] }));
  const g = merge(parts);
  const mesh = new THREE.Mesh(boxUV(g, 0.06), mats.m.paintGreen);
  // pull ring
  const ring = new THREE.Mesh(cylUV(ringGeo(0.011, 0.0022, 16, 6), 0.03), mats.m.chrome);
  ring.position.set(0.016, 0.050, 0);
  ring.rotation.y = Math.PI / 2;
  const grp = new THREE.Group();
  grp.add(mesh); grp.add(ring);
  grp.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return grp;
}

/* ============================================================= HANDS ======= */
/**
 * Procedural gloved hands/arms for the viewmodel. Built from tapered lathes with
 * articulated finger segments so the grip reads as an actual hand, not a blob.
 */
export function buildArms(mats) {
  const grp = new THREE.Group();
  const glove = mats.m.leather;
  const sleeve = mats.m.ragsGreen || mats.m.rags;

  const makeHand = (side) => {
    const h = new THREE.Group();
    // palm — wedge shaped, thicker at the knuckles
    const palm = blob(0.040, [
      [0, 1, 0, 0.010, 2], [side, 0.2, 0, 0.008, 2]
    ], { seg: 18, seed: side > 0 ? 7 : 11, noiseAmp: 0.0015 });
    palm.scale(0.80, 0.55, 1.05);
    h.add(G(glove, boxUV(palm, 0.08)));

    // fingers: 3 phalanges each, curled into a grip
    for (let f = 0; f < 4; f++) {
      const base = new THREE.Group();
      const spread = (f - 1.5) * 0.020;
      base.position.set(side * 0.006, 0.006 - Math.abs(f - 1.5) * 0.003, 0.032 + spread * 0.0);
      base.position.x += spread * side * 0.0;
      base.position.x = side * (0.004 + f * 0.0);
      base.position.set(side * 0.010, 0.010, 0.030);
      let parent = base;
      let curl = 0.55;
      for (let s = 0; s < 3; s++) {
        const len = 0.026 - s * 0.005;
        const r = 0.0085 - s * 0.0012;
        const seg = new THREE.Group();
        seg.position.set(0, 0, s === 0 ? 0 : (0.026 - (s - 1) * 0.005));
        seg.rotation.x = -curl * (s === 0 ? 1.0 : 0.85);
        const gg = lathe([[0, -len / 2], [r, -len / 2 + 0.002], [r * 1.05, 0], [r * 0.92, len / 2 - 0.002], [0, len / 2]], 12);
        gg.rotateX(Math.PI / 2);
        xform(gg, { pos: [0, 0, len / 2] });
        seg.add(G(glove, cylUV(gg, 0.04)));
        parent.add(seg);
        parent = seg;
      }
      // lateral offset per finger
      base.position.x = side * 0.012;
      base.position.y = 0.012 - f * 0.0;
      base.position.z = 0.028;
      base.position.x = side * (0.014);
      base.translateX(-side * 0.0);
      base.position.y += (f - 1.5) * 0.0;
      base.position.x = side * 0.013;
      base.position.y = 0.010;
      base.position.z = 0.026;
      base.position.x += side * 0.0;
      base.position.y += (1.5 - f) * 0.0115;
      h.add(base);
    }

    // thumb
    const thumb = new THREE.Group();
    thumb.position.set(-side * 0.020, -0.004, 0.014);
    thumb.rotation.set(-0.5, side * 0.9, 0);
    let tp = thumb;
    for (let s = 0; s < 2; s++) {
      const len = 0.026 - s * 0.004;
      const r = 0.0100 - s * 0.0015;
      const sg = new THREE.Group();
      sg.position.set(0, 0, s === 0 ? 0 : 0.026);
      sg.rotation.x = -0.45;
      const gg = lathe([[0, -len / 2], [r, -len / 2 + 0.002], [r * 1.05, 0], [r * 0.9, len / 2 - 0.002], [0, len / 2]], 12);
      gg.rotateX(Math.PI / 2);
      xform(gg, { pos: [0, 0, len / 2] });
      sg.add(G(glove, cylUV(gg, 0.04)));
      tp.add(sg); tp = sg;
    }
    h.add(thumb);

    // wrist + forearm sleeve (tapered, with cuff)
    const fa = lathe([
      [0, 0], [0.033, 0.005], [0.040, 0.030], [0.048, 0.120], [0.052, 0.230], [0.045, 0.245], [0, 0.250]
    ], 18);
    xform(fa, { rot: [Math.PI / 2, 0, 0], pos: [0, -0.004, -0.040] });
    const faMesh = G(sleeve, cylUV(fa, 0.12));
    h.add(faMesh);
    // cuff strap
    const cuff = lathe([[0.036, 0], [0.044, 0], [0.044, 0.022], [0.036, 0.022]], 18);
    xform(cuff, { rot: [Math.PI / 2, 0, 0], pos: [0, -0.004, -0.048] });
    h.add(G(glove, cylUV(cuff, 0.06)));
    // knuckle armour plates
    for (let f = 0; f < 4; f++) {
      const pl = roundedBox(0.013, 0.006, 0.015, 0.002, 1);
      xform(pl, { pos: [side * 0.013, 0.017, 0.024], rot: [0.3, 0, 0] });
      pl.translate(0, (1.5 - f) * 0.0, 0);
      h.add(G(mats.m.polymer, boxUV(pl, 0.04)));
    }

    h.traverse(o => { if (o.isMesh) { o.frustumCulled = false; o.renderOrder = 3; } });
    return h;
  };

  const right = makeHand(1);
  const left = makeHand(-1);
  grp.add(right); grp.add(left);
  return { group: grp, right, left };
}

export const WEAPON_BUILDERS = {
  rifle: buildRifle,
  shotgun: buildShotgun,
  smg: buildSMG,
  pistol: buildPistol,
  sniper: buildSniper
};
