/**
 * Bundler for Dead Sector.
 * Compiles src/main.js (ESM, imports three) -> public/bundle.js (IIFE, self contained).
 */
import * as esbuild from 'esbuild';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const watch = process.argv.includes('--watch');

const opts = {
  entryPoints: [path.join(root, 'src', 'main.js')],
  outfile: path.join(root, 'public', 'bundle.js'),
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['chrome110'],
  sourcemap: watch ? 'inline' : false,
  minify: !watch,
  legalComments: 'none',
  logLevel: 'info',
  define: { 'process.env.NODE_ENV': JSON.stringify(watch ? 'development' : 'production') }
};

fs.mkdirSync(path.join(root, 'public'), { recursive: true });

if (watch) {
  const ctx = await esbuild.context(opts);
  await ctx.watch();
  console.log('[build] watching…');
} else {
  const r = await esbuild.build(opts);
  const size = fs.statSync(opts.outfile).size;
  console.log(`[build] wrote public/bundle.js (${(size / 1024).toFixed(1)} KiB)`);
  if (r.errors?.length) process.exit(1);
}
