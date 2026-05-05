import { Placeholder } from "./Placeholder";

const reviews = [
  {
    name: "Rebeca P.",
    handle: "@rebec.p",
    text: "Tomo todo dia em jejum. Em 1 semana minha digestão virou outra coisa — e o sabor de abacaxi com hortelã é absurdo de gostoso.",
    sabor: "abacaxi c/ hortelã",
    tone: "leaf" as const,
  },
  {
    name: "Amanda V.",
    handle: "@amanda.viit",
    text: "Já tentei mil greens e parava na 2ª semana. Bloomie eu lembro porque é o momentinho gostoso do dia. Pele agradeceu.",
    sabor: "melancia",
    tone: "peach" as const,
  },
  {
    name: "Júlia M.",
    handle: "@juhmoreirah",
    text: "Foi a única coisa que tirou meu inchaço pré-menstrual. Recomendei pra minha mãe e pra minha irmã.",
    sabor: "limão",
    tone: "cream" as const,
  },
  {
    name: "Carol B.",
    handle: "@_carolbiel",
    text: "Energia sem ansiedade. Eu sentia o coração disparar com café, com bloomie é uma calma desperta — difícil explicar.",
    sabor: "manga",
    tone: "peach" as const,
  },
  {
    name: "Marina S.",
    handle: "@marinasouza",
    text: "Praticidade absurda. Levo o pote pra viagem e mantenho a rotina. Cabelo crescendo mais forte também.",
    sabor: "abacaxi c/ hortelã",
    tone: "leaf" as const,
  },
  {
    name: "Bia C.",
    handle: "@biacarvalho",
    text: "Custa o preço de 3 cafés por semana e me entrega o que minha vitamina manipulada não dava. Não largo mais.",
    sabor: "limão",
    tone: "deep" as const,
  },
];

export function Reviews() {
  return (
    <section className="bg-cream-100 py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="pill mx-auto">o que as besties dizem</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-950 md:text-5xl">
            +28.400 avaliações ⭐ 4.9
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.handle}
              className="flex flex-col gap-4 rounded-3xl border border-bloom-700/10 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <Placeholder
                  tone={r.tone}
                  label={r.name.split(" ")[0]}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-bloom-950">
                    {r.name}
                  </p>
                  <p className="text-xs text-bloom-900/60">{r.handle}</p>
                </div>
                <span className="ml-auto text-amber-500" aria-label="5 estrelas">
                  ★★★★★
                </span>
              </div>
              <p className="text-sm leading-relaxed text-bloom-900/80">
                “{r.text}”
              </p>
              <p className="mt-auto text-xs uppercase tracking-wider text-bloom-700">
                sabor: {r.sabor}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#produto" className="btn-primary">
            quero a minha 🌱
          </a>
        </div>
      </div>
    </section>
  );
}
