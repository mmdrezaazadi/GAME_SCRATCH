/**
 * TextureBaker — bakes fully procedural PBR texture sets on the GPU.
 *
 * Each "recipe" is a GLSL fragment that writes:
 *   layer 0 -> albedo (rgb) + AO baked into a (a = ambient occlusion)
 *   layer 1 -> normal map (rgb, tangent space) + height (a)
 *   layer 2 -> roughness (r) / metalness (g) / emissive mask (b) / opacity (a)
 *
 * Normals are derived analytically from the height function via central
 * differences at texel resolution, which gives crisp mortar lines, plank
 * grooves, rivet bumps etc. without any authored art assets.
 */
import * as THREE from 'three';
import { GLSL_NOISE } from './glsl-noise.js';

const VERT = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const FRAG_HEAD = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform float uTexel;
uniform int   uOut;      // 0 albedo+ao, 1 normal+height, 2 rough/metal/emis
uniform float uSeed;
uniform vec3  uTint;
uniform float uVar;
${GLSL_NOISE}
`;

const FRAG_TAIL = /* glsl */`
void main(){
  vec2 uv = vUv;
  if(uOut == 1){
    float e = uTexel;
    float hL = height(uv - vec2(e,0.0));
    float hR = height(uv + vec2(e,0.0));
    float hD = height(uv - vec2(0.0,e));
    float hU = height(uv + vec2(0.0,e));
    float h  = height(uv);
    // scale controls apparent depth
    float s = NORMAL_STRENGTH;
    vec3 n = normalize(vec3((hL-hR)*s, (hD-hU)*s, 2.0*e*8.0));
    gl_FragColor = vec4(n*0.5+0.5, h);
  } else if(uOut == 0){
    Surface s = surf(uv);
    gl_FragColor = vec4(s.albedo, s.ao);
  } else {
    Surface s = surf(uv);
    gl_FragColor = vec4(s.rough, s.metal, s.emis, s.alpha);
  }
}
`;

export const SURFACE_STRUCT = /* glsl */`
struct Surface { vec3 albedo; float rough; float metal; float emis; float ao; float alpha; };
Surface mkSurf(){ Surface s; s.albedo=vec3(0.5); s.rough=0.8; s.metal=0.0; s.emis=0.0; s.ao=1.0; s.alpha=1.0; return s; }
`;

export class TextureBaker {
  constructor(renderer) {
    this.renderer = renderer;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    this.scene.add(this.quad);
    this.cache = new Map();
  }

  /**
   * @param {string} name  cache key
   * @param {string} body  glsl providing `float height(vec2)` and `Surface surf(vec2)`
   * @param {object} o     { size, normalStrength, seed, tint, variance, repeat, aniso }
   * @returns {{map:THREE.Texture, normalMap:THREE.Texture, roughnessMap:THREE.Texture,
   *            aoMap:THREE.Texture, metalnessMap:THREE.Texture}}
   */
  bake(name, body, o = {}) {
    if (this.cache.has(name)) return this.cache.get(name);
    const size = o.size || 512;
    const ns = o.normalStrength ?? 1.0;

    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader:
        FRAG_HEAD +
        SURFACE_STRUCT +
        `#define NORMAL_STRENGTH ${ns.toFixed(3)}\n` +
        body + FRAG_TAIL,
      uniforms: {
        uTexel: { value: 1 / size },
        uOut: { value: 0 },
        uSeed: { value: o.seed ?? 0 },
        uTint: { value: new THREE.Vector3(...(o.tint || [1, 1, 1])) },
        uVar: { value: o.variance ?? 1 }
      },
      depthTest: false, depthWrite: false
    });
    this.quad.material = mat;

    const rt = (fl) => new THREE.WebGLRenderTarget(size, size, {
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      colorSpace: fl ? THREE.SRGBColorSpace : THREE.NoColorSpace,
      minFilter: THREE.LinearMipmapLinearFilter,
      magFilter: THREE.LinearFilter,
      generateMipmaps: true,
      wrapS: THREE.RepeatWrapping,
      wrapT: THREE.RepeatWrapping,
      depthBuffer: false,
      stencilBuffer: false
    });

    const prevTarget = this.renderer.getRenderTarget();
    const targets = [rt(true), rt(false), rt(false)];
    for (let i = 0; i < 3; i++) {
      mat.uniforms.uOut.value = i;
      this.renderer.setRenderTarget(targets[i]);
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);
    }
    this.renderer.setRenderTarget(prevTarget);

    const maxA = this.renderer.capabilities.getMaxAnisotropy();
    const rep = o.repeat || [1, 1];
    const fin = (t, srgb) => {
      const tex = t.texture;
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(rep[0], rep[1]);
      tex.anisotropy = Math.min(o.aniso ?? 8, maxA);
      tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.needsUpdate = true;
      // force mipmap chain generation for the RT texture
      this.renderer.initRenderTarget?.(t);
      this.renderer.properties?.get(tex);
      return tex;
    };

    const set = {
      map: fin(targets[0], true),
      normalMap: fin(targets[1], false),
      ormMap: fin(targets[2], false),
      _rts: targets,
      size
    };
    // three needs an explicit mip regeneration for RTs
    for (const t of targets) {
      this.renderer.setRenderTarget(t);
      this.renderer.setRenderTarget(prevTarget);
    }
    this.cache.set(name, set);
    mat.dispose();
    return set;
  }

  /** Build a MeshStandard/Physical material out of a baked set. */
  material(set, opts = {}) {
    const Ctor = opts.physical ? THREE.MeshPhysicalMaterial : THREE.MeshStandardMaterial;
    const m = new Ctor({
      map: set.map,
      normalMap: set.normalMap,
      roughnessMap: set.ormMap,
      metalnessMap: set.ormMap,
      aoMap: set.map,             // AO stored in albedo alpha; also used via shader patch
      roughness: 1.0,
      metalness: 1.0,
      normalScale: new THREE.Vector2(opts.normalScale ?? 1, opts.normalScale ?? 1),
      envMapIntensity: opts.envMapIntensity ?? 1.0,
      ...opts.extra
    });
    // roughnessMap uses .g? three reads roughness from .g and metalness from .b
    // our ORM packs rough in .r, metal in .g -> patch the shader accordingly
    m.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader
        .replace('float roughnessFactor = roughness;', `
          float roughnessFactor = roughness;
          #ifdef USE_ROUGHNESSMAP
            vec4 ormTex = texture2D( roughnessMap, vRoughnessMapUv );
            roughnessFactor *= ormTex.r;
          #endif
        `)
        .replace('roughnessFactor *= texelRoughness.g;', '')
        .replace('float metalnessFactor = metalness;', `
          float metalnessFactor = metalness;
          #ifdef USE_METALNESSMAP
            vec4 ormTex2 = texture2D( metalnessMap, vMetalnessMapUv );
            metalnessFactor *= ormTex2.g;
          #endif
        `)
        .replace('metalnessFactor *= texelMetalness.b;', '')
        // AO from albedo alpha
        .replace('#include <aomap_fragment>', `
          #ifdef USE_MAP
            float bakedAO = texture2D( map, vMapUv ).a;
            reflectedLight.indirectDiffuse *= bakedAO;
            reflectedLight.indirectSpecular *= mix(1.0, bakedAO, 0.6);
          #endif
        `);
      if (opts.onBeforeCompile) opts.onBeforeCompile(shader);
    };
    m.customProgramCacheKey = () => 'orm-' + (opts.key || '0');
    m.aoMap = null;
    return m;
  }
}
