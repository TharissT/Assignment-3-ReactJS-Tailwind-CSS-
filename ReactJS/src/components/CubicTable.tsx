interface Props { p: number; q: number; delta: number; roots: (number | string)[] }

export const CubicTable = ({ p, q, delta, roots }: Props) => (
  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
    <div className="bg-slate-900 text-white p-5 font-bold tracking-wide">CALCULATION RESULTS</div>
    <div className="p-6 space-y-3">
      {[ {l: 'p', v: p}, {l: 'q', v: q}, {l: 'Δ (Discriminant)', v: delta} ].map(item => (
        <div key={item.l} className="flex justify-between border-b border-slate-50 pb-3">
          <span className="text-slate-500 font-medium">{item.l}:</span>
          <span className="font-mono font-bold text-slate-800">{item.v.toFixed(4)}</span>
        </div>
      ))}
      <div className="pt-6 font-black text-orange-500 uppercase text-xs tracking-widest">Calculated Roots</div>
      {roots.map((r, i) => (
        <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
          <span className="text-slate-400 text-sm">Root {i + 1}:</span>
          <span className="font-bold text-lg">{typeof r === "number" ? r.toFixed(2) : r}</span>
        </div>
      ))}
    </div>
  </div>
);