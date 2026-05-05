const items = [
  "+38 ativos em 1 scoop",
  "0 açúcar adicionado",
  "vegano",
  "sem glúten",
  "feito no Brasil",
  "testado em laboratório",
  "embalagem reciclável",
  "30 dias de garantia",
];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-bloom-700/10 bg-bloom-50">
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-2 text-sm font-medium text-bloom-800"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-bloom-500" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
