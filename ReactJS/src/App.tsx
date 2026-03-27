import { useState } from "react";
import { CubicInput } from "./components/CubicInput";
import { CubicEquation } from "./components/CubicEquation";
import { CubicTable } from "./components/CubicTable";
import { CubicGraph } from "./components/CubicGraph";
import { CubicHistory } from "./components/CubicHistory";

export type CubicValues = { a: number; b: number; c: number; d: number };

export default function App() {
  const [values, setValues] = useState<CubicValues>({ a: 1, b: 0, c: 0, d: 0 });
  const [history, setHistory] = useState<CubicValues[]>([]);

  const solveCubic = () => {
    const { a, b, c, d } = values;
    if (a === 0) return { p: 0, q: 0, delta: 0, roots: ["Error: a=0"] };

    const p = (3 * a * c - b * b) / (3 * a * a);
    const q = (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
    const delta = (q / 2) ** 2 + (p / 3) ** 3;
    const h = -b / (3 * a);

    let roots: (number | string)[] = [];
    if (delta < 0) {
      const k = 2 * Math.sqrt(-p / 3);
      const theta = (1 / 3) * Math.acos(-q / (2 * Math.sqrt(Math.pow(-p / 3, 3))));
      roots = [
        k * Math.cos(theta) + h,
        k * Math.cos(theta + (2 * Math.PI) / 3) + h,
        k * Math.cos(theta + (4 * Math.PI) / 3) + h,
      ];
    } else if (delta > 0) {
      const u = Math.cbrt(-q / 2 + Math.sqrt(delta));
      const v = Math.cbrt(-q / 2 - Math.sqrt(delta));
      roots = [u + v + h, "Complex", "Complex"];
    } else {
      const r = Math.cbrt(q / 2);
      roots = [2 * Math.cbrt(-q / 2) + h, r + h, r + h];
    }
    return { p, q, delta, roots };
  };

  const results = solveCubic();

  return (
    <div className="app-layout">
      <CubicInput 
        values={values} 
        setValues={setValues} 
        onSave={() => setHistory([...history, values])} 
      />
      
      <CubicEquation {...values} />

      <div className="display-grid">
        <CubicTable 
          p={results.p} 
          q={results.q} 
          delta={results.delta} 
          roots={results.roots} 
        />
        <div className="visual-panel">
           <CubicGraph values={values} roots={results.roots} />
        </div>
      </div>

      <CubicHistory history={history} onSelect={(v) => setValues(v)} />
    </div>
  );
}