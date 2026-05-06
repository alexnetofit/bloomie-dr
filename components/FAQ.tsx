"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Em quanto tempo eu sinto resultado?",
    a: "A maioria das nossas besties relata digestão mais regulada e barriga menos inchada já na primeira semana. Pele, cabelo, unha e energia pedem entre 30 e 60 dias — é o tempo do ciclo natural de renovação celular.",
  },
  {
    q: "Posso tomar todo dia?",
    a: "Pode e deve. Bloomie foi formulado pra uso diário contínuo, em doses dentro do recomendado pela ANVISA. Quem toma 4–6x por semana sente o resultado completo da fórmula.",
  },
  {
    q: "Pode tomar grávida ou amamentando?",
    a: "Bloomie é um suplemento alimentar com greens, vitaminas e minerais. Recomendamos consultar seu obstetra antes — ele conhece sua rotina e exames.",
  },
  {
    q: "Como funciona a garantia de 30 dias?",
    a: "Você toma o produto por 30 dias. Se não amar, devolvemos 100% do valor pago, sem perguntinhas. É só falar com a gente no @usebloomie.",
  },
  {
    q: "Quanto tempo leva pra chegar?",
    a: "Enviamos em até 24h úteis. O frete grátis acima de R$199 chega em 3–7 dias úteis. SP capital recebe no dia seguinte.",
  },
  {
    q: "Tem açúcar ou adoçante artificial?",
    a: "Zero açúcar adicionado e zero adoçante artificial. O dulçor natural vem das frutas liofilizadas (morango, limão siciliano, hibisco) e de uma pitadinha de stévia.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-cream-100 py-16 md:py-24">
      <div className="container-x grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="pill">dúvidas frequentes</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-bloom-900 md:text-5xl">
            A gente já respondeu.
          </h2>
          <p className="mt-3 text-bloom-900/70">
            Ainda ficou com alguma dúvida? Chama no{" "}
            <a className="underline underline-offset-4" href="#">
              @usebloomie
            </a>{" "}
            que a gente responde rapidinho.
          </p>
        </div>
        <div className="grid gap-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-bloom-600/10 bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium text-bloom-900">{f.q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-bloom-50 text-bloom-700 transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-bloom-900/75">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
