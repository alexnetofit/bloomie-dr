import { Placeholder } from "./Placeholder";

const groups = [
  {
    title: "Greens & Superfoods",
    tone: "leaf" as const,
    items: [
      "couve",
      "espinafre",
      "spirulina",
      "chlorella",
      "wheatgrass",
      "matcha cerimonial",
      "moringa",
      "alga marinha",
    ],
  },
  {
    title: "Fibras prebióticas",
    tone: "cream" as const,
    items: [
      "maçã em pó",
      "linhaça dourada",
      "psyllium",
      "beterraba",
      "inulina",
      "raiz de chicória",
    ],
  },
  {
    title: "Vitaminas & Minerais",
    tone: "peach" as const,
    items: [
      "complexo B",
      "vitamina C",
      "vitamina D3",
      "vitamina E",
      "magnésio",
      "zinco",
      "selênio",
      "ferro quelato",
    ],
  },
  {
    title: "Antioxidantes",
    tone: "deep" as const,
    items: [
      "açaí",
      "cranberry",
      "mirtilo",
      "romã",
      "pimenta preta",
      "cacau",
      "chá verde",
    ],
  },
  {
    title: "Adaptógenos",
    tone: "leaf" as const,
    items: ["ashwagandha", "rhodiola", "maca peruana", "cúrcuma", "feno-grego"],
  },
  {
    title: "Probióticos vivos",
    tone: "cream" as const,
    items: [
      "L. acidophilus",
      "B. bifidum",
      "L. rhamnosus",
      "B. longum",
      "+ enzimas digestivas",
    ],
  },
];

export function Ingredients() {
  return (
    <section id="ingredientes" className="container-x py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="pill mx-auto">a fórmula</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-950 md:text-5xl">
          38 ativos. Zero enrolação.
        </h2>
        <p className="mt-3 text-bloom-900/70">
          Cada scoop entrega um time completo de nutrientes em doses que
          realmente fazem diferença — não pitadinha pra encher rótulo.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="overflow-hidden rounded-3xl border border-bloom-700/10 bg-white"
          >
            <Placeholder tone={g.tone} label={g.title} className="aspect-[16/9]" />
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold text-bloom-950">
                {g.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full bg-bloom-50 px-2.5 py-1 text-xs font-medium text-bloom-800"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-3 rounded-3xl border border-bloom-700/10 bg-cream-100 p-6 sm:grid-cols-2 md:grid-cols-4">
        {[
          ["9,6 kcal", "por dose de 7g"],
          ["3,7 g", "fibra por scoop"],
          ["0 g", "açúcar adicionado"],
          ["38", "ativos funcionais"],
        ].map(([v, l]) => (
          <div key={v} className="text-center">
            <p className="font-display text-3xl font-semibold text-bloom-900">
              {v}
            </p>
            <p className="text-xs text-bloom-900/70">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
