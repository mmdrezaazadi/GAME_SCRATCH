/**
 * Player — first-person controller and weapon handling.
 *
 * Movement: WASD, sprint (Shift), crouch (Ctrl/C), jump (Space), with
 * acceleration/friction, air control, step-up, head bob and landing impact.
 * Look: mouse (pointer lock), pitch clamped.
 * Combat: LMB fire (auto/semi/pump), RMB aim-down-sights with FOV zoom and
 * spread reduction, R reload, 1-5 / wheel weapon switching, V melee, G grenade.
 *
 * The viewmodel is a real 3D weapon + gloved arms rendered in a second scene
 * layer with its own near-clip camera so it never intersects world geometry.
 */
import * as THREE from 'three';
import { GRAVITY } from '../core/physics.js';
import { WEAPON_BUILDERS, buildArms, buildGrenade } from './weapons.js';
import { Rng } from '../gfx/noise.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const _q = new THREE.Quaternion(), _e = new THREE.Euler();
const UP = new THREE.Vector3(0, 1, 0);

const EYE_STAND = 1.68;
const EYE_CROUCH = 1.06;
const RADIUS = 0.34;
const H_STAND = 1.80;
const H_CROUCH = 1.18;

export class Player {
  constructor(game) {
    this.game = game;
    this.rng = new Rng(90210);

    this.pos = game.level.playerSpawn.clone();
    this.vel = new THREE.Vector3();
    this.yaw = Math.PI * 0.75;
    this.pitch = -0.04;

    this.maxHp = 100;
    this.hp = this.maxHp;
    this.armor = 0;
    this.maxArmor = 100;
    this.alive = true;
    this.regenT = 0;

    this.height = H_STAND;
    this.eye = EYE_STAND;
    this.crouching = false;
    this.wantCrouch = false;
    this.sprinting = false;
    this.grounded = true;
    this.wasGrounded = true;
    this.coyote = 0;
    this.jumpBuffer = 0;
    this.stamina = 1;
    this.airTime = 0;
    this.fallSpeed = 0;

    this.bobT = 0;
    this.stepDist = 0;
    this.breath = 0;

    /* --- camera rig: world camera + separate viewmodel camera --- */
    this.camera = game.camera;
    this.baseFov = 74;
    this.fov = this.baseFov;
    this.camera.fov = this.fov;
    this.camera.near = 0.05;
    this.camera.far = 620;
    this.camera.updateProjectionMatrix();

    this.vmScene = new THREE.Scene();
    this.vmCamera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.008, 6);
    this.vmRoot = new THREE.Group();
    this.vmScene.add(this.vmRoot);
    // lighting for the viewmodel so it matches the world without shadow cost
    const key = new THREE.DirectionalLight(0xffd7ae, 2.35);
    key.position.set(-0.6, 1.1, 0.9);
    this.vmScene.add(key);
    const fill = new THREE.DirectionalLight(0x93a8c4, 0.95);
    fill.position.set(0.9, -0.3, -0.7);
    this.vmScene.add(fill);
    this.vmScene.add(new THREE.AmbientLight(0x55606e, 0.55));
    this.vmMuzzleLight = new THREE.PointLight(0xffc070, 0, 2.2, 2);
    this.vmScene.add(this.vmMuzzleLight);

    /* --- arms --- */
    const arms = buildArms(game.mats);
    this.arms = arms.group;
    this.vmRoot.add(this.arms);

    /* --- weapons --- */
    this.weapons = {};
    this.order = ['pistol', 'rifle', 'shotgun', 'smg', 'sniper'];
    this.owned = { pistol: true, rifle: true, shotgun: false, smg: false, sniper: false };
    this.ammo = {};
    this.slot = 1;               // start with the rifle
    this.current = null;
    this.buildWeapons();

    /* --- combat state --- */
    this.fireCd = 0;
    this.reloading = 0;
    this.reloadStage = 0;
    this.ads = 0;                // 0..1 blend
    this.adsTarget = 0;
    this.recoilPos = new THREE.Vector3();
    this.recoilVel = new THREE.Vector3();
    this.recoilRot = new THREE.Vector3();
    this.recoilRotVel = new THREE.Vector3();
    this.viewKick = new THREE.Vector2();
    this.viewKickVel = new THREE.Vector2();
    this.swayPos = new THREE.Vector2();
    this.swayRot = new THREE.Vector2();
    this.lastMouse = new THREE.Vector2();
    this.switching = 0;
    this.switchTo = -1;
    this.meleeT = 0;
    this.grenades = 3;
    this.grenadeT = 0;
    this.shotsFired = 0;
    this.spreadHeat = 0;
    this.flashlight = null;
    this.flashOn = false;

    this.buildFlashlight();

    this.damageDir = new THREE.Vector2();
    this.damageT = 0;
    this.lastDamageT = 0;
    this.killStreak = 0;

    this.noise = 0;      // how loud the player currently is (drives AI)
    this.footSurface = 'dirt';
  }

  /* ------------------------------------------------------------- weapons */
  buildWeapons() {
    for (const key of this.order) {
      const b = WEAPON_BUILDERS[key](this.game.mats);
      b.group.visible = false;
      b.key = key;
      this.vmRoot.add(b.group);
      this.weapons[key] = b;
      this.ammo[key] = { mag: b.stats.mag, reserve: b.stats.reserve };
      // rest pose
      b.restPos = new THREE.Vector3(0.175, -0.155, -0.34);
      b.adsPos = new THREE.Vector3(0.0, -0.075, -0.235);
      b.restRot = new THREE.Euler(0.03, -0.055, 0.02);
      b.adsRot = new THREE.Euler(0.0, 0.0, 0.0);
      b.group.position.copy(b.restPos);
      b.group.rotation.copy(b.restRot);
    }
    this.selectSlot(this.slot, true);
  }

  buildFlashlight() {
    const l = new THREE.SpotLight(0xfff0d0, 0, 34, 0.42, 0.45, 1.4);
    l.castShadow = false;
    l.visible = false;
    this.game.scene.add(l);
    this.game.scene.add(l.target);
    this.flashlight = l;
  }

  selectSlot(i, instant = false) {
    const n = this.order.length;
    i = ((i % n) + n) % n;
    const key = this.order[i];
    if (!this.owned[key]) return false;
    if (!instant && (this.switching > 0 || this.reloading > 0)) return false;
    if (!instant && i === this.slot) return false;
    if (instant) {
      this.slot = i;
      this.applySlot();
      return true;
    }
    this.switchTo = i;
    this.switching = 0.42;
    this.game.audio.play('switch', null, 0.55);
    return true;
  }

  applySlot() {
    for (const k of this.order) this.weapons[k].group.visible = false;
    const key = this.order[this.slot];
    this.current = this.weapons[key];
    this.current.group.visible = true;
    this.stats = this.current.stats;
    this.fireCd = Math.max(this.fireCd, 0.12);
    this.game.hud?.setWeapon(this.stats, this.ammo[key]);
  }

  giveWeapon(key) {
    if (!this.weapons[key]) return false;
    const had = this.owned[key];
    this.owned[key] = true;
    const a = this.ammo[key];
    if (had) {
      a.reserve = Math.min(this.weapons[key].stats.reserve * 2, a.reserve + this.weapons[key].stats.mag * 3);
    }
    const idx = this.order.indexOf(key);
    this.selectSlot(idx, true);
    this.game.audio.play('weaponPickup', null, 0.8);
    this.game.hud?.toast(this.weapons[key].stats.name + ' ACQUIRED');
    return true;
  }

  get ammoNow() { return this.ammo[this.order[this.slot]]; }

  /* ------------------------------------------------------------- damage */
  damage(dmg, srcPos) {
    if (!this.alive || this.game.godMode) return;
    let d = dmg;
    if (this.armor > 0) {
      const absorbed = Math.min(this.armor, d * 0.62);
      this.armor -= absorbed;
      d -= absorbed;
    }
    this.hp -= d;
    this.regenT = 0;
    this.lastDamageT = 0;
    this.damageT = 0.85;
    this.game.shake(Math.min(0.85, 0.14 + d * 0.016), 0.28);
    this.game.audio.play('playerHurt', null, Math.min(1, 0.5 + d * 0.02));

    if (srcPos) {
      // direction indicator in view space
      _v.subVectors(srcPos, this.pos).setY(0).normalize();
      const fwd = _v2.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
      const right = _v3.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
      this.damageDir.set(_v.dot(right), _v.dot(fwd));
      this.game.hud?.showDamage(this.damageDir.x, this.damageDir.y);
    }

    if (this.hp <= 0) { this.hp = 0; this.die(); }
  }

  heal(amount) {
    if (!this.alive) return false;
    if (this.hp >= this.maxHp) return false;
    this.hp = Math.min(this.maxHp, this.hp + amount);
    this.game.audio.play('heal', null, 0.8);
    return true;
  }

  giveAmmo(mult = 1) {
    let given = false;
    for (const k of this.order) {
      if (!this.owned[k]) continue;
      const s = this.weapons[k].stats;
      const a = this.ammo[k];
      const cap = s.reserve * 2;
      if (a.reserve < cap) {
        a.reserve = Math.min(cap, a.reserve + Math.ceil(s.mag * 2.2 * mult));
        given = true;
      }
    }
    if (given) this.game.audio.play('pickup', null, 0.75);
    return given;
  }

  die() {
    this.alive = false;
    this.adsTarget = 0;
    this.game.audio.play('playerDie', null, 1.0);
    this.game.onPlayerDied();
  }

  respawn() {
    this.pos.copy(this.game.level.playerSpawn);
    this.vel.set(0, 0, 0);
    this.hp = this.maxHp;
    this.armor = 0;
    this.alive = true;
    this.reloading = 0;
    this.pitch = -0.04;
    for (const k of this.order) {
      this.ammo[k].mag = this.weapons[k].stats.mag;
      this.ammo[k].reserve = this.weapons[k].stats.reserve;
    }
    this.owned = { pistol: true, rifle: true, shotgun: false, smg: false, sniper: false };
    this.grenades = 3;
    this.selectSlot(1, true);
  }

  /* -------------------------------------------------------------- update */
  update(dt, t) {
    const input = this.game.input;

    /* ---- look ---- */
    if (this.alive && input.locked) {
      const d = input.lookDelta(_v);
      const adsScale = 1 - this.ads * (this.stats.scoped ? 0.62 : 0.34);
      this.yaw += d.x * adsScale;
      this.pitch += d.y * adsScale;
      this.pitch = Math.max(-1.52, Math.min(1.52, this.pitch));
      this.lastMouse.set(d.x, d.y);
    } else {
      this.lastMouse.set(0, 0);
    }

    if (!this.alive) {
      this.updateDeath(dt, t);
      return;
    }

    /* ---- crouch ---- */
    this.wantCrouch = input.isDown('crouch');
    if (this.wantCrouch && !this.crouching) this.crouching = true;
    else if (!this.wantCrouch && this.crouching) {
      // only stand if there's headroom
      const probe = _v.copy(this.pos);
      const info = this.game.physics.resolveCapsule(probe, RADIUS * 0.9, H_STAND, 1);
      if (!info.ceiling) this.crouching = false;
    }
    const targetH = this.crouching ? H_CROUCH : H_STAND;
    const targetEye = this.crouching ? EYE_CROUCH : EYE_STAND;
    this.height += (targetH - this.height) * Math.min(1, dt * 13);
    this.eye += (targetEye - this.eye) * Math.min(1, dt * 13);

    /* ---- movement input ---- */
    let ix = 0, iz = 0;
    if (input.isDown('forward')) iz -= 1;
    if (input.isDown('back')) iz += 1;
    if (input.isDown('left')) ix -= 1;
    if (input.isDown('right')) ix += 1;
    const inLen = Math.hypot(ix, iz);
    if (inLen > 0) { ix /= inLen; iz /= inLen; }

    const wantSprint = input.isDown('sprint') && iz < -0.1 && !this.crouching && this.ads < 0.4 && this.stamina > 0.06;
    this.sprinting = wantSprint && inLen > 0.1;
    if (this.sprinting) this.stamina = Math.max(0, this.stamina - dt * 0.24);
    else this.stamina = Math.min(1, this.stamina + dt * (this.grounded && inLen < 0.1 ? 0.42 : 0.22));

    let speed = this.crouching ? 2.05 : this.sprinting ? 6.35 : 4.05;
    speed *= 1 - this.ads * 0.42;
    if (this.reloading > 0) speed *= 0.90;

    // world-space wish direction
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    const wishX = ix * cos - iz * sin;
    const wishZ = -ix * sin - iz * cos;

    const accel = this.grounded ? 52 : 13;
    const desiredX = wishX * speed, desiredZ = wishZ * speed;
    this.vel.x += (desiredX - this.vel.x) * Math.min(1, accel * dt * (inLen > 0 ? 1 : 1.35));
    this.vel.z += (desiredZ - this.vel.z) * Math.min(1, accel * dt * (inLen > 0 ? 1 : 1.35));

    /* ---- jump ---- */
    if (input.pressed('jump')) this.jumpBuffer = 0.14;
    this.jumpBuffer = Math.max(0, this.jumpBuffer - dt);
    this.coyote = this.grounded ? 0.12 : Math.max(0, this.coyote - dt);
    if (this.jumpBuffer > 0 && this.coyote > 0 && !this.crouching) {
      this.vel.y = 7.25;
      this.grounded = false;
      this.coyote = 0;
      this.jumpBuffer = 0;
      this.game.audio.play('jump', null, 0.35);
      this.noise = Math.max(this.noise, 0.45);
    }

    /* ---- gravity + integrate ---- */
    this.vel.y += GRAVITY * dt;
    if (this.vel.y < -55) this.vel.y = -55;
    this.fallSpeed = this.vel.y;

    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
    this.pos.z += this.vel.z * dt;

    /* ---- collide ---- */
    this.wasGrounded = this.grounded;
    const info = this.game.physics.resolveCapsule(this.pos, RADIUS, this.height, 4);
    if (info.grounded) {
      this.grounded = true;
      if (this.vel.y < 0) this.vel.y = 0;
    } else {
      // ground probe for slight gaps / step edges
      const gy = this.game.physics.groundAt(this.pos.x, this.pos.y + 0.35, this.pos.z, 0.55, RADIUS * 0.8);
      if (gy > -1e8 && this.pos.y - gy < 0.30 && this.vel.y <= 0.01) {
        this.pos.y = gy;
        this.grounded = true;
        this.vel.y = 0;
      } else {
        this.grounded = false;
      }
    }
    if (info.ceiling && this.vel.y > 0) this.vel.y = 0;
    // hard floor safety
    if (this.pos.y < -6) { this.pos.set(this.game.level.playerSpawn.x, 1, this.game.level.playerSpawn.z); this.vel.set(0, 0, 0); }

    // landing impact
    if (this.grounded && !this.wasGrounded) {
      const impact = Math.min(1, Math.abs(this.fallSpeed) / 20);
      if (impact > 0.14) {
        this.game.audio.play('land', null, 0.25 + impact * 0.7);
        this.game.shake(impact * 0.35, 0.20);
        this.landBob = impact * 0.14;
        this.noise = Math.max(this.noise, impact * 0.8);
        if (Math.abs(this.fallSpeed) > 24) this.damage((Math.abs(this.fallSpeed) - 24) * 3.4, null);
      }
      this.airTime = 0;
    }
    if (!this.grounded) this.airTime += dt;

    /* ---- keep inside bounds ---- */
    const B = 84;
    this.pos.x = Math.max(-B, Math.min(B, this.pos.x));
    this.pos.z = Math.max(-B, Math.min(B, this.pos.z));

    /* ---- footsteps ---- */
    const hspeed = Math.hypot(this.vel.x, this.vel.z);
    if (this.grounded && hspeed > 0.6) {
      this.stepDist += hspeed * dt;
      const stride = this.crouching ? 1.35 : this.sprinting ? 2.05 : 1.62;
      if (this.stepDist > stride) {
        this.stepDist = 0;
        this.footstep(hspeed);
      }
    }

    /* ---- noise level (drives zombie attraction) ---- */
    let n = 0;
    if (hspeed > 0.4) n = this.crouching ? 0.10 : this.sprinting ? 0.62 : 0.30;
    this.noise = Math.max(this.noise * Math.pow(0.14, dt), n);
    this.game.noiseLevel = this.noise;

    /* ---- health regen (delayed, partial) ---- */
    this.lastDamageT += dt;
    if (this.lastDamageT > 5.5 && this.hp < this.maxHp) {
      this.hp = Math.min(this.maxHp, this.hp + dt * 7.5);
    }

    /* ---- combat ---- */
    this.updateWeapon(dt, t, input);

    /* ---- flashlight ---- */
    if (input.pressed('flashlight')) {
      this.flashOn = !this.flashOn;
      this.game.audio.play('uiClick', null, 0.35);
    }
    this.flashlight.visible = this.flashOn;
    this.flashlight.intensity = this.flashOn ? 22 : 0;

    /* ---- camera ---- */
    this.updateCamera(dt, t, hspeed);

    /* ---- audio listener ---- */
    this.camera.getWorldDirection(_v);
    this.game.audio.listenerPos = this.camera.position;
    this.game.audio.setListener(this.camera.position, _v, UP);

    if (this.flashOn) {
      this.flashlight.position.copy(this.camera.position);
      this.flashlight.target.position.copy(this.camera.position).addScaledVector(_v, 12);
      this.flashlight.target.updateMatrixWorld();
    }
  }

  footstep(hspeed) {
    // surface under the foot
    const hit = this.game.physics.raycast(
      _v.set(this.pos.x, this.pos.y + 0.4, this.pos.z),
      _v2.set(0, -1, 0), 1.2
    );
    const surf = hit?.collider?.surface || 'dirt';
    this.footSurface = surf;
    const cue = surf === 'metal' ? 'footMetal' : surf === 'concrete' ? 'footConcrete' : 'footDirt';
    const vol = (this.crouching ? 0.14 : this.sprinting ? 0.42 : 0.28) * (0.85 + Math.random() * 0.3);
    this.game.audio.play(cue, null, vol, 0.9 + Math.random() * 0.22);
  }

  /* ------------------------------------------------------- weapon handling */
  updateWeapon(dt, t, input) {
    const w = this.current;
    const a = this.ammoNow;
    const s = this.stats;

    /* --- weapon switching --- */
    if (this.switching > 0) {
      this.switching -= dt;
      if (this.switching <= 0.21 && this.switchTo >= 0) {
        this.slot = this.switchTo;
        this.switchTo = -1;
        this.applySlot();
      }
      if (this.switching < 0) this.switching = 0;
    } else {
      for (let i = 1; i <= 5; i++) {
        if (input.pressed('weapon' + i)) this.selectSlot(i - 1);
      }
      if (input.wheel !== 0) {
        let next = this.slot;
        for (let k = 0; k < 5; k++) {
          next = (next + (input.wheel > 0 ? 1 : -1) + 5) % 5;
          if (this.owned[this.order[next]]) break;
        }
        this.selectSlot(next);
      }
    }

    /* --- ADS --- */
    this.adsTarget = (input.ads && this.reloading <= 0 && this.switching <= 0 && !this.sprinting && this.meleeT <= 0) ? 1 : 0;
    const adsSpeed = s.scoped ? 7.5 : 11.5;
    this.ads += (this.adsTarget - this.ads) * Math.min(1, dt * adsSpeed);
    if (this.ads < 0.001) this.ads = 0;

    const targetFov = this.baseFov - this.ads * (s.adsFov !== undefined ? (this.baseFov - s.adsFov) : 22)
      + (this.sprinting ? 3.5 : 0);
    this.fov += (targetFov - this.fov) * Math.min(1, dt * 10);
    if (Math.abs(this.camera.fov - this.fov) > 0.01) {
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
    }
    this.game.hud?.setScope(s.scoped ? this.ads : 0);

    /* --- reload --- */
    if (this.reloading > 0) {
      this.reloading -= dt;
      const total = s.reloadTime;
      const frac = 1 - this.reloading / total;
      if (this.reloadStage === 0 && frac > 0.10) {
        this.reloadStage = 1;
        this.game.audio.play('reloadOut', null, 0.6);
        if (w.magMesh) w.magMesh.visible = false;
      } else if (this.reloadStage === 1 && frac > 0.55) {
        this.reloadStage = 2;
        this.game.audio.play('reloadIn', null, 0.6);
        if (w.magMesh) w.magMesh.visible = true;
      } else if (this.reloadStage === 2 && frac > 0.88) {
        this.reloadStage = 3;
        this.game.audio.play(s.scoped ? 'bolt' : 'reloadCharge', null, 0.55);
      }
      if (this.reloading <= 0) {
        this.reloading = 0;
        const need = s.mag - a.mag;
        const take = Math.min(need, a.reserve);
        a.mag += take;
        a.reserve -= take;
        this.reloadStage = 0;
        this.game.hud?.setWeapon(s, a);
      }
    } else if (input.pressed('reload') && a.mag < s.mag && a.reserve > 0 && this.switching <= 0) {
      this.startReload();
    }

    /* --- melee --- */
    if (this.meleeT > 0) {
      this.meleeT -= dt;
      if (this.meleeT <= 0) this.meleeT = 0;
    } else if ((input.pressed('melee') || input.meleeMouse) && this.switching <= 0) {
      this.melee();
    }

    /* --- grenade --- */
    if (this.grenadeT > 0) {
      this.grenadeT -= dt;
      if (this.grenadeT <= 0) this.grenadeT = 0;
    } else if (input.pressed('grenade') && this.grenades > 0 && this.switching <= 0) {
      this.throwGrenade();
    }

    /* --- firing --- */
    this.fireCd -= dt;
    this.spreadHeat = Math.max(0, this.spreadHeat - dt * 2.6);

    const canFire = this.fireCd <= 0 && this.reloading <= 0 && this.switching <= 0 && this.meleeT <= 0 && this.alive;
    const wantFire = s.auto ? input.fire : input.firePressed;
    if (wantFire && canFire) {
      if (a.mag > 0) this.fire();
      else {
        this.game.audio.play('dryfire', null, 0.5);
        this.fireCd = 0.28;
        if (a.reserve > 0) this.startReload();
      }
    }
    if (!input.fire) this.shotsFired = 0;

    /* --- viewmodel animation --- */
    this.animateViewmodel(dt, t);
  }

  startReload() {
    const s = this.stats;
    const a = this.ammoNow;
    if (a.mag >= s.mag || a.reserve <= 0 || this.reloading > 0) return;
    this.reloading = s.reloadTime;
    this.reloadStage = 0;
    this.adsTarget = 0;
    this.noise = Math.max(this.noise, 0.20);
  }

  /** Compute the current cone of fire in radians. */
  currentSpread() {
    const s = this.stats;
    const base = s.spread * (1 - this.ads) + s.adsSpread * this.ads;
    const moveP = Math.min(1, Math.hypot(this.vel.x, this.vel.z) / 6.4);
    const air = this.grounded ? 0 : 1;
    const crouch = this.crouching ? -0.35 : 0;
    const mult = 1 + moveP * 1.55 + air * 1.9 + crouch + this.spreadHeat * 0.95;
    return base * Math.max(0.25, mult);
  }

  fire() {
    const s = this.stats;
    const a = this.ammoNow;
    const w = this.current;

    a.mag--;
    this.fireCd = 60 / s.rpm;
    this.shotsFired++;
    this.spreadHeat = Math.min(2.6, this.spreadHeat + (s.auto ? 0.30 : 0.55));
    this.noise = Math.max(this.noise, s.suppressed ? 0.35 : 1.0);
    this.game.hud?.setWeapon(s, a);

    /* --- muzzle in world space --- */
    const muzzleWorld = _v3.copy(w.muzzleLocal);
    w.group.updateMatrixWorld();
    w.group.localToWorld(muzzleWorld);
    // viewmodel space -> world space: place the flash at the camera + offset
    const camDir = this.camera.getWorldDirection(_v);
    const camRight = _v2.crossVectors(camDir, UP).normalize();
    const worldMuzzle = this.camera.position.clone()
      .addScaledVector(camDir, 0.62 + (1 - this.ads) * 0.10)
      .addScaledVector(camRight, (1 - this.ads) * 0.16)
      .addScaledVector(UP, -0.075 - (1 - this.ads) * 0.05);

    this.game.fx.muzzleFlash(worldMuzzle, camDir, s.scoped ? 1.6 : s.pellets ? 1.45 : 1.0, !!s.suppressed);
    this.vmMuzzleLight.position.copy(w.muzzleLocal);
    w.group.localToWorld(this.vmMuzzleLight.position);
    this.vmMuzzleLight.intensity = s.suppressed ? 1.2 : 4.2;

    /* --- shell ejection --- */
    if (w.ejectLocal) {
      const ej = this.camera.position.clone()
        .addScaledVector(camDir, 0.32)
        .addScaledVector(camRight, 0.20)
        .addScaledVector(UP, -0.06);
      this.game.fx.ejectCasing(ej, camRight, UP);
    }

    /* --- audio --- */
    const cue = s.name.includes('SHOTGUN') || s.pellets ? 'shotgun'
      : this.order[this.slot] === 'sniper' ? 'sniper'
        : this.order[this.slot] === 'smg' ? 'smg'
          : this.order[this.slot] === 'pistol' ? 'pistol' : 'rifle';
    this.game.audio.play(cue, null, s.suppressed ? 0.42 : 0.95, 0.97 + Math.random() * 0.06);

    /* --- ballistics --- */
    const pellets = s.pellets || 1;
    const spread = this.currentSpread();
    for (let p = 0; p < pellets; p++) {
      const dir = camDir.clone();
      if (spread > 0) {
        const ang = Math.random() * Math.PI * 2;
        // gaussian-ish radial distribution
        const r = spread * Math.sqrt(Math.random()) * (pellets > 1 ? 1.0 : 1.0);
        const up = _v.set(0, 1, 0);
        const right = _v2.crossVectors(dir, up).normalize();
        const trueUp = _v3.crossVectors(right, dir).normalize();
        dir.addScaledVector(right, Math.cos(ang) * r).addScaledVector(trueUp, Math.sin(ang) * r).normalize();
      }
      this.trace(worldMuzzle, dir, s, pellets > 1);
    }

    /* --- recoil --- */
    const rec = s.recoil;
    this.recoilVel.z += rec * 5.2;
    this.recoilVel.y += rec * 1.15;
    this.recoilRotVel.x -= rec * 12.5;
    this.recoilRotVel.y += (Math.random() - 0.5) * rec * 9.0;
    this.recoilRotVel.z += (Math.random() - 0.5) * rec * 7.0;

    const kickScale = (1 - this.ads * 0.45) * (this.crouching ? 0.82 : 1);
    this.viewKickVel.y += s.kick * 22 * kickScale;
    this.viewKickVel.x += (Math.random() - 0.5) * s.kick * 15 * kickScale;
    this.game.shake(s.kick * 0.55, 0.10);
    this.game.renderer.grade && (this.game.renderer.grade.uniforms.uFlash.value = Math.min(1, s.suppressed ? 0.05 : 0.14 * (s.pellets ? 1.6 : 1)));
  }

  /** Trace one bullet: zombies first (per-zone), then world geometry. */
  trace(origin, dir, s, isPellet) {
    let remaining = s.penetration || 1;
    let from = origin.clone();
    let dist = s.range || 140;
    const hitZombies = new Set();

    for (let pass = 0; pass < 5 && remaining > 0; pass++) {
      // world hit distance
      const wHit = this.game.physics.raycast(from, dir, dist);
      const wDist = wHit ? wHit.t : dist;

      // Closest zombie zone hit within wDist. Use the shared spatial grid to
      // limit the candidate set to zombies actually near the ray's origin
      // (the per-zone bounding-sphere test is still the final arbiter). For a
      // tight formation this is ~5 raycastZones calls instead of 38, which
      // matters a lot for high-RPM weapons and shotgun pellets.
      let best = null, bestZ = null;
      const candidates = this.game.zombieGrid
        ? this.game.zombieGrid.queryNear(from.x, from.z)
        : this.game.zombies;
      for (let i = 0; i < candidates.length; i++) {
        const z = candidates[i];
        if (z.dead || hitZombies.has(z)) continue;
        if (z.root.position.distanceToSquared(from) > (dist + 3) * (dist + 3)) continue;
        const r = z.raycastZones(from, dir, Math.min(wDist, dist));
        if (r && (!best || r.dist < best.dist)) { best = r; bestZ = z; }
      }
      // Fallback: the grid cell of the ray origin may miss a zombie that is far
      // along the ray but in a different cell. Only do the full scan if no hit
      // was found in the near cells (keeps the common case fast).
      if (!best) {
        const all = this.game.zombies;
        for (let i = 0; i < all.length; i++) {
          const z = all[i];
          if (z.dead || hitZombies.has(z)) continue;
          if (z.root.position.distanceToSquared(from) > (dist + 3) * (dist + 3)) continue;
          const r = z.raycastZones(from, dir, Math.min(wDist, dist));
          if (r && (!best || r.dist < best.dist)) { best = r; bestZ = z; }
        }
      }

      if (best && bestZ) {
        hitZombies.add(bestZ);
        const dmg = s.dmg * (isPellet ? 1 : 1) * (best.zone?.name === 'head' ? (s.headMul || 1) : 1);
        bestZ.hit(dmg, best.zone, best.point, dir, s);
        remaining -= 1;
        if (remaining <= 0) {
          // stop; blood spray already handled by Zombie.hit
          return;
        }
        from = best.point.clone().addScaledVector(dir, 0.12);
        dist -= best.dist + 0.12;
        if (dist <= 0.2) return;
        continue;
      }

      if (wHit) {
        const surf = wHit.collider?.surface || 'concrete';
        this.game.fx.impact(wHit.point, wHit.normal, surf);
        this.game.fx.tracer(origin, wHit.point, isPellet ? 0.008 : 0.014, isPellet ? 0.035 : 0.055);
        // punch through thin glass / wood
        if ((surf === 'glass' || surf === 'wood') && remaining > 1) {
          remaining -= 1;
          from = wHit.point.clone().addScaledVector(dir, 0.25);
          dist -= wHit.t + 0.25;
          if (dist <= 0.2) return;
          continue;
        }
        return;
      }

      // nothing hit
      this.game.fx.tracer(origin, from.clone().addScaledVector(dir, dist), isPellet ? 0.008 : 0.014, 0.06);
      return;
    }
  }

  melee() {
    this.meleeT = 0.45;
    this.adsTarget = 0;
    this.game.audio.play('switch', null, 0.4);
    const dir = this.camera.getWorldDirection(_v).clone();
    const origin = this.camera.position.clone();
    let hit = false;
    for (const z of this.game.zombies) {
      if (z.dead) continue;
      const d = z.root.position.distanceTo(this.pos);
      if (d > 2.6) continue;
      _v2.subVectors(z.root.position, this.pos).setY(0).normalize();
      if (_v2.dot(_v3.set(dir.x, 0, dir.z).normalize()) < 0.45) continue;
      const r = z.raycastZones(origin, dir, 2.8);
      const pt = r ? r.point : z.root.position.clone().setY(this.pos.y + 1.1);
      z.hit(72, r?.zone || null, pt, dir, { name: 'MELEE', headMul: 1.8 });
      z.vel.addScaledVector(_v2, 6.5);
      hit = true;
    }
    if (hit) {
      this.game.audio.play('flesh', null, 0.85);
      this.game.shake(0.22, 0.14);
    }
    this.noise = Math.max(this.noise, 0.3);
  }

  throwGrenade() {
    this.grenades--;
    this.grenadeT = 0.6;
    this.game.audio.play('grenadePin', null, 0.7);
    const dir = this.camera.getWorldDirection(_v).clone();
    const origin = this.camera.position.clone().addScaledVector(dir, 0.6);
    this.game.spawnGrenade(origin, dir.multiplyScalar(19).add(_v2.set(0, 3.4, 0)));
    this.game.hud?.setGrenades(this.grenades);
  }

  /* ------------------------------------------------------ viewmodel anim */
  animateViewmodel(dt, t) {
    const w = this.current;
    if (!w) return;

    /* --- recoil spring --- */
    const k = 210, c = 21;
    this.recoilVel.multiplyScalar(1 - Math.min(1, c * dt));
    this.recoilVel.addScaledVector(this.recoilPos, -k * dt);
    this.recoilPos.addScaledVector(this.recoilVel, dt);
    this.recoilRotVel.multiplyScalar(1 - Math.min(1, 19 * dt));
    this.recoilRotVel.addScaledVector(this.recoilRot, -170 * dt);
    this.recoilRot.addScaledVector(this.recoilRotVel, dt);

    /* --- view kick applied to actual aim --- */
    this.viewKickVel.multiplyScalar(1 - Math.min(1, 12 * dt));
    this.viewKick.x += this.viewKickVel.x * dt;
    this.viewKick.y += this.viewKickVel.y * dt;
    // recover
    this.viewKick.multiplyScalar(1 - Math.min(1, 6.5 * dt));

    /* --- sway from mouse movement --- */
    const swayAmt = (1 - this.ads * 0.72);
    const tx = Math.max(-1, Math.min(1, -this.lastMouse.x * 26)) * 0.030 * swayAmt;
    const ty = Math.max(-1, Math.min(1, -this.lastMouse.y * 26)) * 0.026 * swayAmt;
    this.swayPos.x += (tx - this.swayPos.x) * Math.min(1, dt * 8);
    this.swayPos.y += (ty - this.swayPos.y) * Math.min(1, dt * 8);
    this.swayRot.x += (ty * 2.6 - this.swayRot.x) * Math.min(1, dt * 7);
    this.swayRot.y += (-tx * 3.2 - this.swayRot.y) * Math.min(1, dt * 7);

    /* --- walk bob --- */
    const hspeed = Math.hypot(this.vel.x, this.vel.z);
    const moveN = Math.min(1, hspeed / 6.2);
    this.bobT += dt * (6.2 + moveN * 6.5) * (this.grounded ? 1 : 0.2);
    const bobAmt = moveN * (1 - this.ads * 0.80) * (this.grounded ? 1 : 0.25);
    const bobX = Math.sin(this.bobT) * 0.021 * bobAmt;
    const bobY = -Math.abs(Math.cos(this.bobT)) * 0.017 * bobAmt;
    const bobR = Math.sin(this.bobT * 0.5) * 0.020 * bobAmt;

    /* --- idle breathing --- */
    this.breath += dt * 1.15;
    const brX = Math.sin(this.breath) * 0.0038 * (1 - moveN) * (1 - this.ads * 0.6);
    const brY = Math.cos(this.breath * 0.83) * 0.0046 * (1 - moveN) * (1 - this.ads * 0.6);

    /* --- sprint / lower pose --- */
    const sprintN = this.sprinting ? Math.min(1, (this.sprinting ? 1 : 0)) : 0;
    const lower = this.reloading > 0 ? 1 : 0;

    /* --- switch animation --- */
    const swN = this.switching > 0 ? Math.sin(Math.min(1, (0.42 - this.switching) / 0.42) * Math.PI) : 0;

    /* --- melee lunge --- */
    const mel = this.meleeT > 0 ? Math.sin((1 - this.meleeT / 0.45) * Math.PI) : 0;

    /* --- compose --- */
    const rest = w.restPos, aim = w.adsPos;
    const px = rest.x + (aim.x - rest.x) * this.ads;
    const py = rest.y + (aim.y - rest.y) * this.ads;
    const pz = rest.z + (aim.z - rest.z) * this.ads;

    w.group.position.set(
      px + bobX + this.swayPos.x + brX + sprintN * 0.055 + mel * 0.10,
      py + bobY + this.swayPos.y + brY - sprintN * 0.055 - lower * 0.075 - swN * 0.34 + (this.landBob || 0) * -1,
      pz + this.recoilPos.z * 0.030 + sprintN * 0.045 + mel * -0.16
    );

    const rr = w.restRot, ar = w.adsRot;
    w.group.rotation.set(
      rr.x + (ar.x - rr.x) * this.ads + this.recoilRot.x * 0.016 + this.swayRot.x + bobR * 0.4 + sprintN * 0.14 + mel * -0.55,
      rr.y + (ar.y - rr.y) * this.ads + this.recoilRot.y * 0.014 + this.swayRot.y + sprintN * 0.30 + swN * 0.35,
      rr.z + (ar.z - rr.z) * this.ads + this.recoilRot.z * 0.014 + bobR + sprintN * -0.22 + lower * 0.24 + mel * 0.4
    );

    // reload rock
    if (this.reloading > 0) {
      const f = 1 - this.reloading / this.stats.reloadTime;
      w.group.rotation.z += Math.sin(f * Math.PI) * 0.42;
      w.group.rotation.x += Math.sin(f * Math.PI * 2) * 0.10;
      w.group.position.y -= Math.sin(f * Math.PI) * 0.055;
    }

    // arms follow the weapon
    this.arms.position.copy(w.group.position).multiplyScalar(0.92);
    this.arms.rotation.set(w.group.rotation.x * 0.85, w.group.rotation.y * 0.85, w.group.rotation.z * 0.85);
    this.arms.visible = this.ads < 0.94 || !this.stats.scoped;

    // hide the weapon body when fully scoped (looking through the optic)
    if (this.stats.scoped) w.group.visible = this.ads < 0.97;

    this.landBob = (this.landBob || 0) * Math.pow(0.02, dt);
    this.vmMuzzleLight.intensity *= Math.pow(0.0004, dt);
  }

  /* ---------------------------------------------------------- camera */
  updateCamera(dt, t, hspeed) {
    const cam = this.camera;
    const moveN = Math.min(1, hspeed / 6.2);

    // view bob (subtle, separate from the viewmodel bob)
    const vb = Math.sin(this.bobT) * 0.016 * moveN * (this.grounded ? 1 : 0.2) * (1 - this.ads * 0.7);
    const vbY = -Math.abs(Math.cos(this.bobT)) * 0.022 * moveN * (this.grounded ? 1 : 0.2) * (1 - this.ads * 0.7);

    const shake = this.game.shakeOffset;

    cam.position.set(
      this.pos.x + vb + shake.x,
      this.pos.y + this.eye + vbY - (this.landBob || 0) * 0.9 + shake.y,
      this.pos.z + shake.z
    );

    // lean while strafing
    const strafe = (this.vel.x * Math.cos(this.yaw) - this.vel.z * Math.sin(this.yaw)) / 6.2;
    this.lean = (this.lean || 0) + ((-strafe * 0.030 * (1 - this.ads * 0.8)) - (this.lean || 0)) * Math.min(1, dt * 6);

    const pitch = Math.max(-1.54, Math.min(1.54, this.pitch + this.viewKick.y * 0.010));
    const yaw = this.yaw + this.viewKick.x * 0.010;

    _e.set(pitch, yaw, this.lean + this.game.shakeRoll, 'YXZ');
    cam.quaternion.setFromEuler(_e);

    // viewmodel camera mirrors the world camera FOV changes only slightly
    this.vmCamera.fov = 62 - this.ads * (this.stats?.scoped ? 26 : 12);
    this.vmCamera.updateProjectionMatrix();
  }

  updateDeath(dt, t) {
    // camera falls and rolls
    this.deathT = (this.deathT || 0) + dt;
    const k = Math.min(1, this.deathT / 1.5);
    const ease = 1 - Math.pow(1 - k, 3);
    this.vel.y += GRAVITY * dt;
    this.pos.y += this.vel.y * dt;
    this.game.physics.resolveCapsule(this.pos, RADIUS, 0.6, 3);
    const cam = this.camera;
    cam.position.set(this.pos.x, this.pos.y + 0.32 + (1 - ease) * (EYE_STAND - 0.32), this.pos.z);
    _e.set(this.pitch * (1 - ease) - ease * 1.25, this.yaw, ease * 1.42, 'YXZ');
    cam.quaternion.setFromEuler(_e);
    this.flashlight.visible = false;
  }

  /** Render the viewmodel on top of the world. */
  renderViewmodel(renderer) {
    if (!this.alive) return;
    renderer.autoClear = false;
    renderer.clearDepth();
    renderer.render(this.vmScene, this.vmCamera);
    renderer.autoClear = true;
  }

  resize() {
    this.vmCamera.aspect = window.innerWidth / window.innerHeight;
    this.vmCamera.updateProjectionMatrix();
  }
}
