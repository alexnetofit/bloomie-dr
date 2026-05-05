import { SmartImage } from "./SmartImage";

const pillars = [
  {
    eyebrow: "pele que floresce",
    title: "Colágeno verificado pra firmeza e glow.",
    body: "5g de colágeno hidrolisado Verisol® + biotina + ácido hialurônico. Pele firme, hidratada e com aquele brilho que filtro nenhum entrega.",
    img: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=900&q=80&auto=format&fit=crop",
    bg: "#ffe2ed",
  },
  {
    eyebrow: "energia leve",
    title: "Disposição sem o crash do café.",
    body: "Vitamina B12 + ferro + magnésio numa dose que te tira do modo cansaço. Energia limpa que dura a tarde toda.",
    img: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=900&q=80&auto=format&fit=crop",
    bg: "#fab8cd",
  },
  {
    eyebrow: "imunidade em flor",
    title: "12 vitaminas que blindam seu dia.",
    body: "Vitamina C, D, E, zinco e selênio em doses ativas. O combo certo pra atravessar a semana sem cair em pé.",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900&q=80&auto=format&fit=crop",
    bg: "#f592b2",
  },
  {
    eyebrow: "calma desperta",
    title: "Foco com leveza, sem ansiedade.",
    body: "Adaptógenos como ashwagandha e rhodiola ajudam o corpo a lidar com estresse. Sua mente abre espaço pra pensar.",
    img: "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=900&q=80&auto=format&fit=crop",
    bg: "#5c0d27",
  },
];

export function Benefits() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="pill mx-auto">por que Bloomie</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-900 md:text-5xl">
          Um sachê. Quatro flores que abrem
          <span className="text-bloom-600"> ao mesmo tempo.</span>
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {pillars.map((p) => (
          <div
            key={p.eyebrow}
            className="group flex flex-col overflow-hidden rounded-3xl border border-bloom-600/10 bg-white"
          >
            <SmartImage
              src={p.img}
              alt={p.eyebrow}
              fallback={p.bg}
              className="aspect-[4/3]"
            />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-bloom-600">
                {p.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-bloom-900">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-bloom-900/70">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
