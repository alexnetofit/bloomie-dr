const stats = [
  { value: "91%", label: "tomam 4–6x por semana sem esquecer" },
  { value: "76%", label: "se sentem mais leves em até 5 dias" },
  { value: "68%", label: "notam pele mais firme em 30 dias" },
  { value: "59%", label: "relatam mais energia e menos cansaço" },
];

export function Stats() {
  return (
    <section
      id="resultados"
      className="bg-bloom-900 py-16 text-cream-50 md:py-20"
    >
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="pill mx-auto !border-cream-50/20 !bg-cream-50/10 !text-cream-50">
            besties florescendo
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Os números das nossas
            <span className="text-rose-300"> +90.000 besties.</span>
          </h2>
          <p className="mt-3 text-cream-50/70">
            Pesquisa interna com 4.218 clientes ativas, jan/2026.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-3xl border border-cream-50/10 bg-cream-50/5 p-6"
            >
              <p className="font-display text-5xl font-semibold text-rose-300">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-cream-50/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
