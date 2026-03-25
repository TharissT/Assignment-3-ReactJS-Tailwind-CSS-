import type { CubicValues } from "../App";

export const CubicHistory = ({ history, onSelect }: { history: CubicValues[], onSelect: (v: CubicValues) => void }) => (
  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
    <div className="bg-orange-500 text-white p-5 font-bold uppercase tracking-wider">Saved Cubic Coefficients</div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50 text-slate-400 text-xs uppercase font-black">
          <tr>
            <th className="p-5">a</th><th className="p-5">b</th><th className="p-5">c</th><th className="p-5">d</th><th className="p-5 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {history.map((item, index) => (
            <tr key={index} className="hover:bg-sky-50 transition-colors group">
              <td className="p-5 font-mono font-bold">{item.a}</td>
              <td className="p-5 font-mono font-bold">{item.b}</td>
              <td className="p-5 font-mono font-bold">{item.c}</td>
              <td className="p-5 font-mono font-bold">{item.d}</td>
              <td className="p-5 text-center">
                <button 
                  onClick={() => onSelect(item)} 
                  className="bg-sky-100 text-sky-600 px-4 py-1.5 rounded-lg font-bold hover:bg-sky-600 hover:text-white transition-all shadow-sm"
                >
                  LOAD
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);