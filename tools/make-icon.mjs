/**
 * Generates public/icon.png and build/icon.ico procedurally (zero art assets).
 * The icon is a 256x256 biohazard-style trefoil over a scorched steel plate,
 * rasterised by hand and written with a minimal zlib/PNG encoder.
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const S = 256;

/* ------------------------------------------------------------ tiny helpers */
const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
const mix = (a, b, t) => a + (b - a) * t;
const smooth = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); };

function hash2(x, y) {
  let h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return h - Math.floor(h);
}
function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return mix(mix(a, b, u), mix(c, d, u), v);
}
function fbm(x, y, oct = 5) {
  let s = 0, a = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { s += vnoise(x * f, y * f) * a; f *= 2.03; a *= 0.5; }
  return s;
}

/* ------------------------------------------------- signed distance shapes */
/** Distance to a ring segment (used for the trefoil blades). */
function trefoil(px, py) {
  // three rotated "blade" lobes: annulus sectors + inner circles
  let d = 1e9;
  for (let k = 0; k < 3; k++) {
    const a = (k / 3) * Math.PI * 2 - Math.PI / 2;
    const ox = Math.cos(a) * 0.30, oy = Math.sin(a) * 0.30;
    const dx = px - ox, dy = py - oy;
    const r = Math.hypot(dx, dy);
    // ring of the blade
    d = Math.min(d, Math.abs(r - 0.255) - 0.075);
    // solid inner disc of the blade
    d = Math.min(d, r - 0.115);
  }
  // centre disc
  d = Math.min(d, Math.hypot(px, py) - 0.105);
  return d;
}

/* ---------------------------------------------------------------- render */
const rgba = Buffer.alloc(S * S * 4);
for (let y = 0; y < S; y++) {
  for (let x = 0; x < S; x++) {
    const u = (x + 0.5) / S, v = (y + 0.5) / S;
    const px = (u - 0.5) * 2, py = (v - 0.5) * 2;
    const rad = Math.hypot(px, py);

    /* --- rounded-square steel plate ------------------------------------- */
    const q = Math.max(Math.abs(px), Math.abs(py));
    const plate = smooth(0.985, 0.90, q);       // 1 inside plate
    if (plate <= 0.002) { const i = (y * S + x) * 4; rgba[i + 3] = 0; continue; }

    /* --- brushed / corroded metal base ---------------------------------- */
    const brush = fbm(u * 130, v * 5.5, 3) * 0.5 + fbm(u * 9, v * 9, 5) * 0.5;
    const rustN = Math.pow(fbm(u * 6.5 + 3.2, v * 6.5 - 1.4, 5), 1.7);
    const grime = fbm(u * 22, v * 22, 4);

    let r = mix(0.085, 0.155, brush);
    let g = mix(0.098, 0.170, brush);
    let b = mix(0.112, 0.185, brush);
    // rust patches around the edges
    const edgeRust = clamp(rustN * 1.4 * smooth(0.35, 1.05, rad));
    r = mix(r, 0.44, edgeRust); g = mix(g, 0.19, edgeRust); b = mix(b, 0.075, edgeRust);
    // soot grime
    const soot = clamp(grime * 0.55);
    r *= 1 - soot * 0.35; g *= 1 - soot * 0.35; b *= 1 - soot * 0.32;

    // bevel highlight / shadow on the plate border
    const bev = smooth(0.90, 0.99, q);
    r = mix(r, 0.42, bev * (py < 0 ? 0.55 : 0.06));
    g = mix(g, 0.44, bev * (py < 0 ? 0.55 : 0.06));
    b = mix(b, 0.46, bev * (py < 0 ? 0.55 : 0.06));
    const botShade = smooth(0.90, 1.0, q) * (py > 0 ? 0.5 : 0);
    r *= 1 - botShade * 0.6; g *= 1 - botShade * 0.6; b *= 1 - botShade * 0.6;

    /* --- warning ring --------------------------------------------------- */
    const ringD = Math.abs(rad - 0.865) - 0.028;
    if (ringD < 0.02) {
      const stripe = ((Math.atan2(py, px) / Math.PI) * 6 + 12) % 1 < 0.5;
      const k = 1 - smooth(-0.006, 0.014, ringD);
      const cr = stripe ? 0.92 : 0.09, cg = stripe ? 0.66 : 0.10, cb = stripe ? 0.12 : 0.11;
      r = mix(r, cr, k * 0.85); g = mix(g, cg, k * 0.85); b = mix(b, cb, k * 0.85);
    }

    /* --- trefoil symbol ------------------------------------------------- */
    const td = trefoil(px * 1.30, py * 1.30);
    const inSym = 1 - smooth(-0.014, 0.012, td);
    if (inSym > 0.001) {
      // emissive amber with hot core + soot wear
      const wear = clamp(fbm(u * 17 + 9, v * 17 - 4, 4) * 1.25 - 0.28);
      const hot = clamp(1 - rad * 0.9);
      let sr = mix(0.98, 1.0, hot), sg = mix(0.62, 0.84, hot), sb = mix(0.10, 0.30, hot);
      sr *= 1 - wear * 0.55; sg *= 1 - wear * 0.55; sb *= 1 - wear * 0.45;
      // dark outline just outside the glyph
      const outline = smooth(0.012, -0.002, td) * (1 - inSym);
      r = mix(mix(r, 0.02, outline), sr, inSym);
      g = mix(mix(g, 0.02, outline), sg, inSym);
      b = mix(mix(b, 0.02, outline), sb, inSym);
    } else {
      // soft glow bleed from the symbol
      const glow = Math.exp(-Math.max(0, td) * 9.0) * 0.42;
      r = mix(r, 1.0, glow * 0.75); g = mix(g, 0.62, glow * 0.65); b = mix(b, 0.16, glow * 0.35);
    }

    /* --- blood spatter across the lower-right --------------------------- */
    const bl = fbm(u * 8.5 - 5.1, v * 8.5 + 2.7, 4);
    const blMask = clamp((bl - 0.56) * 5.5) * smooth(-0.25, 0.55, px + py * 0.7);
    if (blMask > 0.01) {
      r = mix(r, 0.30, blMask * 0.85); g = mix(g, 0.030, blMask * 0.85); b = mix(b, 0.025, blMask * 0.85);
    }

    /* --- global vignette + top sheen ------------------------------------ */
    const vig = 1 - smooth(0.35, 1.25, rad) * 0.55;
    r *= vig; g *= vig; b *= vig;
    const sheen = Math.pow(clamp(1 - Math.hypot(px + 0.45, py + 0.6) / 1.5), 3) * 0.16;
    r += sheen; g += sheen; b += sheen;

    // gamma
    const enc = (c) => Math.round(clamp(Math.pow(clamp(c), 1 / 1.05)) * 255);
    const i = (y * S + x) * 4;
    rgba[i] = enc(r); rgba[i + 1] = enc(g); rgba[i + 2] = enc(b);
    rgba[i + 3] = Math.round(clamp(plate) * 255);
  }
}

/* ------------------------------------------------------------ PNG encoder */
function crc32(buf) {
  let c, crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const t = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crc]);
}
function encodePNG(w, h, px) {
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0;
    px.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

/* -------------------------------------------------- box-filter downscaler */
function resize(src, sw, sh, dw, dh) {
  const out = Buffer.alloc(dw * dh * 4);
  const fx = sw / dw, fy = sh / dh;
  for (let y = 0; y < dh; y++) {
    for (let x = 0; x < dw; x++) {
      let r = 0, g = 0, b = 0, a = 0, n = 0;
      const x0 = Math.floor(x * fx), x1 = Math.max(x0 + 1, Math.floor((x + 1) * fx));
      const y0 = Math.floor(y * fy), y1 = Math.max(y0 + 1, Math.floor((y + 1) * fy));
      for (let sy = y0; sy < y1; sy++) for (let sx = x0; sx < x1; sx++) {
        const i = (sy * sw + sx) * 4;
        r += src[i]; g += src[i + 1]; b += src[i + 2]; a += src[i + 3]; n++;
      }
      const o = (y * dw + x) * 4;
      out[o] = Math.round(r / n); out[o + 1] = Math.round(g / n);
      out[o + 2] = Math.round(b / n); out[o + 3] = Math.round(a / n);
    }
  }
  return out;
}

/* ------------------------------------------------------------ ICO writer */
function encodeICO(sizes) {
  const imgs = sizes.map((s) => {
    const px = s === S ? rgba : resize(rgba, S, S, s, s);
    return { size: s, data: encodePNG(s, s, px) };
  });
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(imgs.length, 4);
  let offset = 6 + imgs.length * 16;
  const dirs = [];
  for (const im of imgs) {
    const d = Buffer.alloc(16);
    d[0] = im.size >= 256 ? 0 : im.size;
    d[1] = im.size >= 256 ? 0 : im.size;
    d[2] = 0; d[3] = 0;
    d.writeUInt16LE(1, 4); d.writeUInt16LE(32, 6);
    d.writeUInt32LE(im.data.length, 8);
    d.writeUInt32LE(offset, 12);
    offset += im.data.length;
    dirs.push(d);
  }
  return Buffer.concat([header, ...dirs, ...imgs.map((i) => i.data)]);
}

/* ------------------------------------------------------------------ write */
fs.mkdirSync(path.join(root, 'public'), { recursive: true });
fs.mkdirSync(path.join(root, 'build'), { recursive: true });
fs.mkdirSync(path.join(root, 'assets'), { recursive: true });

const png = encodePNG(S, S, rgba);
fs.writeFileSync(path.join(root, 'public', 'icon.png'), png);
fs.writeFileSync(path.join(root, 'assets', 'icon.png'), png);
fs.writeFileSync(path.join(root, 'assets', 'icon.ico'), encodeICO([16, 24, 32, 48, 64, 128, 256]));

console.log(`[icon] wrote public/icon.png (${(png.length / 1024).toFixed(1)} KiB) and assets/icon.ico`);
