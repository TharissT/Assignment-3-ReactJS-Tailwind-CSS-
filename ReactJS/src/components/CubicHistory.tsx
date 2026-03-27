import type { CubicValues } from "../App";

export const CubicHistory = ({
  history,
  onSelect,
}: {
  history: CubicValues[];
  onSelect: (v: CubicValues) => void;
}) => (
  <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden">
    <div className="bg-red-600 text-white p-5 font-black uppercase tracking-widest text-sm">
      Saved Cubic Coefficients
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50 text-slate-400 text-xs uppercase font-black">
          <tr>
            <th className="p-5">a</th>
            <th className="p-5">b</th>
            <th className="p-5">c</th>
            <th className="p-5">d</th>
            <th className="p-5 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {history.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-red-50/50 transition-colors group"
            >
              <td className="p-5 font-mono font-bold text-slate-700">
                {item.a}
              </td>
              <td className="p-5 font-mono font-bold text-slate-700">
                {item.b}
              </td>
              <td className="p-5 font-mono font-bold text-slate-700">
                {item.c}
              </td>
              <td className="p-5 font-mono font-bold text-slate-700">
                {item.d}
              </td>
              <td className="p-5 text-center">
                <button
                  onClick={() => onSelect(item)}
                  className="bg-red-100 text-red-600 px-5 py-2 rounded-lg font-black text-xs hover:bg-red-600 hover:text-white transition-all shadow-sm active:scale-95"
                >
                  LOAD
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {history.length === 0 && (
        <div className="p-10 text-center text-slate-400 font-medium">
          No history saved yet.
        </div>
      )}
    </div>
  </div>
);
