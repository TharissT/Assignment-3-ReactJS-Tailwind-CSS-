import { useEffect, useRef } from "react";
import type { CubicValues } from "../App";

interface Props {
  values: CubicValues;
  roots: (number | string)[];
}

export const CubicGraph = ({ values, roots }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d")!;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const { a, b, c, d } = values;

    // Draw Grid
    ctx.strokeStyle = "#f1f5f9";
    for (let i = 0; i <= canvas.width; i += 20) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }

    // Draw Axes
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, canvas.height/2); ctx.lineTo(canvas.width, canvas.height/2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(canvas.width/2, 0); ctx.lineTo(canvas.width/2, canvas.height); ctx.stroke();

    // Draw Cubic Curve
    ctx.strokeStyle = "#f97316"; 
    ctx.lineWidth = 4;
    ctx.beginPath();
    for (let px = 0; px <= canvas.width; px++) {
      const x = (px - canvas.width / 2) / 30;
      const y = a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
      const py = canvas.height / 2 - y * 30;
      if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Draw Roots
    ctx.fillStyle = "#0f172a";
    roots.forEach((r) => {
      if (typeof r === "number") {
        ctx.beginPath();
        ctx.arc(canvas.width / 2 + r * 30, canvas.height / 2, 7, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }, [values, roots]);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center">
      <canvas ref={canvasRef} width={500} height={350} className="max-w-full h-auto" />
    </div>
  );
};