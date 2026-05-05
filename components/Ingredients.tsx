import { SmartImage } from "./SmartImage";

const groups = [
  {
    title: "Beleza & Pele",
    img: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb9?w=900&q=80&auto=format&fit=crop",
    bg: "#ffe2ed",
    items: [
      "colágeno Verisol® 5g",
      "ácido hialurônico",
      "biotina",
      "vitamina E",
      "silício orgânico",
    ],
  },
  {
    title: "Energia & Foco",
    img: "https://images.unsplash.com/photo-1517242810446-cc8951b2be40?w=900&q=80&auto=format&fit=crop",
    bg: "#fab8cd",
    items: [
      "vitamina B12",
      "ferro quelato",
      "magnésio glicinato",
      "ácido fólico",
      "complexo B",
    ],
  },
  {
    title: "Imunidade",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900&q=80&auto=format&fit=crop",
    bg: "#f592b2",
    items: [
      "vitamina C 500mg",
      "vitamina D3",
      "zinco",
      "selênio",
      "extrato de açaí",
    ],
  },
  {
    title: "Calma & Equilíbrio",
    img: "https://images.unsplash.com/photo-1507868105-cce8a3a4f0e7?w=900&q=80&auto=format&fit=crop",
    bg: "#5c0d27",
    items: ["ashwagandha", "rhodiola", "L-teanina", "maca peruana"],
  },
  {
    title: "Sabor & Acabamento",
    img: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=900&q=80&auto=format&fit=crop",
    bg: "#ed6896",
    items: [
      "morango liofilizado",
      "limão siciliano",
      "pétalas de rosa",
      "stévia natural",
    ],
  },
  {
    title: "Bonus florido",
    img: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=900&q=80&auto=format&fit=crop",
    bg: "#d12158",
    items: ["antioxidantes", "polifenóis", "fibras solúveis"],
  },
];

export function Ingredients() {
  return (
    <section id="ingredientes" className="container-x py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="pill mx-auto">a fórmula</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-900 md:text-5xl">
          Cada sachê é um buquê de ativos.
        </h2>
        <p className="mt-3 text-bloom-900/70">
          7 gramas com 25+ ativos em doses que realmente fazem diferença — não
          pitadinha pra encher rótulo.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="overflow-hidden rounded-3xl border border-bloom-600/10 bg-white"
          >
            <SmartImage
              src={g.img}
              alt={g.title}
              fallback={g.bg}
              className="aspect-[16/9]"
            />
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold text-bloom-900">
                {g.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full bg-bloom-50 px-2.5 py-1 text-xs font-medium text-bloom-700"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-3 rounded-3xl border border-bloom-600/10 bg-cream-100 p-6 sm:grid-cols-2 md:grid-cols-4">
        {[
          ["12 kcal", "por sachê de 7g"],
          ["5 g", "colágeno Verisol®"],
          ["0 g", "açúcar adicionado"],
          ["25+", "ativos funcionais"],
        ].map(([v, l]) => (
          <div key={v} className="text-center">
            <p className="font-display text-3xl font-semibold text-bloom-700">
              {v}
            </p>
            <p className="text-xs text-bloom-900/70">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
