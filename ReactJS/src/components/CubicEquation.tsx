interface Props {
  a: number;
  b: number;
  c: number;
  d: number;
}

export const CubicEquation = ({ a, b, c, d }: Props) => {
  return (
    <div className="text-center text-2xl font-light py-4 text-slate-600">
      <span className="font-bold text-slate-800">{a}</span>x³ +
      <span className="font-bold text-slate-800"> {b}</span>x² +
      <span className="font-bold text-slate-800"> {c}</span>x +
      <span className="font-bold text-slate-800"> {d}</span> = 0
    </div>
  );
};
