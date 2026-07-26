/**
 * package-win.mjs — produces exactly ONE universal Windows executable:
 *
 *      build/DeadSector.exe
 *
 * Done entirely from Linux, no Windows machine and no wine required:
 *
 *  1. Download the official Electron win32-x64 runtime from GitHub releases.
 *  2. Stage the game payload into resources/app.
 *  3. Rebrand electron.exe -> DeadSector.exe by rewriting its PE .rsrc section
 *     with our icon group + VERSIONINFO (hand-written PE resource writer, so no
 *     rcedit / wine dependency).
 *  4. Squeeze the whole runtime tree into a self-extracting 7-Zip SFX archive so
 *     the final artefact is a single portable .exe with no installer and no
 *     prerequisites.
 */
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { execFileSync, execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import https from 'node:https';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

const ELECTRON_VER = pkg.devDependencies.electron.replace(/^[^0-9]*/, '');
const PRODUCT = 'DeadSector';
const BUILD = path.join(root, 'build');
const WORK = path.join(root, '.cache', 'winpack');
const CACHE = path.join(root, '.cache', 'electron-win');
const OUT_EXE = path.join(BUILD, `${PRODUCT}.exe`);

const log = (...a) => console.log('[pack]', ...a);
const bytes = (n) => (n / 1048576).toFixed(1) + ' MiB';

/* ========================================================================= */
/*                                DOWNLOAD                                   */
/* ========================================================================= */
function download(url, dest, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 8) return reject(new Error('too many redirects'));
    const req = https.get(url, { headers: { 'User-Agent': 'dead-sector-packager' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        return download(res.headers.location, dest, redirects + 1).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error('HTTP ' + res.statusCode + ' for ' + url));
      }
      const total = parseInt(res.headers['content-length'] || '0', 10);
      let got = 0, lastPct = -1;
      const ws = fs.createWriteStream(dest);
      res.on('data', (c) => {
        got += c.length;
        if (total) {
          const pct = Math.floor((got / total) * 100);
          if (pct >= lastPct + 10) {
            lastPct = pct;
            process.stdout.write(`\r[pack] downloading ${pct}% (${bytes(got)}/${bytes(total)})   `);
          }
        }
      });
      res.pipe(ws);
      ws.on('finish', () => { process.stdout.write('\n'); ws.close(() => resolve(dest)); });
      ws.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(180000, () => req.destroy(new Error('download timeout')));
  });
}

async function getElectronWin(arch) {
  const name = `electron-v${ELECTRON_VER}-win32-${arch}.zip`;
  const dest = path.join(CACHE, name);
  fs.mkdirSync(CACHE, { recursive: true });
  if (fs.existsSync(dest) && fs.statSync(dest).size > 40 * 1024 * 1024) {
    log('using cached', name, `(${bytes(fs.statSync(dest).size)})`);
    return dest;
  }
  const url = `https://github.com/electron/electron/releases/download/v${ELECTRON_VER}/${name}`;
  log('fetching', url);
  await download(url, dest);
  log('downloaded', name, bytes(fs.statSync(dest).size));
  return dest;
}

/* ========================================================================= */
/*                          PE RESOURCE REWRITER                             */
/* ========================================================================= */
const RT_ICON = 3, RT_GROUP_ICON = 14, RT_VERSION = 16, RT_MANIFEST = 24;
const align = (v, a) => Math.ceil(v / a) * a;

class PE {
  constructor(buf) {
    this.buf = buf;
    if (buf.readUInt16LE(0) !== 0x5a4d) throw new Error('not a PE (no MZ)');
    const e_lfanew = buf.readUInt32LE(0x3c);
    if (buf.readUInt32LE(e_lfanew) !== 0x00004550) throw new Error('not a PE (no PE\\0\\0)');
    this.ntOff = e_lfanew;
    this.fileHdr = e_lfanew + 4;
    this.numSections = buf.readUInt16LE(this.fileHdr + 2);
    this.sizeOptHdr = buf.readUInt16LE(this.fileHdr + 16);
    this.optHdr = this.fileHdr + 20;
    this.magic = buf.readUInt16LE(this.optHdr);
    this.pe32plus = this.magic === 0x20b;
    this.sectionTable = this.optHdr + this.sizeOptHdr;
    this.sectionAlign = buf.readUInt32LE(this.optHdr + 32);
    this.fileAlign = buf.readUInt32LE(this.optHdr + 36);
    this.ddOff = this.optHdr + (this.pe32plus ? 112 : 96);
    this.sections = [];
    for (let i = 0; i < this.numSections; i++) {
      const o = this.sectionTable + i * 40;
      this.sections.push({
        off: o,
        name: buf.toString('ascii', o, o + 8).replace(/\0+$/, ''),
        virtualSize: buf.readUInt32LE(o + 8),
        virtualAddress: buf.readUInt32LE(o + 12),
        sizeOfRawData: buf.readUInt32LE(o + 16),
        pointerToRawData: buf.readUInt32LE(o + 20),
        characteristics: buf.readUInt32LE(o + 36)
      });
    }
  }
  dir(i) {
    return {
      va: this.buf.readUInt32LE(this.ddOff + i * 8),
      size: this.buf.readUInt32LE(this.ddOff + i * 8 + 4)
    };
  }
  setDir(i, va, size) {
    this.buf.writeUInt32LE(va, this.ddOff + i * 8);
    this.buf.writeUInt32LE(size, this.ddOff + i * 8 + 4);
  }
}

/** Parse an .ico file into its image entries. */
function parseIco(buf) {
  const count = buf.readUInt16LE(4);
  const entries = [];
  for (let i = 0; i < count; i++) {
    const o = 6 + i * 16;
    const size = buf.readUInt32LE(o + 8);
    const off = buf.readUInt32LE(o + 12);
    entries.push({
      w: buf[o] || 256, h: buf[o + 1] || 256,
      colors: buf[o + 2],
      planes: buf.readUInt16LE(o + 4), bpp: buf.readUInt16LE(o + 6),
      data: buf.subarray(off, off + size)
    });
  }
  return entries;
}

/** RT_GROUP_ICON directory referencing RT_ICON ids firstId..firstId+n-1 */
function buildGroupIcon(entries, firstId) {
  const b = Buffer.alloc(6 + entries.length * 14);
  b.writeUInt16LE(0, 0); b.writeUInt16LE(1, 2); b.writeUInt16LE(entries.length, 4);
  entries.forEach((e, i) => {
    const o = 6 + i * 14;
    b[o] = e.w >= 256 ? 0 : e.w;
    b[o + 1] = e.h >= 256 ? 0 : e.h;
    b[o + 2] = e.colors; b[o + 3] = 0;
    b.writeUInt16LE(e.planes || 1, o + 4);
    b.writeUInt16LE(e.bpp || 32, o + 6);
    b.writeUInt32LE(e.data.length, o + 8);
    b.writeUInt16LE(firstId + i, o + 12);
  });
  return b;
}

/** VS_VERSIONINFO resource. */
function buildVersionInfo(info) {
  const utf16 = (s) => Buffer.from(s + '\0', 'ucs2');
  const pad4 = (b) => (b.length % 4 === 0 ? b : Buffer.concat([b, Buffer.alloc(4 - (b.length % 4))]));

  function node(key, valueBuf, isText, children = []) {
    const head = Buffer.alloc(6);
    let body = pad4(Buffer.concat([head, utf16(key)]));
    if (valueBuf) body = Buffer.concat([body, pad4(valueBuf)]);
    for (const c of children) body = Buffer.concat([pad4(body), c]);
    body.writeUInt16LE(body.length, 0);
    body.writeUInt16LE(valueBuf ? (isText ? valueBuf.length / 2 : valueBuf.length) : 0, 2);
    body.writeUInt16LE(isText ? 1 : 0, 4);
    return body;
  }

  const v = info.version.split('.').map((n) => parseInt(n, 10) || 0);
  while (v.length < 4) v.push(0);
  const fixed = Buffer.alloc(52);
  fixed.writeUInt32LE(0xFEEF04BD, 0);
  fixed.writeUInt32LE(0x00010000, 4);
  fixed.writeUInt16LE(v[1], 8); fixed.writeUInt16LE(v[0], 10);
  fixed.writeUInt16LE(v[3], 12); fixed.writeUInt16LE(v[2], 14);
  fixed.writeUInt16LE(v[1], 16); fixed.writeUInt16LE(v[0], 18);
  fixed.writeUInt16LE(v[3], 20); fixed.writeUInt16LE(v[2], 22);
  fixed.writeUInt32LE(0x3f, 24);
  fixed.writeUInt32LE(0, 28);
  fixed.writeUInt32LE(4, 32);     // VOS__WINDOWS32
  fixed.writeUInt32LE(1, 36);     // VFT_APP

  const strings = [
    ['CompanyName', info.company],
    ['FileDescription', info.description],
    ['FileVersion', info.version],
    ['InternalName', info.internalName],
    ['LegalCopyright', info.copyright],
    ['OriginalFilename', info.internalName + '.exe'],
    ['ProductName', info.productName],
    ['ProductVersion', info.version]
  ].map(([k, val]) => node(k, utf16(String(val)), true));

  const stringTable = node('040904B0', null, true, strings);
  const stringFileInfo = node('StringFileInfo', null, true, [stringTable]);
  const varBuf = Buffer.alloc(4);
  varBuf.writeUInt16LE(0x0409, 0); varBuf.writeUInt16LE(0x04b0, 2);
  const varFileInfo = node('VarFileInfo', null, true, [node('Translation', varBuf, false)]);

  return node('VS_VERSION_INFO', fixed, false, [stringFileInfo, varFileInfo]);
}

/** Build a complete .rsrc section body at virtual address `baseVA`. */
function buildRsrc(resources, baseVA) {
  const types = [...resources.keys()].sort((a, b) => a - b);

  let dirSize = 16 + types.length * 8;
  let leaves = 0;
  for (const t of types) {
    const names = [...resources.get(t).keys()];
    dirSize += 16 + names.length * 8;
    for (const n of names) {
      const langs = [...resources.get(t).get(n).keys()];
      dirSize += 16 + langs.length * 8;
      leaves += langs.length;
    }
  }
  const dataDescOff = dirSize;
  const blobStart = align(dataDescOff + leaves * 16, 8);

  let totalSize = blobStart;
  for (const t of types)
    for (const n of resources.get(t).keys())
      for (const lang of resources.get(t).get(n).keys())
        totalSize = align(totalSize + resources.get(t).get(n).get(lang).length, 8);

  const buf = Buffer.alloc(totalSize);
  let cursor = 0, descCursor = dataDescOff, blobCursor = blobStart;

  const writeDir = (count, at) => {
    buf.writeUInt32LE(0, at);
    buf.writeUInt32LE(0, at + 4);
    buf.writeUInt16LE(0, at + 8);
    buf.writeUInt16LE(0, at + 10);
    buf.writeUInt16LE(0, at + 12);      // named entries
    buf.writeUInt16LE(count, at + 14);  // id entries
    return at + 16;
  };

  const lv1 = writeDir(types.length, 0);
  cursor = lv1 + types.length * 8;

  types.forEach((t, ti) => {
    const names = [...resources.get(t).keys()].sort((a, b) => a - b);
    const nameDirAt = cursor;
    buf.writeUInt32LE(t, lv1 + ti * 8);
    buf.writeUInt32LE(nameDirAt | 0x80000000, lv1 + ti * 8 + 4);
    const lv2 = writeDir(names.length, nameDirAt);
    cursor = lv2 + names.length * 8;

    names.forEach((n, ni) => {
      const langs = [...resources.get(t).get(n).keys()].sort((a, b) => a - b);
      const langDirAt = cursor;
      buf.writeUInt32LE(n, lv2 + ni * 8);
      buf.writeUInt32LE(langDirAt | 0x80000000, lv2 + ni * 8 + 4);
      const lv3 = writeDir(langs.length, langDirAt);
      cursor = lv3 + langs.length * 8;

      langs.forEach((lang, li) => {
        const data = resources.get(t).get(n).get(lang);
        buf.writeUInt32LE(lang, lv3 + li * 8);
        buf.writeUInt32LE(descCursor, lv3 + li * 8 + 4);   // leaf (no high bit)
        buf.writeUInt32LE(baseVA + blobCursor, descCursor);
        buf.writeUInt32LE(data.length, descCursor + 4);
        buf.writeUInt32LE(0, descCursor + 8);
        buf.writeUInt32LE(0, descCursor + 12);
        descCursor += 16;
        data.copy(buf, blobCursor);
        blobCursor = align(blobCursor + data.length, 8);
      });
    });
  });

  return buf;
}

/** Read an existing resource (used to preserve Electron's manifest). */
function readResource(pe, type, wanted) {
  const rd = pe.dir(2);
  if (!rd.va) return null;
  const sec = pe.sections.find((s) =>
    rd.va >= s.virtualAddress && rd.va < s.virtualAddress + Math.max(s.virtualSize, s.sizeOfRawData));
  if (!sec) return null;
  const base = sec.pointerToRawData + (rd.va - sec.virtualAddress);
  const b = pe.buf;
  const readDir = (at) => {
    const named = b.readUInt16LE(at + 12), ids = b.readUInt16LE(at + 14);
    const out = [];
    for (let i = 0; i < named + ids; i++) {
      const o = at + 16 + i * 8;
      out.push({ id: b.readUInt32LE(o), off: b.readUInt32LE(o + 4) });
    }
    return out;
  };
  for (const t of readDir(base)) {
    if ((t.id & 0x7fffffff) !== type) continue;
    if (!(t.off & 0x80000000)) continue;
    for (const n of readDir(base + (t.off & 0x7fffffff))) {
      if (wanted !== undefined && (n.id & 0x7fffffff) !== wanted) continue;
      if (!(n.off & 0x80000000)) continue;
      const langs = readDir(base + (n.off & 0x7fffffff));
      if (!langs.length) continue;
      const de = base + langs[0].off;
      const va = b.readUInt32LE(de), size = b.readUInt32LE(de + 4);
      const ds = pe.sections.find((s) =>
        va >= s.virtualAddress && va < s.virtualAddress + Math.max(s.virtualSize, s.sizeOfRawData));
      if (!ds) return null;
      const start = ds.pointerToRawData + (va - ds.virtualAddress);
      return {
        id: n.id & 0x7fffffff,
        lang: langs[0].id & 0x7fffffff,
        data: Buffer.from(b.subarray(start, start + size))
      };
    }
  }
  return null;
}

/** Replace the .rsrc section of an exe with our icon + version info. */
function rebrandExe(exePath, icoPath, info) {
  const buf = fs.readFileSync(exePath);
  const pe = new PE(buf);
  const rsrcIdx = pe.sections.findIndex((s) => s.name === '.rsrc');
  if (rsrcIdx < 0) throw new Error('.rsrc section not found');
  const rsrc = pe.sections[rsrcIdx];

  // We can only grow/shrink the section safely when nothing follows it.
  const laterSections = pe.sections.filter((s, i) =>
    i !== rsrcIdx && s.pointerToRawData > rsrc.pointerToRawData);
  if (laterSections.length) throw new Error('.rsrc is not the last section');

  const manifest = readResource(pe, RT_MANIFEST);
  const icons = parseIco(fs.readFileSync(icoPath));

  const resources = new Map();
  const put = (type, id, lang, data) => {
    if (!resources.has(type)) resources.set(type, new Map());
    const byName = resources.get(type);
    if (!byName.has(id)) byName.set(id, new Map());
    byName.get(id).set(lang, data);
  };
  const LANG = 1033;
  icons.forEach((ic, i) => put(RT_ICON, i + 1, LANG, ic.data));
  put(RT_GROUP_ICON, 1, LANG, buildGroupIcon(icons, 1));
  put(RT_VERSION, 1, LANG, buildVersionInfo(info));
  if (manifest) put(RT_MANIFEST, manifest.id || 1, manifest.lang || LANG, manifest.data);

  const body = buildRsrc(resources, rsrc.virtualAddress);
  const rawSize = align(body.length, pe.fileAlign);

  const head = Buffer.from(buf.subarray(0, rsrc.pointerToRawData));
  const tailStart = rsrc.pointerToRawData + rsrc.sizeOfRawData;
  const tail = tailStart < buf.length ? Buffer.from(buf.subarray(tailStart)) : Buffer.alloc(0);

  const padded = Buffer.alloc(rawSize);
  body.copy(padded, 0);
  const out = Buffer.concat([head, padded, tail]);

  const npe = new PE(out);
  const ns = npe.sections[rsrcIdx];
  out.writeUInt32LE(body.length, ns.off + 8);    // VirtualSize
  out.writeUInt32LE(rawSize, ns.off + 16);       // SizeOfRawData
  npe.setDir(2, rsrc.virtualAddress, body.length);
  const newImageSize = align(rsrc.virtualAddress + body.length, npe.sectionAlign);
  out.writeUInt32LE(newImageSize, npe.optHdr + 56);   // SizeOfImage
  out.writeUInt32LE(0, npe.optHdr + 64);              // CheckSum (invalidated)
  npe.setDir(4, 0, 0);                                // drop certificate table

  fs.writeFileSync(exePath, out);
  return { icons: icons.length, rsrc: body.length };
}

/* ========================================================================= */
/*                                 STAGING                                   */
/* ========================================================================= */
async function rmrf(p) { await fsp.rm(p, { recursive: true, force: true }); }

async function copyDir(src, dst, filter) {
  await fsp.mkdir(dst, { recursive: true });
  for (const e of await fsp.readdir(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (filter && !filter(s, e)) continue;
    if (e.isDirectory()) await copyDir(s, d, filter);
    else if (e.isSymbolicLink()) await fsp.symlink(await fsp.readlink(s), d).catch(() => {});
    else await fsp.copyFile(s, d);
  }
}

async function stageApp(appDir) {
  await fsp.mkdir(appDir, { recursive: true });
  const runtimePkg = {
    name: pkg.name,
    productName: pkg.productName,
    version: pkg.version,
    description: pkg.description,
    author: pkg.author,
    license: pkg.license,
    main: 'electron/main.cjs'
  };
  await fsp.writeFile(path.join(appDir, 'package.json'), JSON.stringify(runtimePkg, null, 2));
  await copyDir(path.join(root, 'electron'), path.join(appDir, 'electron'));
  // public/ holds index.html, style.css, bundle.js (three.js + all game code), icon.png
  await copyDir(path.join(root, 'public'), path.join(appDir, 'public'));
  const size = parseInt(execSync(`du -sb "${appDir}" | cut -f1`).toString().trim(), 10);
  log('app payload staged:', bytes(size));
}

/* ========================================================================= */
/*                              SFX RESOLUTION                               */
/* ========================================================================= */
async function resolveSfx() {
  // Prefer 7zSD.sfx / 7zS2.sfx — they support RunProgram (one-click launch).
  const local = [
    path.join(root, 'assets', '7zSD.sfx'),
    '/usr/lib/p7zip/7zCon.sfx',
    '/usr/lib/p7zip/7z.sfx',
    '/usr/share/p7zip/7z.sfx',
    '/usr/libexec/p7zip/7z.sfx'
  ].find((p) => fs.existsSync(p));

  if (local && /7zSD|7zS2/.test(path.basename(local))) {
    log('using SFX module', local);
    return local;
  }

  // Try to fetch the official extras package which contains 7zSD.sfx.
  for (const rel of ['7z2408-extra.7z', '7z2301-extra.7z', '7z1900-extra.7z']) {
    try {
      const dl = path.join(CACHE, rel);
      if (!fs.existsSync(dl)) {
        log('fetching 7-Zip SFX modules:', rel);
        await download('https://www.7-zip.org/a/' + rel, dl);
      }
      const dir = path.join(WORK, 'sfx');
      fs.mkdirSync(dir, { recursive: true });
      execFileSync('7z', ['x', '-y', `-o${dir}`, dl], { stdio: ['ignore', 'ignore', 'inherit'] });
      const found = ['7zSD.sfx', '7zS2.sfx', '7zS2con.sfx', '7z.sfx']
        .map((n) => path.join(dir, n))
        .find((p) => fs.existsSync(p));
      if (found) { log('using SFX module', path.basename(found)); return found; }
    } catch (e) {
      log('SFX fetch failed for', rel, '—', e.message);
    }
  }

  if (local) { log('falling back to console SFX module', local); return local; }
  return null;
}

/* ========================================================================= */
/*                                   MAIN                                    */
/* ========================================================================= */
async function main() {
  fs.mkdirSync(BUILD, { recursive: true });

  const bundle = path.join(root, 'public', 'bundle.js');
  if (!fs.existsSync(bundle)) throw new Error('public/bundle.js missing — run `npm run build:bundle` first');
  log('bundle.js', bytes(fs.statSync(bundle).size));

  if (!fs.existsSync(path.join(root, 'assets', 'icon.ico'))) {
    log('generating icon…');
    execFileSync(process.execPath, [path.join(root, 'tools', 'make-icon.mjs')], { stdio: 'inherit' });
  }

  await rmrf(WORK);
  fs.mkdirSync(WORK, { recursive: true });

  /* -------------------- 1. Windows Electron runtime --------------------- */
  const zip = await getElectronWin('x64');
  const rt = path.join(WORK, 'runtime');
  fs.mkdirSync(rt, { recursive: true });
  log('extracting runtime…');
  execFileSync('7z', ['x', '-y', `-o${rt}`, zip], { stdio: ['ignore', 'ignore', 'inherit'] });

  // trim what a portable game build does not need
  for (const f of ['LICENSE', 'LICENSES.chromium.html', 'version']) await rmrf(path.join(rt, f));
  const locales = path.join(rt, 'locales');
  if (fs.existsSync(locales)) {
    for (const f of fs.readdirSync(locales)) {
      if (f !== 'en-US.pak') await rmrf(path.join(locales, f));
    }
  }

  /* -------------------- 2. app payload ---------------------------------- */
  await stageApp(path.join(rt, 'resources', 'app'));

  /* -------------------- 3. rebrand electron.exe ------------------------- */
  const exeDst = path.join(rt, `${PRODUCT}.exe`);
  fs.renameSync(path.join(rt, 'electron.exe'), exeDst);
  const brand = {
    version: pkg.version + '.0',
    company: 'mmdrezaazadi',
    description: 'Dead Sector — 3D zombie shooter',
    internalName: PRODUCT,
    copyright: '(c) 2026 mmdrezaazadi — MIT',
    productName: 'Dead Sector'
  };
  try {
    const r = rebrandExe(exeDst, path.join(root, 'assets', 'icon.ico'), brand);
    log(`rebranded ${PRODUCT}.exe (${r.icons} icon sizes, ${r.rsrc} B resources)`);
  } catch (e) {
    log('WARNING: resource rebrand skipped —', e.message);
  }

  const rtSize = parseInt(execSync(`du -sb "${rt}" | cut -f1`).toString().trim(), 10);
  log('runtime tree:', bytes(rtSize));

  /* -------------------- 4. single-file SFX ------------------------------- */
  log('compressing payload with LZMA2 (this takes a few minutes)…');
  const payload = path.join(WORK, 'payload.7z');
  execFileSync('7z', [
    'a', '-t7z', '-m0=LZMA2', '-mx=9', '-mmt=on', '-ms=on', '-mfb=273', '-md=128m',
    payload, '.'
  ], { stdio: ['ignore', 'ignore', 'inherit'], cwd: rt });
  log('payload.7z', bytes(fs.statSync(payload).size));

  const sfx = await resolveSfx();
  if (!sfx) throw new Error('no 7-Zip SFX module available');
  const modern = /7zSD|7zS2/.test(path.basename(sfx));

  const parts = [fs.readFileSync(sfx)];
  if (modern) {
    // RunProgram makes this a true one-click portable launcher.
    parts.push(Buffer.from(
      ';!@Install@!UTF-8!\r\n' +
      'Title="Dead Sector"\r\n' +
      'BeginPrompt=""\r\n' +
      'ExtractTitle="Dead Sector"\r\n' +
      'ExtractDialogText="Unpacking the quarantine zone..."\r\n' +
      'GUIMode="2"\r\n' +
      'InstallPath="%%T\\DeadSector"\r\n' +
      `RunProgram="${PRODUCT}.exe"\r\n` +
      ';!@InstallEnd@!\r\n', 'utf8'));
  }
  parts.push(fs.readFileSync(payload));
  fs.writeFileSync(OUT_EXE, Buffer.concat(parts));

  // Brand the outer exe too, so Explorer shows the icon before unpacking.
  try {
    const r = rebrandExe(OUT_EXE, path.join(root, 'assets', 'icon.ico'), {
      ...brand, description: 'Dead Sector — 3D zombie shooter (portable)'
    });
    log(`branded final exe (${r.icons} icon sizes)`);
  } catch (e) {
    log('note: final exe icon patch skipped —', e.message);
  }

  const finalSize = fs.statSync(OUT_EXE).size;
  if (fs.readFileSync(OUT_EXE).subarray(0, 2).toString('ascii') !== 'MZ') {
    throw new Error('produced file is not a valid Windows executable');
  }

  fs.writeFileSync(path.join(BUILD, 'BUILD_INFO.txt'),
    `Dead Sector ${pkg.version}\n` +
    `Artifact : ${PRODUCT}.exe (${bytes(finalSize)})\n` +
    `Type     : portable self-extracting Windows executable (x64)\n` +
    `Launcher : ${modern ? 'auto-run (one click)' : 'extracts to a folder, run ' + PRODUCT + '.exe'}\n` +
    `Electron : ${ELECTRON_VER}\n` +
    `Built    : ${new Date().toISOString()}\n` +
    `Host     : ${os.platform()} ${os.arch()} node ${process.version}\n\n` +
    `No installer, no dependencies, no admin rights required.\n`);

  log('=================================================');
  log(`OUTPUT: build/${PRODUCT}.exe  ${bytes(finalSize)}`);
  log('=================================================');

  // keep the download cache, drop the big intermediates
  await rmrf(path.join(WORK, 'runtime'));
  await rmrf(path.join(WORK, 'sfx'));
  await rmrf(payload);
}

main().catch((e) => { console.error('[pack] FAILED:', e); process.exit(1); });
