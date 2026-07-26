/**
 * Material library — bakes every procedural recipe once at load time and hands
 * out fully configured PBR materials. Repeat values are chosen so textures have
 * a consistent real-world scale (boxUV maps 1 unit = 1 metre).
 */
import * as THREE from 'three';
import { TextureBaker } from './TextureBaker.js';
import * as R from './recipes.js';

export class Materials {
  constructor(renderer, env) {
    this.baker = new TextureBaker(renderer);
    this.env = env;
    this.m = {};
    this.sets = {};
  }

  _bake(key, recipe, o) { const s = this.baker.bake(key, recipe, o); this.sets[key] = s; return s; }

  _mat(key, set, opts = {}) {
    const m = this.baker.material(set, { ...opts, key });
    m.envMap = this.env || null;
    m.envMapIntensity = opts.envMapIntensity ?? 0.85;
    m.name = key;
    this.m[key] = m;
    return m;
  }

  buildAll(onProgress = () => {}) {
    const steps = [];
    const add = (fn) => steps.push(fn);

    /* ------------------------------------------------- architecture ------- */
    add(() => {
      const s = this._bake('brick', R.BRICK, { size: 1024, normalStrength: 2.2, seed: 3.1, repeat: [1, 1] });
      this._mat('brick', s, { normalScale: 1.5, envMapIntensity: 0.55 });
      const s2 = this._bake('brickDark', R.BRICK, { size: 512, normalStrength: 2.2, seed: 8.7, tint: [0.62, 0.60, 0.62] });
      this._mat('brickDark', s2, { normalScale: 1.5, envMapIntensity: 0.5 });
    });

    add(() => {
      const s = this._bake('concrete', R.CONCRETE, { size: 1024, normalStrength: 1.7, seed: 5.5 });
      this._mat('concrete', s, { normalScale: 1.25, envMapIntensity: 0.55 });
      const s2 = this._bake('concreteDark', R.CONCRETE, { size: 512, normalStrength: 1.7, seed: 12.2, tint: [0.55, 0.56, 0.58] });
      this._mat('concreteDark', s2, { normalScale: 1.25, envMapIntensity: 0.5 });
    });

    add(() => {
      const s = this._bake('asphalt', R.ASPHALT, { size: 1024, normalStrength: 1.5, seed: 2.2 });
      this._mat('asphalt', s, { normalScale: 1.1, envMapIntensity: 0.7 });
    });

    add(() => {
      const s = this._bake('dirt', R.DIRT, { size: 1024, normalStrength: 1.8, seed: 7.7 });
      this._mat('dirt', s, { normalScale: 1.3, envMapIntensity: 0.45 });
    });

    add(() => {
      const s = this._bake('wood', R.WOOD, { size: 1024, normalStrength: 1.9, seed: 4.4 });
      this._mat('wood', s, { normalScale: 1.2, envMapIntensity: 0.5 });
      const s2 = this._bake('woodDark', R.WOOD, { size: 512, normalStrength: 1.9, seed: 15.1, tint: [0.6, 0.58, 0.55] });
      this._mat('woodDark', s2, { normalScale: 1.2, envMapIntensity: 0.45 });
    });

    add(() => {
      const s = this._bake('tile', R.TILE_FLOOR, { size: 1024, normalStrength: 1.6, seed: 6.1 });
      this._mat('tile', s, { normalScale: 1.15, envMapIntensity: 0.9 });
    });

    /* ------------------------------------------------------- metals -------- */
    add(() => {
      const s = this._bake('rust', R.RUST_METAL, { size: 1024, normalStrength: 1.6, seed: 9.9 });
      this._mat('rust', s, { normalScale: 1.2, envMapIntensity: 1.0 });
      const s2 = this._bake('rustHeavy', R.RUST_METAL, { size: 512, normalStrength: 1.6, seed: 21.3, tint: [0.85, 0.8, 0.78] });
      this._mat('rustHeavy', s2, { normalScale: 1.2, envMapIntensity: 0.9 });
    });

    add(() => {
      const s = this._bake('gunmetal', R.GUNMETAL, { size: 1024, normalStrength: 1.1, seed: 3.7, aniso: 16 });
      this._mat('gunmetal', s, { normalScale: 0.8, envMapIntensity: 1.35 });
    });

    add(() => {
      const s = this._bake('polymer', R.POLYMER, { size: 512, normalStrength: 1.3, seed: 1.9, tint: [0.10, 0.105, 0.11] });
      this._mat('polymer', s, { normalScale: 1.0, envMapIntensity: 0.7 });
      const s2 = this._bake('polymerTan', R.POLYMER, { size: 512, normalStrength: 1.3, seed: 11.4, tint: [0.34, 0.29, 0.20] });
      this._mat('polymerTan', s2, { normalScale: 1.0, envMapIntensity: 0.6 });
    });

    add(() => {
      const s = this._bake('paintRed', R.PAINTED_METAL, { size: 512, normalStrength: 1.2, seed: 14.2, tint: [0.34, 0.055, 0.045] });
      this._mat('paintRed', s, { normalScale: 1.0, envMapIntensity: 1.1 });
      const s2 = this._bake('paintGreen', R.PAINTED_METAL, { size: 512, normalStrength: 1.2, seed: 18.5, tint: [0.09, 0.16, 0.11] });
      this._mat('paintGreen', s2, { normalScale: 1.0, envMapIntensity: 1.0 });
      const s3 = this._bake('paintBlue', R.PAINTED_METAL, { size: 512, normalStrength: 1.2, seed: 23.8, tint: [0.07, 0.12, 0.22] });
      this._mat('paintBlue', s3, { normalScale: 1.0, envMapIntensity: 1.0 });
      const s4 = this._bake('paintYellow', R.PAINTED_METAL, { size: 512, normalStrength: 1.2, seed: 27.1, tint: [0.42, 0.32, 0.045] });
      this._mat('paintYellow', s4, { normalScale: 1.0, envMapIntensity: 1.0 });
    });

    add(() => {
      const s = this._bake('hazard', R.HAZARD, { size: 512, normalStrength: 1.0, seed: 31.4 });
      this._mat('hazard', s, { normalScale: 0.9, envMapIntensity: 0.9 });
    });

    /* ---------------------------------------------------- organic ---------- */
    add(() => {
      const s = this._bake('skin', R.ZOMBIE_SKIN, { size: 1024, normalStrength: 1.5, seed: 8.2 });
      this.m.skin = this.baker.material(s, {
        key: 'skin', physical: true, normalScale: 1.15,
        extra: { sheen: 0.35, sheenRoughness: 0.6, sheenColor: new THREE.Color(0x2a3320), clearcoat: 0.18, clearcoatRoughness: 0.55 }
      });
      this.m.skin.envMap = this.env; this.m.skin.envMapIntensity = 0.55;
      // variants for zombie diversity
      for (const [name, tint, seed] of [
        ['skinPale', [1.18, 1.12, 1.05], 13.6],
        ['skinRot', [0.72, 0.82, 0.62], 19.4],
        ['skinBurn', [0.62, 0.52, 0.48], 25.2]
      ]) {
        const sv = this._bake(name, R.ZOMBIE_SKIN, { size: 512, normalStrength: 1.5, seed, tint });
        this._mat(name, sv, { normalScale: 1.1, envMapIntensity: 0.5 });
      }
    });

    add(() => {
      const s = this._bake('rags', R.RAGS, { size: 512, normalStrength: 1.4, seed: 5.9, tint: [0.20, 0.21, 0.19] });
      this._mat('rags', s, { normalScale: 1.1, envMapIntensity: 0.35 });
      for (const [name, tint, seed] of [
        ['ragsBlue', [0.13, 0.16, 0.26], 16.3],
        ['ragsRed', [0.24, 0.10, 0.09], 22.7],
        ['ragsGreen', [0.14, 0.19, 0.12], 29.1],
        ['ragsWhite', [0.42, 0.41, 0.38], 33.3]
      ]) {
        const sv = this._bake(name, R.RAGS, { size: 512, normalStrength: 1.4, seed, tint });
        this._mat(name, sv, { normalScale: 1.1, envMapIntensity: 0.3 });
      }
    });

    add(() => {
      const s = this._bake('bone', R.BONE, { size: 512, normalStrength: 1.5, seed: 7.3 });
      this._mat('bone', s, { normalScale: 1.1, envMapIntensity: 0.6 });
      const l = this._bake('leather', R.LEATHER, { size: 512, normalStrength: 1.5, seed: 9.1, tint: [0.13, 0.09, 0.06] });
      this._mat('leather', l, { normalScale: 1.15, envMapIntensity: 0.75 });
      const sb = this._bake('sandbag', R.SANDBAG, { size: 512, normalStrength: 1.7, seed: 11.9 });
      this._mat('sandbag', sb, { normalScale: 1.35, envMapIntensity: 0.35 });
    });

    /* ---------------------------------------------------- blood / gore ----- */
    add(() => {
      // multiple splat variants so decals never repeat visibly
      this.bloodMats = [];
      for (let i = 0; i < 6; i++) {
        const s = this._bake('blood' + i, R.BLOOD_DECAL, { size: 256, normalStrength: 1.0, seed: 3.3 * (i + 1) + 0.7 });
        const m = new THREE.MeshPhysicalMaterial({
          map: s.map,
          normalMap: s.normalMap,
          roughnessMap: s.ormMap,
          alphaMap: s.ormMap,
          transparent: true,
          alphaTest: 0.02,
          roughness: 1.0,
          metalness: 0.0,
          clearcoat: 0.65,
          clearcoatRoughness: 0.22,
          depthWrite: false,
          polygonOffset: true,
          polygonOffsetFactor: -6,
          polygonOffsetUnits: -6,
          side: THREE.FrontSide,
          envMap: this.env,
          envMapIntensity: 0.9,
          normalScale: new THREE.Vector2(0.8, 0.8)
        });
        m.onBeforeCompile = (sh) => {
          sh.fragmentShader = sh.fragmentShader
            .replace('float roughnessFactor = roughness;', `
              float roughnessFactor = roughness;
              #ifdef USE_ROUGHNESSMAP
                roughnessFactor *= texture2D(roughnessMap, vRoughnessMapUv).r;
              #endif`)
            .replace('roughnessFactor *= texelRoughness.g;', '')
            .replace('diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;', 'diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).a;');
        };
        m.customProgramCacheKey = () => 'blood';
        this.bloodMats.push(m);
      }
      this.m.blood = this.bloodMats[0];

      // wet gore surface for chunks & gibs
      this.m.gore = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x4a0806),
        roughness: 0.28,
        metalness: 0.0,
        clearcoat: 0.85,
        clearcoatRoughness: 0.18,
        sheen: 0.5,
        sheenColor: new THREE.Color(0x902020),
        envMap: this.env,
        envMapIntensity: 1.1
      });
    });

    add(() => {
      const s = this._bake('glass', R.CRACKED_GLASS, { size: 512, normalStrength: 1.2, seed: 2.9 });
      this.m.glass = new THREE.MeshPhysicalMaterial({
        map: s.map, normalMap: s.normalMap, roughnessMap: s.ormMap, alphaMap: s.ormMap,
        transparent: true, roughness: 1, metalness: 0.05,
        transmission: 0.55, thickness: 0.04, ior: 1.48,
        envMap: this.env, envMapIntensity: 1.3, side: THREE.DoubleSide,
        depthWrite: false
      });
      this.m.glass.onBeforeCompile = (sh) => {
        sh.fragmentShader = sh.fragmentShader
          .replace('diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;', 'diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).a;');
      };
      this.m.glass.customProgramCacheKey = () => 'glass';

      const f = this._bake('foliage', R.FOLIAGE, { size: 256, normalStrength: 1.0, seed: 4.1 });
      this.m.foliage = new THREE.MeshStandardMaterial({
        map: f.map, normalMap: f.normalMap, roughnessMap: f.ormMap, alphaMap: f.ormMap,
        transparent: true, alphaTest: 0.35, side: THREE.DoubleSide,
        roughness: 1, metalness: 0, envMap: this.env, envMapIntensity: 0.4
      });
      this.m.foliage.onBeforeCompile = (sh) => {
        sh.fragmentShader = sh.fragmentShader
          .replace('diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;', 'diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).a;');
      };
      this.m.foliage.customProgramCacheKey = () => 'foliage';
    });

    /* -------------------------------------------------- emissive / misc ---- */
    add(() => {
      this.m.lampGlass = new THREE.MeshPhysicalMaterial({
        color: 0x2a2418, emissive: new THREE.Color(0xffc98a), emissiveIntensity: 6.5,
        roughness: 0.25, metalness: 0, transmission: 0.35, thickness: 0.03, ior: 1.45,
        envMap: this.env, envMapIntensity: 1.0
      });
      this.m.lampGlassOff = new THREE.MeshPhysicalMaterial({
        color: 0x151512, emissive: new THREE.Color(0x000000), roughness: 0.35, metalness: 0.1,
        transmission: 0.3, thickness: 0.03, envMap: this.env
      });
      this.m.neonRed = new THREE.MeshStandardMaterial({
        color: 0x220202, emissive: new THREE.Color(0xff2418), emissiveIntensity: 5.0, roughness: 0.3, metalness: 0
      });
      this.m.neonGreen = new THREE.MeshStandardMaterial({
        color: 0x021a06, emissive: new THREE.Color(0x35ff6a), emissiveIntensity: 3.5, roughness: 0.3, metalness: 0
      });
      this.m.eyeGlow = new THREE.MeshBasicMaterial({ color: 0xffd45a });
      this.m.muzzle = new THREE.MeshBasicMaterial({
        color: 0xfff0c0, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
      });
      this.m.tracer = new THREE.MeshBasicMaterial({
        color: 0xffd070, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
      });
      this.m.brass = new THREE.MeshStandardMaterial({
        color: 0xb08d32, roughness: 0.24, metalness: 1.0, envMap: this.env, envMapIntensity: 1.4
      });
      this.m.rubber = new THREE.MeshStandardMaterial({
        color: 0x0d0d0e, roughness: 0.85, metalness: 0.02, envMap: this.env, envMapIntensity: 0.35
      });
      this.m.chrome = new THREE.MeshStandardMaterial({
        color: 0xd8dade, roughness: 0.12, metalness: 1.0, envMap: this.env, envMapIntensity: 1.6
      });
    });

    return steps;
  }
}
