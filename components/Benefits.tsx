import { SmartImage } from "./SmartImage";

const pillars = [
  {
    eyebrow: "adeus inchaço",
    title: "Intestino que funciona todo dia.",
    body: "Fibras prebióticas alimentam suas bactérias do bem e regulam o trânsito sem milagre. Em poucos dias o inchaço some, a barriga desincha e a digestão fica leve.",
    img: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=900&q=80&auto=format&fit=crop",
    bg: "#ffe2ed",
  },
  {
    eyebrow: "disposição no dia a dia",
    title: "Energia limpa, sem o crash do café.",
    body: "Matcha cerimonial, complexo B e ferro entregam disposição que dura horas. Acaba aquele bate e volta de cansaço da tarde.",
    img: "https://images.unsplash.com/photo-1517242810446-cc8951b2be40?w=900&q=80&auto=format&fit=crop",
    bg: "#fab8cd",
  },
  {
    eyebrow: "saúde que dá pra ver",
    title: "Pele, cabelo e unha em flor.",
    body: "Antioxidantes, vitaminas C e E, biotina e zinco trabalham por dentro. O glow chega de fora — o tipo de brilho que filtro nenhum copia.",
    img: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=900&q=80&auto=format&fit=crop",
    bg: "#f592b2",
  },
  {
    eyebrow: "pro corpo e pra mente",
    title: "13 vitaminas e 10 minerais por dose.",
    body: "Imunidade reforçada, ossos firmes, mente calma. As vitaminas B, C e D em doses ativas que blindam você o ano todo.",
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
