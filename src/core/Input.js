/**
 * Input — pointer-lock mouse look, keyboard state, mouse buttons, wheel,
 * gamepad-free. Exposes edge-triggered "pressed" queries plus accumulated
 * mouse delta consumed once per frame by the player controller.
 */
export const DEFAULT_BINDS = {
  forward: ['KeyW', 'ArrowUp'],
  back: ['KeyS', 'ArrowDown'],
  left: ['KeyA', 'ArrowLeft'],
  right: ['KeyD', 'ArrowRight'],
  jump: ['Space'],
  sprint: ['ShiftLeft', 'ShiftRight'],
  crouch: ['ControlLeft', 'KeyC'],
  reload: ['KeyR'],
  use: ['KeyE'],
  melee: ['KeyV'],
  flashlight: ['KeyF'],
  grenade: ['KeyG'],
  weapon1: ['Digit1'],
  weapon2: ['Digit2'],
  weapon3: ['Digit3'],
  weapon4: ['Digit4'],
  weapon5: ['Digit5'],
  pause: ['Escape'],
  scoreboard: ['Tab']
};

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressedKeys = new Set();
    this.releasedKeys = new Set();
    this.mouse = [false, false, false];
    this.mousePressed = [false, false, false];
    this.mouseReleased = [false, false, false];
    this.dx = 0; this.dy = 0;
    this.wheel = 0;
    this.locked = false;
    this.sensitivity = 0.0022;
    this.invertY = false;
    this.binds = JSON.parse(JSON.stringify(DEFAULT_BINDS));
    this.enabled = true;
    this._onLockChange = null;

    this._bind();
  }

  _bind() {
    const kd = (e) => {
      if (e.code === 'Tab') e.preventDefault();
      if (e.code === 'Space') e.preventDefault();
      if (e.repeat) return;
      this.keys.add(e.code);
      this.pressedKeys.add(e.code);
    };
    const ku = (e) => {
      this.keys.delete(e.code);
      this.releasedKeys.add(e.code);
    };
    window.addEventListener('keydown', kd);
    window.addEventListener('keyup', ku);
    window.addEventListener('blur', () => { this.keys.clear(); this.mouse = [false, false, false]; });

    const md = (e) => {
      if (!this.locked) return;
      const b = e.button;
      if (b > 2) return;
      if (!this.mouse[b]) this.mousePressed[b] = true;
      this.mouse[b] = true;
      e.preventDefault();
    };
    const mu = (e) => {
      const b = e.button;
      if (b > 2) return;
      this.mouse[b] = false;
      this.mouseReleased[b] = true;
    };
    window.addEventListener('mousedown', md);
    window.addEventListener('mouseup', mu);
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('wheel', (e) => { if (this.locked) { this.wheel += Math.sign(e.deltaY); e.preventDefault(); } }, { passive: false });

    document.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      this.dx += e.movementX || 0;
      this.dy += e.movementY || 0;
    });

    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      if (!this.locked) { this.mouse = [false, false, false]; this.keys.clear(); }
      this._onLockChange?.(this.locked);
    });
    document.addEventListener('pointerlockerror', () => { this.locked = false; });
  }

  onLockChange(fn) { this._onLockChange = fn; }

  requestLock() {
    if (this.locked) return;
    const p = this.canvas.requestPointerLock?.({ unadjustedMovement: true });
    if (p && p.catch) p.catch(() => { try { this.canvas.requestPointerLock(); } catch (e) { /* ignore */ } });
  }

  releaseLock() { if (document.pointerLockElement) document.exitPointerLock(); }

  /* -------------------------------------------------------------- queries */
  isDown(action) {
    const codes = this.binds[action];
    if (!codes) return false;
    for (const c of codes) if (this.keys.has(c)) return true;
    return false;
  }

  pressed(action) {
    const codes = this.binds[action];
    if (!codes) return false;
    for (const c of codes) if (this.pressedKeys.has(c)) return true;
    return false;
  }

  keyPressed(code) { return this.pressedKeys.has(code); }
  keyDown(code) { return this.keys.has(code); }

  /** Mouse look delta in radians, consumed. */
  lookDelta(out) {
    const s = this.sensitivity;
    out.x = -this.dx * s;
    out.y = (this.invertY ? this.dy : -this.dy) * s;
    this.dx = 0; this.dy = 0;
    return out;
  }

  get fire() { return this.mouse[0]; }
  get firePressed() { return this.mousePressed[0]; }
  get ads() { return this.mouse[2]; }
  get adsPressed() { return this.mousePressed[2]; }
  get meleeMouse() { return this.mousePressed[1]; }

  /** Called at the end of every frame to clear edge triggers. */
  endFrame() {
    this.pressedKeys.clear();
    this.releasedKeys.clear();
    this.mousePressed[0] = this.mousePressed[1] = this.mousePressed[2] = false;
    this.mouseReleased[0] = this.mouseReleased[1] = this.mouseReleased[2] = false;
    this.wheel = 0;
  }

  clear() {
    this.keys.clear();
    this.mouse = [false, false, false];
    this.dx = this.dy = 0;
    this.endFrame();
  }
}
