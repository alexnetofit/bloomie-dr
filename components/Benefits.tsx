import { Placeholder } from "./Placeholder";

const pillars = [
  {
    eyebrow: "adeus inchaço",
    title: "Intestino que funciona todo dia.",
    body: "Fibras prebióticas + 4 cepas de probióticos alimentam suas bactérias do bem e regulam o trânsito sem milagre — só rotina.",
    tone: "leaf" as const,
  },
  {
    eyebrow: "energia que dura",
    title: "Disposição sem o crash do café.",
    body: "Matcha cerimonial + maca + B12 entregam energia limpa por horas. Acaba aquele bate e volta de cansaço da tarde.",
    tone: "peach" as const,
  },
  {
    eyebrow: "saúde que aparece",
    title: "Pele, cabelo e unha em flor.",
    body: "Colágeno verificado + biotina + vitaminas C e E pra brilho de dentro pra fora — o tipo de glow que filtro nenhum copia.",
    tone: "cream" as const,
  },
  {
    eyebrow: "pro corpo e pra mente",
    title: "Foco calmo o dia inteiro.",
    body: "Adaptógenos como ashwagandha e rhodiola ajudam o corpo a lidar com estresse. Sua mente abre espaço pra pensar.",
    tone: "deep" as const,
  },
];

export function Benefits() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="pill mx-auto">por que bloomie</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-950 md:text-5xl">
          Um scoop. Quatro flores que abrem
          <span className="text-bloom-700"> ao mesmo tempo.</span>
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {pillars.map((p) => (
          <div
            key={p.eyebrow}
            className="group flex flex-col overflow-hidden rounded-3xl border border-bloom-700/10 bg-white"
          >
            <Placeholder
              tone={p.tone}
              label={`Imagem · ${p.eyebrow}`}
              className="aspect-[4/3]"
            />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-bloom-700">
                {p.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-bloom-950">
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
