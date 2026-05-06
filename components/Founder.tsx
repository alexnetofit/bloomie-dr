import { SmartImage } from "./SmartImage";

export function Founder() {
  return (
    <section className="grain bg-bloom-50 py-16 md:py-24">
      <div className="container-x grid items-center gap-10 md:grid-cols-2">
        <SmartImage
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&auto=format&fit=crop"
          alt="Helena, fundadora da Bloomie"
          fallback="#ffe2ed"
          className="aspect-[4/5] rounded-3xl"
        />
        <div>
          <p className="pill">a história por trás</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-900 md:text-5xl">
            “A Bloomie resolveu minha
            <span className="text-bloom-600"> guerra contra o intestino.”</span>
          </h2>
          <div className="mt-6 space-y-4 text-bloom-900/75">
            <p>
              Sou Helena, fundadora da Bloomie. Por anos eu colecionei pote de
              vitamina, suplemento manipulado, chá funcional. Tudo bonito,
              quase nada gostoso — e nada que durasse mais de 3 semanas na
              minha rotina.
            </p>
            <p>
              Quando descobri que metade dos meus problemas (inchaço, queda de
              cabelo, energia bipolar) vinha do intestino, virou obsessão
              juntar tudo num produto só. Bloomie é o que eu sempre quis
              comprar e nunca achei: 36+ ativos, completo, honesto e tão
              gostoso que vira ritual. O sachê é a cereja do bolo — cabe na
              bolsa, na nécessaire e na vida real.
            </p>
            <p className="font-display text-xl italic text-bloom-700">
              — Helena Bloom, fundadora
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
