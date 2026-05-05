import { Placeholder } from "./Placeholder";

export function Founder() {
  return (
    <section className="bg-bloom-50 py-16 md:py-24">
      <div className="container-x grid items-center gap-10 md:grid-cols-2">
        <Placeholder
          tone="leaf"
          label="Foto da fundadora"
          className="aspect-[4/5] rounded-3xl"
        />
        <div>
          <p className="pill">a história por trás</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-950 md:text-5xl">
            “Eu queria um suco verde
            <span className="text-bloom-700"> que eu lembrasse de tomar.”</span>
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
              cabelo, energia bipolar) vinham do intestino, virou obsessão
              juntar tudo num produto só. Bloomie é o que eu sempre quis
              comprar e nunca achei: completo, honesto e tão gostoso que vira
              ritual.
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
