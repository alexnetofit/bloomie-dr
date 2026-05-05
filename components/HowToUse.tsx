import { SmartImage } from "./SmartImage";

const steps = [
  {
    n: "01",
    title: "abre 1 sachê",
    body: "Cada sachê tem 7g — todos os 25+ ativos numa única dose, na medida certa.",
    img: "/products/stick.png",
    bg: "#fbe1dc",
  },
  {
    n: "02",
    title: "200ml de água gelada",
    body: "Pode ser também no suco, no smoothie ou no leite vegetal. A escolha é sua.",
    img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=900&q=80&auto=format&fit=crop",
    bg: "#f7adac",
  },
  {
    n: "03",
    title: "mexe e bebe",
    body: "Tome de manhã em jejum pra absorção máxima. Repita amanhã. Floresça.",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900&q=80&auto=format&fit=crop",
    bg: "#fbb3b3",
  },
];

export function HowToUse() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="pill mx-auto">como tomar</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-900 md:text-5xl">
          Em 30 segundos.
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="overflow-hidden rounded-3xl border border-bloom-600/10 bg-white"
          >
            <SmartImage
              src={s.img}
              alt={s.title}
              fallback={s.bg}
              className="aspect-[4/3]"
            />
            <div className="p-6">
              <p className="font-display text-5xl font-semibold text-rose-300">
                {s.n}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-bloom-900">
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
