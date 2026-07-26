/**
 * Procedural surface recipes.
 * Every entry supplies:
 *   float   height(vec2 uv)   -> 0..1 displacement used to derive normals
 *   Surface surf(vec2 uv)     -> albedo/rough/metal/emissive/ao
 * Nothing here is hand painted; all detail comes out of the noise library.
 */

/* ------------------------------------------------------------------ BRICK -- */
export const BRICK = /* glsl */`
const float ROWS = 12.0;
const float COLS = 6.0;
const float MORTAR = 0.045;

vec4 brickCell(vec2 uv){
  float row = floor(uv.y*ROWS);
  float off = mod(row, 2.0)*0.5;
  vec2 p = vec2(uv.x*COLS + off, uv.y*ROWS);
  vec2 ip = vec2(floor(p.x), row);
  vec2 fp = fract(p);
  return vec4(fp, ip);
}

float brickMask(vec2 fp, float wobble){
  vec2 d = abs(fp-0.5);
  float mx = sstep(0.5-MORTAR-wobble, 0.5-MORTAR*0.35, d.x);
  float my = sstep(0.5-MORTAR*1.9-wobble, 0.5-MORTAR*0.7, d.y);
  return 1.0-max(mx,my);
}

float height(vec2 uv){
  vec4 c = brickCell(uv);
  vec2 fp = c.xy; vec2 ip = c.zw;
  float r = hash12(ip+uSeed);
  // brick face is slightly domed + eroded; chipped corners
  float wob = 0.006*(vnoise(uv*180.0, 180.0)-0.5);
  float m = brickMask(fp, wob);
  float face = 0.72 + 0.10*r;
  // erosion pits on the face
  float pit = fbm(uv*90.0 + ip*7.0, 90.0, 4);
  face -= 0.10*pow(pit, 2.0);
  // chipped edges
  float edge = 1.0 - smoothstep(0.0, 0.14, min(min(fp.x,1.0-fp.x), min(fp.y,1.0-fp.y)));
  face -= 0.14*edge*step(0.55, hash12(ip*3.1+uSeed+5.0));
  // mortar: rough, recessed, with sand grain
  float mortar = 0.34 + 0.10*fbm(uv*140.0, 140.0, 4) + 0.05*hash12(uv*512.0);
  float h = mix(mortar, face, m);
  // broad wall settling / bulge
  h += 0.05*fbm(uv*3.0, 3.0, 3);
  return clamp(h, 0.0, 1.0);
}

Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec4 c = brickCell(uv);
  vec2 fp = c.xy, ip = c.zw;
  float r = hash12(ip+uSeed), r2 = hash12(ip*2.7+uSeed);
  float wob = 0.006*(vnoise(uv*180.0,180.0)-0.5);
  float m = brickMask(fp, wob);

  // per-brick clay colour variation (red / brown / burnt / pale)
  vec3 c1 = vec3(0.42,0.16,0.11);
  vec3 c2 = vec3(0.55,0.26,0.17);
  vec3 c3 = vec3(0.30,0.13,0.10);
  vec3 c4 = vec3(0.47,0.33,0.25);
  vec3 brick = mix(mix(c1,c2,r), mix(c3,c4,r2), sstep(0.45,0.85,r2));
  // fine clay speckle + fire-flash mottling
  float sp = fbm(uv*260.0+ip*13.0, 260.0, 4);
  brick *= 0.80 + 0.40*sp;
  brick *= 0.86 + 0.28*fbm(uv*24.0+ip, 24.0, 3);

  vec3 mortar = vec3(0.52,0.51,0.48)*(0.72+0.42*fbm(uv*150.0,150.0,4));
  mortar *= 0.9 + 0.2*hash12(uv*700.0);

  vec3 alb = mix(mortar, brick, m);

  // efflorescence (white salt bloom) low on the wall
  float eff = sstep(0.5,1.0, fbm(uv*8.0+3.3, 8.0, 4)) * (1.0-sstep(0.0,0.55,uv.y));
  alb = mix(alb, vec3(0.78,0.77,0.74), eff*0.5);
  // soot & water streaks
  float g = grime(uv, 1.0, 0.35);
  float streak = sstep(0.45,1.0, fbm(vec2(uv.x*26.0, uv.y*1.4)+7.7, 26.0, 4));
  alb *= mix(1.0, 0.42, g*0.65);
  alb = mix(alb, vec3(0.11,0.10,0.09), streak*0.35*(1.0-uv.y*0.4));
  // moss in the mortar near the bottom
  float moss = (1.0-m) * sstep(0.55,1.0, fbm(uv*18.0+21.0,18.0,4)) * (1.0-sstep(0.05,0.5,uv.y));
  alb = mix(alb, vec3(0.13,0.19,0.09), moss*0.7);

  s.albedo = srgb2lin(alb*uTint);
  s.rough = clamp(mix(0.94, 0.72, m) - 0.12*sp + 0.10*g, 0.35, 1.0);
  s.metal = 0.0;
  float ao = mix(0.42, 1.0, m);
  ao *= 1.0 - 0.35*(1.0-sstep(0.0,0.10, min(min(fp.x,1.0-fp.x),min(fp.y,1.0-fp.y))));
  s.ao = clamp(ao*(0.85+0.20*height(uv)), 0.25, 1.0);
  return s;
}
`;

/* --------------------------------------------------------------- CONCRETE -- */
export const CONCRETE = /* glsl */`
float height(vec2 uv){
  float base = 0.55 + 0.16*fbm(uv*4.0, 4.0, 5);
  // aggregate stones showing through
  vec3 w = worley(uv, 26.0);
  float agg = 1.0-sstep(0.0,0.30,w.x);
  base += 0.10*agg*step(0.62, w.z);
  // pitting / air bubbles
  vec3 w2 = worley(uv*1.0+vec2(3.1,7.7), 60.0);
  base -= 0.14*(1.0-sstep(0.0,0.13,w2.x))*step(0.72,w2.z);
  // form-work board lines (horizontal seams every 1/4)
  float seam = abs(fract(uv.y*4.0)-0.5);
  base -= 0.10*(1.0-sstep(0.0,0.035,seam));
  // hairline cracks
  float cr = ridged(uv*6.0+uSeed, 6.0, 5);
  float crack = sstep(0.86, 0.995, cr);
  base -= 0.20*crack;
  // spall (broken chunks) at large scale
  float sp = sstep(0.72,0.95, fbm(uv*3.0+13.0,3.0,4));
  base -= 0.16*sp;
  base += 0.02*hash12(uv*900.0);
  return clamp(base,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*5.0, 5.0, 5);
  vec3 col = mix(vec3(0.40,0.40,0.395), vec3(0.60,0.595,0.575), n);
  vec3 w = worley(uv, 26.0);
  float agg = (1.0-sstep(0.0,0.30,w.x))*step(0.62,w.z);
  col = mix(col, mix(vec3(0.34,0.32,0.30), vec3(0.55,0.50,0.44), w.z), agg*0.7);
  // rust bleed from rebar, dark water staining
  float rust = sstep(0.80,1.0, fbm(uv*7.0+41.0,7.0,4)) * sstep(0.25,0.9,fbm(vec2(uv.x*20.0,uv.y*1.1),20.0,3));
  col = mix(col, vec3(0.36,0.16,0.07), rust*0.75);
  float g = grime(uv,1.0,0.4);
  col *= mix(1.0, 0.5, g*0.7);
  float cr = sstep(0.86,0.995, ridged(uv*6.0+uSeed,6.0,5));
  col = mix(col, vec3(0.07,0.07,0.07), cr*0.8);
  float sp = sstep(0.72,0.95, fbm(uv*3.0+13.0,3.0,4));
  col = mix(col, vec3(0.30,0.28,0.26), sp*0.5);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.90 - 0.20*agg + 0.08*g - 0.05*n, 0.45, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.55+0.55*height(uv) - 0.35*cr, 0.2, 1.0);
  return s;
}
`;

/* ---------------------------------------------------------------- ASPHALT -- */
export const ASPHALT = /* glsl */`
float height(vec2 uv){
  vec3 w = worley(uv, 46.0);
  float gravel = 1.0-sstep(0.0,0.42,w.x);
  float h = 0.5 + 0.16*gravel*(0.4+0.6*w.z);
  h += 0.06*fbm(uv*30.0, 30.0, 4);
  // potholes
  float ph = sstep(0.78,1.0, fbm(uv*2.5+9.0, 2.5, 4));
  h -= 0.26*ph;
  // tar repair seams
  float sm = ridged(uv*3.0+55.0, 3.0, 4);
  h += 0.06*sstep(0.88,1.0,sm);
  h += 0.02*hash12(uv*1200.0);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec3 w = worley(uv, 46.0);
  float gravel = 1.0-sstep(0.0,0.42,w.x);
  vec3 col = vec3(0.055,0.055,0.058);
  col = mix(col, mix(vec3(0.16,0.15,0.14), vec3(0.34,0.32,0.30), w.z), gravel*0.85);
  col *= 0.75+0.5*fbm(uv*12.0,12.0,4);
  float ph = sstep(0.78,1.0, fbm(uv*2.5+9.0,2.5,4));
  col = mix(col, vec3(0.10,0.09,0.08), ph*0.7);
  // oil slick with iridescence
  float oil = sstep(0.80,1.0, fbm(uv*4.0+77.0,4.0,4));
  col = mix(col, vec3(0.02,0.02,0.03), oil*0.8);
  float sm = sstep(0.88,1.0, ridged(uv*3.0+55.0,3.0,4));
  col = mix(col, vec3(0.03,0.03,0.03), sm*0.8);
  // faded paint line
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.86 - 0.45*oil - 0.10*gravel, 0.15, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.5+0.55*height(uv), 0.2, 1.0);
  return s;
}
`;

/* --------------------------------------------------------------- DIRT/MUD -- */
export const DIRT = /* glsl */`
float height(vec2 uv){
  float h = 0.5+0.22*fbm(uv*5.0,5.0,6);
  vec3 w = worley(uv, 34.0);
  h += 0.10*(1.0-sstep(0.0,0.35,w.x))*step(0.55,w.z);   // pebbles
  // dried mud cracks
  vec3 wc = worley(warp(uv,1.0,0.05), 14.0);
  float crack = 1.0-sstep(0.0,0.05, wc.y-wc.x);
  h -= 0.16*crack;
  h += 0.03*hash12(uv*1400.0);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*6.0,6.0,6);
  vec3 col = mix(vec3(0.19,0.13,0.085), vec3(0.36,0.27,0.17), n);
  vec3 w = worley(uv,34.0);
  float peb = (1.0-sstep(0.0,0.35,w.x))*step(0.55,w.z);
  col = mix(col, mix(vec3(0.28,0.26,0.24),vec3(0.45,0.42,0.38),w.z), peb*0.8);
  // sparse dead grass tufts
  float gr = sstep(0.62,1.0, fbm(uv*11.0+31.0,11.0,5));
  col = mix(col, vec3(0.24,0.22,0.10), gr*0.55);
  vec3 wc = worley(warp(uv,1.0,0.05),14.0);
  float crack = 1.0-sstep(0.0,0.05, wc.y-wc.x);
  col = mix(col, vec3(0.09,0.06,0.04), crack*0.75);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.95-0.12*peb, 0.6, 1.0);
  s.ao = clamp(0.5+0.5*height(uv)-0.3*crack, 0.2, 1.0);
  return s;
}
`;

/* ------------------------------------------------------------------- WOOD -- */
export const WOOD = /* glsl */`
const float PLANKS = 5.0;
float height(vec2 uv){
  float py = uv.y*PLANKS;
  float pid = floor(py);
  float pf = fract(py);
  float xoff = hash11(pid+uSeed)*0.37;
  // grain rings, warped along the plank
  vec2 g = vec2(uv.x*3.0+xoff, pf*0.35);
  float rings = fract(fbm(vec2(g.x*2.0, g.y*26.0),26.0,5)*7.0 + turb(vec2(g.x*7.0,g.y*10.0),10.0,4)*3.0);
  float h = 0.62 + 0.09*rings;
  // deep grain gouges
  h -= 0.10*sstep(0.75,1.0, turb(vec2(uv.x*40.0, pf*4.0), 40.0, 4));
  // plank gap + bevel
  float gap = 1.0-sstep(0.0,0.05, min(pf,1.0-pf));
  h -= 0.30*gap;
  // knots
  vec3 kn = worley(vec2(uv.x*2.0, pf*0.5+pid), 5.0);
  float knot = 1.0-sstep(0.0,0.22,kn.x);
  h += 0.07*knot*step(0.7,kn.z);
  // nail heads near plank ends
  vec2 np = vec2(fract(uv.x*4.0)-0.5, pf-0.5);
  float nail = 1.0-sstep(0.02,0.035, length(np*vec2(1.0,1.0/PLANKS*PLANKS)));
  h += 0.05*nail;
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float py = uv.y*PLANKS, pid = floor(py), pf = fract(py);
  float xoff = hash11(pid+uSeed)*0.37;
  float tone = hash11(pid*3.7+uSeed);
  vec2 g = vec2(uv.x*3.0+xoff, pf*0.35);
  float rings = fract(fbm(vec2(g.x*2.0,g.y*26.0),26.0,5)*7.0 + turb(vec2(g.x*7.0,g.y*10.0),10.0,4)*3.0);
  vec3 light = mix(vec3(0.46,0.31,0.17), vec3(0.55,0.40,0.24), tone);
  vec3 dark  = mix(vec3(0.22,0.13,0.07), vec3(0.30,0.19,0.10), tone);
  vec3 col = mix(dark, light, rings);
  col *= 0.85+0.3*fbm(vec2(uv.x*60.0, pf*6.0), 60.0, 4);
  vec3 kn = worley(vec2(uv.x*2.0, pf*0.5+pid), 5.0);
  float knot = (1.0-sstep(0.0,0.22,kn.x))*step(0.7,kn.z);
  col = mix(col, vec3(0.12,0.07,0.03), knot*0.85);
  float gap = 1.0-sstep(0.0,0.05, min(pf,1.0-pf));
  col = mix(col, vec3(0.03,0.025,0.02), gap*0.9);
  // weathering: grey silvering + green mildew
  float weather = fbm(uv*4.0+17.0,4.0,4);
  col = mix(col, vec3(0.38,0.36,0.33), sstep(0.5,1.0,weather)*0.45);
  col = mix(col, vec3(0.14,0.17,0.09), sstep(0.72,1.0, fbm(uv*13.0+51.0,13.0,4))*0.35);
  // nails: dark metal
  vec2 np = vec2(fract(uv.x*4.0)-0.5, pf-0.5);
  float nail = 1.0-sstep(0.02,0.035, length(np));
  col = mix(col, vec3(0.22,0.20,0.19), nail);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.88-0.18*rings+0.06*weather, 0.42, 1.0);
  s.metal = nail*0.85;
  s.ao = clamp(0.55+0.5*height(uv)-0.4*gap, 0.15, 1.0);
  return s;
}
`;

/* ------------------------------------------------------------ RUSTY METAL -- */
export const RUST_METAL = /* glsl */`
float height(vec2 uv){
  // corrugated sheet + rivet grid + rust scabs
  float corr = 0.5+0.42*sin(uv.x*PI*2.0*8.0);
  float h = 0.45+0.14*corr;
  vec2 rp = fract(uv*vec2(8.0,6.0))-0.5;
  float rivet = 1.0-sstep(0.10,0.17,length(rp));
  h += 0.10*rivet;
  float rust = sstep(0.55,1.0, fbm(uv*9.0+uSeed,9.0,5));
  h += 0.09*rust*fbm(uv*70.0,70.0,4);
  h -= 0.20*sstep(0.90,1.0, fbm(uv*5.0+81.0,5.0,4));   // holes
  h += 0.02*hash12(uv*1000.0);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float rust = sstep(0.50,1.0, fbm(uv*9.0+uSeed,9.0,5));
  float rust2 = fbm(uv*40.0,40.0,4);
  vec3 steel = vec3(0.35,0.36,0.38)*(0.8+0.35*fbm(uv*55.0,55.0,3));
  vec3 rustc = mix(vec3(0.34,0.14,0.05), vec3(0.55,0.28,0.10), rust2);
  rustc = mix(rustc, vec3(0.22,0.09,0.03), sstep(0.6,1.0,rust2));
  // flaked paint patches (industrial green / blue)
  float paint = sstep(0.42,0.62, fbm(uv*3.0+123.0,3.0,4))*(1.0-rust);
  vec3 paintc = mix(vec3(0.10,0.22,0.18), vec3(0.13,0.20,0.30), hash11(uSeed));
  vec3 col = mix(steel, rustc, rust);
  col = mix(col, paintc*(0.7+0.5*fbm(uv*30.0,30.0,3)), paint*0.85);
  vec2 rp = fract(uv*vec2(8.0,6.0))-0.5;
  float rivet = 1.0-sstep(0.10,0.17,length(rp));
  col = mix(col, vec3(0.30,0.29,0.28), rivet*0.5);
  float hole = sstep(0.90,1.0, fbm(uv*5.0+81.0,5.0,4));
  col = mix(col, vec3(0.02,0.02,0.02), hole);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(mix(0.30, 0.95, rust)*(0.9+0.2*rust2) - 0.12*paint, 0.15, 1.0);
  s.metal = clamp((1.0-rust*0.85)*(1.0-paint*0.7), 0.02, 1.0);
  s.ao = clamp(0.55+0.5*height(uv)-0.5*hole, 0.15, 1.0);
  return s;
}
`;

/* -------------------------------------------------------- PAINTED / CLEAN -- */
export const PAINTED_METAL = /* glsl */`
float height(vec2 uv){
  float h = 0.55 + 0.03*fbm(uv*40.0,40.0,4);
  vec2 rp = fract(uv*vec2(6.0,6.0))-0.5;
  h += 0.08*(1.0-sstep(0.09,0.15,length(rp)));
  float scr = sstep(0.85,1.0, turb(vec2(uv.x*90.0,uv.y*4.0),90.0,3));
  h -= 0.05*scr;
  float chip = sstep(0.86,1.0, fbm(uv*14.0+uSeed,14.0,4));
  h -= 0.06*chip;
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float chip = sstep(0.86,1.0, fbm(uv*14.0+uSeed,14.0,4));
  vec3 col = uTint*(0.85+0.20*fbm(uv*20.0,20.0,4));
  col = mix(col, vec3(0.30,0.20,0.10), chip*0.8);
  float scr = sstep(0.85,1.0, turb(vec2(uv.x*90.0,uv.y*4.0),90.0,3));
  col = mix(col, vec3(0.45,0.44,0.42), scr*0.4);
  float g = grime(uv,1.0,0.25);
  col *= mix(1.0,0.65,g*0.5);
  s.albedo = srgb2lin(col);
  s.rough = clamp(0.42+0.35*chip+0.15*g-0.1*scr, 0.12, 1.0);
  s.metal = clamp(0.15+0.7*chip, 0.05, 0.95);
  s.ao = clamp(0.6+0.45*height(uv), 0.3, 1.0);
  return s;
}
`;

/* ------------------------------------------------------------------ FLESH -- */
export const ZOMBIE_SKIN = /* glsl */`
float height(vec2 uv){
  float h = 0.5 + 0.10*fbm(uv*24.0,24.0,5);
  // veins
  float v = ridged(uv*9.0+uSeed, 9.0, 5);
  h += 0.07*sstep(0.80,1.0,v);
  // pores / boils
  vec3 w = worley(uv, 40.0);
  h += 0.06*(1.0-sstep(0.0,0.25,w.x))*step(0.72,w.z);
  // torn wounds
  float wound = sstep(0.80,0.95, fbm(uv*5.0+43.0,5.0,4));
  h -= 0.22*wound;
  // skin wrinkle micro detail
  h += 0.04*turb(uv*70.0, 70.0, 4);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*10.0,10.0,5);
  // sickly grey-green necrotic base with mottled bruising
  vec3 base = mix(vec3(0.30,0.34,0.26), vec3(0.46,0.47,0.38), n);
  base = mix(base, vec3(0.24,0.22,0.26), sstep(0.55,1.0, fbm(uv*4.0+7.0,4.0,4))*0.6);
  // purple/blue bruises
  float br = sstep(0.62,1.0, fbm(uv*6.0+19.0,6.0,5));
  base = mix(base, vec3(0.20,0.12,0.22), br*0.65);
  // veins darker
  float v = sstep(0.78,1.0, ridged(uv*9.0+uSeed,9.0,5));
  base = mix(base, vec3(0.16,0.14,0.20), v*0.5);
  // exposed flesh wounds — wet crimson
  float wound = sstep(0.80,0.95, fbm(uv*5.0+43.0,5.0,4));
  vec3 raw = mix(vec3(0.38,0.05,0.04), vec3(0.20,0.02,0.02), fbm(uv*30.0,30.0,4));
  base = mix(base, raw, wound);
  // dried blood smears
  float dry = sstep(0.70,1.0, fbm(vec2(uv.x*8.0, uv.y*3.0)+61.0, 8.0, 4));
  base = mix(base, vec3(0.16,0.03,0.02), dry*0.5);
  // dirt
  base *= 0.85+0.25*fbm(uv*40.0,40.0,4);
  s.albedo = srgb2lin(base*uTint);
  s.rough = clamp(0.72 - 0.45*wound + 0.15*n, 0.16, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.6+0.45*height(uv)-0.3*wound, 0.2, 1.0);
  return s;
}
`;

/* ------------------------------------------------------------ CLOTH/RAGS -- */
export const RAGS = /* glsl */`
float height(vec2 uv){
  // woven weft/warp
  float w1 = 0.5+0.5*sin(uv.x*PI*2.0*90.0);
  float w2 = 0.5+0.5*sin(uv.y*PI*2.0*90.0);
  float weave = max(w1,w2)*0.5 + 0.25;
  float h = 0.42 + 0.10*weave;
  h += 0.10*fbm(uv*6.0,6.0,5);          // folds
  h -= 0.18*sstep(0.86,1.0, fbm(uv*4.0+uSeed,4.0,4)); // rips
  h += 0.03*hash12(uv*1500.0);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*7.0,7.0,5);
  vec3 col = mix(uTint*0.55, uTint*1.05, n);
  float w1 = 0.5+0.5*sin(uv.x*PI*2.0*90.0);
  float w2 = 0.5+0.5*sin(uv.y*PI*2.0*90.0);
  col *= 0.85+0.25*max(w1,w2);
  // grime + blood soak
  float g = grime(uv,1.0,0.5);
  col *= mix(1.0,0.45,g*0.8);
  float blood = sstep(0.62,1.0, fbm(vec2(uv.x*5.0,uv.y*2.2)+29.0,5.0,4));
  col = mix(col, vec3(0.13,0.02,0.015), blood*0.7);
  float rip = sstep(0.86,1.0, fbm(uv*4.0+uSeed,4.0,4));
  col = mix(col, vec3(0.02,0.02,0.02), rip*0.8);
  s.albedo = srgb2lin(col);
  s.rough = clamp(0.94-0.08*n+0.05*g, 0.6, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.55+0.5*height(uv), 0.2, 1.0);
  s.alpha = 1.0;
  return s;
}
`;

/* ------------------------------------------------------------------ BLOOD -- */
export const BLOOD_DECAL = /* glsl */`
float splat(vec2 uv){
  vec2 p = (uv-0.5)*2.0;
  float r = length(p);
  float a = atan(p.y,p.x);
  // lobed core
  float lobes = 0.52 + 0.16*fbm(vec2(cos(a),sin(a))*2.4+uSeed, 8.0, 5);
  float core = sstep(lobes, lobes-0.16, r);
  // tendrils / spatter arms
  float arms = fbm(vec2(a*3.4+uSeed, r*2.4), 8.0, 5);
  core = max(core, sstep(0.62,0.86, arms)*sstep(1.0,0.42,r));
  // satellite droplets
  float d = 0.0;
  for(int i=0;i<10;i++){
    float fi = float(i);
    vec2 o = (hash22(vec2(fi, uSeed))*2.0-1.0)*0.78;
    float rr = 0.035+0.055*hash11(fi*3.1+uSeed);
    d = max(d, sstep(rr, rr*0.45, length(p-o)));
  }
  core = max(core, d*0.9);
  return clamp(core, 0.0, 1.0);
}
float height(vec2 uv){
  float m = splat(uv);
  return 0.5+0.3*m*(0.7+0.3*fbm(uv*22.0,22.0,4));
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float m = splat(uv);
  float thick = m*(0.65+0.35*fbm(uv*14.0,14.0,4));
  vec3 wet = vec3(0.26,0.012,0.010);
  vec3 dark = vec3(0.075,0.006,0.006);
  vec3 col = mix(dark, wet, sstep(0.25,0.95,thick));
  s.albedo = srgb2lin(col);
  s.rough = mix(0.55, 0.13, sstep(0.2,0.9,thick));
  s.metal = 0.0;
  s.ao = 1.0-0.35*m;
  s.alpha = smoothstep(0.06, 0.34, m);
  return s;
}
`;

/* ------------------------------------------------------------------ TILE ---- */
export const TILE_FLOOR = /* glsl */`
const float T = 8.0;
float height(vec2 uv){
  vec2 p = uv*T;
  vec2 fp = fract(p); vec2 ip = floor(p);
  float grout = 1.0-sstep(0.0,0.045, min(min(fp.x,1.0-fp.x),min(fp.y,1.0-fp.y)));
  float h = 0.68 - 0.24*grout;
  h += 0.03*fbm(uv*60.0,60.0,4);
  // cracked / missing tiles
  float br = hash12(ip+uSeed);
  if(br>0.88) h -= 0.16*(0.5+0.5*fbm(uv*40.0,40.0,4));
  float cr = sstep(0.90,1.0, ridged(uv*10.0+7.0,10.0,4));
  h -= 0.10*cr;
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec2 p = uv*T; vec2 fp = fract(p), ip = floor(p);
  float grout = 1.0-sstep(0.0,0.045, min(min(fp.x,1.0-fp.x),min(fp.y,1.0-fp.y)));
  float tv = hash12(ip*1.7+uSeed);
  vec3 tile = mix(vec3(0.62,0.61,0.57), vec3(0.42,0.43,0.42), tv*0.7);
  tile *= 0.9+0.18*fbm(uv*45.0+ip,45.0,4);
  vec3 groutc = vec3(0.28,0.27,0.25)*(0.7+0.5*fbm(uv*90.0,90.0,4));
  vec3 col = mix(tile, groutc, grout);
  float br = hash12(ip+uSeed);
  if(br>0.88) col = mix(col, vec3(0.18,0.17,0.16), 0.7);
  float g = grime(uv,1.0,0.3);
  col *= mix(1.0,0.5,g*0.7);
  float cr = sstep(0.90,1.0, ridged(uv*10.0+7.0,10.0,4));
  col = mix(col, vec3(0.06,0.06,0.06), cr*0.8);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(mix(0.28,0.92,grout)+0.25*g, 0.12, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.5+0.55*height(uv), 0.2, 1.0);
  return s;
}
`;

/* ---------------------------------------------------------------- GUNMETAL - */
export const GUNMETAL = /* glsl */`
float height(vec2 uv){
  // machined micro-grooves + bead blasted finish + wear
  float groove = 0.5+0.5*sin(uv.y*PI*2.0*140.0);
  float h = 0.55+0.02*groove;
  h += 0.03*fbm(uv*120.0,120.0,4);
  h -= 0.05*sstep(0.88,1.0, turb(vec2(uv.x*60.0,uv.y*30.0),60.0,3));
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*80.0,80.0,4);
  float wear = sstep(0.70,1.0, fbm(uv*7.0+uSeed,7.0,4));
  vec3 col = mix(vec3(0.055,0.056,0.060), vec3(0.10,0.10,0.11), n);
  col = mix(col, vec3(0.42,0.43,0.45), wear*0.6);  // rubbed to bare steel
  float scratch = sstep(0.86,1.0, turb(vec2(uv.x*70.0,uv.y*20.0),70.0,3));
  col = mix(col, vec3(0.55,0.55,0.56), scratch*0.5);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.44-0.22*wear-0.15*scratch+0.10*n, 0.10, 0.9);
  s.metal = clamp(0.85+0.15*wear, 0.7, 1.0);
  s.ao = clamp(0.75+0.3*height(uv), 0.5, 1.0);
  return s;
}
`;

/* ---------------------------------------------------------------- PLASTIC -- */
export const POLYMER = /* glsl */`
float height(vec2 uv){
  // stippled grip texture
  vec3 w = worley(uv, 70.0);
  float stip = 1.0-sstep(0.0,0.40,w.x);
  float h = 0.5+0.10*stip;
  h += 0.02*fbm(uv*150.0,150.0,3);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec3 w = worley(uv,70.0);
  float stip = 1.0-sstep(0.0,0.40,w.x);
  vec3 col = uTint*(0.82+0.25*fbm(uv*40.0,40.0,4));
  col *= 0.9+0.2*stip;
  float g = grime(uv,1.0,0.2);
  col *= mix(1.0,0.7,g*0.4);
  s.albedo = srgb2lin(col);
  s.rough = clamp(0.62-0.15*stip+0.12*g, 0.25, 0.95);
  s.metal = 0.03;
  s.ao = clamp(0.7+0.35*height(uv), 0.5, 1.0);
  return s;
}
`;

/* ------------------------------------------------------------------ GLASS -- */
export const CRACKED_GLASS = /* glsl */`
float height(vec2 uv){
  vec3 w = worley(uv, 9.0);
  float crack = 1.0-sstep(0.0,0.045, w.y-w.x);
  float h = 0.62-0.22*crack;
  h += 0.02*fbm(uv*90.0,90.0,3);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec3 w = worley(uv,9.0);
  float crack = 1.0-sstep(0.0,0.05,w.y-w.x);
  vec3 col = mix(vec3(0.06,0.09,0.10), vec3(0.14,0.19,0.20), fbm(uv*5.0,5.0,4));
  col = mix(col, vec3(0.70,0.78,0.82), crack*0.8);
  float dust = grime(uv,1.0,0.4);
  col = mix(col, vec3(0.35,0.34,0.32), dust*0.35);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.10+0.6*crack+0.35*dust, 0.05, 1.0);
  s.metal = 0.0;
  s.ao = 1.0;
  s.alpha = clamp(0.28+0.6*crack+0.35*dust, 0.15, 1.0);
  return s;
}
`;

/* ------------------------------------------------------------------- SIGN -- */
export const HAZARD = /* glsl */`
float height(vec2 uv){
  float h = 0.55+0.03*fbm(uv*70.0,70.0,4);
  h -= 0.07*sstep(0.85,1.0, fbm(uv*10.0+uSeed,10.0,4));
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float st = step(0.5, fract((uv.x+uv.y)*5.0));
  vec3 col = mix(vec3(0.68,0.52,0.03), vec3(0.05,0.05,0.05), st);
  float chip = sstep(0.85,1.0, fbm(uv*10.0+uSeed,10.0,4));
  col = mix(col, vec3(0.28,0.14,0.06), chip*0.8);
  float g = grime(uv,1.0,0.4);
  col *= mix(1.0,0.55,g*0.7);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.5+0.4*chip+0.2*g, 0.2, 1.0);
  s.metal = 0.25;
  s.ao = clamp(0.7+0.3*height(uv), 0.4, 1.0);
  return s;
}
`;

/* ----------------------------------------------------------------- FABRIC -- */
export const SANDBAG = /* glsl */`
float height(vec2 uv){
  float w1 = 0.5+0.5*sin(uv.x*PI*2.0*60.0);
  float w2 = 0.5+0.5*sin(uv.y*PI*2.0*60.0);
  float h = 0.45+0.12*max(w1,w2)+0.14*fbm(uv*8.0,8.0,5);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*9.0,9.0,5);
  vec3 col = mix(vec3(0.28,0.25,0.17), vec3(0.44,0.40,0.28), n);
  float w1 = 0.5+0.5*sin(uv.x*PI*2.0*60.0);
  float w2 = 0.5+0.5*sin(uv.y*PI*2.0*60.0);
  col *= 0.85+0.25*max(w1,w2);
  float g = grime(uv,1.0,0.4);
  col *= mix(1.0,0.55,g*0.7);
  s.albedo = srgb2lin(col*uTint);
  s.rough = 0.96;
  s.ao = clamp(0.5+0.5*height(uv),0.2,1.0);
  return s;
}
`;

/* --------------------------------------------------------------- LEATHER --- */
export const LEATHER = /* glsl */`
float height(vec2 uv){
  vec3 w = worley(warp(uv,1.0,0.03), 22.0);
  float cell = sstep(0.0,0.10, w.y-w.x);
  float h = 0.45+0.16*cell;
  h += 0.06*fbm(uv*90.0,90.0,4);
  h -= 0.10*sstep(0.88,1.0, fbm(uv*6.0+uSeed,6.0,4));
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  vec3 w = worley(warp(uv,1.0,0.03), 22.0);
  float cell = sstep(0.0,0.10, w.y-w.x);
  vec3 col = uTint*(0.55+0.55*cell)*(0.85+0.25*fbm(uv*40.0,40.0,4));
  float scuff = sstep(0.80,1.0, fbm(uv*9.0+uSeed,9.0,4));
  col = mix(col, uTint*1.6, scuff*0.4);
  s.albedo = srgb2lin(col);
  s.rough = clamp(0.62-0.2*cell+0.2*scuff, 0.25, 1.0);
  s.metal = 0.0;
  s.ao = clamp(0.55+0.5*height(uv), 0.25, 1.0);
  return s;
}
`;

/* ------------------------------------------------------------------- BONE -- */
export const BONE = /* glsl */`
float height(vec2 uv){
  float h = 0.6+0.08*fbm(uv*30.0,30.0,5);
  h -= 0.10*sstep(0.85,1.0, ridged(uv*12.0+uSeed,12.0,4));
  vec3 w = worley(uv, 50.0);
  h -= 0.05*(1.0-sstep(0.0,0.2,w.x))*step(0.75,w.z);
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*20.0,20.0,5);
  vec3 col = mix(vec3(0.62,0.59,0.50), vec3(0.80,0.77,0.68), n);
  float stain = sstep(0.60,1.0, fbm(uv*7.0+13.0,7.0,4));
  col = mix(col, vec3(0.32,0.24,0.14), stain*0.6);
  float blood = sstep(0.80,1.0, fbm(uv*5.0+91.0,5.0,4));
  col = mix(col, vec3(0.20,0.03,0.02), blood*0.7);
  s.albedo = srgb2lin(col*uTint);
  s.rough = clamp(0.55+0.25*stain, 0.3, 0.95);
  s.metal = 0.0;
  s.ao = clamp(0.6+0.45*height(uv), 0.3, 1.0);
  return s;
}
`;

/* ------------------------------------------------------- GRASS / FOLIAGE -- */
export const FOLIAGE = /* glsl */`
float height(vec2 uv){
  float h = 0.5+0.2*fbm(uv*12.0,12.0,5);
  float vein = 1.0-sstep(0.0,0.02, abs(uv.x-0.5));
  h += 0.1*vein;
  return clamp(h,0.0,1.0);
}
Surface surf(vec2 uv){
  Surface s = mkSurf();
  float n = fbm(uv*10.0,10.0,5);
  vec3 col = mix(vec3(0.10,0.16,0.06), vec3(0.22,0.30,0.10), n);
  col = mix(col, vec3(0.26,0.22,0.08), sstep(0.6,1.0,fbm(uv*6.0+3.0,6.0,4))*0.6);
  float vein = 1.0-sstep(0.0,0.025, abs(uv.x-0.5));
  col = mix(col, vec3(0.30,0.34,0.16), vein*0.5);
  s.albedo = srgb2lin(col*uTint);
  s.rough = 0.85;
  s.metal = 0.0;
  s.ao = clamp(0.6+0.4*uv.y, 0.35, 1.0);
  // blade silhouette: taper to a point
  float w = 0.5*(1.0-uv.y*0.85);
  s.alpha = step(abs(uv.x-0.5), w);
  return s;
}
`;
