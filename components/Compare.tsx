const rows = [
  { feature: "+38 ativos por dose", us: true, them: false },
  { feature: "0 açúcar adicionado", us: true, them: "às vezes" },
  { feature: "probióticos vivos", us: true, them: false },
  { feature: "adaptógenos em dose ativa", us: true, them: false },
  { feature: "sabor que dá gosto de tomar", us: true, them: false },
  { feature: "embalagem reciclável", us: true, them: false },
  { feature: "30 dias de garantia", us: true, them: "raramente" },
  { feature: "transparência de fórmula", us: true, them: false },
];

function Mark({ v }: { v: boolean | string }) {
  if (v === true)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-bloom-700 text-cream-50">
        ✓
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-bloom-900/15 text-bloom-900/40">
        —
      </span>
    );
  return (
    <span className="inline-block rounded-full bg-cream-100 px-2 py-1 text-[10px] font-semibold text-bloom-900/60">
      {v}
    </span>
  );
}

export function Compare() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="pill mx-auto">bloomie vs. outras</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-950 md:text-5xl">
          Por que a gente é diferente.
        </h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-bloom-700/10 bg-white">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-3 bg-bloom-50 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-bloom-900/70">
          <span>recurso</span>
          <span className="text-center text-bloom-700">bloomie</span>
          <span className="text-center">outras marcas</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.feature}
            className={`grid grid-cols-[1.4fr_1fr_1fr] items-center gap-3 px-5 py-4 text-sm ${
              i % 2 === 0 ? "bg-white" : "bg-cream-50"
            }`}
          >
            <span className="text-bloom-900">{r.feature}</span>
            <span className="flex justify-center">
              <Mark v={r.us} />
            </span>
            <span className="flex justify-center">
              <Mark v={r.them} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
