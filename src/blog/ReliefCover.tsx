import { useEffect, useRef } from 'react';

/*
 * 浮雕金属扫光砖（自研 WebGL 双 pass 实现）。
 * 算法与参数参照 docs/athens-design-language.md（§6.1），自研重写：
 *   Pass 1 (smudge)：ping-pong framebuffer 累积「涂抹遮罩」——鼠标轨迹绘制笔刷，
 *                    受光标速度/按住调制，带噪声逐渐溶解（擦哪亮哪 + 留痕消退）。
 *   Pass 2 (composite)：从底图亮度实时生成法线（自动烘焙，无需 normal map 资产），
 *                       鼠标作光源做 Blinn-Phong + metallic 混合，仅在涂抹遮罩区域显现金属光。
 * 参数沿用原站：metallic 0.85 / specular 1.1 / lightRadius 1.5 / lightIntensity 0.4 /
 *               ambient 0.06 / cursorAmbient 0.19 / brushSoftness 0.13 / dissolve 0.7 / shrink 0.58。
 * 指针指数缓动 1-exp(-k·dt)。底图缺失时用程序生成纹理兜底。
 */

type Props = {
  src?: string;
  label?: string;
  className?: string;
  seed?: number;
};

const SMUDGE_SCALE = 0.72;

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const SMUDGE_FRAG = `
precision highp float;
uniform sampler2D uPrev;
uniform vec2 uCursor;
uniform vec2 uPrevCursor;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uBrush;
uniform float uSoft;
uniform float uSpeed;
uniform float uDt;
uniform float uHolding;
uniform float uHover;
uniform float uShrink;
uniform float uDissolve;
uniform float uTime;
varying vec2 vUv;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float segDist(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float l = max(dot(ab, ab), 1e-5);
  float t = clamp(dot(p - a, ab) / l, 0.0, 1.0);
  return length(p - (a + ab * t));
}
void main() {
  float c = texture2D(uPrev, vUv).r;
  float nb = (texture2D(uPrev, vUv + vec2(uTexel.x, 0.0)).r +
              texture2D(uPrev, vUv - vec2(uTexel.x, 0.0)).r +
              texture2D(uPrev, vUv + vec2(0.0, uTexel.y)).r +
              texture2D(uPrev, vUv - vec2(0.0, uTexel.y)).r) * 0.25;
  float prev = mix(c, nb, 0.08);
  float dn = noise(vUv * 8.0 + vec2(uTime * 0.22, -uTime * 0.17));
  prev = max(prev - uShrink * uDt * mix(0.12, 0.28, dn), 0.0);
  prev *= 1.0 - uDissolve * uDt * mix(0.006, 0.028, dn);

  vec2 asp = vec2(uAspect, 1.0);
  float d = segDist(vUv * asp, uPrevCursor * asp, uCursor * asp);
  float inner = uBrush * max(0.02, 1.0 - uSoft);
  float brush = 1.0 - smoothstep(inner, uBrush, d);
  float speedPaint = smoothstep(0.015, 0.52, uSpeed);
  float holdPaint = uHolding * 0.42;
  float grain = noise(vUv * 13.5 + vec2(uTime * 1.7, uTime * -1.1));
  float paint = brush * max(speedPaint, holdPaint) * uHover * mix(0.7, 1.0, grain);

  float s = clamp(max(prev, paint), 0.0, 1.0);
  gl_FragColor = vec4(s, 0.0, 0.0, 1.0);
}
`;

const COMPOSITE_FRAG = `
precision highp float;
uniform sampler2D uBase;
uniform sampler2D uSmudge;
uniform vec2 uTexel;
uniform vec2 uCursor;
uniform float uAspect;
uniform float uMetallic;
uniform float uSpecular;
uniform float uLightRadius;
uniform float uLightIntensity;
uniform float uAmbient;
uniform float uCursorAmbient;
varying vec2 vUv;

float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
void main() {
  vec3 base = texture2D(uBase, vUv).rgb;
  float l = luma(texture2D(uBase, vUv - vec2(uTexel.x, 0.0)).rgb);
  float r = luma(texture2D(uBase, vUv + vec2(uTexel.x, 0.0)).rgb);
  float dd = luma(texture2D(uBase, vUv - vec2(0.0, uTexel.y)).rgb);
  float uu = luma(texture2D(uBase, vUv + vec2(0.0, uTexel.y)).rgb);
  vec3 N = normalize(vec3((l - r) * 2.2, (dd - uu) * 2.2, 1.0));

  float sm = texture2D(uSmudge, vUv).r;
  float reveal = smoothstep(0.02, 0.82, sm) * 0.88;

  vec2 asp = vec2(uAspect, 1.0);
  vec2 ld = (uCursor - vUv) * asp;
  float dist = length(ld);
  float atten = 1.0 - smoothstep(0.0, uLightRadius, dist);
  vec3 L = normalize(vec3(ld, 0.42));
  vec3 V = vec3(0.0, 0.0, 1.0);
  vec3 H = normalize(L + V);
  float diff = max(dot(N, L), 0.0);
  float specM = pow(max(dot(N, H), 0.0), 72.0);
  float specMetal = pow(max(dot(N, H), 0.0), 30.0);
  vec3 lc = vec3(1.0);
  float amb = uAmbient + uCursorAmbient * atten;

  vec3 matte = base * (amb + diff * uLightIntensity * atten) + lc * specM * uSpecular * uLightIntensity * 0.32 * atten;
  vec3 metalHi = mix(lc, base, 0.75) * specMetal * uLightIntensity * 2.0 * atten;
  vec3 metal = base * (amb + diff * uLightIntensity * 0.25 * atten) + metalHi;
  vec3 lit = clamp(mix(matte, metal, uMetallic), 0.0, 1.0);
  lit = max(lit, base * 0.62);

  vec3 color = mix(base, lit, reveal);
  gl_FragColor = vec4(color, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.warn('[relief]', gl.getShaderInfoLog(sh));
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}
function link(gl: WebGLRenderingContext, vs: WebGLShader, fs: WebGLShader) {
  const p = gl.createProgram()!;
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.warn('[relief]', gl.getProgramInfoLog(p));
    return null;
  }
  return p;
}

type RT = { fb: WebGLFramebuffer; tex: WebGLTexture; w: number; h: number };
function createRT(gl: WebGLRenderingContext, w: number, h: number): RT {
  const tex = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  const fb = gl.createFramebuffer()!;
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  return { fb, tex, w, h };
}
function clearRT(gl: WebGLRenderingContext, rt: RT) {
  gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb);
  gl.viewport(0, 0, rt.w, rt.h);
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

/** 程序生成的浮雕兜底纹理 */
function generateTexture(seed: number): HTMLCanvasElement {
  const size = 256;
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d')!;
  const base = 196 + Math.floor(seed * 24);
  ctx.fillStyle = `rgb(${base},${base - 6},${base - 14})`;
  ctx.fillRect(0, 0, size, size);
  const img = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 46;
    img.data[i] = Math.max(0, Math.min(255, img.data[i] + n));
    img.data[i + 1] = Math.max(0, Math.min(255, img.data[i + 1] + n));
    img.data[i + 2] = Math.max(0, Math.min(255, img.data[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);
  ctx.strokeStyle = 'rgba(80,80,80,0.18)';
  ctx.lineWidth = 2;
  for (let y = 16; y < size; y += 28) {
    ctx.beginPath();
    ctx.moveTo(0, y + Math.sin(seed * 10 + y) * 3);
    ctx.lineTo(size, y + Math.cos(seed * 8 + y) * 3);
    ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.14)';
  for (let x = 24; x < size; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 6, size);
    ctx.stroke();
  }
  return cv;
}

export function ReliefCover({ src, label, className = '', seed = 0.4 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false, preserveDrawingBuffer: false });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const smFs = compile(gl, gl.FRAGMENT_SHADER, SMUDGE_FRAG);
    const coFs = compile(gl, gl.FRAGMENT_SHADER, COMPOSITE_FRAG);
    if (!vs || !smFs || !coFs) return;
    const smProg = link(gl, vs, smFs);
    const coProg = link(gl, vs, coFs);
    if (!smProg || !coProg) return;

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const bindQuad = (prog: WebGLProgram) => {
      const a = gl.getAttribLocation(prog, 'aPos');
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.enableVertexAttribArray(a);
      gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    };

    const smU = {
      prev: gl.getUniformLocation(smProg, 'uPrev'),
      cursor: gl.getUniformLocation(smProg, 'uCursor'),
      prevCursor: gl.getUniformLocation(smProg, 'uPrevCursor'),
      texel: gl.getUniformLocation(smProg, 'uTexel'),
      aspect: gl.getUniformLocation(smProg, 'uAspect'),
      brush: gl.getUniformLocation(smProg, 'uBrush'),
      soft: gl.getUniformLocation(smProg, 'uSoft'),
      speed: gl.getUniformLocation(smProg, 'uSpeed'),
      dt: gl.getUniformLocation(smProg, 'uDt'),
      holding: gl.getUniformLocation(smProg, 'uHolding'),
      hover: gl.getUniformLocation(smProg, 'uHover'),
      shrink: gl.getUniformLocation(smProg, 'uShrink'),
      dissolve: gl.getUniformLocation(smProg, 'uDissolve'),
      time: gl.getUniformLocation(smProg, 'uTime'),
    };
    const coU = {
      base: gl.getUniformLocation(coProg, 'uBase'),
      smudge: gl.getUniformLocation(coProg, 'uSmudge'),
      texel: gl.getUniformLocation(coProg, 'uTexel'),
      cursor: gl.getUniformLocation(coProg, 'uCursor'),
      aspect: gl.getUniformLocation(coProg, 'uAspect'),
      metallic: gl.getUniformLocation(coProg, 'uMetallic'),
      specular: gl.getUniformLocation(coProg, 'uSpecular'),
      lightRadius: gl.getUniformLocation(coProg, 'uLightRadius'),
      lightIntensity: gl.getUniformLocation(coProg, 'uLightIntensity'),
      ambient: gl.getUniformLocation(coProg, 'uAmbient'),
      cursorAmbient: gl.getUniformLocation(coProg, 'uCursorAmbient'),
    };

    // 底图纹理
    const base = gl.createTexture()!;
    let baseW = 256;
    let baseH = 256;
    const bindBase = (source: TexImageSource, w: number, h: number) => {
      baseW = w; baseH = h;
      gl.bindTexture(gl.TEXTURE_2D, base);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    };
    bindBase(generateTexture(seed), 256, 256);
    if (src) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => bindBase(img, img.naturalWidth, img.naturalHeight);
      img.onerror = () => {};
      img.src = src;
    }

    // ping-pong 涂抹目标
    let readRT: RT | null = null;
    let writeRT: RT | null = null;
    let smW = 1;
    let smH = 1;
    let blank = true;

    const ensureTargets = () => {
      const w = Math.max(1, Math.floor(canvas.width * SMUDGE_SCALE));
      const h = Math.max(1, Math.floor(canvas.height * SMUDGE_SCALE));
      if (readRT && writeRT && smW === w && smH === h) return;
      if (readRT) { gl.deleteFramebuffer(readRT.fb); gl.deleteTexture(readRT.tex); }
      if (writeRT) { gl.deleteFramebuffer(writeRT.fb); gl.deleteTexture(writeRT.tex); }
      smW = w; smH = h;
      readRT = createRT(gl, w, h);
      writeRT = createRT(gl, w, h);
      clearRT(gl, readRT);
      clearRT(gl, writeRT);
      blank = true;
    };

    // 指针状态
    const p = {
      tx: 0.5, ty: 0.55, cx: 0.5, cy: 0.55, px: 0.5, py: 0.55,
      th: 0, h: 0, tspeed: 0, speed: 0, holding: 0,
      lastX: 0.5, lastY: 0.55, lastT: 0,
    };
    let smudgeLife = 0;
    let raf = 0;
    let last = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w; canvas.height = h;
      }
    };

    const frame = (t: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (t - last) / 1000));
      last = t;
      // 指针缓动
      const ease = 1 - Math.exp(-15 * dt);
      const hEase = 1 - Math.exp(-12 * dt);
      p.px = p.cx; p.py = p.cy;
      p.cx += (p.tx - p.cx) * ease;
      p.cy += (p.ty - p.cy) * ease;
      p.h += (p.th - p.h) * hEase;
      p.speed += (p.tspeed - p.speed) * hEase;
      p.tspeed *= Math.exp(-8 * dt);
      if (p.th === 0 && p.h < 0.001) p.h = 0;
      if (p.speed < 0.001) p.speed = 0;

      resize();
      ensureTargets();

      const painting = p.h > 0.002 || p.th > 0 || p.speed > 0.002 || p.holding > 0;
      if (painting) smudgeLife = 1;
      else smudgeLife = Math.max(0, smudgeLife - dt / 8.7);

      // Pass 1: smudge ping-pong
      if ((painting || smudgeLife > 0) && readRT && writeRT) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, writeRT.fb);
        gl.viewport(0, 0, writeRT.w, writeRT.h);
        gl.useProgram(smProg);
        bindQuad(smProg);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, readRT.tex);
        gl.uniform1i(smU.prev, 0);
        gl.uniform2f(smU.cursor, p.cx, p.cy);
        gl.uniform2f(smU.prevCursor, p.px, p.py);
        gl.uniform2f(smU.texel, 1 / writeRT.w, 1 / writeRT.h);
        gl.uniform1f(smU.aspect, writeRT.w / Math.max(writeRT.h, 1));
        gl.uniform1f(smU.brush, 0.2);
        gl.uniform1f(smU.soft, 0.13);
        gl.uniform1f(smU.speed, p.speed);
        gl.uniform1f(smU.dt, dt);
        gl.uniform1f(smU.holding, p.holding);
        gl.uniform1f(smU.hover, p.h);
        gl.uniform1f(smU.shrink, 0.58);
        gl.uniform1f(smU.dissolve, 0.7);
        gl.uniform1f(smU.time, t / 1000);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        const tmp = readRT; readRT = writeRT; writeRT = tmp;
        blank = false;
      } else if (!blank && readRT && writeRT) {
        clearRT(gl, readRT);
        clearRT(gl, writeRT);
        blank = true;
      }

      // Pass 2: composite to screen
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(coProg);
      bindQuad(coProg);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, base);
      gl.uniform1i(coU.base, 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, readRT ? readRT.tex : base);
      gl.uniform1i(coU.smudge, 1);
      gl.uniform2f(coU.texel, 1 / baseW, 1 / baseH);
      gl.uniform2f(coU.cursor, p.cx, p.cy);
      gl.uniform1f(coU.aspect, canvas.width / Math.max(canvas.height, 1));
      gl.uniform1f(coU.metallic, 0.85);
      gl.uniform1f(coU.specular, 1.1);
      gl.uniform1f(coU.lightRadius, 1.5);
      gl.uniform1f(coU.lightIntensity, 0.4);
      gl.uniform1f(coU.ambient, 0.06);
      gl.uniform1f(coU.cursorAmbient, 0.19);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (painting || smudgeLife > 0) raf = requestAnimationFrame(frame);
      else raf = 0;
    };
    const kick = () => {
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
    };
    kick(); // 首帧

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      const y = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
      const wy = 1 - y;
      const now = performance.now();
      if (p.lastT > 0) {
        const el = Math.max((now - p.lastT) / 1000, 1 / 120);
        const dx = x - p.lastX, dy = wy - p.lastY;
        p.tspeed = Math.min(4, Math.hypot(dx, dy) / el);
      }
      p.lastX = x; p.lastY = wy; p.lastT = now;
      p.tx = x; p.ty = wy; p.th = 1;
      canvas.style.setProperty('--px', `${((x - 0.5) * 9).toFixed(2)}px`);
      canvas.style.setProperty('--py', `${((y - 0.5) * 9).toFixed(2)}px`);
      kick();
    };
    const onLeave = () => {
      p.th = 0; p.tspeed = 0; p.holding = 0; p.lastT = 0;
      canvas.style.setProperty('--px', '0px');
      canvas.style.setProperty('--py', '0px');
      kick();
    };
    const onDown = (e: PointerEvent) => { p.holding = 1; onMove(e); };
    const onUp = () => { p.holding = 0; };

    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerenter', onMove);
    canvas.addEventListener('pointerleave', onLeave);
    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointerup', onUp);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerenter', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointerup', onUp);
      if (readRT) { gl.deleteFramebuffer(readRT.fb); gl.deleteTexture(readRT.tex); }
      if (writeRT) { gl.deleteFramebuffer(writeRT.fb); gl.deleteTexture(writeRT.tex); }
      gl.deleteTexture(base);
      gl.deleteBuffer(buf);
      gl.deleteProgram(smProg);
      gl.deleteProgram(coProg);
      gl.deleteShader(vs);
      gl.deleteShader(smFs);
      gl.deleteShader(coFs);
    };
  }, [src, seed]);

  return (
    <section className={`blog-cell relief-cell ${className}`} aria-label={label || 'relief visual'}>
      <canvas ref={canvasRef} className="relief-canvas" aria-hidden="true" />
      {label && <span className="relief-label">{label}</span>}
    </section>
  );
}
