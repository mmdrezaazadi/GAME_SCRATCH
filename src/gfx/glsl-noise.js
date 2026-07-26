/**
 * GLSL noise / utility library injected into every procedural material shader.
 * All functions are tileable where it matters so baked textures wrap seamlessly.
 */
export const GLSL_NOISE = /* glsl */`
#define PI 3.14159265359

float hash11(float p){ p = fract(p*0.1031); p *= p+33.33; p *= p+p; return fract(p); }
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*0.1031); p3 += dot(p3, p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }
vec2  hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*vec3(0.1031,0.1030,0.0973)); p3 += dot(p3,p3.yzx+33.33); return fract((p3.xx+p3.yz)*p3.zy); }
vec3  hash33(vec3 p){ p = fract(p*vec3(0.1031,0.1030,0.0973)); p += dot(p,p.yxz+33.33); return fract((p.xxy+p.yxx)*p.zyx); }

// ---- value noise (tileable over 'per') ----
float vnoise(vec2 p, float per){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  vec2 w = vec2(per);
  vec2 a = mod(i, w), b = mod(i+vec2(1,0), w), c = mod(i+vec2(0,1), w), d = mod(i+vec2(1,1), w);
  float n00 = hash12(a), n10 = hash12(b), n01 = hash12(c), n11 = hash12(d);
  return mix(mix(n00,n10,u.x), mix(n01,n11,u.x), u.y);
}
float vnoise3(vec3 p){
  vec3 i = floor(p), f = fract(p);
  vec3 u = f*f*(3.0-2.0*f);
  float n000=hash33(i).x, n100=hash33(i+vec3(1,0,0)).x, n010=hash33(i+vec3(0,1,0)).x, n110=hash33(i+vec3(1,1,0)).x;
  float n001=hash33(i+vec3(0,0,1)).x, n101=hash33(i+vec3(1,0,1)).x, n011=hash33(i+vec3(0,1,1)).x, n111=hash33(i+vec3(1,1,1)).x;
  return mix(mix(mix(n000,n100,u.x),mix(n010,n110,u.x),u.y),
             mix(mix(n001,n101,u.x),mix(n011,n111,u.x),u.y), u.z);
}

float fbm(vec2 p, float per, int oct){
  float s=0.0, a=0.5, n=0.0, f=1.0;
  for(int i=0;i<8;i++){
    if(i>=oct) break;
    s += a*vnoise(p*f, per*f); n += a; a*=0.5; f*=2.0;
  }
  return s/n;
}
float fbm3(vec3 p, int oct){
  float s=0.0,a=0.5,n=0.0,f=1.0;
  for(int i=0;i<8;i++){ if(i>=oct) break; s += a*vnoise3(p*f); n+=a; a*=0.5; f*=2.0; }
  return s/n;
}
float ridged(vec2 p, float per, int oct){
  float s=0.0,a=0.5,n=0.0,f=1.0;
  for(int i=0;i<8;i++){
    if(i>=oct) break;
    float v = 1.0-abs(vnoise(p*f, per*f)*2.0-1.0);
    s += a*v*v; n+=a; a*=0.5; f*=2.0;
  }
  return s/n;
}
float turb(vec2 p, float per, int oct){
  float s=0.0,a=0.5,n=0.0,f=1.0;
  for(int i=0;i<8;i++){ if(i>=oct) break; s += a*abs(vnoise(p*f,per*f)*2.0-1.0); n+=a; a*=0.5; f*=2.0; }
  return s/n;
}

// worley — tileable on integer cell grid, uv in [0,1]
vec3 worley(vec2 uv, float cells){
  vec2 p = uv*cells;
  vec2 ip = floor(p), fp = fract(p);
  float f1=8.0, f2=8.0; vec2 idc=vec2(0);
  for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++){
    vec2 o = vec2(float(x), float(y));
    vec2 cid = mod(ip+o, vec2(cells));
    vec2 r = o + hash22(cid) - fp;
    float d = length(r);
    if(d<f1){ f2=f1; f1=d; idc=cid; } else if(d<f2) f2=d;
  }
  return vec3(f1, f2, hash12(idc));
}

vec2 warp(vec2 uv, float per, float amt){
  return uv + amt*vec2(fbm(uv*2.0+11.3, per, 4), fbm(uv*2.0+31.7, per, 4));
}

float box2(vec2 p, vec2 b){ vec2 d = abs(p)-b; return length(max(d,0.0)) + min(max(d.x,d.y),0.0); }
float sstep(float a, float b, float x){ return smoothstep(a,b,x); }
float lum(vec3 c){ return dot(c, vec3(0.2126,0.7152,0.0722)); }
vec3 srgb2lin(vec3 c){ return pow(c, vec3(2.2)); }

// stain / grime overlay driven by large scale noise & vertical gradient
float grime(vec2 uv, float per, float streak){
  float g = fbm(uv*3.0, per, 5);
  float s = fbm(vec2(uv.x*14.0, uv.y*1.2), per, 4);
  return clamp(g*0.7 + s*streak, 0.0, 1.0);
}
`;
