import { useEffect, useRef } from "react";
import type { CubicValues } from "../App";

type Props = {
  values: CubicValues;
  roots: (number | string)[];
};

export const CubicGraph = ({ values, roots }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d")!;

    const { a, b, c, d } = values;

    const width = canvas.width;
    const height = canvas.height;

    const scale = 30; 
    const originX = Math.floor(width / 2);
    const originY = Math.floor(height / 2);

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = "#fee2e2";
    ctx.lineWidth = 1;

    for (let x = originX % scale; x <= width; x += scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = originY % scale; y <= height; y += scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    ctx.strokeStyle = "#dc2626";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.beginPath();

    for (let px = 0; px <= width; px++) {
      const x = (px - originX) / scale;
      const y = a * x ** 3 + b * x ** 2 + c * x + d;
      const py = originY - y * scale;

      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }

    ctx.stroke();

    ctx.fillStyle = "#7f1d1d";
    roots.forEach((r) => {
      if (typeof r === "number" && Number.isFinite(r)) {
        const px = originX + r * scale;
        const py = originY; 
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });
  }, [values, roots]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-red-100 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={500}
        height={350}
        className="max-w-full h-auto bg-white rounded-lg"
      />
    </div>
  );
};