/**
 * Dead Sector — entry point.
 * Boots the game, wires up the audio-unlock gesture and shows a fatal error
 * panel if anything throws during construction/boot.
 */
import { Game } from './Game.js';

function fatal(err) {
  console.error('[DeadSector] fatal:', err);
  const host = document.getElementById('menu') || document.body;
  host.style.display = 'flex';
  host.innerHTML = `
    <div class="fatal">
      <h1>UNABLE TO START</h1>
      <p>Dead Sector needs a WebGL2 capable GPU with hardware acceleration enabled.</p>
      <pre>${String(err && err.stack ? err.stack : err).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))}</pre>
      <button onclick="location.reload()">RETRY</button>
    </div>`;
}

function webgl2Supported() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl2', { failIfMajorPerformanceCaveat: false }));
  } catch (e) { return false; }
}

async function main() {
  if (!webgl2Supported()) throw new Error('WebGL2 is not available in this browser / GPU driver.');

  const canvas = document.getElementById('game-canvas');
  if (!canvas) throw new Error('#game-canvas element missing.');

  const game = new Game(canvas);
  window.__game = game;

  /* Browsers require a user gesture before an AudioContext can produce sound. */
  const unlock = () => {
    game.audio?.resume?.();
    window.removeEventListener('pointerdown', unlock);
    window.removeEventListener('keydown', unlock);
  };
  window.addEventListener('pointerdown', unlock);
  window.addEventListener('keydown', unlock);

  /* Never let the browser context menu interrupt right-click aiming. */
  window.addEventListener('contextmenu', (e) => e.preventDefault());
  /* Space / arrows must not scroll the page. */
  window.addEventListener('keydown', (e) => {
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
  }, { passive: false });

  const boot = document.getElementById('boot');
  if (boot) boot.remove();

  await game.boot();
}

window.addEventListener('error', (e) => {
  if (!window.__game) fatal(e.error || e.message);
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { main().catch(fatal); });
} else {
  main().catch(fatal);
}
