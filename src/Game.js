/**
 * Game — the orchestrator. Owns the scene, renderer, physics, level, player,
 * zombies, effects, HUD, menus and the wave director. Also implements the small
 * interface the entity/FX systems expect (fx, hud, audio, stats, settings,
 * shake, onZombieKilled, world, noiseLevel...).
 */
import * as THREE from 'three';
import { Renderer, makeSkyMaterial } from './core/Renderer.js';
import { PhysicsWorld, VerletBody, GRAVITY } from './core/physics.js';
import { Input } from './core/Input.js';
import { AudioEngine } from './core/Audio.js';
import { Materials } from './gfx/Materials.js';
import { Level, terrainHeight } from './world/Level.js';
import * as P from './world/props.js';
import { Effects } from './fx/Effects.js';
import { Player } from './entities/Player.js';
import { Zombie } from './entities/Zombie.js';
import { ZOMBIE_TYPES } from './entities/zombieModel.js';
import { buildGrenade } from './entities/weapons.js';
import { HUD } from './ui/HUD.js';
import { Menu } from './ui/Menu.js';
import { Rng } from './gfx/noise.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();

const DEFAULT_SETTINGS = {
  quality: 'high',
  fov: 74,
  exposure: 1.0,
  grain: 0.055,
  vignette: 1.05,
  bloom: 0.55,
  sao: true,
  bob: true,
  volMaster: 0.85,
  volSfx: 1.0,
  volMusic: 0.55,
  sensitivity: 1.0,
  invert: false,
  holdads: true,
  goreAmount: 1.0,
  persist: true,
  difficulty: 'normal',
  dmgnum: false
};

const DIFF = {
  easy: { hp: 1.35, dmg: 0.68, count: 0.80, speed: 0.92, score: 0.8 },
  normal: { hp: 1.0, dmg: 1.0, count: 1.0, speed: 1.0, score: 1.0 },
  hard: { hp: 1.30, dmg: 1.45, count: 1.28, speed: 1.10, score: 1.5 }
};

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = 'loading';   // loading | menu | playing | paused | intermission | dead
    this.rng = new Rng(Date.now() & 0xffff);

    /* ---------------------------------------------------------- settings */
    this.settings = { ...DEFAULT_SETTINGS };
    this.loadSettings();

    /* ------------------------------------------------------------- core */
    this.renderer = new Renderer(canvas);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(this.settings.fov, window.innerWidth / window.innerHeight, 0.05, 620);
    this.scene.add(this.camera);
    this.skyMat = makeSkyMaterial();
    this.physics = new PhysicsWorld();
    this.input = new Input(canvas);
    this.audio = new AudioEngine();

    /* -------------------------------------------------------- game state */
    this.zombies = [];
    this.grenades = [];
    this.pickups = [];
    this.wave = 1;
    this.noiseLevel = 0;
    this.godMode = false;
    this.aimTarget = null;

    this.stats = {
      score: 0, kills: 0, headshots: 0, hits: 0, shots: 0,
      wave: 1, time: 0, streak: 0, bestStreak: 0
    };
    this.best = parseInt(localStorage.getItem('ds_best') || '0', 10) || 0;

    /* ----------------------------------------------------- camera shake */
    this.shakeAmount = 0;
    this.shakeTime = 0;
    this.shakeDuration = 0;
    this.shakeOffset = new THREE.Vector3();
    this.shakeRoll = 0;

    /* ------------------------------------------------------ wave director */
    this.waveDef = null;
    this.spawnQueue = [];
    this.spawnTimer = 0;
    this.aliveTarget = 0;
    this.intermission = 0;
    this.intermissionTotal = 10;

    this.clock = new THREE.Clock();
    this.time = 0;
    this.frame = 0;
    this.fpsAcc = 0;
    this.fpsCount = 0;
    this.fps = 60;

    this.menu = new Menu(this);
    this.hud = null;

    window.addEventListener('resize', () => this.onResize());
    this.input.onLockChange((locked) => {
      if (!locked && this.state === 'playing') this.pause();
    });
  }

  /* ==================================================================== */
  /*                               LOADING                                */
  /* ==================================================================== */
  async boot() {
    this.menu.show('loading');
    const yieldFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

    this.menu.setLoading(0.01, 'Starting WebGL context…');
    await yieldFrame();

    // Environment map from the procedural sky (used for IBL on every material)
    this.menu.setLoading(0.04, 'Capturing sky irradiance…');
    await yieldFrame();
    const env = this.captureEnv();
    this.scene.environment = env;

    this.mats = new Materials(this.renderer.renderer, env);
    const matSteps = this.mats.buildAll();

    const total = matSteps.length + 12;
    let done = 0;
    const tick = async (label) => {
      done++;
      this.menu.setLoading(0.05 + 0.90 * (done / total), label);
      await yieldFrame();
    };

    for (let i = 0; i < matSteps.length; i++) {
      matSteps[i]();
      await tick('Baking procedural materials… ' + (i + 1) + '/' + matSteps.length);
    }

    // Audio synthesis
    this.audio.init();
    this.audio.setVolumes({
      master: this.settings.volMaster, sfx: this.settings.volSfx, music: this.settings.volMusic
    });
    await tick('Synthesising audio buffers…');

    // Level
    this.level = new Level(this);
    this.world = this.level;                      // Effects.impact expects game.world
    const levelSteps = this.level.build();
    for (const s of levelSteps) {
      s.fn();
      await tick(s.label + '…');
    }

    // FX + player
    this.fx = new Effects(this);
    await tick('Arming effects systems…');

    this.player = new Player(this);
    await tick('Equipping operator…');

    this.hud = new HUD(this);
    this.hud.show(false);
    await tick('Booting HUD…');

    this.renderer.setup(this.scene, this.camera);
    this.applyAllSettings();
    await tick('Compiling shaders…');

    // warm up the pipeline so the first frames don't stutter
    this.renderer.renderer.compile(this.scene, this.camera);
    this.renderer.render(0.016, 0);
    await tick('Priming render pipeline…');

    this.menu.setLoading(1, 'Ready');
    await yieldFrame();

    this.menu.setBest(this.best);
    this.toMainMenu();
    this.startLoop();
  }

  /** Render the procedural sky into a cube target for image-based lighting. */
  captureEnv() {
    const r = this.renderer.renderer;
    const scene = new THREE.Scene();
    const sky = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), this.skyMat);
    sky.geometry.scale(-1, 1, 1);
    scene.add(sky);
    const cubeRT = new THREE.WebGLCubeRenderTarget(256, { type: THREE.HalfFloatType });
    const cam = new THREE.CubeCamera(0.1, 10, cubeRT);
    cam.update(r, scene);
    const pmrem = new THREE.PMREMGenerator(r);
    pmrem.compileCubemapShader();
    const env = pmrem.fromCubemap(cubeRT.texture).texture;
    pmrem.dispose();
    cubeRT.dispose();
    sky.geometry.dispose();
    return env;
  }

  /* ==================================================================== */
  /*                            STATE MACHINE                             */
  /* ==================================================================== */
  toMainMenu() {
    this.state = 'menu';
    this.input.releaseLock();
    this.hud?.show(false);
    this.menu.show('main');
    this.menu.setBest(this.best);
    this.audio.stopAmbience();
    this.clearRun();
    // slow orbit for the menu backdrop
    this.menuAngle = 0.6;
    this.camera.fov = 58;
    this.camera.updateProjectionMatrix();
  }

  clearRun() {
    for (const z of this.zombies) z.dispose();
    this.zombies.length = 0;
    for (const g of this.grenades) { this.scene.remove(g.mesh); }
    this.grenades.length = 0;
    for (const p of this.pickups) this.scene.remove(p.obj);
    this.pickups.length = 0;
    this.fx?.clear();
    this.level?.reset();
  }

  startRun(restart = false) {
    this.clearRun();
    this.wave = 1;
    this.stats = {
      score: 0, kills: 0, headshots: 0, hits: 0, shots: 0,
      wave: 1, time: 0, streak: 0, bestStreak: 0
    };
    this.player.respawn();
    this.camera.fov = this.settings.fov;
    this.player.baseFov = this.settings.fov;
    this.player.fov = this.settings.fov;
    this.camera.updateProjectionMatrix();

    this.spawnPickups();
    this.menu.hide();
    this.hud.show(true);
    this.hud.hintT = 22;
    this.hud.el.hint.style.display = '';
    this.hud.setWeapon(this.player.stats, this.player.ammoNow);
    this.hud.setGrenades(this.player.grenades);
    this.hud.setStats(this.stats);

    this.state = 'playing';
    this.audio.resume();
    this.audio.startAmbience();
    this.input.clear();
    this.input.requestLock();
    this.beginWave(1);
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.input.releaseLock();
    this.menu.setPauseStats(this.stats);
    this.menu.show('pause');
    this.audio.suspend();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.menu.hide();
    this.audio.resume();
    this.input.clear();
    this.input.requestLock();
  }

  onPlayerDied() {
    this.state = 'dead';
    this.deadT = 0;
    this.input.releaseLock();
    if (this.wave - 1 > this.best) {
      this.best = this.wave - 1;
      localStorage.setItem('ds_best', String(this.best));
    }
    setTimeout(() => {
      if (this.state !== 'dead') return;
      this.menu.setGameOver(this.stats);
      this.menu.show('gameover');
      this.hud.show(false);
    }, 2600);
  }

  quit() {
    if (window.deadsector?.quit) window.deadsector.quit();
    else window.close();
  }

  /* ==================================================================== */
  /*                            WAVE DIRECTOR                             */
  /* ==================================================================== */
  waveComposition(wave) {
    const d = DIFF[this.settings.difficulty] || DIFF.normal;
    const base = Math.round((7 + wave * 2.6 + Math.pow(wave, 1.42) * 0.55) * d.count);
    const comp = [];
    const push = (type, n) => { for (let i = 0; i < n; i++) comp.push(type); };

    // walkers always form the bulk
    let remaining = base;
    const runnerP = Math.min(0.42, Math.max(0, (wave - 2) * 0.055));
    const crawlerP = Math.min(0.24, Math.max(0, (wave - 3) * 0.035));
    const brutes = wave >= 5 ? Math.floor((wave - 3) / 3) : 0;
    const bloaters = wave >= 4 ? Math.floor((wave - 2) / 3) : 0;

    push('brute', brutes); remaining -= brutes;
    push('bloater', bloaters); remaining -= bloaters;
    const runners = Math.floor(remaining * runnerP);
    push('runner', runners); remaining -= runners;
    const crawlers = Math.floor(remaining * crawlerP);
    push('crawler', crawlers); remaining -= crawlers;
    push('walker', Math.max(1, remaining));

    // shuffle so the arrival order varies
    for (let i = comp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = comp[i]; comp[i] = comp[j]; comp[j] = t;
    }
    return comp;
  }

  beginWave(wave) {
    this.wave = wave;
    this.stats.wave = wave;
    this.spawnQueue = this.waveComposition(wave);
    this.waveTotal = this.spawnQueue.length;
    this.spawnTimer = 1.4;
    // how many are allowed on the field at once
    this.aliveTarget = Math.min(38, 8 + Math.floor(wave * 1.7));
    this.hud.setWave(wave, this.spawnQueue.length, this.waveTotal);
    this.hud.centerMessage(`WAVE ${wave}`, this.waveTagline(wave), 2.8);
    this.audio.play('waveStart', null, 0.75);
    this.audio.setTension(Math.min(1, wave / 14));
  }

  waveTagline(wave) {
    const lines = [
      'They know you are here', 'More are coming', 'The horde thickens',
      'Something bigger is moving', 'Hold the sector', 'Do not stop firing',
      'The streets are filling', 'No extraction is coming'
    ];
    if (wave === 1) return 'Contact imminent';
    if (wave % 5 === 0) return 'HEAVY UNITS DETECTED';
    return lines[wave % lines.length];
  }

  endWave() {
    this.state = 'intermission';
    this.intermission = this.intermissionTotal;
    this.audio.play('waveEnd', null, 0.8);
    this.audio.setTension(0.1);
    // restock the map
    this.spawnPickups();
    const unlocks = [];
    const grant = (key, label) => {
      if (!this.player.owned[key]) { this.player.owned[key] = true; unlocks.push(label); }
    };
    if (this.wave >= 2) grant('shotgun', 'BREAKER 12G unlocked');
    if (this.wave >= 4) grant('smg', 'VECTOR-9 unlocked');
    if (this.wave >= 6) grant('sniper', 'LONGSHOT .338 unlocked');
    this.player.grenades = Math.min(6, this.player.grenades + 2);
    this.player.giveAmmo(1.4);
    this.player.armor = Math.min(this.player.maxArmor, this.player.armor + 35);
    this.hud.setGrenades(this.player.grenades);
    this.hud.setWeapon(this.player.stats, this.player.ammoNow);

    this.menu.setIntermission(this.wave, this.stats, this.intermission, unlocks);
    this.menu.show('intermission');
    this.input.releaseLock();
    if (this.wave > this.best) {
      this.best = this.wave;
      localStorage.setItem('ds_best', String(this.best));
    }
  }

  skipIntermission() {
    if (this.state !== 'intermission') return;
    this.intermission = 0;
  }

  continueAfterIntermission() {
    this.menu.hide();
    this.state = 'playing';
    this.input.clear();
    this.input.requestLock();
    this.beginWave(this.wave + 1);
  }

  updateWaves(dt) {
    if (this.state !== 'playing') return;
    const aliveCount = this.zombies.reduce((n, z) => n + (z.dead ? 0 : 1), 0);

    if (this.spawnQueue.length > 0) {
      this.spawnTimer -= dt;
      const canSpawn = aliveCount < this.aliveTarget;
      if (this.spawnTimer <= 0 && canSpawn) {
        const burst = Math.min(this.spawnQueue.length, 1 + Math.floor(Math.random() * 3));
        for (let i = 0; i < burst; i++) {
          const type = this.spawnQueue.pop();
          if (!type) break;
          this.spawnZombie(type);
        }
        this.spawnTimer = Math.max(0.32, 1.55 - this.wave * 0.055) * (0.65 + Math.random() * 0.8);
      }
      this.hud.setWave(this.wave, this.spawnQueue.length + aliveCount, this.waveTotal);
    } else {
      this.hud.setWave(this.wave, aliveCount, this.waveTotal);
      if (aliveCount === 0) this.endWave();
    }

    // tension audio follows proximity of the nearest threat
    let nearest = 1e9;
    for (const z of this.zombies) {
      if (z.dead) continue;
      const d = z.root.position.distanceTo(this.player.pos);
      if (d < nearest) nearest = d;
    }
    const tension = Math.min(1, Math.max(0, 1 - nearest / 26)) * 0.7 + Math.min(1, this.wave / 16) * 0.3;
    this.audio.setTension(tension);
  }

  spawnZombie(type) {
    const pos = this.level.pickSpawn(this.player.pos, 24, 74, this.wave > 3 && Math.random() < 0.12);
    const z = new Zombie(this, type, pos, Math.floor(Math.random() * 100000));
    const d = DIFF[this.settings.difficulty] || DIFF.normal;
    z.maxHp *= d.hp; z.hp = z.maxHp;
    z.speed *= d.speed;
    z.dmgMul = d.dmg;
    this.zombies.push(z);
    return z;
  }

  onZombieKilled(z) {
    const d = DIFF[this.settings.difficulty] || DIFF.normal;
    const base = { walker: 100, runner: 150, crawler: 120, brute: 500, bloater: 300 }[z.type] || 100;
    this.stats.streak++;
    this.stats.bestStreak = Math.max(this.stats.bestStreak, this.stats.streak);
    const streakBonus = 1 + Math.min(1.5, this.stats.streak * 0.02);
    const gained = Math.round(base * streakBonus * d.score);
    this.stats.score += gained;
    this.hud.setStats(this.stats);
    this.hud.killfeed(`<b>${z.def.label}</b> eliminated <em>+${gained}</em>`, z.type === 'brute' || z.type === 'bloater' ? 'big' : '');

    // occasional pickup drop
    if (Math.random() < 0.14) {
      this.dropPickup(z.root.position, Math.random() < 0.5 ? 'ammo' : 'health');
    }
    if (this.stats.streak > 0 && this.stats.streak % 15 === 0) {
      this.hud.toast(`${this.stats.streak} KILL STREAK`, 'good');
    }
  }

  /* ==================================================================== */
  /*                              PICKUPS                                 */
  /* ==================================================================== */
  spawnPickups() {
    // refresh nodes that are currently empty
    const occupied = new Set(this.pickups.map((p) => p.node));
    for (const node of this.level.pickupNodes) {
      if (occupied.has(node)) continue;
      if (Math.random() < 0.55) this.makePickup(node.pos, node.kind, node);
    }
  }

  makePickup(pos, kind, node = null) {
    const obj = kind === 'health' ? P.healthPickup(this.mats) : P.ammoPickup(this.mats);
    const gy = this.physics.groundAt(pos.x, pos.y + 2, pos.z, 5, 0.4);
    obj.position.set(pos.x, (gy > -1e8 ? gy : terrainHeight(pos.x, pos.z)) + 0.05, pos.z);
    this.scene.add(obj);
    const p = { obj, kind, node, t: Math.random() * 6.28, life: node ? Infinity : 42 };
    this.pickups.push(p);
    return p;
  }

  dropPickup(pos, kind) {
    if (this.pickups.length > 26) return;
    this.makePickup(_v.copy(pos), kind, null);
  }

  updatePickups(dt, t) {
    const pp = this.player.pos;
    let prompt = '';
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const p = this.pickups[i];
      p.t += dt;
      p.obj.position.y += Math.sin(p.t * 2.1) * 0.0008;
      p.obj.rotation.y = p.t * 0.7;
      if (p.obj.userData.ring) {
        p.obj.userData.ring.rotation.z = p.t * 1.6;
      }
      if (p.life !== Infinity) {
        p.life -= dt;
        // blink out
        p.obj.visible = p.life > 6 || Math.sin(p.life * 12) > -0.3;
        if (p.life <= 0) { this.scene.remove(p.obj); this.pickups.splice(i, 1); continue; }
      }
      const d = p.obj.position.distanceTo(pp);
      if (d < 1.6 && this.player.alive) {
        let taken = false;
        if (p.kind === 'health') taken = this.player.heal(45);
        else taken = this.player.giveAmmo(1);
        if (taken) {
          this.hud.toast(p.kind === 'health' ? '+45 HEALTH' : 'AMMUNITION RESTOCKED', 'good');
          this.hud.setWeapon(this.player.stats, this.player.ammoNow);
          this.scene.remove(p.obj);
          this.pickups.splice(i, 1);
          continue;
        }
      }
    }

    // weapon stands
    for (const s of this.level.weaponStands || []) {
      const d = s.pos.distanceTo(pp);
      if (d < 2.2) {
        const stats = this.player.weapons[s.weapon].stats;
        if (!this.player.owned[s.weapon]) {
          prompt = `LOCKED — ${stats.name} (wave ${{ shotgun: 2, smg: 4, sniper: 6, pistol: 1, rifle: 1 }[s.weapon]})`;
        } else {
          prompt = `TAKE ${stats.name}`;
          if (this.input.pressed('use')) this.player.giveWeapon(s.weapon);
        }
      }
    }
    this.hud.setPrompt(prompt);
  }

  /* ==================================================================== */
  /*                             GRENADES                                 */
  /* ==================================================================== */
  spawnGrenade(origin, velocity) {
    const g = buildGrenade(this.mats);
    g.position.copy(origin);
    this.scene.add(g);
    const body = new VerletBody(this.physics);
    body.friction = 0.55;
    body.restitution = 0.42;
    const p = body.particle(origin.x, origin.y, origin.z, 0.055, 1);
    p.prev.copy(p.p).addScaledVector(velocity, -1 / 60);
    this.grenades.push({
      mesh: g, body, particle: p, fuse: 2.4,
      spin: new THREE.Vector3(Math.random() * 18 - 9, Math.random() * 18 - 9, Math.random() * 18 - 9),
      quat: new THREE.Quaternion().random()
    });
  }

  updateGrenades(dt) {
    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const g = this.grenades[i];
      g.body.step(dt, 2);
      g.body.collideWorld();
      g.mesh.position.copy(g.particle.p);
      _v.copy(g.spin).multiplyScalar(dt);
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(_v.x, _v.y, _v.z));
      g.quat.multiply(q);
      g.mesh.quaternion.copy(g.quat);
      g.fuse -= dt;
      if (g.fuse <= 0) {
        this.explode(g.particle.p.clone(), 6.2, 130);
        this.scene.remove(g.mesh);
        this.grenades.splice(i, 1);
      }
    }
  }

  explode(center, radius, damage) {
    this.audio.play('grenade', center, 1.0);
    this.fx.goreExplosion(center, 1.5);
    for (let i = 0; i < 3; i++) {
      this.fx.impact(
        center.clone().add(_v.set((Math.random() - 0.5) * 2, Math.random() * 0.6, (Math.random() - 0.5) * 2)),
        _v2.set(0, 1, 0), 'concrete'
      );
    }
    this.shake(1.0, 0.55);
    if (this.renderer.grade) this.renderer.grade.uniforms.uFlash.value = 0.85;

    for (const z of this.zombies) {
      if (z.dead) continue;
      const d = z.root.position.distanceTo(center);
      if (d > radius) continue;
      const f = 1 - d / radius;
      _v.subVectors(z.root.position, center).normalize();
      z.hit(damage * f, null, z.root.position.clone().setY(z.root.position.y + 1.0), _v, { name: 'GRENADE', headMul: 1 });
      if (!z.dead) z.vel.addScaledVector(_v, 8 * f);
    }
    const pd = this.player.pos.distanceTo(center);
    if (pd < radius) this.player.damage(damage * 0.45 * (1 - pd / radius), center);
  }

  /* ==================================================================== */
  /*                              SHAKE / FX                              */
  /* ==================================================================== */
  shake(amount, duration = 0.25) {
    if (amount <= this.shakeAmount && this.shakeTime < this.shakeDuration) {
      this.shakeAmount = Math.max(this.shakeAmount, amount);
    } else {
      this.shakeAmount = Math.max(this.shakeAmount * 0.5, amount);
      this.shakeTime = 0;
      this.shakeDuration = Math.max(duration, this.shakeDuration - this.shakeTime);
    }
  }

  updateShake(dt, t) {
    if (this.shakeTime < this.shakeDuration) {
      this.shakeTime += dt;
      const k = 1 - this.shakeTime / this.shakeDuration;
      const a = this.shakeAmount * k * k * 0.16;
      this.shakeOffset.set(
        Math.sin(t * 92.3) * a + Math.sin(t * 41.7) * a * 0.6,
        Math.sin(t * 77.1 + 1.7) * a + Math.sin(t * 33.3) * a * 0.5,
        Math.sin(t * 61.9 + 3.1) * a * 0.5
      );
      this.shakeRoll = Math.sin(t * 55.1) * this.shakeAmount * k * k * 0.035;
    } else {
      this.shakeOffset.multiplyScalar(Math.pow(0.001, dt));
      this.shakeRoll *= Math.pow(0.001, dt);
      this.shakeAmount = 0;
    }
  }

  /* ==================================================================== */
  /*                              SETTINGS                                */
  /* ==================================================================== */
  loadSettings() {
    try {
      const raw = localStorage.getItem('ds_settings');
      if (raw) Object.assign(this.settings, JSON.parse(raw));
    } catch (e) { /* ignore */ }
  }

  saveSettings() {
    try { localStorage.setItem('ds_settings', JSON.stringify(this.settings)); } catch (e) { /* ignore */ }
  }

  resetSettings() {
    this.settings = { ...DEFAULT_SETTINGS };
    this.applyAllSettings();
    this.saveSettings();
  }

  applySetting(key, value) {
    this.settings[key] = value;
    this.applyOne(key);
    this.saveSettings();
  }

  applyAllSettings() {
    for (const k of Object.keys(this.settings)) this.applyOne(k);
  }

  applyOne(key) {
    const s = this.settings;
    const r = this.renderer;
    switch (key) {
      case 'quality': r.setQuality(s.quality); break;
      case 'fov':
        if (this.player) { this.player.baseFov = s.fov; }
        else { this.camera.fov = s.fov; this.camera.updateProjectionMatrix(); }
        break;
      case 'exposure': if (r.grade) r.grade.uniforms.uExposure.value = s.exposure; break;
      case 'grain': if (r.grade) r.grade.uniforms.uGrain.value = s.grain; break;
      case 'vignette': if (r.grade) r.grade.uniforms.uVignette.value = s.vignette; break;
      case 'bloom': if (r.bloom) r.bloom.strength = s.bloom; break;
      case 'sao': if (r.sao) r.sao.enabled = s.sao && s.quality === 'high'; break;
      case 'volMaster': case 'volSfx': case 'volMusic':
        this.audio.setVolumes({ master: s.volMaster, sfx: s.volSfx, music: s.volMusic });
        break;
      case 'sensitivity': this.input.sensitivity = 0.0022 * s.sensitivity; break;
      case 'invert': this.input.invertY = s.invert; break;
      default: break;
    }
  }

  onResize() {
    this.renderer.resize();
    this.player?.resize();
    this.hud?.resize();
  }

  /* ==================================================================== */
  /*                             MAIN LOOP                                */
  /* ==================================================================== */
  startLoop() {
    const loop = () => {
      requestAnimationFrame(loop);
      let dt = this.clock.getDelta();
      if (dt > 0.1) dt = 0.1;      // clamp after tab-out
      this.time += dt;
      this.frame++;
      this.step(dt, this.time);
    };
    requestAnimationFrame(loop);
  }

  step(dt, t) {
    /* --- shared updates --- */
    this.skyMat.uniforms.uTime.value = t;

    if (this.state === 'menu') {
      this.updateMenuCamera(dt, t);
      this.level?.update(dt * 0.35, t);
      this.renderer.render(dt, t);
      this.input.endFrame();
      return;
    }

    if (this.state === 'paused') {
      // keep rendering the frozen scene so the pause overlay has a backdrop
      this.renderer.render(dt, t);
      if (this.input.pressed('pause')) this.resume();
      this.input.endFrame();
      return;
    }

    if (this.state === 'intermission') {
      this.intermission -= dt;
      this.menu.setIntermissionCount(Math.max(0, this.intermission));
      this.level.update(dt, t);
      this.fx.update(dt, t);
      this.updateShake(dt, t);
      this.renderer.render(dt, t);
      if (this.intermission <= 0) this.continueAfterIntermission();
      this.input.endFrame();
      return;
    }

    if (this.state === 'dead') {
      this.player.update(dt, t);
      this.updateZombies(dt, t);
      this.fx.update(dt, t);
      this.level.update(dt, t);
      this.updateShake(dt, t);
      if (this.renderer.grade) {
        this.renderer.grade.uniforms.uDamage.value = Math.min(1, (this.renderer.grade.uniforms.uDamage.value || 0) + dt * 0.4);
        this.renderer.grade.uniforms.uSat.value = Math.max(0.08, this.renderer.grade.uniforms.uSat.value - dt * 0.55);
      }
      this.renderer.render(dt, t);
      this.input.endFrame();
      return;
    }

    /* ================================ PLAYING ========================= */
    if (this.input.pressed('pause')) { this.pause(); this.input.endFrame(); return; }
    if (this.input.keyPressed('F3')) this.godMode = !this.godMode;

    this.stats.time += dt;

    const before = this.player.ammoNow.mag;
    this.player.update(dt, t);
    if (this.player.ammoNow.mag < before) {
      this.stats.shots += (this.player.stats.pellets || 1);
    }

    this.updateZombies(dt, t);
    this.updateGrenades(dt);
    this.updatePickups(dt, t);
    this.updateWaves(dt);
    this.updateAimTarget();
    this.fx.update(dt, t);
    this.level.update(dt, t);
    this.updateShake(dt, t);

    /* --- damage / low-health post FX --- */
    if (this.renderer.grade) {
      const u = this.renderer.grade.uniforms;
      const lowHp = this.player.hp < 45 ? 1 - this.player.hp / 45 : 0;
      const hurt = Math.max(0, this.player.damageT);
      this.player.damageT = Math.max(0, this.player.damageT - dt * 1.6);
      u.uDamage.value = Math.min(1, lowHp * 0.55 + hurt * 0.75);
      u.uFlash.value *= Math.pow(0.0002, dt);
      u.uSat.value = 1.06 - lowHp * 0.45;
    }

    /* --- heartbeat when critical --- */
    if (this.player.hp < 34 && this.player.alive) {
      this.hbT = (this.hbT || 0) - dt;
      if (this.hbT <= 0) {
        this.audio.play('heartbeat', null, 0.30 + (1 - this.player.hp / 34) * 0.35);
        this.hbT = 0.95 - (1 - this.player.hp / 34) * 0.30;
      }
    }

    this.hud.update(dt);
    this.hud.setStats(this.stats);

    /* --- render --- */
    this.renderer.render(dt, t);
    this.player.renderViewmodel(this.renderer.renderer);

    this.input.endFrame();
  }

  updateZombies(dt, t) {
    // stagger expensive AI work across frames for large hordes
    for (let i = this.zombies.length - 1; i >= 0; i--) {
      const z = this.zombies[i];
      z.update(dt, t);
      if (z.markForRemoval) {
        z.dispose();
        this.zombies.splice(i, 1);
      }
    }
  }

  /** Highlight the crosshair when a zombie is under it. */
  updateAimTarget() {
    if (!this.player.alive) { this.aimTarget = null; return; }
    if ((this.frame & 1) !== 0) return;
    const origin = this.camera.position;
    const dir = this.camera.getWorldDirection(_v3).clone();
    const wHit = this.physics.raycast(origin, dir, 90);
    const maxD = wHit ? wHit.t : 90;
    let found = null;
    for (const z of this.zombies) {
      if (z.dead) continue;
      if (z.root.position.distanceToSquared(origin) > maxD * maxD + 9) continue;
      const r = z.raycastZones(origin, dir, maxD);
      if (r) { found = z; break; }
    }
    this.aimTarget = found;
  }

  updateMenuCamera(dt, t) {
    this.menuAngle = (this.menuAngle || 0) + dt * 0.055;
    const r = 34;
    const cx = 23, cz = 23;
    const x = cx + Math.cos(this.menuAngle) * r;
    const z = cz + Math.sin(this.menuAngle) * r;
    const y = 9.5 + Math.sin(this.menuAngle * 0.7) * 2.6;
    this.camera.position.set(x, y, z);
    this.camera.lookAt(cx, 2.6, cz);
    if (this.level?.sky) this.level.sky.position.copy(this.camera.position);
  }
}
