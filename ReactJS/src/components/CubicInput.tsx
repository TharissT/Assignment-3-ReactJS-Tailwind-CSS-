import type { CubicValues } from "../App";

type Props = {
  values: CubicValues;
  setValues: (v: CubicValues) => void;
  onSave: () => void;
};

export const CubicInput = ({ values, setValues, onSave }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.isFinite(e.target.valueAsNumber) ? e.target.valueAsNumber : 0;
    setValues({ ...values, [e.target.name]: value });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100">
      <h1 className="text-4xl font-black text-red-600 mb-8 tracking-tight uppercase">
        Cubic Solver
      </h1>

      <div className="flex flex-wrap items-end gap-6">
        {["a", "b", "c", "d"].map((label) => (
          <div key={label} className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase text-slate-500 ml-1">
              {label}-value:
            </label>
            <input
              type="number"
              name={label}
              value={values[label as keyof CubicValues]}
              onChange={handleChange}
              className="w-28 p-3 border-2 border-slate-100 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-50/50 outline-none transition-all font-semibold text-lg bg-slate-50 focus:bg-white"
            />
          </div>
        ))}

        <button
          onClick={onSave}
          className="bg-red-600 hover:bg-red-700 text-white px-10 py-3.5 rounded-xl font-black transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-red-200"
        >
          SAVE
        </button>
      </div>
    </div>
  );
};