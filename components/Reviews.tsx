import { SmartImage } from "./SmartImage";

const reviews = [
  {
    name: "Rebeca P.",
    handle: "@rebec.p",
    text: "Tomo todo dia em jejum. Em 1 semana minha pele ficou visivelmente mais firme — e o sabor de Pink Lemonade é absurdo de gostoso.",
    sabor: "Pink Lemonade",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80&auto=format&fit=crop",
  },
  {
    name: "Amanda V.",
    handle: "@amanda.viit",
    text: "Já tentei mil colágenos e parava na 2ª semana. Bloomie eu lembro porque é o momentinho gostoso do dia.",
    sabor: "Pink Lemonade",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80&auto=format&fit=crop",
  },
  {
    name: "Júlia M.",
    handle: "@juhmoreirah",
    text: "Foi a única coisa que tirou meu cansaço da tarde. Recomendei pra minha mãe e pra minha irmã.",
    sabor: "Hibisco & Lichia",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80&auto=format&fit=crop",
  },
  {
    name: "Carol B.",
    handle: "@_carolbiel",
    text: "Energia sem ansiedade. Eu sentia o coração disparar com café, com Bloomie é uma calma desperta — difícil explicar.",
    sabor: "Frutas Vermelhas",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&q=80&auto=format&fit=crop",
  },
  {
    name: "Marina S.",
    handle: "@marinasouza",
    text: "Sachê é gênio. Levo na bolsa, no avião, no escritório, e mantenho a rotina. Cabelo crescendo mais forte também.",
    sabor: "Pink Lemonade",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80&auto=format&fit=crop",
  },
  {
    name: "Bia C.",
    handle: "@biacarvalho",
    text: "Custa o preço de 3 cafés por semana e me entrega o que minha vitamina manipulada não dava. Não largo mais.",
    sabor: "Hibisco & Lichia",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&q=80&auto=format&fit=crop",
  },
];

export function Reviews() {
  return (
    <section className="bg-cream-100 py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="pill mx-auto">o que as besties dizem</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-900 md:text-5xl">
            +28.400 avaliações ⭐ 4.9
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.handle}
              className="flex flex-col gap-4 rounded-3xl border border-bloom-600/10 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <SmartImage
                  src={r.avatar}
                  alt={r.name}
                  className="h-12 w-12 shrink-0 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-bloom-900">
                    {r.name}
                  </p>
                  <p className="text-xs text-bloom-900/60">{r.handle}</p>
                </div>
                <span
                  className="ml-auto text-amber-500"
                  aria-label="5 estrelas"
                >
                  ★★★★★
                </span>
              </div>
              <p className="text-sm leading-relaxed text-bloom-900/80">
                “{r.text}”
              </p>
              <p className="mt-auto text-xs uppercase tracking-wider text-bloom-600">
                sabor: {r.sabor}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#produto" className="btn-primary">
            quero a minha 🌸
          </a>
        </div>
      </div>
    </section>
  );
}
