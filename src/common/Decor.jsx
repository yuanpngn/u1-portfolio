import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';
import { useIsMobile } from './useIsMobile';
import styles from './Decor.module.css';

const ASCII_RAMP = ' .:-=+*#%@';

function AsciiField() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const cell = 18;
    let cols = 0;
    let rows = 0;
    let phase = new Float32Array(0);
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / cell) + 1;
      rows = Math.ceil(canvas.height / cell) + 1;
      phase = new Float32Array(cols * rows);
      for (let i = 0; i < phase.length; i++) phase[i] = Math.random() * Math.PI * 2;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    ctx.font = `${cell - 3}px "SF Mono", Menlo, monospace`;
    ctx.textBaseline = 'top';

    const frameInterval = 1000 / 24;
    let last = 0;
    let rafId;

    const draw = (t) => {
      rafId = requestAnimationFrame(draw);
      if (t - last < frameInterval) return;
      last = t;

      const time = t * 0.0007;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const base = themeRef.current === 'dark' ? '245,241,232' : '17,17,17';
      const accent = themeRef.current === 'dark' ? '255,90,60' : '226,61,31';
      const rampLen = ASCII_RAMP.length;

      for (let row = 0; row < rows; row++) {
        const y = row * cell;
        for (let col = 0; col < cols; col++) {
          const idx = row * cols + col;
          const x = col * cell;
          const ph = phase[idx];

          const wave = reduceMotion
            ? Math.sin(col * 0.25 + ph) + Math.sin(row * 0.22 + ph * 0.5)
            : Math.sin(col * 0.25 + time * 1.3 + ph) + Math.sin(row * 0.22 - time * 1.1 + ph * 0.5);
          const raw = (wave + 2) / 4;

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const near = dist < 110 ? 1 - dist / 110 : 0;

          const threshold = 0.64;
          if (raw < threshold && near < 0.05) continue;
          const brightness = Math.max(0, raw - threshold) / (1 - threshold);

          const level = Math.min(rampLen - 1, Math.max(1, Math.floor((brightness + near * 0.85) * (rampLen - 1))));
          const alpha = Math.min(0.8, 0.04 + brightness * 0.14 + near * 0.55);
          ctx.fillStyle = near > 0.3 ? `rgba(${accent},${alpha})` : `rgba(${base},${alpha})`;
          ctx.fillText(ASCII_RAMP[level], x, y);
        }
      }
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}

function CursorEffect() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    document.body.style.cursor = 'none';
    const onMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
        const hoverEl = e.target.closest && e.target.closest('[data-cursor-hover]');
        ringRef.current.style.width = hoverEl ? '54px' : '34px';
        ringRef.current.style.height = hoverEl ? '54px' : '34px';
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.cursorRing} aria-hidden="true" />
      <div ref={dotRef} className={styles.cursorDot} aria-hidden="true" />
    </>
  );
}

function Decor({ showParticles = true, showCursorEffect = true, showDecor = true }) {
  const isMobile = useIsMobile();

  return (
    <>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      {showParticles && <AsciiField />}
      {showDecor && (
        <>
          <div className={styles.blob1} aria-hidden="true" />
          <div className={styles.blob2} aria-hidden="true" />
        </>
      )}
      {!isMobile && showCursorEffect && <CursorEffect />}
    </>
  );
}

export default Decor;
