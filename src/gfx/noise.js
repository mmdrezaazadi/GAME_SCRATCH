/**
 * Deterministic noise toolkit (no external deps).
 * Provides a seeded PRNG, 2D/3D simplex-ish gradient noise, fBm, ridged fBm,
 * worley/voronoi and domain-warp helpers used by the procedural texture and
 * geometry generators.
 */

/* ---------------------------------------------------------------- PRNG ---- */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), 1 | t);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class Rng {
  constructor(seed = 1337) { this.r = mulberry32(seed); }
  next() { return this.r(); }
  range(a, b) { return a + (b - a) * this.r(); }
  int(a, b) { return Math.floor(this.range(a, b + 1)); }
  sign() { return this.r() < 0.5 ? -1 : 1; }
  pick(arr) { return arr[Math.floor(this.r() * arr.length) % arr.length]; }
  chance(p) { return this.r() < p; }
  gauss(mu = 0, sigma = 1) {
    let u = 0, v = 0;
    while (u === 0) u = this.r();
    while (v === 0) v = this.r();
    return mu + sigma * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }
}

/* -------------------------------------------------------- perlin/simplex -- */
const P = new Uint8Array(512);
(function initPerm() {
  const r = mulberry32(9871);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    const t = p[i]; p[i] = p[j]; p[j] = t;
  }
  for (let i = 0; i < 512; i++) P[i] = p[i & 255];
})();

const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a, b, t) => a + (b - a) * t;

function grad2(h, x, y) {
  switch (h & 7) {
    case 0: return x + y;
    case 1: return x - y;
    case 2: return -x + y;
    case 3: return -x - y;
    case 4: return x;
    case 5: return -x;
    case 6: return y;
    default: return -y;
  }
}

/** classic perlin 2D, output ~[-1,1] */
export function noise2(x, y) {
  const X = Math.floor(x) & 255, Y = Math.floor(y) & 255;
  const xf = x - Math.floor(x), yf = y - Math.floor(y);
  const u = fade(xf), v = fade(yf);
  const aa = P[P[X] + Y], ab = P[P[X] + Y + 1];
  const ba = P[P[X + 1] + Y], bb = P[P[X + 1] + Y + 1];
  const x1 = lerp(grad2(aa, xf, yf), grad2(ba, xf - 1, yf), u);
  const x2 = lerp(grad2(ab, xf, yf - 1), grad2(bb, xf - 1, yf - 1), u);
  return lerp(x1, x2, v);
}

function grad3(h, x, y, z) {
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : (h === 12 || h === 14 ? x : z);
  return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
}

export function noise3(x, y, z) {
  const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
  const xf = x - Math.floor(x), yf = y - Math.floor(y), zf = z - Math.floor(z);
  const u = fade(xf), v = fade(yf), w = fade(zf);
  const A = P[X] + Y, AA = P[A] + Z, AB = P[A + 1] + Z;
  const B = P[X + 1] + Y, BA = P[B] + Z, BB = P[B + 1] + Z;
  return lerp(
    lerp(lerp(grad3(P[AA], xf, yf, zf), grad3(P[BA], xf - 1, yf, zf), u),
      lerp(grad3(P[AB], xf, yf - 1, zf), grad3(P[BB], xf - 1, yf - 1, zf), u), v),
    lerp(lerp(grad3(P[AA + 1], xf, yf, zf - 1), grad3(P[BA + 1], xf - 1, yf, zf - 1), u),
      lerp(grad3(P[AB + 1], xf, yf - 1, zf - 1), grad3(P[BB + 1], xf - 1, yf - 1, zf - 1), u), v),
    w);
}

/** tileable 2D perlin over a period (so textures wrap seamlessly) */
export function tileNoise2(x, y, period) {
  // blend four samples across the period boundaries
  const px = x / period, py = y / period;
  const a = noise2(x, y);
  const b = noise2(x - period, y);
  const c = noise2(x, y - period);
  const d = noise2(x - period, y - period);
  return (a * (1 - px) * (1 - py) + b * px * (1 - py) + c * (1 - px) * py + d * px * py);
}

export function fbm2(x, y, oct = 5, lac = 2.0, gain = 0.5) {
  let s = 0, a = 0.5, f = 1, norm = 0;
  for (let i = 0; i < oct; i++) {
    s += a * noise2(x * f, y * f);
    norm += a; a *= gain; f *= lac;
  }
  return s / norm;
}

export function fbmTile2(x, y, period, oct = 5, gain = 0.5) {
  let s = 0, a = 0.5, f = 1, norm = 0;
  for (let i = 0; i < oct; i++) {
    s += a * tileNoise2(x * f, y * f, period * f);
    norm += a; a *= gain; f *= 2;
  }
  return s / norm;
}

export function fbm3(x, y, z, oct = 4, gain = 0.5) {
  let s = 0, a = 0.5, f = 1, norm = 0;
  for (let i = 0; i < oct; i++) {
    s += a * noise3(x * f, y * f, z * f);
    norm += a; a *= gain; f *= 2;
  }
  return s / norm;
}

export function ridged2(x, y, oct = 5) {
  let s = 0, a = 0.5, f = 1, norm = 0;
  for (let i = 0; i < oct; i++) {
    const n = 1 - Math.abs(noise2(x * f, y * f));
    s += a * n * n; norm += a; a *= 0.5; f *= 2.1;
  }
  return s / norm;
}

/* ------------------------------------------------------------- worley ----- */
const FEAT = [];
(function initFeatures() {
  const r = mulberry32(4242);
  for (let i = 0; i < 1024; i++) FEAT.push([r(), r()]);
})();

/** tileable worley over an NxN cell grid; returns {f1,f2,id} */
export function worley(x, y, cells) {
  const cx = Math.floor(x * cells), cy = Math.floor(y * cells);
  let f1 = 1e9, f2 = 1e9, id = 0;
  for (let oy = -1; oy <= 1; oy++) {
    for (let ox = -1; ox <= 1; ox++) {
      const gx = ((cx + ox) % cells + cells) % cells;
      const gy = ((cy + oy) % cells + cells) % cells;
      const h = (gx * 73856093 ^ gy * 19349663) & 1023;
      const f = FEAT[h];
      const px = (cx + ox + f[0]) / cells;
      const py = (cy + oy + f[1]) / cells;
      const dx = px - x, dy = py - y;
      const d = Math.hypot(dx, dy);
      if (d < f1) { f2 = f1; f1 = d; id = h; } else if (d < f2) f2 = d;
    }
  }
  return { f1: f1 * cells, f2: f2 * cells, id };
}

export const clamp = (v, a, b) => v < a ? a : (v > b ? b : v);
export const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const mix = (a, b, t) => a + (b - a) * t;
