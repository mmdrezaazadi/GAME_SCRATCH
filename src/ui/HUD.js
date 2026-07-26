/**
 * HUD — diegetic-ish combat interface drawn with DOM + a canvas overlay for the
 * dynamic crosshair, damage compass, hitmarkers and the sniper scope mask.
 * Everything scales with the viewport and is driven from Game/Player state.
 */
import * as THREE from 'three';

export class HUD {
  constructor(game) {
    this.game = game;
    this.root = document.getElementById('hud');
    this.root.innerHTML = '';
    this.visible = false;

    /* ---------------- canvas layer (crosshair / compass / scope) ---------- */
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'hud-canvas';
    this.root.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.resize();

    /* ---------------- DOM widgets ---------------------------------------- */
    this.root.insertAdjacentHTML('beforeend', `
      <div class="hud-vitals">
        <div class="vital-block">
          <div class="vital-label">VITALS</div>
          <div class="bar-outer hp"><div class="bar-fill" id="hp-fill"></div><div class="bar-ghost" id="hp-ghost"></div></div>
          <div class="vital-row">
            <span class="vital-num" id="hp-num">100</span>
            <span class="vital-unit">HP</span>
            <span class="vital-sep"></span>
            <span class="vital-num sm" id="armor-num">0</span>
            <span class="vital-unit">ARM</span>
          </div>
          <div class="bar-outer stam"><div class="bar-fill" id="stam-fill"></div></div>
        </div>
      </div>

      <div class="hud-weapon">
        <div class="wpn-name" id="wpn-name">MK-7 CARBINE</div>
        <div class="wpn-ammo">
          <span class="ammo-mag" id="ammo-mag">30</span>
          <span class="ammo-slash">/</span>
          <span class="ammo-res" id="ammo-res">180</span>
        </div>
        <div class="wpn-mag-dots" id="mag-dots"></div>
        <div class="wpn-extra">
          <span class="chip" id="gren-chip">✦ 3</span>
          <span class="chip" id="fire-chip">AUTO</span>
        </div>
      </div>

      <div class="hud-wave">
        <div class="wave-label">WAVE</div>
        <div class="wave-num" id="wave-num">1</div>
        <div class="wave-sub" id="wave-sub">0 / 8 REMAINING</div>
        <div class="wave-bar"><div class="wave-bar-fill" id="wave-bar"></div></div>
      </div>

      <div class="hud-score">
        <div class="score-row"><span class="k">SCORE</span><span class="v" id="score-v">0</span></div>
        <div class="score-row"><span class="k">KILLS</span><span class="v" id="kills-v">0</span></div>
        <div class="score-row"><span class="k">HEADSHOTS</span><span class="v" id="hs-v">0</span></div>
        <div class="score-row"><span class="k">ACCURACY</span><span class="v" id="acc-v">—</span></div>
      </div>

      <div class="hud-toasts" id="toasts"></div>
      <div class="hud-center-msg" id="center-msg"></div>
      <div class="hud-prompt" id="use-prompt"></div>
      <div class="hud-hint" id="hud-hint">
        <b>WASD</b> move · <b>MOUSE</b> aim · <b>LMB</b> fire · <b>RMB</b> aim · <b>R</b> reload
        · <b>1-5</b> weapons · <b>SHIFT</b> sprint · <b>CTRL</b> crouch · <b>SPACE</b> jump
        · <b>V</b> melee · <b>G</b> grenade · <b>F</b> light · <b>ESC</b> menu
      </div>
      <div class="hud-lowhp" id="lowhp"></div>
      <div class="hud-killfeed" id="killfeed"></div>
    `);

    const $ = (id) => document.getElementById(id);
    this.el = {
      hpFill: $('hp-fill'), hpGhost: $('hp-ghost'), hpNum: $('hp-num'), armorNum: $('armor-num'),
      stamFill: $('stam-fill'),
      wpnName: $('wpn-name'), ammoMag: $('ammo-mag'), ammoRes: $('ammo-res'), magDots: $('mag-dots'),
      grenChip: $('gren-chip'), fireChip: $('fire-chip'),
      waveNum: $('wave-num'), waveSub: $('wave-sub'), waveBar: $('wave-bar'),
      scoreV: $('score-v'), killsV: $('kills-v'), hsV: $('hs-v'), accV: $('acc-v'),
      toasts: $('toasts'), centerMsg: $('center-msg'), usePrompt: $('use-prompt'),
      hint: $('hud-hint'), lowhp: $('lowhp'), killfeed: $('killfeed')
    };

    /* ---------------- dynamic state ---------------------------------------- */
    this.hitmarkers = [];
    this.damageMarks = [];
    this.crossSpread = 0;
    this.crossTargetSpread = 0;
    this.hpDisplay = 100;
    this.scope = 0;
    this.t = 0;
    this.hintT = 22;
    this.killfeedItems = [];
    this.lowHpPulse = 0;

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.floor(window.innerWidth * dpr);
    this.canvas.height = Math.floor(window.innerHeight * dpr);
    this.canvas.style.width = window.innerWidth + 'px';
    this.canvas.style.height = window.innerHeight + 'px';
    this.dpr = dpr;
  }

  show(v) {
    this.visible = v;
    this.root.style.display = v ? 'block' : 'none';
  }

  /* ------------------------------------------------------------- setters */
  setWeapon(stats, ammo) {
    this.el.wpnName.textContent = stats.name;
    this.el.ammoMag.textContent = ammo.mag;
    this.el.ammoRes.textContent = ammo.reserve;
    this.el.ammoMag.classList.toggle('low', ammo.mag <= Math.max(1, Math.ceil(stats.mag * 0.25)));
    this.el.ammoMag.classList.toggle('empty', ammo.mag === 0);
    this.el.fireChip.textContent = stats.auto ? 'AUTO' : stats.pellets ? 'PUMP' : stats.scoped ? 'BOLT' : 'SEMI';
    // magazine dot strip
    const n = Math.min(stats.mag, 40);
    let html = '';
    for (let i = 0; i < n; i++) {
      const filled = i < Math.round((ammo.mag / stats.mag) * n);
      html += `<i class="${filled ? 'on' : ''}"></i>`;
    }
    this.el.magDots.innerHTML = html;
  }

  setGrenades(n) { this.el.grenChip.textContent = '✦ ' + n; }

  setWave(wave, remaining, total) {
    this.el.waveNum.textContent = wave;
    this.el.waveSub.textContent = `${remaining} / ${total} REMAINING`;
    const p = total > 0 ? 1 - remaining / total : 1;
    this.el.waveBar.style.width = (p * 100).toFixed(1) + '%';
  }

  setStats(stats) {
    this.el.scoreV.textContent = stats.score.toLocaleString();
    this.el.killsV.textContent = stats.kills;
    this.el.hsV.textContent = stats.headshots;
    this.el.accV.textContent = stats.shots > 0 ? Math.round((stats.hits / stats.shots) * 100) + '%' : '—';
  }

  setScope(v) { this.scope = v; }

  showHitmarker(isHead) {
    this.hitmarkers.push({ t: 0, life: isHead ? 0.34 : 0.22, head: !!isHead });
    this.game.audio?.play(isHead ? 'hitmarkHead' : 'hitmark', null, isHead ? 0.5 : 0.32);
  }

  showDamage(x, y) {
    this.damageMarks.push({ x, y, t: 0, life: 1.1 });
  }

  toast(text, cls = '') {
    const d = document.createElement('div');
    d.className = 'toast ' + cls;
    d.textContent = text;
    this.el.toasts.appendChild(d);
    setTimeout(() => { d.classList.add('out'); }, 2200);
    setTimeout(() => { d.remove(); }, 2900);
  }

  killfeed(text, cls = '') {
    const d = document.createElement('div');
    d.className = 'kf ' + cls;
    d.innerHTML = text;
    this.el.killfeed.appendChild(d);
    while (this.el.killfeed.children.length > 5) this.el.killfeed.removeChild(this.el.killfeed.firstChild);
    setTimeout(() => { d.classList.add('out'); }, 2600);
    setTimeout(() => { d.remove(); }, 3200);
  }

  centerMessage(text, sub = '', duration = 2.6) {
    this.el.centerMsg.innerHTML = text ? `<div class="cm-main">${text}</div>${sub ? `<div class="cm-sub">${sub}</div>` : ''}` : '';
    this.el.centerMsg.classList.toggle('on', !!text);
    if (text) {
      clearTimeout(this._cmT);
      this._cmT = setTimeout(() => {
        this.el.centerMsg.classList.remove('on');
      }, duration * 1000);
    }
  }

  setPrompt(text) {
    if (this._prompt === text) return;
    this._prompt = text;
    this.el.usePrompt.innerHTML = text ? `<span class="key">E</span> ${text}` : '';
    this.el.usePrompt.classList.toggle('on', !!text);
  }

  /* -------------------------------------------------------------- update */
  update(dt) {
    if (!this.visible) return;
    this.t += dt;
    const p = this.game.player;
    if (!p) return;

    /* --- vitals --- */
    this.hpDisplay += (p.hp - this.hpDisplay) * Math.min(1, dt * 9);
    const hpP = Math.max(0, this.hpDisplay / p.maxHp);
    this.el.hpFill.style.width = (hpP * 100).toFixed(1) + '%';
    this.el.hpGhost.style.width = (Math.max(0, p.hp / p.maxHp) * 100).toFixed(1) + '%';
    this.el.hpNum.textContent = Math.max(0, Math.ceil(p.hp));
    this.el.hpNum.classList.toggle('low', p.hp < 35);
    this.el.armorNum.textContent = Math.ceil(p.armor);
    this.el.stamFill.style.width = (p.stamina * 100).toFixed(1) + '%';
    this.el.stamFill.classList.toggle('low', p.stamina < 0.2);

    /* --- low-hp vignette --- */
    const lowN = p.hp < 40 ? 1 - p.hp / 40 : 0;
    this.lowHpPulse += dt * (2.2 + lowN * 3.4);
    this.el.lowhp.style.opacity = (lowN * (0.55 + 0.45 * Math.abs(Math.sin(this.lowHpPulse)))).toFixed(3);

    /* --- controls hint fades out --- */
    if (this.hintT > 0) {
      this.hintT -= dt;
      this.el.hint.style.opacity = Math.min(1, this.hintT / 3).toFixed(2);
      if (this.hintT <= 0) this.el.hint.style.display = 'none';
    }

    /* --- crosshair spread --- */
    const spreadRad = p.currentSpread();
    const fovRad = (p.camera.fov * Math.PI) / 180;
    const px = (spreadRad / (fovRad * 0.5)) * (window.innerHeight * 0.5);
    this.crossTargetSpread = Math.max(3, Math.min(140, px));
    this.crossSpread += (this.crossTargetSpread - this.crossSpread) * Math.min(1, dt * 16);

    this.drawCanvas(dt);
  }

  /* ------------------------------------------------------------- canvas */
  drawCanvas(dt) {
    const ctx = this.ctx;
    const W = this.canvas.width, H = this.canvas.height;
    const dpr = this.dpr;
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2;
    const p = this.game.player;
    const scoped = this.scope > 0.02;

    /* ---- sniper scope mask ---- */
    if (scoped) {
      const a = Math.pow(this.scope, 1.6);
      const r = Math.min(W, H) * 0.42;
      ctx.save();
      ctx.globalAlpha = a;
      // black surround
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.rect(0, 0, W, H);
      ctx.arc(cx, cy, r, 0, Math.PI * 2, true);
      ctx.fill();
      // lens vignette
      const grd = ctx.createRadialGradient(cx, cy, r * 0.45, cx, cy, r);
      grd.addColorStop(0, 'rgba(0,0,0,0)');
      grd.addColorStop(1, 'rgba(0,0,0,0.82)');
      ctx.fillStyle = grd;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
      // reticle: mil-dot crosshair
      ctx.strokeStyle = 'rgba(12,14,12,0.92)';
      ctx.lineWidth = 1.6 * dpr;
      ctx.beginPath();
      ctx.moveTo(cx - r, cy); ctx.lineTo(cx - r * 0.06, cy);
      ctx.moveTo(cx + r * 0.06, cy); ctx.lineTo(cx + r, cy);
      ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy - r * 0.06);
      ctx.moveTo(cx, cy + r * 0.06); ctx.lineTo(cx, cy + r);
      ctx.stroke();
      ctx.lineWidth = 3.2 * dpr;
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.55, cy); ctx.lineTo(cx - r * 0.10, cy);
      ctx.moveTo(cx + r * 0.10, cy); ctx.lineTo(cx + r * 0.55, cy);
      ctx.moveTo(cx, cy + r * 0.10); ctx.lineTo(cx, cy + r * 0.55);
      ctx.stroke();
      ctx.fillStyle = 'rgba(12,14,12,0.9)';
      for (let i = 1; i <= 5; i++) {
        const d = (r * 0.10) + i * (r * 0.085);
        for (const [dx, dy] of [[d, 0], [-d, 0], [0, d]]) {
          ctx.beginPath(); ctx.arc(cx + dx, cy + dy, 2.0 * dpr, 0, Math.PI * 2); ctx.fill();
        }
      }
      // ranging numbers
      ctx.fillStyle = 'rgba(20,24,20,0.75)';
      ctx.font = `${11 * dpr}px "Rajdhani", monospace`;
      ctx.textAlign = 'left';
      for (let i = 1; i <= 4; i++) {
        ctx.fillText(String(i * 2), cx + 6 * dpr, cy + (r * 0.10) + i * (r * 0.085) + 4 * dpr);
      }
      // lens ring
      ctx.strokeStyle = 'rgba(0,0,0,0.95)';
      ctx.lineWidth = 8 * dpr;
      ctx.beginPath(); ctx.arc(cx, cy, r + 3 * dpr, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();
    }

    /* ---- dynamic crosshair ---- */
    if (!scoped || this.scope < 0.9) {
      const alpha = 1 - this.scope;
      const s = this.crossSpread * dpr * 0.5;
      const len = 9 * dpr;
      const th = 2.0 * dpr;
      const gapExtra = 0;

      // aim state colour: red when a zombie is under the crosshair
      const onTarget = this.game.aimTarget ? 1 : 0;
      const col = onTarget ? 'rgba(255,72,58,' : 'rgba(232,240,236,';

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.lineCap = 'round';
      // outline for readability
      ctx.strokeStyle = 'rgba(0,0,0,0.55)';
      ctx.lineWidth = th + 2.2 * dpr;
      this._crossPath(ctx, cx, cy, s + gapExtra, len);
      ctx.stroke();
      ctx.strokeStyle = col + '0.92)';
      ctx.lineWidth = th;
      this._crossPath(ctx, cx, cy, s + gapExtra, len);
      ctx.stroke();
      // centre dot
      ctx.fillStyle = col + '0.95)';
      ctx.beginPath(); ctx.arc(cx, cy, 1.5 * dpr, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }

    /* ---- hitmarkers ---- */
    for (let i = this.hitmarkers.length - 1; i >= 0; i--) {
      const h = this.hitmarkers[i];
      h.t += dt;
      if (h.t >= h.life) { this.hitmarkers.splice(i, 1); continue; }
      const k = h.t / h.life;
      const a = 1 - k;
      const sz = (h.head ? 15 : 11) * dpr * (1 + k * 0.7);
      const g = (h.head ? 5 : 4) * dpr;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(0,0,0,0.6)';
      ctx.lineWidth = 4.2 * dpr;
      this._xPath(ctx, cx, cy, g, sz);
      ctx.stroke();
      ctx.strokeStyle = h.head ? 'rgba(255,214,92,0.98)' : 'rgba(255,255,255,0.95)';
      ctx.lineWidth = 2.4 * dpr;
      this._xPath(ctx, cx, cy, g, sz);
      ctx.stroke();
      ctx.restore();
    }

    /* ---- damage direction compass ---- */
    for (let i = this.damageMarks.length - 1; i >= 0; i--) {
      const m = this.damageMarks[i];
      m.t += dt;
      if (m.t >= m.life) { this.damageMarks.splice(i, 1); continue; }
      const a = Math.pow(1 - m.t / m.life, 1.5);
      const ang = Math.atan2(m.x, m.y);
      const r = Math.min(W, H) * 0.20;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ang);
      ctx.globalAlpha = a * 0.92;
      const grd = ctx.createLinearGradient(0, -r - 34 * dpr, 0, -r);
      grd.addColorStop(0, 'rgba(255,40,30,0)');
      grd.addColorStop(1, 'rgba(255,52,38,0.95)');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.moveTo(-24 * dpr, -r);
      ctx.lineTo(0, -r - 30 * dpr);
      ctx.lineTo(24 * dpr, -r);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    /* ---- off-screen enemy indicators (close threats only) ---- */
    if (p && p.alive) {
      const cam = p.camera;
      ctx.save();
      for (const z of this.game.zombies) {
        if (z.dead) continue;
        const d = z.root.position.distanceTo(p.pos);
        if (d > 16) continue;
        const v = z.root.position.clone();
        v.y += 1.0;
        v.project(cam);
        const onScreen = v.z < 1 && Math.abs(v.x) < 1 && Math.abs(v.y) < 1;
        if (onScreen) continue;
        // direction in view space
        const dir = z.root.position.clone().sub(p.pos).setY(0).normalize();
        const fwd = new THREE.Vector3(-Math.sin(p.yaw), 0, -Math.cos(p.yaw));
        const right = new THREE.Vector3(Math.cos(p.yaw), 0, -Math.sin(p.yaw));
        const ang = Math.atan2(dir.dot(right), dir.dot(fwd));
        const r = Math.min(W, H) * 0.30;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ang);
        ctx.globalAlpha = 0.55 * (1 - d / 16);
        ctx.fillStyle = 'rgba(255,120,60,0.9)';
        ctx.beginPath();
        ctx.moveTo(-8 * dpr, -r);
        ctx.lineTo(0, -r - 12 * dpr);
        ctx.lineTo(8 * dpr, -r);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    }
  }

  _crossPath(ctx, cx, cy, gap, len) {
    ctx.beginPath();
    ctx.moveTo(cx - gap - len, cy); ctx.lineTo(cx - gap, cy);
    ctx.moveTo(cx + gap, cy); ctx.lineTo(cx + gap + len, cy);
    ctx.moveTo(cx, cy - gap - len); ctx.lineTo(cx, cy - gap);
    ctx.moveTo(cx, cy + gap); ctx.lineTo(cx, cy + gap + len);
  }

  _xPath(ctx, cx, cy, gap, len) {
    ctx.beginPath();
    ctx.moveTo(cx - gap - len, cy - gap - len); ctx.lineTo(cx - gap, cy - gap);
    ctx.moveTo(cx + gap, cy + gap); ctx.lineTo(cx + gap + len, cy + gap + len);
    ctx.moveTo(cx + gap + len, cy - gap - len); ctx.lineTo(cx + gap, cy - gap);
    ctx.moveTo(cx - gap, cy + gap); ctx.lineTo(cx - gap - len, cy + gap + len);
  }
}
