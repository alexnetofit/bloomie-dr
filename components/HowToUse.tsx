import { Placeholder } from "./Placeholder";

const steps = [
  {
    n: "01",
    title: "1 scoop",
    body: "Use o doseador que vem dentro do pote. Cada dose tem 7g — todos os 38 ativos.",
    tone: "leaf" as const,
  },
  {
    n: "02",
    title: "200ml de água gelada",
    body: "Pode ser também no suco, no smoothie ou no leite vegetal. A escolha é sua.",
    tone: "cream" as const,
  },
  {
    n: "03",
    title: "mexe e bebe",
    body: "Tome de manhã em jejum pra absorção máxima. Repita amanhã. Floresça.",
    tone: "peach" as const,
  },
];

export function HowToUse() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="pill mx-auto">como tomar</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-950 md:text-5xl">
          Em 30 segundos.
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="overflow-hidden rounded-3xl border border-bloom-700/10 bg-white"
          >
            <Placeholder tone={s.tone} label={`passo ${s.n}`} className="aspect-[4/3]" />
            <div className="p-6">
              <p className="font-display text-5xl font-semibold text-bloom-300">
                {s.n}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-bloom-950">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-bloom-900/70">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
