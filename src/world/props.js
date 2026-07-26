/**
 * Prop library — every object placed in the level is a modeled, multi-part mesh
 * with bevels, panel lines, fasteners and wear. No naked cubes or planes.
 */
import * as THREE from 'three';
import {
  roundedBox, chamferCyl, lathe, extrude, merge, xform, boxUV, cylUV, scaleUV,
  ringGeo, bolts, rivetLine, tubeAlong, displace, blob, rock, greebleFace, terrainGeo, flatShade
} from '../gfx/geometry.js';
import { Rng } from '../gfx/noise.js';

const mesh = (geo, mat, cast = true, receive = true) => {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast; m.receiveShadow = receive;
  return m;
};

/* ============================================================ WALL PANELS == */
/**
 * A brick wall section built as an actual masonry volume: capped ends, a stone
 * plinth, a projecting cornice, weep holes and displaced surface so the
 * silhouette is never a flat plane.
 */
export function brickWall(mats, w, h, d, opts = {}) {
  const rng = new Rng(opts.seed || 1);
  const g = new THREE.Group();
  const parts = [];

  // main mass, subdivided so displacement can bow the surface
  const body = new THREE.BoxGeometry(w, h, d, Math.max(2, Math.round(w * 2)), Math.max(2, Math.round(h * 2)), 2);
  displace(body, { amp: 0.020, freq: 0.55, oct: 3, seed: rng.int(1, 999) });
  parts.push(body);

  // stone plinth at the base
  const plinth = roundedBox(w + 0.10, 0.34, d + 0.09, 0.03, 1);
  xform(plinth, { pos: [0, -h / 2 + 0.17, 0] });

  // cornice / drip course near the top
  const cornice = roundedBox(w + 0.12, 0.16, d + 0.11, 0.025, 1);
  xform(cornice, { pos: [0, h / 2 - 0.22, 0] });

  const bodyG = merge(parts);
  boxUV(bodyG, 1.6);
  g.add(mesh(bodyG, mats.m[opts.mat || 'brick']));

  const trimG = merge([plinth, cornice]);
  boxUV(trimG, 1.4);
  g.add(mesh(trimG, mats.m.concrete));

  // coping stones along the top edge
  if (opts.coping !== false) {
    const cops = [];
    const n = Math.max(2, Math.round(w / 0.55));
    for (let i = 0; i < n; i++) {
      const cw = w / n * 0.96;
      const c = roundedBox(cw, 0.11, d + 0.14, 0.02, 1);
      xform(c, { pos: [-w / 2 + (i + 0.5) * (w / n), h / 2 + 0.05, 0], rot: [rng.range(-0.02, 0.02), rng.range(-0.02, 0.02), 0] });
      cops.push(c);
    }
    const cg = merge(cops);
    boxUV(cg, 0.9);
    g.add(mesh(cg, mats.m.concreteDark));
  }

  // rubble at the foot
  if (opts.rubble !== false) {
    const rb = [];
    const n = rng.int(3, 7);
    for (let i = 0; i < n; i++) {
      const r = rng.range(0.06, 0.20);
      const rk = rock(r, rng.int(1, 9999), 1);
      xform(rk, {
        pos: [rng.range(-w / 2, w / 2), -h / 2 + r * 0.45, (rng.chance(0.5) ? 1 : -1) * (d / 2 + rng.range(0.05, 0.45))],
        rot: [rng.range(0, 6), rng.range(0, 6), rng.range(0, 6)]
      });
      rb.push(rk);
    }
    const rg = merge(rb);
    boxUV(rg, 0.5);
    g.add(mesh(rg, mats.m.concrete));
  }

  return g;
}

/** Concrete wall with formwork panels, rebar and blast damage. */
export function concreteWall(mats, w, h, d, opts = {}) {
  const rng = new Rng(opts.seed || 5);
  const g = new THREE.Group();

  const body = new THREE.BoxGeometry(w, h, d, Math.max(2, Math.round(w * 1.6)), Math.max(2, Math.round(h * 1.6)), 2);
  displace(body, { amp: 0.016, freq: 0.7, oct: 3, seed: rng.int(1, 999) });
  boxUV(body, 1.8);
  g.add(mesh(body, mats.m[opts.mat || 'concrete']));

  // panel seams (recessed strips)
  const seams = [];
  const rows = Math.max(1, Math.round(h / 1.4));
  for (let i = 1; i < rows; i++) {
    const s = roundedBox(w + 0.02, 0.045, d * 0.24, 0.008, 0);
    xform(s, { pos: [0, -h / 2 + i * (h / rows), d / 2] });
    seams.push(s);
    const s2 = s.clone();
    xform(s2, { pos: [0, 0, -d] });
    seams.push(s2);
  }
  // tie-rod holes
  const cols = Math.max(1, Math.round(w / 1.2));
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const hgeo = chamferCyl(0.030, 0.034, d * 0.10, 10, 0.006);
      xform(hgeo, {
        pos: [-w / 2 + (i + 0.5) * (w / cols), -h / 2 + (j + 0.5) * (h / rows), d / 2],
        rot: [Math.PI / 2, 0, 0]
      });
      seams.push(hgeo);
    }
  }
  const sg = merge(seams);
  boxUV(sg, 0.7);
  g.add(mesh(sg, mats.m.concreteDark));

  // exposed rebar from blast damage
  if (opts.damaged) {
    const bars = [];
    const n = rng.int(3, 6);
    for (let i = 0; i < n; i++) {
      const x = rng.range(-w / 2 + 0.4, w / 2 - 0.4);
      const y = rng.range(-h / 2 + 0.4, h / 2 - 0.6);
      const bend = rng.range(-0.4, 0.4);
      bars.push(tubeAlong([
        [x, y, -d / 2], [x + bend * 0.3, y + 0.1, 0], [x + bend, y + rng.range(0.1, 0.5), d / 2 + rng.range(0.1, 0.5)]
      ], 0.014, 14, 6));
    }
    g.add(mesh(merge(bars), mats.m.rustHeavy));
  }
  return g;
}

/* =============================================================== BUILDING == */
/**
 * A multi-storey building shell with modeled window reveals, sills, lintels,
 * a parapet, fire escape, roof units and pipework. Fully closed volume so it
 * reads as architecture from every angle.
 */
export function building(mats, w, d, floors, opts = {}) {
  const rng = new Rng(opts.seed || 11);
  const g = new THREE.Group();
  const fh = 3.2;                     // floor height
  const h = floors * fh;
  const wallT = 0.42;
  const matName = opts.mat || (rng.chance(0.5) ? 'brick' : 'concrete');
  const wallMat = mats.m[matName];
  const trimMat = mats.m.concreteDark;

  const shell = [];
  const trim = [];
  const colliders = [];

  // --- four walls with window openings punched by splitting into piers/spandrels
  const makeFace = (len, axis, sign) => {
    const cols = Math.max(2, Math.round(len / 2.6));
    const pierW = 0.62;
    const winW = (len - cols * pierW - pierW) / cols;
    for (let f = 0; f < floors; f++) {
      const y0 = f * fh;
      // spandrel under the windows
      const sp = roundedBox(len, 1.05, wallT, 0.03, 1);
      place(sp, 0, y0 + 0.52, axis, sign);
      shell.push(sp);
      // header above
      const hd = roundedBox(len, fh - 1.05 - 1.55, wallT, 0.03, 1);
      place(hd, 0, y0 + 1.05 + 1.55 + (fh - 1.05 - 1.55) / 2, axis, sign);
      shell.push(hd);
      // piers between windows
      for (let c = 0; c <= cols; c++) {
        const x = -len / 2 + c * (winW + pierW) + pierW / 2;
        const p = roundedBox(pierW, 1.55, wallT, 0.03, 1);
        place(p, x, y0 + 1.05 + 0.775, axis, sign);
        shell.push(p);
      }
      // sills + lintels
      for (let c = 0; c < cols; c++) {
        const x = -len / 2 + pierW + c * (winW + pierW) + winW / 2;
        const sill = roundedBox(winW + 0.20, 0.11, wallT + 0.16, 0.02, 1);
        place(sill, x, y0 + 1.05, axis, sign);
        trim.push(sill);
        const lint = roundedBox(winW + 0.24, 0.14, wallT + 0.12, 0.02, 1);
        place(lint, x, y0 + 1.05 + 1.55, axis, sign);
        trim.push(lint);
        // window frame + broken glass
        if (rng.chance(0.78)) {
          const fr = windowFrame(mats, winW * 0.94, 1.42, rng);
          const off = (len / 2) * 0 + 0;
          if (axis === 'x') { fr.position.set(x, y0 + 1.05 + 0.71, sign * (d / 2 - wallT * 0.35)); fr.rotation.y = sign > 0 ? 0 : Math.PI; }
          else { fr.position.set(sign * (w / 2 - wallT * 0.35), y0 + 1.05 + 0.71, x); fr.rotation.y = sign > 0 ? Math.PI / 2 : -Math.PI / 2; }
          g.add(fr);
        }
      }
    }
  };

  function place(geo, x, y, axis, sign) {
    if (axis === 'x') xform(geo, { pos: [x, y, sign * (d / 2 - wallT / 2)] });
    else xform(geo, { pos: [sign * (w / 2 - wallT / 2), y, x], rot: [0, Math.PI / 2, 0] });
  }

  makeFace(w, 'x', 1);
  makeFace(w, 'x', -1);
  makeFace(d, 'z', 1);
  makeFace(d, 'z', -1);

  // corner quoins for a crisp silhouette
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const n = Math.round(h / 0.62);
    for (let i = 0; i < n; i++) {
      const wd = i % 2 === 0 ? 0.72 : 0.52;
      const q = roundedBox(wd, 0.58, 0.66, 0.03, 1);
      xform(q, { pos: [sx * (w / 2 - wd / 2 + 0.03), 0.29 + i * 0.62, sz * (d / 2 - 0.30)] });
      trim.push(q);
    }
  }

  // parapet + cornice at roof level
  for (const [len, axis, sign] of [[w, 'x', 1], [w, 'x', -1], [d, 'z', 1], [d, 'z', -1]]) {
    const par = roundedBox(len + 0.2, 1.05, 0.40, 0.04, 1);
    place(par, 0, h + 0.52, axis, sign);
    shell.push(par);
    const cor = roundedBox(len + 0.42, 0.24, 0.62, 0.03, 1);
    place(cor, 0, h + 0.05, axis, sign);
    trim.push(cor);
    const cap = roundedBox(len + 0.30, 0.13, 0.52, 0.025, 1);
    place(cap, 0, h + 1.10, axis, sign);
    trim.push(cap);
  }

  // roof slab
  const roof = roundedBox(w - 0.1, 0.32, d - 0.1, 0.03, 1);
  xform(roof, { pos: [0, h - 0.16, 0] });
  shell.push(roof);

  const shellG = merge(shell);
  boxUV(shellG, 1.7);
  g.add(mesh(shellG, wallMat));
  const trimG = merge(trim);
  boxUV(trimG, 1.2);
  g.add(mesh(trimG, trimMat));

  /* ---- roof furniture: HVAC, vents, water tank, antenna ---- */
  const roofY = h + 0.16;
  const hvacCount = rng.int(1, 3);
  for (let i = 0; i < hvacCount; i++) {
    const u = hvacUnit(mats, rng);
    u.position.set(rng.range(-w / 2 + 1.6, w / 2 - 1.6), roofY, rng.range(-d / 2 + 1.6, d / 2 - 1.6));
    u.rotation.y = rng.range(0, Math.PI * 2);
    g.add(u);
  }
  if (rng.chance(0.55)) {
    const t = waterTank(mats, rng);
    t.position.set(rng.range(-w / 4, w / 4), roofY, rng.range(-d / 4, d / 4));
    g.add(t);
  }
  // vent stacks
  for (let i = 0; i < rng.int(2, 5); i++) {
    const vh = rng.range(0.5, 1.5);
    const v = merge([
      lathe([[0, 0], [0.13, 0], [0.14, 0.04], [0.14, vh], [0.13, vh + 0.03], [0, vh + 0.03]], 14),
      xform(lathe([[0, 0], [0.20, 0], [0.21, 0.03], [0.19, 0.10], [0, 0.11]], 14), { pos: [0, vh + 0.02, 0] })
    ]);
    const vm = mesh(cylUV(v, 0.35), mats.m.rust);
    vm.position.set(rng.range(-w / 2 + 1, w / 2 - 1), roofY, rng.range(-d / 2 + 1, d / 2 - 1));
    g.add(vm);
  }
  // antenna mast
  if (rng.chance(0.4)) {
    const mast = new THREE.Group();
    const pole = tubeAlong([[0, 0, 0], [0, 3.5, 0]], 0.045, 10, 8);
    mast.add(mesh(cylUV(pole, 0.4), mats.m.rust));
    for (let i = 0; i < 4; i++) {
      const guy = tubeAlong([[0, 3.2 - i * 0.0, 0], [Math.cos(i * 1.57) * 1.4, 0.2, Math.sin(i * 1.57) * 1.4]], 0.010, 8, 5);
      mast.add(mesh(guy, mats.m.rust));
    }
    for (let i = 0; i < 3; i++) {
      const cross = tubeAlong([[-0.5, 2.2 + i * 0.5, 0], [0.5, 2.2 + i * 0.5, 0]], 0.018, 6, 6);
      mast.add(mesh(cross, mats.m.rust));
    }
    mast.position.set(rng.range(-w / 3, w / 3), roofY, rng.range(-d / 3, d / 3));
    g.add(mast);
  }

  /* ---- fire escape on one face ---- */
  if (opts.fireEscape !== false && floors >= 2 && rng.chance(0.72)) {
    const fe = fireEscape(mats, floors, fh, rng);
    const side = rng.int(0, 3);
    if (side === 0) { fe.position.set(0, 0, d / 2 + 0.05); }
    else if (side === 1) { fe.position.set(0, 0, -d / 2 - 0.05); fe.rotation.y = Math.PI; }
    else if (side === 2) { fe.position.set(w / 2 + 0.05, 0, 0); fe.rotation.y = -Math.PI / 2; }
    else { fe.position.set(-w / 2 - 0.05, 0, 0); fe.rotation.y = Math.PI / 2; }
    g.add(fe);
  }

  /* ---- downpipes ---- */
  for (const sx of [-1, 1]) {
    if (!rng.chance(0.6)) continue;
    const sz = rng.chance(0.5) ? 1 : -1;
    const pts = [[sx * (w / 2 - 0.22), 0.1, sz * (d / 2 - 0.22)]];
    for (let i = 1; i <= floors; i++) pts.push([sx * (w / 2 - 0.22), i * fh, sz * (d / 2 - 0.22)]);
    const pipe = tubeAlong(pts, 0.062, floors * 4, 10);
    g.add(mesh(cylUV(pipe, 0.5), mats.m.rust));
    for (let i = 0; i <= floors; i++) {
      const br = ringGeo(0.075, 0.014, 12, 6);
      xform(br, { pos: [sx * (w / 2 - 0.22), 0.4 + i * fh, sz * (d / 2 - 0.22)], rot: [Math.PI / 2, 0, 0] });
      g.add(mesh(cylUV(br, 0.2), mats.m.rustHeavy));
    }
  }

  /* ---- ground floor entrance ---- */
  if (opts.door !== false) {
    const dr = doorway(mats, rng);
    dr.position.set(rng.range(-w / 4, w / 4), 0, d / 2 - 0.05);
    g.add(dr);
  }

  g.userData.footprint = { w, d, h: h + 1.2 };
  return g;
}

/* ------------------------------------------------------------ sub-props ---- */
export function windowFrame(mats, w, h, rng) {
  const g = new THREE.Group();
  const t = 0.055;
  const parts = [];
  parts.push(xform(roundedBox(w, t, 0.10, 0.012, 1), { pos: [0, h / 2, 0] }));
  parts.push(xform(roundedBox(w, t, 0.10, 0.012, 1), { pos: [0, -h / 2, 0] }));
  parts.push(xform(roundedBox(t, h, 0.10, 0.012, 1), { pos: [-w / 2, 0, 0] }));
  parts.push(xform(roundedBox(t, h, 0.10, 0.012, 1), { pos: [w / 2, 0, 0] }));
  parts.push(xform(roundedBox(w, t * 0.72, 0.08, 0.010, 1), { pos: [0, 0, 0] }));
  parts.push(xform(roundedBox(t * 0.72, h, 0.08, 0.010, 1), { pos: [0, 0, 0] }));
  const fg = merge(parts);
  boxUV(fg, 0.4);
  g.add(mesh(fg, mats.m.woodDark, true, true));

  // shattered glass panes: irregular polygons remaining in the corners
  if (rng.chance(0.7)) {
    const panes = [];
    for (const [sx, sy] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) {
      if (!rng.chance(0.65)) continue;
      const pw = w / 2 * rng.range(0.35, 0.92);
      const ph = h / 2 * rng.range(0.35, 0.92);
      const shard = extrude([
        [0, 0], [pw, 0], [pw * rng.range(0.5, 0.95), ph * rng.range(0.6, 1.0)],
        [pw * rng.range(0.15, 0.5), ph], [0, ph * rng.range(0.7, 1.0)]
      ], 0.010, { bevel: 0.002 });
      xform(shard, { pos: [sx * (pw / 2 + 0.02), sy * (ph / 2 + 0.02), 0], scale: [sx, sy, 1] });
      panes.push(shard);
    }
    if (panes.length) {
      const pg = merge(panes);
      boxUV(pg, 0.5);
      const pm = mesh(pg, mats.m.glass, false, false);
      g.add(pm);
    }
  }
  // boarded up with planks
  if (rng.chance(0.35)) {
    const planks = [];
    for (let i = 0; i < rng.int(2, 4); i++) {
      const pl = roundedBox(w * rng.range(1.0, 1.25), rng.range(0.16, 0.26), 0.045, 0.008, 1);
      xform(pl, { pos: [rng.range(-0.1, 0.1), rng.range(-h / 2, h / 2) * 0.8, 0.07], rot: [0, 0, rng.range(-0.22, 0.22)] });
      planks.push(pl);
    }
    const plg = merge(planks);
    boxUV(plg, 0.6);
    g.add(mesh(plg, mats.m.wood));
  }
  return g;
}

export function doorway(mats, rng) {
  const g = new THREE.Group();
  const w = 1.35, h = 2.35;
  // frame + arch
  const parts = [];
  parts.push(xform(roundedBox(0.22, h + 0.3, 0.42, 0.03, 1), { pos: [-w / 2 - 0.08, (h + 0.3) / 2, 0] }));
  parts.push(xform(roundedBox(0.22, h + 0.3, 0.42, 0.03, 1), { pos: [w / 2 + 0.08, (h + 0.3) / 2, 0] }));
  parts.push(xform(roundedBox(w + 0.60, 0.28, 0.46, 0.03, 1), { pos: [0, h + 0.34, 0] }));
  // step
  parts.push(xform(roundedBox(w + 0.7, 0.16, 0.9, 0.02, 1), { pos: [0, 0.08, 0.30] }));
  const fg = merge(parts);
  boxUV(fg, 0.9);
  g.add(mesh(fg, mats.m.concreteDark));

  // metal door hanging open
  const dParts = [];
  dParts.push(roundedBox(w * 0.94, h, 0.070, 0.012, 1));
  for (let i = 0; i < 3; i++) {
    dParts.push(xform(roundedBox(w * 0.72, 0.55, 0.020, 0.006, 1), { pos: [0, -h / 2 + 0.5 + i * 0.72, 0.045] }));
  }
  dParts.push(xform(ringGeo(0.055, 0.014, 14, 6), { pos: [w * 0.36, 0, 0.06], rot: [Math.PI / 2, 0, 0] }));
  const dg = merge(dParts);
  boxUV(dg, 0.7);
  const door = mesh(dg, mats.m.rust);
  const pivot = new THREE.Group();
  pivot.position.set(-w / 2, h / 2, 0.10);
  door.position.x = w * 0.47;
  pivot.add(door);
  pivot.rotation.y = rng.range(0.7, 2.2);
  g.add(pivot);
  return g;
}

export function fireEscape(mats, floors, fh, rng) {
  const g = new THREE.Group();
  const metal = mats.m.rust;
  const w = 2.4, d = 1.25;
  const parts = [];

  for (let f = 1; f <= floors; f++) {
    const y = f * fh - 0.25;
    // grated platform: slats
    for (let i = 0; i < 14; i++) {
      const s = roundedBox(w, 0.035, d / 16, 0.006, 0);
      xform(s, { pos: [0, y, -d / 2 + (i + 1) * (d / 16)] });
      parts.push(s);
    }
    // frame
    parts.push(xform(roundedBox(w + 0.08, 0.10, 0.07, 0.012, 1), { pos: [0, y - 0.05, -d / 2] }));
    parts.push(xform(roundedBox(w + 0.08, 0.10, 0.07, 0.012, 1), { pos: [0, y - 0.05, d / 2] }));
    parts.push(xform(roundedBox(0.07, 0.10, d, 0.012, 1), { pos: [-w / 2, y - 0.05, 0] }));
    parts.push(xform(roundedBox(0.07, 0.10, d, 0.012, 1), { pos: [w / 2, y - 0.05, 0] }));
    // railings
    for (const [x, z, len, rot] of [[0, d / 2, w, 0], [-w / 2, 0, d, Math.PI / 2], [w / 2, 0, d, Math.PI / 2]]) {
      parts.push(xform(tubeAlong([[-len / 2, 0, 0], [len / 2, 0, 0]], 0.024, 6, 7), { pos: [x, y + 1.05, z], rot: [0, rot, 0] }));
      parts.push(xform(tubeAlong([[-len / 2, 0, 0], [len / 2, 0, 0]], 0.018, 6, 6), { pos: [x, y + 0.55, z], rot: [0, rot, 0] }));
      const n = Math.max(2, Math.round(len / 0.30));
      for (let i = 0; i <= n; i++) {
        const t = -len / 2 + i * (len / n);
        const post = tubeAlong([[0, 0, 0], [0, 1.05, 0]], 0.012, 4, 5);
        const px = rot === 0 ? x + t : x;
        const pz = rot === 0 ? z : z + t;
        xform(post, { pos: [px, y, pz] });
        parts.push(post);
      }
    }
    // stair flight down to the level below
    if (f > 1) {
      const steps = 9;
      for (let i = 0; i < steps; i++) {
        const st = roundedBox(0.85, 0.045, 0.26, 0.008, 0);
        xform(st, { pos: [w / 2 - 0.5, y - (i + 1) * (fh / (steps + 1)), -d / 2 - (i + 1) * 0.26] });
        parts.push(st);
      }
      // stringers
      for (const s of [-1, 1]) {
        const str = tubeAlong([
          [w / 2 - 0.5 + s * 0.44, y - 0.1, -d / 2],
          [w / 2 - 0.5 + s * 0.44, y - fh + 0.2, -d / 2 - steps * 0.26]
        ], 0.030, 6, 6);
        parts.push(str);
        const rail = tubeAlong([
          [w / 2 - 0.5 + s * 0.44, y + 0.95, -d / 2],
          [w / 2 - 0.5 + s * 0.44, y - fh + 1.15, -d / 2 - steps * 0.26]
        ], 0.020, 6, 6);
        parts.push(rail);
      }
    }
    // wall brackets
    for (const s of [-1, 1]) {
      parts.push(xform(tubeAlong([[s * (w / 2 - 0.1), y - 0.05, d / 2], [s * (w / 2 - 0.1), y - 0.7, d / 2 + 0.0]], 0.022, 5, 6), {}));
      parts.push(xform(tubeAlong([[s * (w / 2 - 0.1), y - 0.05, -d / 2 + 0.05], [s * (w / 2 - 0.1), y - 0.75, d / 2]], 0.020, 5, 6), {}));
    }
  }
  // drop ladder at the bottom
  const lad = [];
  for (const s of [-1, 1]) lad.push(tubeAlong([[s * 0.28, fh - 0.4, -d / 2 - 0.2], [s * 0.28, 0.6, -d / 2 - 0.5]], 0.024, 8, 7));
  for (let i = 0; i < 8; i++) {
    const t = i / 7;
    lad.push(tubeAlong([[-0.28, fh - 0.4 - t * (fh - 1.0), -d / 2 - 0.2 - t * 0.3], [0.28, fh - 0.4 - t * (fh - 1.0), -d / 2 - 0.2 - t * 0.3]], 0.016, 4, 6));
  }
  parts.push(...lad);

  const pg = merge(parts);
  cylUV(pg, 0.55);
  g.add(mesh(pg, metal));
  return g;
}

export function hvacUnit(mats, rng) {
  const g = new THREE.Group();
  const w = rng.range(1.4, 2.4), h = rng.range(0.9, 1.5), d = rng.range(1.2, 1.9);
  const parts = [];
  parts.push(xform(roundedBox(w, h, d, 0.05, 2), { pos: [0, h / 2, 0] }));
  // ribbed side panels
  for (let i = 0; i < 8; i++) {
    parts.push(xform(roundedBox(0.03, h * 0.8, d * 0.94, 0.006, 0), { pos: [-w / 2 + (i + 0.5) * (w / 8), h / 2, 0] }));
  }
  // base skid
  parts.push(xform(roundedBox(w + 0.16, 0.10, d + 0.16, 0.02, 1), { pos: [0, 0.05, 0] }));
  const pg = merge(parts);
  boxUV(pg, 0.9);
  g.add(mesh(pg, mats.m.rust));

  // fan grille + blades
  const grille = [];
  for (let i = 0; i < 5; i++) grille.push(xform(ringGeo(0.16 + i * 0.075, 0.014, 22, 6), { rot: [Math.PI / 2, 0, 0] }));
  for (let i = 0; i < 8; i++) {
    grille.push(xform(tubeAlong([[0, 0, 0], [Math.cos(i * 0.785) * 0.50, 0, Math.sin(i * 0.785) * 0.50]], 0.010, 4, 5), {}));
  }
  const gg = merge(grille);
  xform(gg, { pos: [0, h + 0.02, 0] });
  g.add(mesh(cylUV(gg, 0.3), mats.m.chrome));

  const blades = [];
  for (let i = 0; i < 5; i++) {
    const b = roundedBox(0.42, 0.012, 0.16, 0.004, 1);
    xform(b, { pos: [Math.cos(i * 1.256) * 0.22, 0, Math.sin(i * 1.256) * 0.22], rot: [0.35, -i * 1.256, 0] });
    blades.push(b);
  }
  const bg = merge(blades);
  xform(bg, { pos: [0, h - 0.08, 0] });
  g.add(mesh(boxUV(bg, 0.3), mats.m.rustHeavy));

  // ducting
  const duct = tubeAlong([[w / 2 - 0.1, h * 0.6, 0], [w / 2 + 0.6, h * 0.6, 0], [w / 2 + 0.9, h * 0.25, 0.4]], 0.20, 16, 12);
  g.add(mesh(cylUV(duct, 0.5), mats.m.rustHeavy));
  for (let i = 0; i < 4; i++) {
    const r = ringGeo(0.215, 0.020, 16, 6);
    xform(r, { pos: [w / 2 + i * 0.22, h * 0.6, 0], rot: [0, 0, Math.PI / 2] });
    g.add(mesh(cylUV(r, 0.2), mats.m.rust));
  }
  return g;
}

export function waterTank(mats, rng) {
  const g = new THREE.Group();
  const r = rng.range(1.0, 1.6), h = rng.range(1.8, 2.8);
  // tank: staved wooden barrel style with steel bands
  const body = lathe([
    [0, 0], [r * 0.94, 0], [r, 0.12], [r * 1.02, h / 2], [r, h - 0.12], [r * 0.9, h], [0, h + 0.10]
  ], 24);
  g.add(mesh(cylUV(body, 0.7), mats.m.wood));
  // staves
  const staves = [];
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2;
    const s = roundedBox(0.10, h, 0.05, 0.008, 0);
    xform(s, { pos: [Math.cos(a) * r * 1.01, h / 2, Math.sin(a) * r * 1.01], rot: [0, -a, 0] });
    staves.push(s);
  }
  g.add(mesh(boxUV(merge(staves), 0.5), mats.m.woodDark));
  // bands
  const bands = [];
  for (let i = 0; i < 4; i++) bands.push(xform(ringGeo(r * 1.04, 0.035, 26, 7), { pos: [0, 0.30 + i * (h - 0.6) / 3, 0], rot: [Math.PI / 2, 0, 0] }));
  g.add(mesh(cylUV(merge(bands), 0.3), mats.m.rust));
  // conical lid
  const lid = lathe([[0, h + 0.05], [r * 1.05, h + 0.02], [r * 0.4, h + 0.45], [0, h + 0.52]], 22);
  g.add(mesh(cylUV(lid, 0.5), mats.m.rustHeavy));
  // steel legs
  const legs = [];
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2 + Math.PI / 4;
    legs.push(tubeAlong([[Math.cos(a) * r * 0.8, 0.05, Math.sin(a) * r * 0.8], [Math.cos(a) * r * 1.1, -1.2, Math.sin(a) * r * 1.1]], 0.045, 6, 7));
  }
  for (let i = 0; i < 4; i++) {
    const a1 = i * Math.PI / 2 + Math.PI / 4, a2 = ((i + 1) % 4) * Math.PI / 2 + Math.PI / 4;
    legs.push(tubeAlong([
      [Math.cos(a1) * r * 1.0, -0.55, Math.sin(a1) * r * 1.0],
      [Math.cos(a2) * r * 1.0, -0.55, Math.sin(a2) * r * 1.0]
    ], 0.024, 5, 6));
  }
  const lg = merge(legs);
  xform(lg, { pos: [0, 1.2, 0] });
  g.add(mesh(cylUV(lg, 0.4), mats.m.rust));
  g.position.y = 0;
  g.children.forEach(c => { c.position.y += 1.2; });
  return g;
}

/* ============================================================== VEHICLES === */
/** Wrecked car — modeled body with wheel arches, glass, bumpers, exhaust. */
export function wreckedCar(mats, rng) {
  const g = new THREE.Group();
  const bodyMat = rng.pick([mats.m.paintRed, mats.m.paintBlue, mats.m.paintGreen, mats.m.paintYellow, mats.m.rustHeavy]);
  const L = 4.3, W = 1.85, H = 0.72;

  // lower body: tapered slab with rounded corners
  const parts = [];
  const lower = roundedBox(W, H, L, 0.22, 3);
  parts.push(xform(lower, { pos: [0, 0.62, 0] }));
  // hood & trunk taper
  parts.push(xform(roundedBox(W * 0.94, 0.36, 1.25, 0.14, 2), { pos: [0, 0.92, L / 2 - 0.72] }));
  parts.push(xform(roundedBox(W * 0.94, 0.34, 1.05, 0.14, 2), { pos: [0, 0.90, -L / 2 + 0.62] }));
  // greeble: panel gaps
  const bodyG = merge(parts);
  displace(bodyG, { amp: 0.020, freq: 2.2, oct: 3, seed: rng.int(1, 999) });
  boxUV(bodyG, 1.1);
  g.add(mesh(bodyG, bodyMat));

  // cabin/greenhouse (angled pillars + roof)
  const cab = [];
  cab.push(xform(roundedBox(W * 0.90, 0.62, 2.0, 0.16, 2), { pos: [0, 1.32, -0.10] }));
  // A/B/C pillars
  for (const sx of [-1, 1]) {
    cab.push(xform(roundedBox(0.10, 0.70, 0.12, 0.02, 1), { pos: [sx * W * 0.42, 1.28, 0.92], rot: [0.45, 0, 0] }));
    cab.push(xform(roundedBox(0.10, 0.70, 0.12, 0.02, 1), { pos: [sx * W * 0.42, 1.28, -0.05] }));
    cab.push(xform(roundedBox(0.10, 0.70, 0.12, 0.02, 1), { pos: [sx * W * 0.42, 1.28, -1.05], rot: [-0.40, 0, 0] }));
  }
  const cabG = merge(cab);
  displace(cabG, { amp: 0.016, freq: 3.0, oct: 3, seed: rng.int(1, 999) });
  boxUV(cabG, 0.9);
  g.add(mesh(cabG, bodyMat));

  // roof crushed inward on some wrecks
  if (rng.chance(0.5)) {
    const dent = blob(0.55, [], { seg: 14, seed: rng.int(1, 999), noiseAmp: 0.05 });
    dent.scale(1.3, 0.35, 1.0);
    xform(dent, { pos: [rng.range(-0.3, 0.3), 1.55, rng.range(-0.6, 0.4)] });
    g.add(mesh(boxUV(dent, 0.6), bodyMat));
  }

  // wheel arches
  const arches = [];
  for (const sx of [-1, 1]) for (const sz of [1, -1]) {
    const a = ringGeo(0.48, 0.10, 18, 8, Math.PI);
    xform(a, { pos: [sx * (W / 2 - 0.02), 0.62, sz * 1.35], rot: [0, Math.PI / 2, 0] });
    arches.push(a);
  }
  g.add(mesh(cylUV(merge(arches), 0.4), bodyMat));

  // bumpers
  for (const sz of [1, -1]) {
    const b = merge([
      roundedBox(W * 1.02, 0.26, 0.24, 0.06, 2),
      xform(roundedBox(W * 0.7, 0.10, 0.12, 0.02, 1), { pos: [0, -0.10, 0.10] })
    ]);
    xform(b, { pos: [0, 0.56, sz * (L / 2 + 0.05)] });
    g.add(mesh(boxUV(b, 0.5), mats.m.chrome));
  }

  // wheels (tyre + rim + spokes), some missing/flat
  for (const sx of [-1, 1]) for (const sz of [1, -1]) {
    if (rng.chance(0.18)) continue;
    const wg = new THREE.Group();
    const flat = rng.chance(0.5);
    const tyre = new THREE.TorusGeometry(0.30, 0.135, 12, 22);
    if (flat) { tyre.scale(1, 0.62, 1); }
    wg.add(mesh(cylUV(tyre, 0.35), mats.m.rubber));
    const rim = lathe([[0, -0.09], [0.16, -0.09], [0.20, -0.05], [0.20, 0.05], [0.16, 0.09], [0, 0.09]], 16);
    xform(rim, { rot: [Math.PI / 2, 0, 0] });
    wg.add(mesh(cylUV(rim, 0.2), mats.m.chrome));
    const spokes = [];
    for (let i = 0; i < 5; i++) {
      const a = i * Math.PI * 2 / 5;
      spokes.push(xform(roundedBox(0.05, 0.34, 0.04, 0.008, 1), { rot: [0, 0, a] }));
    }
    const sg = merge(spokes);
    xform(sg, { rot: [Math.PI / 2, 0, 0] });
    wg.add(mesh(boxUV(sg, 0.2), mats.m.chrome));
    wg.position.set(sx * (W / 2 + 0.04), flat ? 0.22 : 0.32, sz * 1.35);
    wg.rotation.y = Math.PI / 2;
    wg.rotation.z = rng.range(-0.1, 0.1);
    g.add(wg);
  }

  // windows: mostly shattered
  const glassParts = [];
  if (rng.chance(0.4)) glassParts.push(xform(roundedBox(W * 0.80, 0.55, 0.02, 0.01, 1), { pos: [0, 1.34, 0.95], rot: [0.42, 0, 0] }));
  for (const sx of [-1, 1]) {
    if (rng.chance(0.45)) glassParts.push(xform(roundedBox(0.02, 0.48, 0.85, 0.01, 1), { pos: [sx * W * 0.43, 1.34, 0.42] }));
    if (rng.chance(0.45)) glassParts.push(xform(roundedBox(0.02, 0.48, 0.80, 0.01, 1), { pos: [sx * W * 0.43, 1.34, -0.55] }));
  }
  if (glassParts.length) g.add(mesh(boxUV(merge(glassParts), 0.5), mats.m.glass, false, false));

  // headlights + grille
  const front = [];
  for (const sx of [-1, 1]) front.push(xform(lathe([[0, 0], [0.16, 0], [0.17, 0.05], [0.13, 0.10], [0, 0.11]], 14), { pos: [sx * 0.55, 0.84, L / 2 - 0.10], rot: [Math.PI / 2, 0, 0] }));
  g.add(mesh(cylUV(merge(front), 0.2), mats.m.glass, false, false));
  const grille = [];
  for (let i = 0; i < 7; i++) grille.push(xform(roundedBox(1.15, 0.030, 0.06, 0.008, 0), { pos: [0, 0.72 + i * 0.045, L / 2 + 0.02] }));
  g.add(mesh(boxUV(merge(grille), 0.3), mats.m.chrome));

  // exhaust + underbody
  g.add(mesh(cylUV(tubeAlong([[0.4, 0.30, -L / 2 - 0.10], [0.3, 0.32, 0], [0.2, 0.34, L / 2 - 0.6]], 0.045, 16, 8), 0.4), mats.m.rust));
  const under = roundedBox(W * 0.92, 0.10, L * 0.88, 0.03, 1);
  xform(under, { pos: [0, 0.30, 0] });
  g.add(mesh(boxUV(under, 0.7), mats.m.rustHeavy));

  // random damage tilt
  g.rotation.z = rng.range(-0.08, 0.08);
  g.rotation.x = rng.range(-0.04, 0.04);
  g.userData.footprint = { w: W + 0.3, d: L + 0.3, h: 1.7 };
  return g;
}

/* ================================================================ CLUTTER == */
export function barrel(mats, rng) {
  const g = new THREE.Group();
  const r = 0.32, h = 0.92;
  const body = lathe([
    [0, 0], [r * 0.90, 0], [r * 0.94, 0.04], [r, 0.16], [r * 1.02, h / 2],
    [r, h - 0.16], [r * 0.94, h - 0.04], [r * 0.90, h], [0, h]
  ], 22);
  const mat = rng.pick([mats.m.paintRed, mats.m.paintBlue, mats.m.rust, mats.m.hazard, mats.m.paintYellow]);
  g.add(mesh(cylUV(body, 0.55), mat));
  const ribs = [];
  for (const y of [0.24, h / 2, h - 0.24]) ribs.push(xform(ringGeo(r * 1.03, 0.026, 22, 7), { pos: [0, y, 0], rot: [Math.PI / 2, 0, 0] }));
  ribs.push(xform(ringGeo(r * 0.92, 0.022, 20, 6), { pos: [0, h - 0.01, 0], rot: [Math.PI / 2, 0, 0] }));
  ribs.push(xform(ringGeo(r * 0.92, 0.022, 20, 6), { pos: [0, 0.01, 0], rot: [Math.PI / 2, 0, 0] }));
  g.add(mesh(cylUV(merge(ribs), 0.25), mats.m.rustHeavy));
  // bung caps
  for (const dx of [-0.14, 0.13]) {
    const cap = chamferCyl(0.048, 0.052, 0.026, 12, 0.006);
    xform(cap, { pos: [dx, h + 0.010, 0.06] });
    g.add(mesh(cylUV(cap, 0.1), mats.m.chrome));
  }
  g.userData.footprint = { w: r * 2.1, d: r * 2.1, h };
  return g;
}

export function crate(mats, rng) {
  const g = new THREE.Group();
  const s = rng.range(0.65, 1.05);
  const parts = [];
  // plank shell
  const n = 5;
  for (const [ax, sign] of [['z', 1], ['z', -1], ['x', 1], ['x', -1]]) {
    for (let i = 0; i < n; i++) {
      const pl = roundedBox(s * 0.98, s / n * 0.92, 0.045, 0.008, 1);
      const y = -s / 2 + (i + 0.5) * (s / n);
      if (ax === 'z') xform(pl, { pos: [0, y, sign * s / 2] });
      else xform(pl, { pos: [sign * s / 2, y, 0], rot: [0, Math.PI / 2, 0] });
      parts.push(pl);
    }
  }
  for (let i = 0; i < n; i++) {
    const pl = roundedBox(s * 0.98, 0.045, s / n * 0.92, 0.008, 1);
    xform(pl, { pos: [0, s / 2, -s / 2 + (i + 0.5) * (s / n)] });
    parts.push(pl);
    const pb = pl.clone(); xform(pb, { pos: [0, -s, 0] });
    parts.push(pb);
  }
  // corner posts
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    parts.push(xform(roundedBox(0.075, s * 1.02, 0.075, 0.012, 1), { pos: [sx * (s / 2 - 0.03), 0, sz * (s / 2 - 0.03)] }));
  }
  // diagonal brace
  for (const sign of [1, -1]) {
    const br = roundedBox(s * 1.30, 0.075, 0.035, 0.008, 1);
    xform(br, { pos: [0, 0, sign * (s / 2 + 0.02)], rot: [0, 0, sign * 0.72] });
    parts.push(br);
  }
  const cg = merge(parts);
  boxUV(cg, 0.55);
  g.add(mesh(cg, rng.chance(0.5) ? mats.m.wood : mats.m.woodDark));
  g.position.y = s / 2;
  g.rotation.y = rng.range(0, Math.PI * 2);
  g.userData.footprint = { w: s * 1.15, d: s * 1.15, h: s };
  return g;
}

export function sandbagWall(mats, rng, len = 3) {
  const g = new THREE.Group();
  const parts = [];
  const rows = 4;
  for (let r = 0; r < rows; r++) {
    const count = Math.max(1, Math.round(len / 0.52) - Math.floor(r / 2));
    const off = (r % 2) * 0.26;
    for (let i = 0; i < count; i++) {
      const bag = blob(0.27, [[1, 0, 0, 0.06, 2], [-1, 0, 0, 0.06, 2]],
        { seg: 12, seed: rng.int(1, 9999), noiseAmp: 0.014 });
      bag.scale(1.05, 0.52, 0.72);
      xform(bag, {
        pos: [-len / 2 + off + i * 0.52 + rng.range(-0.02, 0.02), 0.14 + r * 0.24, rng.range(-0.04, 0.04) - r * 0.05],
        rot: [rng.range(-0.08, 0.08), rng.range(-0.12, 0.12), rng.range(-0.08, 0.08)]
      });
      parts.push(bag);
    }
  }
  const bg = merge(parts);
  boxUV(bg, 0.45);
  g.add(mesh(bg, mats.m.sandbag));
  g.userData.footprint = { w: len, d: 0.75, h: rows * 0.24 };
  return g;
}

export function dumpster(mats, rng) {
  const g = new THREE.Group();
  const w = 1.85, h = 1.25, d = 1.25;
  const parts = [];
  // tapered body (wider at the top)
  const seg = 6;
  for (let i = 0; i < seg; i++) {
    const t = i / (seg - 1);
    const sc = 0.82 + t * 0.18;
    parts.push(xform(roundedBox(w * sc, h / seg * 1.25, d * sc, 0.035, 1), { pos: [0, 0.12 + t * (h - 0.2), 0] }));
  }
  // corrugation ribs
  for (let i = 0; i < 6; i++) {
    parts.push(xform(roundedBox(0.05, h * 0.85, d * 1.01, 0.010, 0), { pos: [-w / 2 + (i + 0.5) * (w / 6), h / 2 + 0.1, 0] }));
  }
  const bg = merge(parts);
  displace(bg, { amp: 0.012, freq: 3, oct: 3, seed: rng.int(1, 999) });
  boxUV(bg, 0.9);
  g.add(mesh(bg, rng.pick([mats.m.paintGreen, mats.m.paintBlue, mats.m.rustHeavy])));

  // lids, one flipped open
  for (const sz of [-1, 1]) {
    const lid = merge([
      roundedBox(w * 0.98, 0.07, d * 0.50, 0.02, 1),
      xform(roundedBox(w * 0.30, 0.10, 0.07, 0.015, 1), { pos: [0, 0.06, -d * 0.22] })
    ]);
    const pivot = new THREE.Group();
    pivot.position.set(0, h + 0.06, 0);
    const m = mesh(boxUV(lid, 0.6), mats.m.rust);
    m.position.z = sz * d * 0.26;
    pivot.add(m);
    pivot.rotation.x = sz > 0 ? rng.range(-2.2, -0.2) : rng.range(-0.15, 0.05);
    g.add(pivot);
  }
  // castors
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const c = new THREE.TorusGeometry(0.10, 0.045, 8, 14);
    xform(c, { pos: [sx * (w / 2 - 0.20), 0.10, sz * (d / 2 - 0.20)], rot: [0, Math.PI / 2, 0] });
    g.add(mesh(cylUV(c, 0.15), mats.m.rubber));
  }
  // overflowing trash bags
  for (let i = 0; i < rng.int(2, 5); i++) {
    const b = blob(rng.range(0.16, 0.26), [[0, 1, 0, 0.05, 2]], { seg: 12, seed: rng.int(1, 9999), noiseAmp: 0.020 });
    xform(b, { pos: [rng.range(-w / 2 + 0.3, w / 2 - 0.3), h + rng.range(0.0, 0.25), rng.range(-d / 3, d / 3)] });
    g.add(mesh(boxUV(b, 0.3), mats.m.rubber));
  }
  g.userData.footprint = { w: w + 0.2, d: d + 0.2, h };
  return g;
}

export function streetLamp(mats, rng, lit = true) {
  const g = new THREE.Group();
  const H = rng.range(5.2, 6.8);
  // fluted base
  const base = lathe([
    [0, 0], [0.24, 0], [0.26, 0.06], [0.22, 0.30], [0.16, 0.42], [0.13, 0.60], [0.115, H * 0.55], [0.095, H], [0, H]
  ], 16);
  g.add(mesh(cylUV(base, 0.8), mats.m.rust));
  // decorative collar rings
  const rings = [];
  for (const y of [0.42, 0.72, H * 0.5]) rings.push(xform(ringGeo(0.135, 0.022, 16, 6), { pos: [0, y, 0], rot: [Math.PI / 2, 0, 0] }));
  g.add(mesh(cylUV(merge(rings), 0.2), mats.m.rustHeavy));
  // curved arm
  const arm = tubeAlong([
    [0, H, 0], [0, H + 0.45, 0.25], [0.35, H + 0.62, 0.85], [0.95, H + 0.55, 1.45], [1.35, H + 0.35, 1.75]
  ], 0.070, 22, 10);
  g.add(mesh(cylUV(arm, 0.5), mats.m.rust));
  // luminaire housing
  const housing = lathe([
    [0, 0], [0.30, -0.02], [0.34, -0.10], [0.30, -0.28], [0.20, -0.34], [0, -0.35]
  ], 18);
  xform(housing, { pos: [1.35, H + 0.35, 1.75] });
  g.add(mesh(cylUV(housing, 0.4), mats.m.rustHeavy));
  // lens
  const lens = lathe([[0, -0.30], [0.22, -0.32], [0.26, -0.40], [0.12, -0.46], [0, -0.47]], 16);
  xform(lens, { pos: [1.35, H + 0.35, 1.75] });
  const lm = mesh(cylUV(lens, 0.3), lit ? mats.m.lampGlass : mats.m.lampGlassOff, false, false);
  g.add(lm);
  if (lit) {
    const light = new THREE.PointLight(0xffb060, 9, 20, 2.0);
    light.position.set(1.35, H - 0.10, 1.75);
    light.castShadow = false;
    g.add(light);
    g.userData.light = light;
    g.userData.lamp = lm;
  }
  g.userData.footprint = { w: 0.55, d: 0.55, h: H };
  return g;
}

export function fenceSection(mats, rng, len = 3.2, h = 2.3) {
  const g = new THREE.Group();
  const parts = [];
  // posts
  for (const sx of [-1, 1]) {
    parts.push(xform(lathe([[0, 0], [0.065, 0], [0.070, 0.05], [0.070, h], [0.055, h + 0.05], [0, h + 0.06]], 12), { pos: [sx * len / 2, 0, 0] }));
  }
  // rails
  for (const y of [0.10, h]) parts.push(xform(tubeAlong([[-len / 2, y, 0], [len / 2, y, 0]], 0.030, 6, 8), {}));
  const fg = merge(parts);
  g.add(mesh(cylUV(fg, 0.4), mats.m.rust));

  // chain-link: a woven diamond grid built from thin tubes
  const links = [];
  const step = 0.24;
  const nx = Math.floor(len / step);
  for (let i = -nx; i <= nx; i++) {
    const x0 = i * step;
    links.push(tubeAlong([[x0 - h * 0.5, 0.10, 0.01], [x0 + h * 0.5, h, -0.01]], 0.009, 4, 4));
    links.push(tubeAlong([[x0 - h * 0.5, h, -0.01], [x0 + h * 0.5, 0.10, 0.01]], 0.009, 4, 4));
  }
  const lg = merge(links);
  // clip to the panel bounds
  const pos = lg.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i);
    if (Math.abs(x) > len / 2) pos.setX(i, Math.sign(x) * len / 2);
    if (y < 0.10) pos.setY(i, 0.10);
    if (y > h) pos.setY(i, h);
  }
  pos.needsUpdate = true; lg.computeVertexNormals();
  const lmesh = mesh(cylUV(lg, 0.3), mats.m.chrome, false, false);
  g.add(lmesh);

  // razor wire coil on top
  if (rng.chance(0.5)) {
    const coilPts = [];
    for (let i = 0; i <= 90; i++) {
      const t = i / 90;
      const a = t * Math.PI * 14;
      coilPts.push([-len / 2 + t * len, h + 0.22 + Math.sin(a) * 0.16, Math.cos(a) * 0.16]);
    }
    g.add(mesh(cylUV(tubeAlong(coilPts, 0.010, 120, 5), 0.2), mats.m.chrome, false, false));
  }
  g.userData.footprint = { w: len, d: 0.20, h };
  return g;
}

export function jerseyBarrier(mats, rng) {
  const g = new THREE.Group();
  // classic New-Jersey profile extruded
  const prof = [
    [-0.30, 0], [0.30, 0], [0.30, 0.08], [0.16, 0.30], [0.11, 0.85], [0.13, 0.92],
    [-0.13, 0.92], [-0.11, 0.85], [-0.16, 0.30], [-0.30, 0.08]
  ];
  const geo = extrude(prof, 2.2, { bevel: 0.02 });
  geo.rotateY(Math.PI / 2);
  displace(geo, { amp: 0.010, freq: 3, oct: 3, seed: rng.int(1, 999) });
  boxUV(geo, 0.9);
  const m = mesh(geo, rng.chance(0.4) ? mats.m.hazard : mats.m.concrete);
  m.position.y = 0.46;
  g.add(m);
  // lifting hooks
  for (const sx of [-1, 1]) {
    const hk = ringGeo(0.055, 0.014, 12, 6, Math.PI);
    xform(hk, { pos: [sx * 0.6, 0.94, 0], rot: [0, 0, 0] });
    g.add(mesh(cylUV(hk, 0.15), mats.m.rust));
  }
  g.userData.footprint = { w: 2.2, d: 0.62, h: 0.92 };
  return g;
}

export function deadTree(mats, rng) {
  const g = new THREE.Group();
  const branches = [];
  const H = rng.range(4.5, 7.5);
  // trunk with taper and root flare
  const trunkPts = [[0, 0, 0]];
  let x = 0, z = 0;
  for (let i = 1; i <= 6; i++) {
    x += rng.range(-0.14, 0.14); z += rng.range(-0.14, 0.14);
    trunkPts.push([x, (i / 6) * H, z]);
  }
  branches.push(tubeAlong(trunkPts, 0.24, 24, 10));
  // root flare
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + rng.range(-0.2, 0.2);
    branches.push(tubeAlong([
      [0, 0.5, 0],
      [Math.cos(a) * 0.4, 0.15, Math.sin(a) * 0.4],
      [Math.cos(a) * 0.9, -0.05, Math.sin(a) * 0.9]
    ], 0.09, 10, 7));
  }
  // recursive limbs
  const grow = (px, py, pz, dx, dy, dz, r, depth) => {
    if (depth <= 0 || r < 0.02) return;
    const len = rng.range(0.8, 1.8) * (depth / 3);
    const nx = px + dx * len, ny = py + dy * len, nz = pz + dz * len;
    branches.push(tubeAlong([
      [px, py, pz],
      [px + dx * len * 0.5 + rng.range(-0.15, 0.15), py + dy * len * 0.5, pz + dz * len * 0.5 + rng.range(-0.15, 0.15)],
      [nx, ny, nz]
    ], r, 10, 7));
    const n = rng.int(2, 3);
    for (let i = 0; i < n; i++) {
      const a = rng.range(0, Math.PI * 2), sp = rng.range(0.35, 0.85);
      grow(nx, ny, nz,
        dx + Math.cos(a) * sp, Math.max(0.15, dy - rng.range(0.05, 0.30)), dz + Math.sin(a) * sp,
        r * rng.range(0.52, 0.72), depth - 1);
    }
  };
  for (let i = 0; i < rng.int(3, 5); i++) {
    const a = rng.range(0, Math.PI * 2);
    grow(x, H * rng.range(0.55, 0.95), z, Math.cos(a) * 0.7, 0.7, Math.sin(a) * 0.7, 0.13, 3);
  }
  const bg = merge(branches);
  cylUV(bg, 0.9);
  g.add(mesh(bg, mats.m.woodDark));
  g.userData.footprint = { w: 0.9, d: 0.9, h: H };
  return g;
}

export function rubblePile(mats, rng, radius = 1.6) {
  const g = new THREE.Group();
  const chunks = [];
  const n = rng.int(14, 30);
  for (let i = 0; i < n; i++) {
    const a = rng.range(0, Math.PI * 2);
    const d = Math.pow(rng.next(), 0.6) * radius;
    const r = rng.range(0.07, 0.34) * (1 - d / radius * 0.5);
    const rk = rock(r, rng.int(1, 9999), 1);
    xform(rk, {
      pos: [Math.cos(a) * d, r * rng.range(0.3, 0.9), Math.sin(a) * d],
      rot: [rng.range(0, 6), rng.range(0, 6), rng.range(0, 6)]
    });
    chunks.push(rk);
  }
  const cg = merge(chunks);
  boxUV(cg, 0.5);
  g.add(mesh(cg, rng.chance(0.5) ? mats.m.concrete : mats.m.brickDark));
  // twisted rebar sticking out
  const bars = [];
  for (let i = 0; i < rng.int(2, 6); i++) {
    const a = rng.range(0, Math.PI * 2), d = rng.range(0, radius * 0.7);
    bars.push(tubeAlong([
      [Math.cos(a) * d, 0.05, Math.sin(a) * d],
      [Math.cos(a) * d + rng.range(-0.2, 0.2), rng.range(0.4, 1.0), Math.sin(a) * d + rng.range(-0.2, 0.2)],
      [Math.cos(a) * d + rng.range(-0.5, 0.5), rng.range(0.6, 1.4), Math.sin(a) * d + rng.range(-0.5, 0.5)]
    ], 0.014, 12, 6));
  }
  if (bars.length) g.add(mesh(merge(bars), mats.m.rustHeavy));
  g.userData.footprint = { w: radius * 1.6, d: radius * 1.6, h: 0.7 };
  return g;
}

export function grassTuft(mats, rng) {
  const blades = [];
  const n = rng.int(6, 14);
  for (let i = 0; i < n; i++) {
    const a = rng.range(0, Math.PI * 2);
    const h = rng.range(0.25, 0.65);
    const g = new THREE.PlaneGeometry(0.09, h, 1, 3);
    g.translate(0, h / 2, 0);
    // bend the blade
    const pos = g.attributes.position;
    for (let k = 0; k < pos.count; k++) {
      const t = pos.getY(k) / h;
      pos.setZ(k, pos.getZ(k) + t * t * rng.range(0.05, 0.18));
    }
    pos.needsUpdate = true;
    xform(g, { pos: [Math.cos(a) * rng.range(0, 0.12), 0, Math.sin(a) * rng.range(0, 0.12)], rot: [0, a, rng.range(-0.2, 0.2)] });
    blades.push(g);
  }
  const m = mesh(merge(blades), mats.m.foliage, false, false);
  return m;
}

export function ammoCrate(mats, rng) {
  const g = new THREE.Group();
  const w = 0.72, h = 0.32, d = 0.42;
  const parts = [];
  parts.push(xform(roundedBox(w, h, d, 0.025, 2), { pos: [0, h / 2, 0] }));
  parts.push(xform(roundedBox(w * 1.02, 0.07, d * 1.02, 0.015, 1), { pos: [0, h + 0.03, 0] }));
  // reinforcing corners
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    parts.push(xform(roundedBox(0.10, h * 1.05, 0.10, 0.015, 1), { pos: [sx * (w / 2 - 0.04), h / 2, sz * (d / 2 - 0.04)] }));
  }
  // handles
  for (const sx of [-1, 1]) {
    parts.push(xform(ringGeo(0.055, 0.014, 12, 6, Math.PI), { pos: [sx * (w / 2 + 0.01), h * 0.62, 0], rot: [Math.PI / 2, 0, Math.PI / 2] }));
  }
  // latches
  parts.push(xform(roundedBox(0.09, 0.10, 0.03, 0.008, 1), { pos: [0, h - 0.02, d / 2 + 0.01] }));
  const cg = merge(parts);
  boxUV(cg, 0.4);
  g.add(mesh(cg, mats.m.paintGreen));
  g.userData.footprint = { w, d, h: h + 0.1 };
  return g;
}

/* --------------------------------------------------- pickups (animated) ---- */
export function ammoPickup(mats) {
  const g = new THREE.Group();
  const box = ammoCrate(mats, new Rng(3));
  box.scale.setScalar(0.75);
  g.add(box);
  // glowing ring beneath
  const ring = new THREE.Mesh(
    ringGeo(0.42, 0.020, 32, 8),
    new THREE.MeshBasicMaterial({ color: 0xffc040, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.02;
  g.add(ring);
  const light = new THREE.PointLight(0xffb040, 2.2, 4.5, 2);
  light.position.y = 0.4;
  g.add(light);
  g.userData.ring = ring;
  return g;
}

export function healthPickup(mats) {
  const g = new THREE.Group();
  // medkit: rounded case with a cross
  const parts = [];
  parts.push(xform(roundedBox(0.46, 0.26, 0.32, 0.035, 2), { pos: [0, 0.13, 0] }));
  parts.push(xform(roundedBox(0.48, 0.04, 0.34, 0.012, 1), { pos: [0, 0.26, 0] }));
  parts.push(xform(ringGeo(0.055, 0.012, 12, 6, Math.PI), { pos: [0, 0.30, 0], rot: [Math.PI / 2, 0, 0] }));
  const cg = merge(parts);
  boxUV(cg, 0.35);
  g.add(mesh(cg, mats.m.polymerTan));
  const cross = merge([
    xform(roundedBox(0.20, 0.055, 0.02, 0.008, 1), { pos: [0, 0.14, 0.165] }),
    xform(roundedBox(0.055, 0.20, 0.02, 0.008, 1), { pos: [0, 0.14, 0.165] })
  ]);
  g.add(mesh(boxUV(cross, 0.2), mats.m.neonRed));
  const ring = new THREE.Mesh(
    ringGeo(0.38, 0.018, 32, 8),
    new THREE.MeshBasicMaterial({ color: 0x40ff70, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.02;
  g.add(ring);
  const light = new THREE.PointLight(0x40ff80, 2.2, 4.5, 2);
  light.position.y = 0.4;
  g.add(light);
  g.userData.ring = ring;
  return g;
}

export function weaponPickupStand(mats) {
  const g = new THREE.Group();
  const base = lathe([[0, 0], [0.32, 0], [0.34, 0.05], [0.20, 0.10], [0.10, 0.60], [0.14, 0.66], [0, 0.68]], 18);
  g.add(mesh(cylUV(base, 0.4), mats.m.gunmetal));
  const ring = new THREE.Mesh(
    ringGeo(0.42, 0.020, 32, 8),
    new THREE.MeshBasicMaterial({ color: 0x50a0ff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.03;
  g.add(ring);
  const light = new THREE.PointLight(0x4090ff, 2.6, 5, 2);
  light.position.y = 0.9;
  g.add(light);
  g.userData.ring = ring;
  return g;
}
