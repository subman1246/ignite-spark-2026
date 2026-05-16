import { useEffect, useRef } from "react";

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio);

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 1.2 + 0.2,
      r: Math.random() * 1.4 + 0.3,
      hue: Math.random() > 0.7 ? 280 : 195,
    }));

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.y -= s.z * 0.4;
        if (s.y < 0) {
          s.y = h;
          s.x = Math.random() * w;
        }
        const alpha = 0.4 + Math.sin(Date.now() * 0.002 + s.x) * 0.3;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 90%, 70%, ${alpha})`;
        ctx.shadowColor = `hsla(${s.hue}, 90%, 70%, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.arc(s.x, s.y, s.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
