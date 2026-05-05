const items = [
  "30 sachês · 7g cada",
  "0 açúcar adicionado",
  "sem glúten",
  "sem lactose",
  "feito no Brasil",
  "testado em laboratório",
  "+12 vitaminas",
  "30 dias de garantia",
];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-bloom-600/10 bg-bloom-50">
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-2 text-sm font-medium text-bloom-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-bloom-500" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
