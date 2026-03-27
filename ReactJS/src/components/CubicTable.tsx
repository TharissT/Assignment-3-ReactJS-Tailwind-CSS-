interface Props {
  p: number;
  q: number;
  delta: number;
  roots: (number | string)[];
}

export const CubicTable = ({ p, q, delta, roots }: Props) => (
  <div className="bg-white rounded-xl shadow-xl border-2 border-red-600 overflow-hidden">
    <div className="bg-red-600 p-5 font-black tracking-widest text-white uppercase text-sm flex justify-between items-center">
      <span>Calculation Results</span>
    </div>

    <div className="p-6 space-y-4">
      <div className="space-y-3">
        {[
          { l: "p", v: p },
          { l: "q", v: q },
          { l: "Δ discriminant", v: delta },
        ].map((item) => (
          <div
            key={item.l}
            className="flex justify-between border-b border-slate-100 pb-2 items-baseline"
          >
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-tighter">
              {item.l}
            </span>
            <span className="font-mono font-bold text-red-600 text-lg">
              {item.v.toFixed(4)}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-4 flex items-center gap-3">
        <span className="font-black text-red-600 uppercase text-[10px] tracking-[0.2em] whitespace-nowrap">
          Detected Roots
        </span>
        <div className="h-0.5 flex-1 bg-red-600"></div>
      </div>

      <div className="space-y-2">
        {roots.map((r, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border-l-4 border-red-600 hover:bg-red-50 transition-all group"
          >
            <span className="text-slate-400 font-mono text-xs font-bold uppercase italic group-hover:text-red-600">
              Root{i + 1}
            </span>
            <span
              className={`font-black text-xl tracking-tighter ${
                typeof r === "number" ? "text-slate-900" : "text-red-500 italic"
              }`}
            >
              {typeof r === "number" ? r.toFixed(3) : r}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-red-600 h-2 w-full opacity-10"></div>
  </div>
);
