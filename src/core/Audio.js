/**
 * Audio — 100% procedural. No sample files: every sound is synthesised at load
 * time into an AudioBuffer using noise bursts, filtered impulses, FM tones and
 * convolution-style tails, then played through a positional/panner graph with a
 * shared reverb bus so gunshots ring off the buildings.
 */
const CUES = [
  'rifle', 'shotgun', 'pistol', 'smg', 'sniper', 'dryfire',
  'reloadOut', 'reloadIn', 'reloadCharge', 'bolt', 'switch',
  'shellDrop', 'casing',
  'zombieHit', 'zombieAttack', 'zombieMoan', 'zombieDie', 'headshot', 'flesh', 'gib', 'burst',
  'hitmark', 'hitmarkHead',
  'playerHurt', 'playerDie', 'heartbeat', 'heal', 'pickup', 'weaponPickup',
  'footDirt', 'footConcrete', 'footMetal', 'jump', 'land',
  'uiClick', 'uiHover', 'uiBack', 'waveStart', 'waveEnd', 'lastStand', 'radio',
  'impactConcrete', 'impactMetal', 'impactWood', 'impactDirt', 'impactGlass',
  'grenade', 'grenadePin', 'wind', 'ambience'
];

export class AudioEngine {
  constructor() {
    this.ready = false;
    this.ctx = null;
    this.buffers = {};
    this.masterVol = 0.85;
    this.sfxVol = 1.0;
    this.musicVol = 0.55;
    this.listenerPos = null;
    this.listenerFwd = null;
    this.voices = 0;
    this.maxVoices = 34;
    this._lastPlay = {};
  }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC({ latencyHint: 'interactive', sampleRate: 44100 });
    const ctx = this.ctx;

    this.master = ctx.createGain();
    this.master.gain.value = this.masterVol;

    // gentle limiter so overlapping gunshots never clip
    this.comp = ctx.createDynamicsCompressor();
    this.comp.threshold.value = -12;
    this.comp.knee.value = 12;
    this.comp.ratio.value = 6;
    this.comp.attack.value = 0.004;
    this.comp.release.value = 0.16;

    this.sfxBus = ctx.createGain();
    this.sfxBus.gain.value = this.sfxVol;
    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = this.musicVol;

    // reverb bus (procedural impulse response: decaying filtered noise)
    this.conv = ctx.createConvolver();
    this.conv.buffer = this._makeIR(1.9, 0.32);
    this.revSend = ctx.createGain();
    this.revSend.gain.value = 0.30;
    this.revWet = ctx.createGain();
    this.revWet.gain.value = 0.55;

    this.sfxBus.connect(this.comp);
    this.musicBus.connect(this.comp);
    this.revSend.connect(this.conv);
    this.conv.connect(this.revWet);
    this.revWet.connect(this.comp);
    this.comp.connect(this.master);
    this.master.connect(ctx.destination);

    this._bake();
    this.ready = true;
  }

  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }
  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }

  setVolumes({ master, sfx, music }) {
    if (master !== undefined) { this.masterVol = master; if (this.master) this.master.gain.value = master; }
    if (sfx !== undefined) { this.sfxVol = sfx; if (this.sfxBus) this.sfxBus.gain.value = sfx; }
    if (music !== undefined) { this.musicVol = music; if (this.musicBus) this.musicBus.gain.value = music; }
  }

  /* ---------------------------------------------------------- DSP helpers */
  _buf(seconds, channels = 1) {
    return this.ctx.createBuffer(channels, Math.max(1, Math.ceil(this.ctx.sampleRate * seconds)), this.ctx.sampleRate);
  }

  _makeIR(dur, damp) {
    const b = this._buf(dur, 2);
    const sr = this.ctx.sampleRate;
    for (let ch = 0; ch < 2; ch++) {
      const d = b.getChannelData(ch);
      let lp = 0;
      for (let i = 0; i < d.length; i++) {
        const t = i / sr;
        const env = Math.pow(1 - t / dur, 2.6);
        // sparse early reflections + dense tail
        let n = (Math.random() * 2 - 1);
        if (t < 0.09 && Math.random() > 0.15) n *= 0.25;
        lp += (n - lp) * (1 - damp);
        d[i] = lp * env * 0.9;
      }
    }
    return b;
  }

  /* Utility ADSR-ish envelope */
  _env(i, n, a, d, sus = 0, r = 0.2, curve = 2) {
    const t = i / n;
    if (t < a) return Math.pow(t / a, 0.7);
    if (t < a + d) {
      const k = (t - a) / d;
      return 1 - (1 - sus) * Math.pow(k, 1 / curve);
    }
    const k = Math.min(1, (t - a - d) / Math.max(r, 1e-5));
    return sus * Math.pow(1 - k, curve);
  }

  /** One-pole lowpass over a Float32Array in place. */
  _lp(d, cutoff) {
    let y = 0;
    const a = Math.min(0.999, cutoff);
    for (let i = 0; i < d.length; i++) { y += (d[i] - y) * a; d[i] = y; }
  }

  _hp(d, cutoff) {
    let y = 0, px = 0;
    const a = Math.min(0.999, cutoff);
    for (let i = 0; i < d.length; i++) {
      y = a * (y + d[i] - px);
      px = d[i];
      d[i] = y;
    }
  }

  _norm(d, peak = 0.95) {
    let m = 0;
    for (let i = 0; i < d.length; i++) m = Math.max(m, Math.abs(d[i]));
    if (m < 1e-6) return;
    const g = peak / m;
    for (let i = 0; i < d.length; i++) d[i] *= g;
  }

  /* --------------------------------------------------------- sound recipes */
  _gunshot(dur, bodyFreq, punch, crackAmt, tail, bright) {
    const b = this._buf(dur);
    const d = b.getChannelData(0);
    const sr = this.ctx.sampleRate;
    const n = d.length;
    // layer 1: broadband crack (transient)
    const crack = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const t = i / sr;
      const e = Math.exp(-t * 260 / crackAmt);
      crack[i] = (Math.random() * 2 - 1) * e;
    }
    this._hp(crack, bright);
    // layer 2: low body thump (pitched noise + swept sine)
    const body = new Float32Array(n);
    let ph = 0;
    for (let i = 0; i < n; i++) {
      const t = i / sr;
      const f = bodyFreq * Math.exp(-t * 26) + 42;
      ph += (2 * Math.PI * f) / sr;
      const e = Math.exp(-t * 30 / punch);
      body[i] = (Math.sin(ph) * 0.75 + (Math.random() * 2 - 1) * 0.35) * e;
    }
    this._lp(body, 0.30);
    // layer 3: room tail (filtered noise, long decay)
    const tl = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const t = i / sr;
      tl[i] = (Math.random() * 2 - 1) * Math.exp(-t * (7 / tail)) * 0.55;
    }
    this._lp(tl, 0.09);
    this._hp(tl, 0.006);
    for (let i = 0; i < n; i++) d[i] = crack[i] * 1.0 + body[i] * 1.15 + tl[i] * 0.85;
    this._norm(d, 0.98);
    return b;
  }

  _noiseBurst(dur, { lp = 0.3, hp = 0.0, decay = 20, tone = 0, toneAmt = 0, wobble = 0 } = {}) {
    const b = this._buf(dur);
    const d = b.getChannelData(0);
    const sr = this.ctx.sampleRate;
    let ph = 0;
    for (let i = 0; i < d.length; i++) {
      const t = i / sr;
      const e = Math.exp(-t * decay);
      let v = (Math.random() * 2 - 1) * e;
      if (toneAmt > 0) {
        const f = tone * (1 + Math.sin(t * wobble * 6.283) * 0.25);
        ph += (2 * Math.PI * f) / sr;
        v += Math.sin(ph) * e * toneAmt;
      }
      d[i] = v;
    }
    if (lp > 0) this._lp(d, lp);
    if (hp > 0) this._hp(d, hp);
    this._norm(d, 0.92);
    return b;
  }

  /** Formant-ish vocal growl for zombies — filtered sawtooth + noise + jitter. */
  _growl(dur, f0, formants, roughness, mode = 'moan') {
    const b = this._buf(dur);
    const d = b.getChannelData(0);
    const sr = this.ctx.sampleRate;
    const n = d.length;
    let ph = 0, jitter = 0;
    const bands = formants.map((f) => ({ f, y1: 0, y2: 0 }));
    for (let i = 0; i < n; i++) {
      const t = i / sr;
      const tt = t / dur;
      // envelope per mode
      let e;
      if (mode === 'moan') e = Math.sin(Math.PI * Math.pow(tt, 0.8)) * (0.7 + 0.3 * Math.sin(t * 5.2));
      else if (mode === 'roar') e = Math.pow(1 - tt, 0.6) * Math.min(1, tt * 26);
      else if (mode === 'die') e = Math.pow(1 - tt, 1.9) * Math.min(1, tt * 40);
      else e = Math.exp(-tt * 4) * Math.min(1, tt * 60);

      jitter += (Math.random() * 2 - 1) * 0.06;
      jitter *= 0.94;
      const f = f0 * (1 + jitter * roughness) * (mode === 'die' ? (1 - tt * 0.45) : (1 + Math.sin(t * 2.1) * 0.05));
      ph += (2 * Math.PI * f) / sr;
      if (ph > Math.PI * 2) ph -= Math.PI * 2;
      // buzzy glottal source
      let src = (ph / Math.PI - 1);
      src = src * src * src * 1.6;
      src += (Math.random() * 2 - 1) * roughness * 0.55;

      // parallel resonators = formants
      let out = 0;
      for (const bd of bands) {
        const w = 2 * Math.PI * bd.f / sr;
        const r = 0.965;
        const y = src * (1 - r) + 2 * r * Math.cos(w) * bd.y1 - r * r * bd.y2;
        bd.y2 = bd.y1; bd.y1 = y;
        out += y;
      }
      d[i] = out * e;
    }
    this._lp(d, 0.55);
    this._hp(d, 0.010);
    this._norm(d, 0.92);
    return b;
  }

  _impact(dur, { decay, lp, hp, ring = 0, ringF = 900, noise = 1 }) {
    const b = this._buf(dur);
    const d = b.getChannelData(0);
    const sr = this.ctx.sampleRate;
    let ph = 0;
    for (let i = 0; i < d.length; i++) {
      const t = i / sr;
      const e = Math.exp(-t * decay);
      let v = (Math.random() * 2 - 1) * e * noise;
      if (ring > 0) {
        ph += (2 * Math.PI * ringF * (1 - t * 0.4)) / sr;
        v += Math.sin(ph) * Math.exp(-t * decay * 0.28) * ring;
      }
      d[i] = v;
    }
    if (lp) this._lp(d, lp);
    if (hp) this._hp(d, hp);
    this._norm(d, 0.9);
    return b;
  }

  _squish(dur, wet) {
    const b = this._buf(dur);
    const d = b.getChannelData(0);
    const sr = this.ctx.sampleRate;
    let lp = 0;
    for (let i = 0; i < d.length; i++) {
      const t = i / sr;
      const e = Math.exp(-t * 16) * (1 + Math.sin(t * 90) * 0.35);
      let n = (Math.random() * 2 - 1);
      // bubbly resonance
      lp += (n - lp) * (0.09 + 0.16 * Math.abs(Math.sin(t * 42)));
      d[i] = (lp * 1.5 + n * 0.25) * e * wet;
    }
    this._lp(d, 0.45);
    this._hp(d, 0.012);
    this._norm(d, 0.94);
    return b;
  }

  _tone(dur, freqs, { decay = 6, type = 'sine', vib = 0, sweep = 1 } = {}) {
    const b = this._buf(dur);
    const d = b.getChannelData(0);
    const sr = this.ctx.sampleRate;
    const phs = freqs.map(() => 0);
    for (let i = 0; i < d.length; i++) {
      const t = i / sr;
      const e = Math.exp(-t * decay);
      let v = 0;
      for (let k = 0; k < freqs.length; k++) {
        const f = freqs[k] * Math.pow(sweep, t) * (1 + (vib ? Math.sin(t * vib * 6.283) * 0.012 : 0));
        phs[k] += (2 * Math.PI * f) / sr;
        let s;
        if (type === 'square') s = Math.sign(Math.sin(phs[k])) * 0.6;
        else if (type === 'saw') s = ((phs[k] / Math.PI) % 2 - 1) * 0.6;
        else s = Math.sin(phs[k]);
        v += s / freqs.length;
      }
      d[i] = v * e;
    }
    this._norm(d, 0.85);
    return b;
  }

  _mechanical(dur, clicks) {
    const b = this._buf(dur);
    const d = b.getChannelData(0);
    const sr = this.ctx.sampleRate;
    for (const c of clicks) {
      const start = Math.floor(c.t * sr);
      const len = Math.floor((c.d || 0.05) * sr);
      let ph = 0;
      for (let i = 0; i < len && start + i < d.length; i++) {
        const t = i / sr;
        const e = Math.exp(-t * (c.decay || 120));
        ph += (2 * Math.PI * (c.f || 1800) * (1 - t * 2)) / sr;
        const v = (Math.sin(ph) * (c.tone ?? 0.5) + (Math.random() * 2 - 1) * (c.noise ?? 0.8)) * e * (c.g ?? 1);
        d[start + i] += v;
      }
    }
    this._hp(d, 0.05);
    this._lp(d, 0.75);
    this._norm(d, 0.9);
    return b;
  }

  /* ------------------------------------------------------------ bake table */
  _bake() {
    const B = this.buffers;

    /* --- firearms --- */
    B.rifle = this._gunshot(0.72, 190, 1.0, 1.0, 1.0, 0.14);
    B.shotgun = this._gunshot(0.95, 130, 1.55, 1.5, 1.35, 0.09);
    B.pistol = this._gunshot(0.50, 230, 0.80, 0.85, 0.75, 0.19);
    B.smg = this._gunshot(0.34, 240, 0.55, 0.55, 0.42, 0.24);
    B.sniper = this._gunshot(1.25, 105, 1.9, 1.85, 1.9, 0.07);
    B.dryfire = this._mechanical(0.14, [{ t: 0, f: 2600, decay: 190, noise: 0.9, tone: 0.3, g: 0.7 }]);

    /* --- reload mechanics --- */
    B.reloadOut = this._mechanical(0.42, [
      { t: 0.00, f: 1500, decay: 90, g: 0.9 },
      { t: 0.09, f: 900, decay: 60, g: 0.7, d: 0.09 },
      { t: 0.24, f: 620, decay: 44, g: 0.55, d: 0.11 }
    ]);
    B.reloadIn = this._mechanical(0.46, [
      { t: 0.00, f: 800, decay: 70, g: 0.7, d: 0.08 },
      { t: 0.16, f: 1300, decay: 100, g: 0.95 },
      { t: 0.26, f: 2100, decay: 150, g: 0.8 }
    ]);
    B.reloadCharge = this._mechanical(0.34, [
      { t: 0.00, f: 1100, decay: 46, g: 0.75, d: 0.13 },
      { t: 0.15, f: 2400, decay: 160, g: 1.0 }
    ]);
    B.bolt = this._mechanical(0.40, [
      { t: 0.00, f: 1250, decay: 44, g: 0.8, d: 0.14 },
      { t: 0.17, f: 700, decay: 40, g: 0.65, d: 0.12 },
      { t: 0.29, f: 2000, decay: 150, g: 0.85 }
    ]);
    B.switch = this._mechanical(0.30, [
      { t: 0.00, f: 700, decay: 60, g: 0.6, d: 0.10 },
      { t: 0.14, f: 1600, decay: 110, g: 0.8 }
    ]);
    B.shellDrop = this._mechanical(0.24, [
      { t: 0.00, f: 3200, decay: 200, g: 0.5, tone: 0.75, noise: 0.4 },
      { t: 0.07, f: 2600, decay: 210, g: 0.32, tone: 0.7, noise: 0.35 },
      { t: 0.13, f: 3000, decay: 230, g: 0.2, tone: 0.7, noise: 0.3 }
    ]);
    B.casing = B.shellDrop;

    /* --- zombies --- */
    B.zombieMoan = this._growl(1.55, 96, [420, 980, 2350], 0.42, 'moan');
    B.zombieAttack = this._growl(0.68, 132, [560, 1250, 2600], 0.62, 'roar');
    B.zombieDie = this._growl(1.35, 88, [380, 900, 2100], 0.55, 'die');
    B.zombieHit = this._growl(0.34, 150, [640, 1500, 2800], 0.7, 'grunt');
    B.flesh = this._squish(0.34, 1.0);
    B.headshot = (() => {
      // wet burst + bone crack
      const dur = 0.55;
      const b = this._buf(dur);
      const d = b.getChannelData(0);
      const sq = this._squish(dur, 1.2).getChannelData(0);
      const ck = this._impact(dur, { decay: 90, hp: 0.16, ring: 0.35, ringF: 1600 }).getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = sq[i] * 0.9 + ck[i] * 0.75;
      this._norm(d, 0.97);
      return b;
    })();
    B.gib = (() => {
      const dur = 0.7;
      const b = this._buf(dur);
      const d = b.getChannelData(0);
      const sq = this._squish(dur, 1.35).getChannelData(0);
      const th = this._impact(dur, { decay: 22, lp: 0.16 }).getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = sq[i] * 1.0 + th[i] * 0.6;
      this._norm(d, 0.98);
      return b;
    })();
    B.burst = (() => {
      // bloater explosion: wet detonation
      const dur = 1.5;
      const b = this._buf(dur);
      const d = b.getChannelData(0);
      const sr = this.ctx.sampleRate;
      let ph = 0;
      for (let i = 0; i < d.length; i++) {
        const t = i / sr;
        const e = Math.exp(-t * 4.2);
        ph += (2 * Math.PI * (70 * Math.exp(-t * 6) + 28)) / sr;
        d[i] = (Math.sin(ph) * 0.8 + (Math.random() * 2 - 1) * 0.9) * e;
      }
      this._lp(d, 0.22);
      const sq = this._squish(Math.min(dur, 0.6), 1.4).getChannelData(0);
      for (let i = 0; i < sq.length; i++) d[i] += sq[i] * 0.7;
      this._norm(d, 0.99);
      return b;
    })();

    /* --- feedback --- */
    B.hitmark = this._tone(0.07, [1650, 2480], { decay: 60, type: 'sine' });
    B.hitmarkHead = this._tone(0.11, [2300, 3450, 4600], { decay: 42, type: 'sine' });

    /* --- player --- */
    B.playerHurt = this._growl(0.42, 118, [520, 1150, 2400], 0.4, 'grunt');
    B.playerDie = this._growl(1.8, 100, [430, 980, 2200], 0.45, 'die');
    B.heartbeat = (() => {
      const b = this._buf(0.85);
      const d = b.getChannelData(0);
      const sr = this.ctx.sampleRate;
      const beat = (off, g) => {
        let ph = 0;
        for (let i = 0; i < 0.18 * sr; i++) {
          const t = i / sr;
          ph += (2 * Math.PI * (58 * Math.exp(-t * 12) + 26)) / sr;
          const k = Math.floor(off * sr) + i;
          if (k < d.length) d[k] += Math.sin(ph) * Math.exp(-t * 16) * g;
        }
      };
      beat(0.0, 1.0); beat(0.26, 0.62);
      this._norm(d, 0.9);
      return b;
    })();
    B.heal = this._tone(0.55, [520, 780, 1040], { decay: 5.5, type: 'sine', sweep: 1.6 });
    B.pickup = this._tone(0.30, [880, 1320], { decay: 11, type: 'sine', sweep: 1.9 });
    B.weaponPickup = this._mechanical(0.45, [
      { t: 0.00, f: 900, decay: 60, g: 0.75, d: 0.10 },
      { t: 0.13, f: 1500, decay: 90, g: 0.85 },
      { t: 0.24, f: 2400, decay: 130, g: 0.7 }
    ]);

    /* --- movement --- */
    B.footDirt = this._noiseBurst(0.20, { lp: 0.20, hp: 0.02, decay: 34 });
    B.footConcrete = this._noiseBurst(0.16, { lp: 0.45, hp: 0.10, decay: 52 });
    B.footMetal = this._impact(0.28, { decay: 40, hp: 0.14, ring: 0.5, ringF: 1400 });
    B.jump = this._noiseBurst(0.16, { lp: 0.30, hp: 0.04, decay: 40 });
    B.land = (() => {
      const b = this._buf(0.34);
      const d = b.getChannelData(0);
      const sr = this.ctx.sampleRate;
      let ph = 0;
      for (let i = 0; i < d.length; i++) {
        const t = i / sr;
        ph += (2 * Math.PI * (95 * Math.exp(-t * 22) + 40)) / sr;
        d[i] = (Math.sin(ph) * 0.7 + (Math.random() * 2 - 1) * 0.6) * Math.exp(-t * 17);
      }
      this._lp(d, 0.28);
      this._norm(d, 0.9);
      return b;
    })();

    /* --- UI --- */
    B.uiClick = this._tone(0.08, [1400, 2100], { decay: 50, type: 'square' });
    B.uiHover = this._tone(0.05, [900], { decay: 70, type: 'sine' });
    B.uiBack = this._tone(0.12, [700, 480], { decay: 26, type: 'square', sweep: 0.5 });
    B.waveStart = this._tone(1.35, [110, 165, 220], { decay: 1.6, type: 'saw', vib: 4 });
    B.waveEnd = this._tone(1.5, [147, 220, 294, 370], { decay: 1.3, type: 'sine' });
    B.lastStand = this._tone(2.4, [82, 98, 123], { decay: 0.9, type: 'saw', vib: 6 });
    // Radio transmission blip — short staticky squelch that plays under each
    // story line so the radio subtitle reads as a real incoming transmission.
    B.radio = (() => {
      const dur = 0.22, sr = this.ctx.sampleRate;
      const buf = this.ctx.createBuffer(1, Math.ceil(sr * dur), sr);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) {
        const t = i / d.length;
        // opening squelch tone + trailing noise hiss
        const sq = Math.sin(t * Math.PI * 2 * 1800) * Math.exp(-t * 22) * 0.5;
        const nz = (Math.random() * 2 - 1) * (0.18 + 0.12 * (1 - t)) * Math.exp(-t * 9);
        d[i] = (sq + nz) * 0.5;
      }
      return buf;
    })();

    /* --- impacts --- */
    B.impactConcrete = this._impact(0.24, { decay: 66, lp: 0.55, hp: 0.06 });
    B.impactMetal = this._impact(0.42, { decay: 42, hp: 0.16, ring: 0.72, ringF: 2400 });
    B.impactWood = this._impact(0.24, { decay: 58, lp: 0.34, hp: 0.05, ring: 0.22, ringF: 480 });
    B.impactDirt = this._noiseBurst(0.22, { lp: 0.16, decay: 40 });
    B.impactGlass = (() => {
      const dur = 0.6;
      const b = this._buf(dur);
      const d = b.getChannelData(0);
      const sr = this.ctx.sampleRate;
      for (let k = 0; k < 22; k++) {
        const off = Math.floor(Math.random() * 0.35 * sr);
        const f = 2200 + Math.random() * 5200;
        let ph = 0;
        for (let i = 0; i < 0.13 * sr && off + i < d.length; i++) {
          const t = i / sr;
          ph += (2 * Math.PI * f) / sr;
          d[off + i] += Math.sin(ph) * Math.exp(-t * 46) * 0.28;
        }
      }
      this._hp(d, 0.28);
      this._norm(d, 0.9);
      return b;
    })();

    /* --- explosives --- */
    B.grenade = (() => {
      const dur = 2.2;
      const b = this._buf(dur);
      const d = b.getChannelData(0);
      const sr = this.ctx.sampleRate;
      let ph = 0;
      for (let i = 0; i < d.length; i++) {
        const t = i / sr;
        const e = Math.exp(-t * 3.0);
        ph += (2 * Math.PI * (58 * Math.exp(-t * 8) + 22)) / sr;
        d[i] = (Math.sin(ph) * 0.9 + (Math.random() * 2 - 1) * 1.0) * e;
      }
      this._lp(d, 0.30);
      this._norm(d, 0.99);
      return b;
    })();
    B.grenadePin = this._mechanical(0.18, [{ t: 0, f: 3400, decay: 210, tone: 0.7, noise: 0.4 }]);

    /* --- ambience (looping) --- */
    B.wind = (() => {
      const dur = 8.0;
      const b = this._buf(dur, 2);
      const sr = this.ctx.sampleRate;
      for (let ch = 0; ch < 2; ch++) {
        const d = b.getChannelData(ch);
        let lp1 = 0, lp2 = 0;
        for (let i = 0; i < d.length; i++) {
          const t = i / sr;
          const n = Math.random() * 2 - 1;
          lp1 += (n - lp1) * 0.020;
          lp2 += (lp1 - lp2) * 0.035;
          const gust = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t * 0.31 + ch) * Math.sin(t * 0.13));
          d[i] = lp2 * 9.0 * gust;
        }
        // crossfade the loop seam
        const f = Math.floor(sr * 0.5);
        for (let i = 0; i < f; i++) {
          const k = d.length - f + i;
          const a = i / f;
          d[k] = d[k] * (1 - a) + d[i] * a;
        }
        this._norm(d, 0.55);
      }
      return b;
    })();
    B.ambience = (() => {
      // low drone + distant metal groans
      const dur = 12.0;
      const b = this._buf(dur, 2);
      const sr = this.ctx.sampleRate;
      for (let ch = 0; ch < 2; ch++) {
        const d = b.getChannelData(ch);
        let ph1 = 0, ph2 = 0, ph3 = 0;
        for (let i = 0; i < d.length; i++) {
          const t = i / sr;
          ph1 += (2 * Math.PI * (41.2 + Math.sin(t * 0.07) * 0.6)) / sr;
          ph2 += (2 * Math.PI * (61.7 + Math.sin(t * 0.05 + 1) * 0.9)) / sr;
          ph3 += (2 * Math.PI * (27.5)) / sr;
          d[i] = (Math.sin(ph1) * 0.35 + Math.sin(ph2) * 0.22 + Math.sin(ph3) * 0.30) * 0.5;
        }
        // sporadic distant groans
        for (let k = 0; k < 9; k++) {
          const off = Math.floor(Math.random() * (d.length - sr * 2));
          const f0 = 60 + Math.random() * 50;
          let ph = 0;
          for (let i = 0; i < sr * 1.8; i++) {
            const t = i / sr;
            const e = Math.sin(Math.PI * (t / 1.8)) * 0.22;
            ph += (2 * Math.PI * f0 * (1 + Math.sin(t * 1.3) * 0.06)) / sr;
            d[off + i] += Math.sin(ph) * e;
          }
        }
        const f = Math.floor(sr * 0.8);
        for (let i = 0; i < f; i++) {
          const k = d.length - f + i;
          const a = i / f;
          d[k] = d[k] * (1 - a) + d[i] * a;
        }
        this._norm(d, 0.42);
      }
      return b;
    })();
  }

  /* --------------------------------------------------------------- playback */
  setListener(pos, fwd, up) {
    if (!this.ctx) return;
    const L = this.ctx.listener;
    const t = this.ctx.currentTime;
    if (L.positionX) {
      L.positionX.setTargetAtTime(pos.x, t, 0.02);
      L.positionY.setTargetAtTime(pos.y, t, 0.02);
      L.positionZ.setTargetAtTime(pos.z, t, 0.02);
      L.forwardX.setTargetAtTime(fwd.x, t, 0.02);
      L.forwardY.setTargetAtTime(fwd.y, t, 0.02);
      L.forwardZ.setTargetAtTime(fwd.z, t, 0.02);
      L.upX.setTargetAtTime(up.x, t, 0.02);
      L.upY.setTargetAtTime(up.y, t, 0.02);
      L.upZ.setTargetAtTime(up.z, t, 0.02);
    } else {
      L.setPosition(pos.x, pos.y, pos.z);
      L.setOrientation(fwd.x, fwd.y, fwd.z, up.x, up.y, up.z);
    }
  }

  /**
   * @param {string} name cue name
   * @param {THREE.Vector3|null} pos world position (null = 2D / UI)
   * @param {number} vol
   * @param {number} rate playback rate (pitch)
   */
  play(name, pos = null, vol = 1, rate = 1) {
    if (!this.ready) return null;
    const buf = this.buffers[name];
    if (!buf) return null;
    if (this.voices > this.maxVoices) return null;
    const ctx = this.ctx;

    // rate-limit identical cues fired in the same frame burst
    const now = ctx.currentTime;
    const last = this._lastPlay[name] || 0;
    if (now - last < 0.012) return null;
    this._lastPlay[name] = now;

    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = rate * (0.97 + Math.random() * 0.06);

    const g = ctx.createGain();
    g.gain.value = Math.max(0, vol);

    let node = g;
    if (pos) {
      const pan = ctx.createPanner();
      pan.panningModel = 'HRTF';
      pan.distanceModel = 'inverse';
      pan.refDistance = 3.2;
      pan.maxDistance = 190;
      pan.rolloffFactor = 1.25;
      if (pan.positionX) {
        pan.positionX.value = pos.x; pan.positionY.value = pos.y; pan.positionZ.value = pos.z;
      } else pan.setPosition(pos.x, pos.y, pos.z);
      g.connect(pan);
      node = pan;
      // distance-based lowpass (air absorption)
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      const d = this.listenerPos ? this.listenerPos.distanceTo(pos) : 10;
      lp.frequency.value = Math.max(700, 19000 - d * 190);
      pan.connect(lp);
      node = lp;
    }
    src.connect(g);
    node.connect(this.sfxBus);
    node.connect(this.revSend);

    this.voices++;
    src.onended = () => { this.voices--; };
    src.start();
    return src;
  }

  /** Starts looping ambience beds. */
  startAmbience() {
    if (!this.ready || this._ambStarted) return;
    this._ambStarted = true;
    const ctx = this.ctx;
    const mk = (name, vol) => {
      const s = ctx.createBufferSource();
      s.buffer = this.buffers[name];
      s.loop = true;
      const g = ctx.createGain();
      g.gain.value = 0;
      g.gain.setTargetAtTime(vol, ctx.currentTime, 2.0);
      s.connect(g);
      g.connect(this.musicBus);
      s.start();
      return { s, g };
    };
    this.ambWind = mk('wind', 0.30);
    this.ambDrone = mk('ambience', 0.42);
  }

  stopAmbience() {
    if (!this._ambStarted) return;
    for (const a of [this.ambWind, this.ambDrone]) {
      if (!a) continue;
      a.g.gain.setTargetAtTime(0, this.ctx.currentTime, 0.4);
      try { a.s.stop(this.ctx.currentTime + 1.2); } catch (e) { /* ignore */ }
    }
    this.ambWind = this.ambDrone = null;
    this._ambStarted = false;
  }

  /** Tension layer intensity 0..1 — raises the drone and adds a pulse. */
  setTension(v) {
    if (!this.ambDrone) return;
    this.ambDrone.g.gain.setTargetAtTime(0.42 + v * 0.55, this.ctx.currentTime, 0.6);
  }
}
