/**
 * Renderer — HDR pipeline with ACES tonemapping, PCF soft shadows, IBL from a
 * procedurally generated sky, and a post chain: SSAO -> Bloom -> custom grade
 * (film grain, chromatic aberration, vignette, LUT-style color grade) -> SMAA.
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uVignette: { value: 1.05 },
    uGrain: { value: 0.055 },
    uAberration: { value: 0.0016 },
    uExposure: { value: 1.0 },
    uSat: { value: 1.06 },
    uContrast: { value: 1.07 },
    uLift: { value: new THREE.Vector3(0.012, 0.014, 0.024) },
    uGain: { value: new THREE.Vector3(1.02, 0.99, 0.95) },
    uDamage: { value: 0.0 },
    uFlash: { value: 0.0 },
    uResolution: { value: new THREE.Vector2(1, 1) }
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `,
  fragmentShader: /* glsl */`
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform float uTime, uVignette, uGrain, uAberration, uExposure, uSat, uContrast, uDamage, uFlash;
    uniform vec3 uLift, uGain;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float hash(vec2 p){ p = fract(p*vec2(443.897,441.423)); p += dot(p,p+19.19); return fract(p.x*p.y); }

    void main(){
      vec2 uv = vUv;
      vec2 c = uv - 0.5;
      float r2 = dot(c,c);

      // barrel-ish chromatic aberration, stronger toward the edges
      float ab = uAberration * (1.0 + r2*3.0) * (1.0 + uDamage*2.5);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + c*ab).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - c*ab).b;

      col *= uExposure;

      // lift / gain / contrast / saturation grade
      col = col*uGain + uLift;
      col = (col - 0.5)*uContrast + 0.5;
      float l = dot(col, vec3(0.2126,0.7152,0.0722));
      col = mix(vec3(l), col, uSat);

      // damage: desaturate + red pulse at the edges
      if(uDamage > 0.001){
        float edge = smoothstep(0.05, 0.42, r2);
        col = mix(col, vec3(dot(col,vec3(0.33)))*vec3(1.25,0.55,0.5), uDamage*0.55);
        col += vec3(0.45,0.02,0.02)*uDamage*edge*(0.65+0.35*sin(uTime*7.0));
      }
      col += vec3(1.0,0.92,0.8)*uFlash;

      // film grain (animated, luminance weighted)
      float g = hash(uv*uResolution + fract(uTime)*vec2(37.0,17.0));
      col += (g-0.5)*uGrain*(1.2-l*0.6);

      // vignette
      float vig = 1.0 - uVignette*r2*(0.85 + 0.35*r2);
      col *= clamp(vig, 0.0, 1.0);

      // subtle scanline-free bloom-safe clamp
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `
};

/* ------------------------------------------------------- procedural sky ----- */
export function makeSkyMaterial() {
  return new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      uSunDir: { value: new THREE.Vector3(0.4, 0.28, -0.85).normalize() },
      uTime: { value: 0 },
      uHorizon: { value: new THREE.Color(0x4a3a30) },
      uZenith: { value: new THREE.Color(0x14202e) },
      uSunCol: { value: new THREE.Color(0xffb070) },
      uCloud: { value: 0.62 }
    },
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main(){
        vDir = normalize((modelMatrix*vec4(position,1.0)).xyz - cameraPosition);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: /* glsl */`
      precision highp float;
      varying vec3 vDir;
      uniform vec3 uSunDir, uHorizon, uZenith, uSunCol;
      uniform float uTime, uCloud;

      float h13(vec3 p){ p = fract(p*0.1031); p += dot(p,p.yzx+33.33); return fract((p.x+p.y)*p.z); }
      float n3(vec3 p){
        vec3 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        float a=h13(i), b=h13(i+vec3(1,0,0)), c=h13(i+vec3(0,1,0)), d=h13(i+vec3(1,1,0));
        float e=h13(i+vec3(0,0,1)), g=h13(i+vec3(1,0,1)), h=h13(i+vec3(0,1,1)), k=h13(i+vec3(1,1,1));
        return mix(mix(mix(a,b,f.x),mix(c,d,f.x),f.y), mix(mix(e,g,f.x),mix(h,k,f.x),f.y), f.z);
      }
      float fb(vec3 p){ float s=0.0,a=0.5; for(int i=0;i<6;i++){ s+=a*n3(p); a*=0.5; p*=2.02; } return s; }

      void main(){
        vec3 d = normalize(vDir);
        float up = clamp(d.y*0.5+0.5, 0.0, 1.0);
        float t = pow(max(d.y, 0.0), 0.45);
        vec3 sky = mix(uHorizon, uZenith, t);

        // heavy overcast cloud layer projected on the dome
        vec3 cp = d/max(abs(d.y)+0.12, 0.12);
        float cl = fb(cp*0.55 + vec3(uTime*0.006, 0.0, uTime*0.004));
        float cl2 = fb(cp*1.7 + vec3(uTime*0.012, 3.0, 0.0));
        float cover = smoothstep(0.42, 0.86, cl*0.75+cl2*0.35) * smoothstep(-0.05, 0.30, d.y) * uCloud;
        vec3 cloudLit = mix(vec3(0.16,0.16,0.19), vec3(0.62,0.55,0.50), pow(cl,1.6));
        sky = mix(sky, cloudLit, cover);

        // sun disc + broad glow through the murk
        float sd = max(dot(d, normalize(uSunDir)), 0.0);
        sky += uSunCol * pow(sd, 320.0) * 6.0 * (1.0-cover*0.85);
        sky += uSunCol * pow(sd, 6.0) * 0.30 * (1.0-cover*0.5);
        sky += uSunCol * pow(sd, 1.6) * 0.06;

        // ground haze band below the horizon
        sky = mix(sky, uHorizon*0.32, smoothstep(0.0, -0.28, d.y));

        // faint stars where the cloud breaks
        float st = step(0.9975, h13(floor(d*420.0)));
        sky += vec3(st)*0.5*smoothstep(0.25,0.7,d.y)*(1.0-cover);

        gl_FragColor = vec4(sky, 1.0);
      }
    `
  });
}

export class Renderer {
  constructor(canvas) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
      alpha: false,
      preserveDrawingBuffer: false
    });
    const r = this.renderer;
    // Cap pixel ratio aggressively — rendering at DPR 2 on a 4K screen is the #1
    // FPS killer. 1.25 is visually indistinguishable from 1.5 on most panels but
    // cuts fill rate ~40%.
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    r.setSize(window.innerWidth, window.innerHeight);
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    r.shadowMap.autoUpdate = true;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.0;
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.info.autoReset = true;

    this.clock = new THREE.Clock();
    this.quality = 'high';
    this.composerEnabled = true;

    // Adaptive resolution scaler: watches rolling FPS and bumps the render scale
    // down (then back up when headroom returns) so the game stays smooth on
    // weaker GPUs without the player touching settings.
    this.renderScale = 1.0;
    this.fpsRoll = 60;
    this.scaleHold = 0;
  }

  setup(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    const w = window.innerWidth, h = window.innerHeight;

    // Half-float HDR target. Using the *full* window size here; the adaptive
    // scaler below adjusts the renderer's drawing buffer size instead, which is
    // cheaper than resizing every EffectComposer pass on the fly.
    const target = new THREE.WebGLRenderTarget(w, h, {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      colorSpace: THREE.NoColorSpace,
      samples: 0
    });
    this.composer = new EffectComposer(this.renderer, target);
    this.composer.setSize(w, h);

    this.renderPass = new RenderPass(scene, camera);
    this.composer.addPass(this.renderPass);

    // Ambient occlusion — tuned for cost, not maximal quality. The kernel
    // radius and blur radius are the expensive knobs; kept moderate so the pass
    // is ~1.2ms on mid GPUs. Disabled entirely on low quality.
    this.sao = new SAOPass(scene, camera);
    this.sao.params.saoBias = 0.35;
    this.sao.params.saoIntensity = 0.028;
    this.sao.params.saoScale = 1.1;
    this.sao.params.saoKernelRadius = 18;
    this.sao.params.saoMinResolution = 0;
    this.sao.params.saoBlur = true;
    this.sao.params.saoBlurRadius = 6;
    this.sao.params.saoBlurStdDev = 3;
    this.sao.params.saoBlurDepthCutoff = 0.012;
    this.composer.addPass(this.sao);

    // bloom on bright emissives (muzzle flash, lights, embers)
    this.bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.55, 0.55, 0.82);
    this.composer.addPass(this.bloom);

    this.grade = new ShaderPass(GradeShader);
    this.grade.uniforms.uResolution.value.set(w, h);
    this.composer.addPass(this.grade);

    this.output = new OutputPass();
    this.composer.addPass(this.output);

    this.smaa = new SMAAPass(w, h);
    this.composer.addPass(this.smaa);

    // drop the shadow map from the default 2048 (huge on integrated GPUs) and
    // tighten the frustum so what remains is crisp where it matters.
    this.applyShadowSettings();

    window.addEventListener('resize', () => this.resize());
  }

  applyShadowSettings() {
    const q = this.quality;
    const r = this.renderer;
    if (!r.shadowMap.enabled) return;
    // Walk the scene lights once and configure the directional sun shadow.
    const map = q === 'low' ? 1024 : q === 'medium' ? 1536 : 2048;
    r.shadowMap.needsUpdate = true;
    const scene = this.scene;
    if (scene) {
      scene.traverse((o) => {
        if (o.isDirectionalLight && o.shadow) {
          o.shadow.mapSize.set(map, map);
          if (o.shadow.map) { o.shadow.map.dispose(); o.shadow.map = null; }
          // tighten the ortho frustum so the reduced map covers a smaller area
          // (=> higher texel density, not lower quality)
          const S = q === 'low' ? 42 : q === 'medium' ? 52 : 60;
          o.shadow.camera.left = -S; o.shadow.camera.right = S;
          o.shadow.camera.top = S; o.shadow.camera.bottom = -S;
          o.shadow.camera.updateProjectionMatrix();
        }
      });
    }
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    // Apply the adaptive render scale: the CSS size stays at the full window,
    // but the drawing buffer is scaled so the GPU shades fewer pixels when the
    // scaler has backed off. This is the single most effective perf lever.
    const scale = this.renderScale || 1;
    const rw = Math.max(640, Math.round(w * scale));
    const rh = Math.max(360, Math.round(h * scale));
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(rw, rh, false);
    this.renderer.domElement.style.width = w + 'px';
    this.renderer.domElement.style.height = h + 'px';
    if (this.camera) { this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }
    this.composer?.setSize(rw, rh);
    this.grade && this.grade.uniforms.uResolution.value.set(rw, rh);
    this.smaa?.setSize(rw, rh);
    if (this.bloom) this.bloom.setSize(rw, rh);
  }

  setQuality(q) {
    this.quality = q;
    const r = this.renderer;
    if (q === 'low') {
      this.renderScale = Math.min(this.renderScale, 0.75);
      r.shadowMap.enabled = true;
      if (this.sao) this.sao.enabled = false;
      if (this.smaa) this.smaa.enabled = false;
      if (this.bloom) { this.bloom.enabled = true; this.bloom.strength = 0.35; }
    } else if (q === 'medium') {
      this.renderScale = Math.min(this.renderScale || 1, 0.9);
      r.shadowMap.enabled = true;
      if (this.sao) this.sao.enabled = false;
      if (this.smaa) this.smaa.enabled = true;
      if (this.bloom) { this.bloom.enabled = true; this.bloom.strength = 0.5; }
    } else {
      this.renderScale = Math.min(this.renderScale || 1, 1.0);
      r.shadowMap.enabled = true;
      if (this.sao) this.sao.enabled = true;
      if (this.smaa) this.smaa.enabled = true;
      if (this.bloom) { this.bloom.enabled = true; this.bloom.strength = 0.55; }
    }
    this.applyShadowSettings();
    this.resize();
  }

  /**
   * Adaptive resolution scaler. Tracks a rolling FPS and nudges the render
   * scale down when the frame rate is consistently below target, back up when
   * there is headroom. This is what keeps the game smooth on weaker GPUs
   * without the player ever touching the settings menu.
   */
  updateAdaptiveScale(dt) {
    if (dt <= 0 || !isFinite(dt)) return;
    const inst = 1 / Math.max(0.001, dt);
    // exponential moving average of FPS
    this.fpsRoll = this.fpsRoll * 0.92 + inst * 0.08;
    if (this.scaleHold > 0) { this.scaleHold -= dt; return; }
    const q = this.quality;
    if (q === 'low') return;                 // low is already floor-scaled
    const ceiling = q === 'medium' ? 0.9 : 1.0;
    const floor = 0.6;
    if (this.fpsRoll < 48 && this.renderScale > floor) {
      this.renderScale = Math.max(floor, this.renderScale - 0.05);
      this.scaleHold = 1.2;
      this.resize();
    } else if (this.fpsRoll > 62 && this.renderScale < ceiling) {
      this.renderScale = Math.min(ceiling, this.renderScale + 0.04);
      this.scaleHold = 2.0;
      this.resize();
    }
  }

  render(dt, t) {
    if (this.grade) this.grade.uniforms.uTime.value = t;
    this.updateAdaptiveScale(dt);
    if (this.composerEnabled && this.composer) this.composer.render(dt);
    else this.renderer.render(this.scene, this.camera);
  }
}
