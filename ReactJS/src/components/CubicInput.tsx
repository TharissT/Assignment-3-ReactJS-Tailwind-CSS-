import type { CubicValues } from "../App";

interface Props {
  values: CubicValues;
  setValues: (v: CubicValues) => void;
  onSave: () => void;
}

export const CubicInput = ({ values, setValues, onSave }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  return (
    <div className="bg-sky-50 p-8 rounded-2xl shadow-sm border border-sky-100">
      <h1 className="text-4xl font-black text-orange-500 mb-8 tracking-tight">Cubic Solver</h1>
      <div className="flex flex-wrap items-end gap-6">
        {["a", "b", "c", "d"].map((label) => (
          <div key={label} className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase text-sky-700 ml-1">{label}-value:</label>
            <input
              type="number"
              name={label}
              value={values[label as keyof CubicValues]}
              onChange={handleChange}
              className="w-28 p-3 border-2 border-sky-200 rounded-xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-semibold text-lg"
            />
          </div>
        ))}
        <button
          onClick={onSave}
          className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3.5 rounded-xl font-black transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-orange-200"
        >
          SAVE
        </button>
      </div>
    </div>
  );
};