import { SmartImage } from "./SmartImage";

const groups = [
  {
    title: "Greens & Superfoods",
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=900&q=80&auto=format&fit=crop",
    bg: "#ffe2ed",
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
    img: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=900&q=80&auto=format&fit=crop",
    bg: "#fab8cd",
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
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900&q=80&auto=format&fit=crop",
    bg: "#f592b2",
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
    img: "https://images.unsplash.com/photo-1502741126161-b048400d085d?w=900&q=80&auto=format&fit=crop",
    bg: "#5c0d27",
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
    img: "https://images.unsplash.com/photo-1610725663727-08695a1ac3ff?w=900&q=80&auto=format&fit=crop",
    bg: "#ed6896",
    items: [
      "cúrcuma",
      "feno-grego",
      "ashwagandha",
      "rhodiola",
      "maca peruana",
    ],
  },
  {
    title: "Sabor & Acabamento",
    img: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=900&q=80&auto=format&fit=crop",
    bg: "#d12158",
    items: [
      "morango liofilizado",
      "limão siciliano",
      "pétalas de rosa",
      "stévia natural",
    ],
  },
];

export function Ingredients() {
  return (
    <section id="ingredientes" className="container-x py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="pill mx-auto">a fórmula</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-900 md:text-5xl">
          36+ ativos. Zero enrolação.
        </h2>
        <p className="mt-3 text-bloom-900/70">
          13 vitaminas, 10 minerais e 17 superfoods em doses que realmente
          fazem diferença — não pitadinha pra encher rótulo.
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
          ["9,6 kcal", "por sachê de 7g"],
          ["3,7 g", "fibra por dose"],
          ["0 g", "açúcar adicionado"],
          ["36+", "ativos funcionais"],
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
