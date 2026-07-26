/**
 * Menu — main menu, pause, settings, loadout briefing, wave intermission,
 * game-over and the loading screen. All screens are DOM overlays so the WebGL
 * scene can keep rendering behind them (the main menu runs a slow orbit camera).
 */
const QUALITY = ['low', 'medium', 'high'];

export class Menu {
  constructor(game) {
    this.game = game;
    this.root = document.getElementById('menu');
    this.screen = 'loading';
    this.build();
    this.bind();
  }

  build() {
    this.root.innerHTML = `
      <div class="mn-bg"></div>
      <div class="mn-scan"></div>

      <!-- ============================ LOADING ============================ -->
      <section class="mn-screen" data-screen="loading">
        <div class="ld-wrap">
          <div class="ld-title">DEAD<span>SECTOR</span></div>
          <div class="ld-sub">PROCEDURAL ASSET FORGE</div>
          <div class="ld-bar"><div class="ld-fill" id="ld-fill"></div></div>
          <div class="ld-status" id="ld-status">Initialising…</div>
          <div class="ld-pct" id="ld-pct">0%</div>
          <div class="ld-note">Every texture, model, sound and animation in this game is
          generated at runtime from code — no external art assets.</div>
        </div>
      </section>

      <!-- ============================== MAIN ============================= -->
      <section class="mn-screen" data-screen="main">
        <div class="mn-logo">
          <div class="mn-logo-main">DEAD<span>SECTOR</span></div>
          <div class="mn-logo-sub">// SURVIVE THE QUARANTINE ZONE</div>
        </div>
        <nav class="mn-nav">
          <button class="mn-btn primary" data-act="play">
            <span class="bi">▶</span><span class="bt">DEPLOY</span><span class="bs">Begin the outbreak</span>
          </button>
          <button class="mn-btn" data-act="loadout">
            <span class="bi">✱</span><span class="bt">ARSENAL</span><span class="bs">Weapons &amp; enemy intel</span>
          </button>
          <button class="mn-btn" data-act="settings">
            <span class="bi">⚙</span><span class="bt">SETTINGS</span><span class="bs">Graphics, audio, controls</span>
          </button>
          <button class="mn-btn" data-act="credits">
            <span class="bi">i</span><span class="bt">ABOUT</span><span class="bs">How this was built</span>
          </button>
          <button class="mn-btn danger" data-act="quit">
            <span class="bi">⏻</span><span class="bt">EXIT</span><span class="bs">Close the application</span>
          </button>
        </nav>
        <div class="mn-foot">
          <span>v1.0.0</span><span class="dot">•</span><span>WebGL2 / Three.js</span>
          <span class="dot">•</span><span id="mn-best">BEST: WAVE 0</span>
        </div>
      </section>

      <!-- ============================= PAUSE ============================= -->
      <section class="mn-screen" data-screen="pause">
        <div class="mn-panel">
          <h2 class="pn-title">PAUSED</h2>
          <div class="pn-stats" id="pause-stats"></div>
          <nav class="mn-nav compact">
            <button class="mn-btn primary" data-act="resume"><span class="bt">RESUME</span></button>
            <button class="mn-btn" data-act="settings"><span class="bt">SETTINGS</span></button>
            <button class="mn-btn" data-act="restart"><span class="bt">RESTART</span></button>
            <button class="mn-btn danger" data-act="tomain"><span class="bt">ABANDON</span></button>
          </nav>
        </div>
      </section>

      <!-- =========================== SETTINGS ============================ -->
      <section class="mn-screen" data-screen="settings">
        <div class="mn-panel wide">
          <h2 class="pn-title">SETTINGS</h2>
          <div class="set-tabs">
            <button class="set-tab active" data-tab="video">VIDEO</button>
            <button class="set-tab" data-tab="audio">AUDIO</button>
            <button class="set-tab" data-tab="controls">CONTROLS</button>
            <button class="set-tab" data-tab="game">GAMEPLAY</button>
          </div>

          <div class="set-body" data-tab-body="video">
            <div class="set-row">
              <label>Quality preset</label>
              <div class="seg" data-seg="quality">
                <button data-v="low">LOW</button><button data-v="medium">MEDIUM</button><button data-v="high">HIGH</button>
              </div>
            </div>
            <div class="set-row"><label>Field of view</label>
              <input type="range" id="s-fov" min="65" max="110" step="1"><span class="val" id="v-fov">74</span></div>
            <div class="set-row"><label>Exposure</label>
              <input type="range" id="s-exp" min="0.6" max="1.6" step="0.02"><span class="val" id="v-exp">1.00</span></div>
            <div class="set-row"><label>Film grain</label>
              <input type="range" id="s-grain" min="0" max="0.16" step="0.005"><span class="val" id="v-grain">0.055</span></div>
            <div class="set-row"><label>Vignette</label>
              <input type="range" id="s-vig" min="0" max="2" step="0.05"><span class="val" id="v-vig">1.05</span></div>
            <div class="set-row"><label>Bloom</label>
              <input type="range" id="s-bloom" min="0" max="1.4" step="0.05"><span class="val" id="v-bloom">0.55</span></div>
            <div class="set-row"><label>Ambient occlusion</label>
              <div class="toggle" data-tg="sao"><i></i></div></div>
            <div class="set-row"><label>Motion / view bob</label>
              <div class="toggle" data-tg="bob"><i></i></div></div>
          </div>

          <div class="set-body hidden" data-tab-body="audio">
            <div class="set-row"><label>Master volume</label>
              <input type="range" id="s-vmaster" min="0" max="1" step="0.02"><span class="val" id="v-vmaster">85%</span></div>
            <div class="set-row"><label>Effects</label>
              <input type="range" id="s-vsfx" min="0" max="1" step="0.02"><span class="val" id="v-vsfx">100%</span></div>
            <div class="set-row"><label>Ambience</label>
              <input type="range" id="s-vmusic" min="0" max="1" step="0.02"><span class="val" id="v-vmusic">55%</span></div>
          </div>

          <div class="set-body hidden" data-tab-body="controls">
            <div class="set-row"><label>Mouse sensitivity</label>
              <input type="range" id="s-sens" min="0.4" max="4" step="0.05"><span class="val" id="v-sens">1.00</span></div>
            <div class="set-row"><label>Invert vertical</label>
              <div class="toggle" data-tg="invert"><i></i></div></div>
            <div class="set-row"><label>Hold to aim</label>
              <div class="toggle on" data-tg="holdads"><i></i></div></div>
            <div class="keymap" id="keymap"></div>
          </div>

          <div class="set-body hidden" data-tab-body="game">
            <div class="set-row"><label>Gore amount</label>
              <input type="range" id="s-gore" min="0" max="2" step="0.05"><span class="val" id="v-gore">1.00</span></div>
            <div class="set-row"><label>Blood decals persist</label>
              <div class="toggle on" data-tg="persist"><i></i></div></div>
            <div class="set-row"><label>Difficulty</label>
              <div class="seg" data-seg="difficulty">
                <button data-v="easy">SURVIVOR</button><button data-v="normal">SOLDIER</button><button data-v="hard">NIGHTMARE</button>
              </div>
            </div>
            <div class="set-row"><label>Show damage numbers</label>
              <div class="toggle" data-tg="dmgnum"><i></i></div></div>
          </div>

          <div class="pn-actions">
            <button class="mn-btn small" data-act="defaults"><span class="bt">RESET DEFAULTS</span></button>
            <button class="mn-btn small primary" data-act="back"><span class="bt">BACK</span></button>
          </div>
        </div>
      </section>

      <!-- ============================ LOADOUT ============================ -->
      <section class="mn-screen" data-screen="loadout">
        <div class="mn-panel wide">
          <h2 class="pn-title">ARSENAL &amp; INTEL</h2>
          <div class="lo-cols">
            <div class="lo-col">
              <h3>WEAPONS</h3>
              <div id="lo-weapons" class="lo-list"></div>
            </div>
            <div class="lo-col">
              <h3>HOSTILES</h3>
              <div id="lo-enemies" class="lo-list"></div>
            </div>
          </div>
          <div class="pn-actions"><button class="mn-btn small primary" data-act="back"><span class="bt">BACK</span></button></div>
        </div>
      </section>

      <!-- ============================ CREDITS ============================ -->
      <section class="mn-screen" data-screen="credits">
        <div class="mn-panel">
          <h2 class="pn-title">ABOUT DEAD SECTOR</h2>
          <div class="cr-body">
            <p><b>Everything is generated from code.</b> There are no image files, model
            files, or audio files anywhere in this project.</p>
            <ul>
              <li><b>Textures</b> — PBR albedo / normal / roughness / metal / AO sets are baked on the
              GPU at load time from hand-written GLSL noise recipes (brick, concrete, asphalt,
              rust, skin, cloth, blood, glass…).</li>
              <li><b>Models</b> — every mesh is built procedurally: bevelled solids, lathed profiles,
              extruded outlines, swept tubes and noise-displaced organics. No primitive is ever
              left as a bare cube or plane.</li>
              <li><b>Animation</b> — zombie locomotion, attacks and staggers are procedural
              sinusoidal joint blends; deaths hand over to a Verlet ragdoll solver.</li>
              <li><b>Audio</b> — gunshots, growls, gore and ambience are synthesised into
              buffers with layered noise, formant resonators and a procedural reverb impulse.</li>
              <li><b>Blood</b> — instanced decals conform to surface normals and persist for the
              entire match; pools grow under corpses.</li>
            </ul>
            <p class="cr-tech">Three.js · WebGL2 · Electron · esbuild · custom physics, ragdoll,
            particle and texture-baking systems.</p>
          </div>
          <div class="pn-actions"><button class="mn-btn small primary" data-act="back"><span class="bt">BACK</span></button></div>
        </div>
      </section>

      <!-- ========================== INTERMISSION ========================= -->
      <section class="mn-screen" data-screen="intermission">
        <div class="mn-panel">
          <h2 class="pn-title" id="im-title">WAVE CLEARED</h2>
          <div class="im-stats" id="im-stats"></div>
          <div class="im-shop" id="im-shop"></div>
          <div class="im-timer">Next wave in <b id="im-count">10</b>s
            <button class="mn-btn small primary inline" data-act="ready"><span class="bt">READY UP</span></button>
          </div>
        </div>
      </section>

      <!-- =========================== GAME OVER =========================== -->
      <section class="mn-screen" data-screen="gameover">
        <div class="mn-panel">
          <h2 class="pn-title danger">YOU DIED</h2>
          <div class="go-wave" id="go-wave">SURVIVED 0 WAVES</div>
          <div class="go-stats" id="go-stats"></div>
          <nav class="mn-nav compact">
            <button class="mn-btn primary" data-act="restart"><span class="bt">TRY AGAIN</span></button>
            <button class="mn-btn" data-act="tomain"><span class="bt">MAIN MENU</span></button>
          </nav>
        </div>
      </section>
    `;
    this.screens = {};
    for (const el of this.root.querySelectorAll('[data-screen]')) {
      this.screens[el.dataset.screen] = el;
    }
    this.el = {
      ldFill: document.getElementById('ld-fill'),
      ldStatus: document.getElementById('ld-status'),
      ldPct: document.getElementById('ld-pct')
    };
  }

  /* ---------------------------------------------------------------- bind */
  bind() {
    const g = this.game;

    this.root.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-act]');
      if (btn) {
        g.audio?.play('uiClick', null, 0.5);
        this.act(btn.dataset.act);
        return;
      }
      const tab = e.target.closest('.set-tab');
      if (tab) {
        g.audio?.play('uiHover', null, 0.3);
        for (const t of this.root.querySelectorAll('.set-tab')) t.classList.toggle('active', t === tab);
        for (const b of this.root.querySelectorAll('[data-tab-body]')) {
          b.classList.toggle('hidden', b.dataset.tabBody !== tab.dataset.tab);
        }
        return;
      }
      const seg = e.target.closest('.seg button');
      if (seg) {
        g.audio?.play('uiClick', null, 0.4);
        const key = seg.parentElement.dataset.seg;
        this.setSetting(key, seg.dataset.v);
        return;
      }
      const tg = e.target.closest('.toggle');
      if (tg) {
        g.audio?.play('uiClick', null, 0.4);
        const on = !tg.classList.contains('on');
        tg.classList.toggle('on', on);
        this.setSetting(tg.dataset.tg, on);
      }
    });

    this.root.addEventListener('mouseover', (e) => {
      if (e.target.closest('.mn-btn')) this.game.audio?.play('uiHover', null, 0.22);
    });

    const slid = (id, key, fmt) => {
      const s = document.getElementById(id);
      if (!s) return;
      s.addEventListener('input', () => {
        const v = parseFloat(s.value);
        this.setSetting(key, v);
        const out = document.getElementById(id.replace('s-', 'v-'));
        if (out) out.textContent = fmt ? fmt(v) : v.toFixed(2);
      });
    };
    slid('s-fov', 'fov', (v) => String(Math.round(v)));
    slid('s-exp', 'exposure');
    slid('s-grain', 'grain', (v) => v.toFixed(3));
    slid('s-vig', 'vignette');
    slid('s-bloom', 'bloom');
    slid('s-vmaster', 'volMaster', (v) => Math.round(v * 100) + '%');
    slid('s-vsfx', 'volSfx', (v) => Math.round(v * 100) + '%');
    slid('s-vmusic', 'volMusic', (v) => Math.round(v * 100) + '%');
    slid('s-sens', 'sensitivity');
    slid('s-gore', 'goreAmount');
  }

  act(a) {
    const g = this.game;
    switch (a) {
      case 'play': g.startRun(); break;
      case 'resume': g.resume(); break;
      case 'restart': g.startRun(true); break;
      case 'tomain': g.toMainMenu(); break;
      case 'settings': this._settingsFrom = this.screen; this.show('settings'); this.syncSettings(); break;
      case 'loadout': this.buildLoadout(); this.show('loadout'); break;
      case 'credits': this.show('credits'); break;
      case 'back':
        g.audio?.play('uiBack', null, 0.5);
        this.show(this._settingsFrom === 'pause' ? 'pause' : 'main');
        this._settingsFrom = null;
        break;
      case 'defaults': g.resetSettings(); this.syncSettings(); break;
      case 'ready': g.skipIntermission(); break;
      case 'quit': g.quit(); break;
    }
  }

  /* ------------------------------------------------------------- screens */
  show(name) {
    this.screen = name;
    this.root.style.display = name ? 'flex' : 'none';
    for (const k of Object.keys(this.screens)) {
      this.screens[k].classList.toggle('active', k === name);
    }
    this.root.classList.toggle('is-loading', name === 'loading');
    this.root.classList.toggle('is-ingame', name === 'pause' || name === 'intermission' || name === 'gameover');
  }

  hide() { this.screen = null; this.root.style.display = 'none'; }

  /* ------------------------------------------------------------- loading */
  setLoading(pct, status) {
    this.el.ldFill.style.width = (pct * 100).toFixed(1) + '%';
    this.el.ldPct.textContent = Math.round(pct * 100) + '%';
    if (status) this.el.ldStatus.textContent = status;
  }

  /* ------------------------------------------------------------ settings */
  setSetting(key, value) {
    this.game.applySetting(key, value);
  }

  syncSettings() {
    const s = this.game.settings;
    const set = (id, v) => { const e = document.getElementById(id); if (e) e.value = v; };
    const out = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };

    set('s-fov', s.fov); out('v-fov', Math.round(s.fov));
    set('s-exp', s.exposure); out('v-exp', s.exposure.toFixed(2));
    set('s-grain', s.grain); out('v-grain', s.grain.toFixed(3));
    set('s-vig', s.vignette); out('v-vig', s.vignette.toFixed(2));
    set('s-bloom', s.bloom); out('v-bloom', s.bloom.toFixed(2));
    set('s-vmaster', s.volMaster); out('v-vmaster', Math.round(s.volMaster * 100) + '%');
    set('s-vsfx', s.volSfx); out('v-vsfx', Math.round(s.volSfx * 100) + '%');
    set('s-vmusic', s.volMusic); out('v-vmusic', Math.round(s.volMusic * 100) + '%');
    set('s-sens', s.sensitivity); out('v-sens', s.sensitivity.toFixed(2));
    set('s-gore', s.goreAmount); out('v-gore', s.goreAmount.toFixed(2));

    for (const seg of this.root.querySelectorAll('.seg')) {
      const key = seg.dataset.seg;
      for (const b of seg.children) b.classList.toggle('active', String(s[key]) === b.dataset.v);
    }
    for (const tg of this.root.querySelectorAll('.toggle')) {
      tg.classList.toggle('on', !!s[tg.dataset.tg]);
    }

    // keymap listing
    const km = document.getElementById('keymap');
    if (km) {
      const NAMES = {
        forward: 'Move forward', back: 'Move back', left: 'Strafe left', right: 'Strafe right',
        jump: 'Jump', sprint: 'Sprint', crouch: 'Crouch', reload: 'Reload', use: 'Interact',
        melee: 'Melee', flashlight: 'Flashlight', grenade: 'Grenade', pause: 'Menu'
      };
      const binds = this.game.input?.binds || {};
      km.innerHTML = Object.keys(NAMES).map((k) => {
        const codes = (binds[k] || []).map((c) => c.replace('Key', '').replace('Digit', '').replace('Left', ' L').replace('Arrow', '')).join(' / ');
        return `<div class="km-row"><span>${NAMES[k]}</span><b>${codes}</b></div>`;
      }).join('') + `<div class="km-row"><span>Fire</span><b>MOUSE 1</b></div>
        <div class="km-row"><span>Aim down sights</span><b>MOUSE 2</b></div>
        <div class="km-row"><span>Weapon switch</span><b>1-5 / WHEEL</b></div>`;
    }
  }

  /* ------------------------------------------------------------- loadout */
  buildLoadout() {
    const p = this.game.player;
    const wl = document.getElementById('lo-weapons');
    const el = document.getElementById('lo-enemies');
    if (!wl || !el) return;

    const WEAPONS = [
      ['MK-7 CARBINE', 'Assault rifle', 'Fully automatic 5.56. The all-rounder — controllable recoil, 30-round magazine.', 27, 720, 30],
      ['BREAKER 12G', 'Pump shotgun', '10-pellet buckshot. Devastating inside 8 m, useless beyond 20 m.', 17, 78, 8],
      ['P-9 SIDEARM', 'Pistol', 'Semi-automatic backup. Fast draw, surprising accuracy, infinite dignity.', 22, 420, 17],
      ['VECTOR-9', 'Suppressed SMG', 'Very high rate of fire and low noise — zombies notice you much later.', 18, 1050, 40],
      ['LONGSHOT .338', 'Bolt-action rifle', 'Penetrates up to four bodies. One shot removes almost any head.', 165, 48, 5]
    ];
    wl.innerHTML = WEAPONS.map(([n, t, d, dmg, rpm, mag]) => `
      <div class="lo-item">
        <div class="lo-head"><b>${n}</b><span>${t}</span></div>
        <div class="lo-desc">${d}</div>
        <div class="lo-bars">
          <div class="lo-bar"><span>DMG</span><i style="width:${Math.min(100, dmg / 1.8)}%"></i><em>${dmg}</em></div>
          <div class="lo-bar"><span>RPM</span><i style="width:${Math.min(100, rpm / 11)}%"></i><em>${rpm}</em></div>
          <div class="lo-bar"><span>MAG</span><i style="width:${Math.min(100, mag * 2.5)}%"></i><em>${mag}</em></div>
        </div>
      </div>`).join('');

    const ENEMIES = [
      ['WALKER', 'The baseline infected. Slow, relentless, always in numbers.', 100, 1.55],
      ['RUNNER', 'Fresh infection — sprints, lunges, and closes distance fast.', 62, 4.55],
      ['CRAWLER', 'Legless. Drags itself along the ground below your crosshair.', 55, 2.15],
      ['BRUTE', 'Hypertrophied mass. Absorbs a magazine and hits like a truck.', 420, 1.28],
      ['BLOATER', 'Gas-swollen. Detonates on death — do not kill it up close.', 240, 1.05]
    ];
    el.innerHTML = ENEMIES.map(([n, d, hp, sp]) => `
      <div class="lo-item">
        <div class="lo-head"><b>${n}</b><span>${hp} HP</span></div>
        <div class="lo-desc">${d}</div>
        <div class="lo-bars">
          <div class="lo-bar"><span>HP</span><i style="width:${Math.min(100, hp / 4.4)}%"></i><em>${hp}</em></div>
          <div class="lo-bar"><span>SPD</span><i style="width:${Math.min(100, sp * 20)}%"></i><em>${sp.toFixed(2)}</em></div>
        </div>
      </div>`).join('');
  }

  /* -------------------------------------------------------- in-game info */
  setPauseStats(stats) {
    const e = document.getElementById('pause-stats');
    if (!e) return;
    e.innerHTML = this.statBlock(stats);
  }

  statBlock(s) {
    const acc = s.shots > 0 ? Math.round((s.hits / s.shots) * 100) + '%' : '—';
    const hsr = s.kills > 0 ? Math.round((s.headshots / Math.max(1, s.hits)) * 100) + '%' : '—';
    return `
      <div class="sb"><span>WAVE</span><b>${s.wave}</b></div>
      <div class="sb"><span>SCORE</span><b>${s.score.toLocaleString()}</b></div>
      <div class="sb"><span>KILLS</span><b>${s.kills}</b></div>
      <div class="sb"><span>HEADSHOTS</span><b>${s.headshots}</b></div>
      <div class="sb"><span>ACCURACY</span><b>${acc}</b></div>
      <div class="sb"><span>HS RATIO</span><b>${hsr}</b></div>
      <div class="sb"><span>TIME</span><b>${Math.floor(s.time / 60)}:${String(Math.floor(s.time % 60)).padStart(2, '0')}</b></div>
      <div class="sb"><span>BEST STREAK</span><b>${s.bestStreak || 0}</b></div>`;
  }

  setIntermission(wave, stats, seconds, unlocks) {
    document.getElementById('im-title').textContent = `WAVE ${wave} CLEARED`;
    document.getElementById('im-stats').innerHTML = this.statBlock(stats);
    document.getElementById('im-count').textContent = Math.ceil(seconds);
    const shop = document.getElementById('im-shop');
    if (shop) {
      shop.innerHTML = unlocks && unlocks.length
        ? `<div class="im-unlock">${unlocks.map((u) => `<span>✚ ${u}</span>`).join('')}</div>`
        : '<div class="im-unlock dim"><span>Ammunition and medkits restocked across the sector</span></div>';
    }
  }

  setIntermissionCount(s) {
    const e = document.getElementById('im-count');
    if (e) e.textContent = Math.ceil(s);
  }

  setGameOver(stats) {
    document.getElementById('go-wave').textContent = `SURVIVED ${Math.max(0, stats.wave - 1)} WAVE${stats.wave - 1 === 1 ? '' : 'S'}`;
    document.getElementById('go-stats').innerHTML = this.statBlock(stats);
  }

  setBest(wave) {
    const e = document.getElementById('mn-best');
    if (e) e.textContent = 'BEST: WAVE ' + wave;
  }
}
