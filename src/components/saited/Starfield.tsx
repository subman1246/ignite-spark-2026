import { useEffect, useRef } from "react";

type Star = { x: number; y: number; z: number; r: number; hue: number };
type Shape = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  type: "triangle" | "hexagon";
  alpha: number;
};

function drawHexagon(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function drawTriangle(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 3; i++) {
    const angle = ((Math.PI * 2) / 3) * i - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
}

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

    const stars: Star[] = Array.from({ length: 160 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 1.2 + 0.2,
      r: Math.random() * 1.4 + 0.3,
      hue: Math.random() > 0.7 ? 280 : 195,
    }));

    const shapes: Shape[] = Array.from({ length: 14 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 28 + 12,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.004,
      type: Math.random() > 0.5 ? "hexagon" : "triangle",
      alpha: Math.random() * 0.07 + 0.03,
    }));

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Stars
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

      // Geometric shapes
      ctx.shadowBlur = 0;
      for (const sh of shapes) {
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.rotation += sh.rotSpeed;
        if (sh.x < -sh.size * 2) sh.x = w + sh.size;
        if (sh.x > w + sh.size * 2) sh.x = -sh.size;
        if (sh.y < -sh.size * 2) sh.y = h + sh.size;
        if (sh.y > h + sh.size * 2) sh.y = -sh.size;

        const pulse = sh.alpha + Math.sin(Date.now() * 0.0008 + sh.x * 0.01) * 0.02;

        ctx.save();
        ctx.translate(sh.x, sh.y);
        ctx.rotate(sh.rotation);
        ctx.strokeStyle = `rgba(34, 211, 238, ${pulse})`;
        ctx.lineWidth = 1 * devicePixelRatio;
        ctx.shadowColor = "rgba(34, 211, 238, 0.4)";
        ctx.shadowBlur = 6;

        if (sh.type === "hexagon") {
          drawHexagon(ctx, 0, 0, sh.size * devicePixelRatio);
        } else {
          drawTriangle(ctx, 0, 0, sh.size * devicePixelRatio);
        }
        ctx.stroke();
        ctx.restore();
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
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      aria-hidden
    />
  );
}
