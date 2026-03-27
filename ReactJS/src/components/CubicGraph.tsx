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

    ctx.strokeStyle = "#fee2e2"; 
    ctx.lineWidth = 1;
    for (let i = 0; i <= canvas.width; i += 20) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
    }
    for (let i = 0; i <= canvas.height; i += 20) {
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }

    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, canvas.height / 2); ctx.lineTo(canvas.width, canvas.height / 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(canvas.width / 2, 0); ctx.lineTo(canvas.width / 2, canvas.height); ctx.stroke();

    ctx.strokeStyle = "#dc2626"; 
    ctx.lineWidth = 4;
    ctx.lineJoin = "round";
    ctx.beginPath();
    
    for (let px = 0; px <= canvas.width; px++) {
      const x = (px - canvas.width / 2) / 30;
      const y = a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
      const py = canvas.height / 2 - y * 30;
      
      if (py >= -50 && py <= canvas.height + 50) {
        if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
    }
    ctx.stroke();

    ctx.fillStyle = "#7f1d1d";
    roots.forEach((r) => {
      if (typeof r === "number") {
        ctx.beginPath();
        ctx.arc(canvas.width / 2 + r * 30, canvas.height / 2, 6, 0, Math.PI * 2);
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