"use client";

import { useState } from "react";
import { Placeholder } from "./Placeholder";

const flavors = [
  { id: "pineapple", label: "Abacaxi c/ Hortelã", tag: "best-seller", tone: "leaf" as const },
  { id: "watermelon", label: "Melancia", tag: "vendendo rápido", tone: "peach" as const },
  { id: "lemon", label: "Limão", tag: "estoque limitado", tone: "cream" as const },
  { id: "mango", label: "Manga", tag: "novo sabor", tone: "peach" as const },
];

const bundles = [
  {
    id: "single",
    title: "1 pote",
    sub: "30 doses · 1 mês",
    price: 197.9,
    crossed: 247.9,
    pillar: "experimentar",
    discount: null as string | null,
  },
  {
    id: "duo",
    title: "2 potes",
    sub: "60 doses · 2 meses",
    price: 339.8,
    crossed: 395.8,
    pillar: "casal de besties",
    discount: "14% OFF",
  },
  {
    id: "trio",
    title: "3 potes",
    sub: "90 doses · 3 meses",
    price: 444.9,
    crossed: 593.7,
    pillar: "ritual completo",
    discount: "25% OFF",
    featured: true,
  },
];

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function BuyBox() {
  const [flavor, setFlavor] = useState(flavors[0].id);
  const [bundle, setBundle] = useState(bundles[2].id);

  const selected = bundles.find((b) => b.id === bundle)!;

  return (
    <section id="produto" className="bg-cream-50">
      <div className="container-x grid items-start gap-10 py-10 md:grid-cols-2 md:gap-14 md:py-16">
        {/* gallery */}
        <div className="grid gap-3">
          <Placeholder
            label="Foto do pote Bloomie"
            tone="leaf"
            className="aspect-square rounded-3xl"
          />
          <div className="grid grid-cols-4 gap-3">
            {(["leaf", "cream", "peach", "deep"] as const).map((t, i) => (
              <Placeholder
                key={i}
                tone={t}
                label={`thumb ${i + 1}`}
                className="aspect-square rounded-2xl"
              />
            ))}
          </div>
        </div>

        {/* offer */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="pill">+38 ativos · 0 açúcar</span>
            <span className="pill">vegano · sem glúten</span>
            <span className="pill">⭐ 4.9 · 28.4k avaliações</span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-bloom-950 md:text-5xl">
            Bloomie<sup className="text-base">®</sup> — Suco verde em pó
            <span className="block text-bloom-700">
              que floresce sua rotina.
            </span>
          </h1>

          <p className="max-w-prose text-base text-bloom-900/75">
            Tudo que seu intestino, sua pele e sua energia precisam num scoop só.
            Tão gostoso que vira o melhor minuto do seu dia.
          </p>

          {/* flavors */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-bloom-900/60">
              escolha o sabor
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {flavors.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFlavor(f.id)}
                  className={`group relative overflow-hidden rounded-2xl border p-2 text-left transition ${
                    flavor === f.id
                      ? "border-bloom-700 ring-2 ring-bloom-700/30"
                      : "border-bloom-700/15 hover:border-bloom-700/40"
                  }`}
                >
                  <Placeholder
                    label={f.label.split(" ")[0]}
                    tone={f.tone}
                    className="aspect-square rounded-xl"
                  />
                  <div className="mt-2 px-1">
                    <p className="text-xs font-semibold text-bloom-900">
                      {f.label}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-bloom-700">
                      {f.tag}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* bundles */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-bloom-900/60">
              escolha seu kit
            </p>
            <div className="grid gap-2">
              {bundles.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBundle(b.id)}
                  className={`relative flex items-center justify-between gap-3 rounded-2xl border p-4 text-left transition ${
                    bundle === b.id
                      ? "border-bloom-700 bg-bloom-50 ring-2 ring-bloom-700/20"
                      : "border-bloom-700/15 bg-white hover:border-bloom-700/40"
                  }`}
                >
                  {"featured" in b && b.featured && (
                    <span className="absolute -top-2 left-4 rounded-full bg-bloom-700 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cream-50">
                      mais escolhido
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-5 w-5 place-items-center rounded-full border-2 ${
                        bundle === b.id
                          ? "border-bloom-700 bg-bloom-700"
                          : "border-bloom-700/30"
                      }`}
                    >
                      {bundle === b.id && (
                        <span className="h-2 w-2 rounded-full bg-cream-50" />
                      )}
                    </span>
                    <div>
                      <p className="font-semibold text-bloom-950">
                        {b.title}
                        <span className="ml-2 text-xs font-medium text-bloom-700">
                          {b.pillar}
                        </span>
                      </p>
                      <p className="text-xs text-bloom-900/60">{b.sub}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {b.discount && (
                      <span className="mb-1 inline-block rounded-md bg-peach-300/40 px-1.5 py-0.5 text-[10px] font-bold text-bloom-900">
                        {b.discount}
                      </span>
                    )}
                    <p className="text-sm font-bold text-bloom-950">
                      {brl(b.price)}
                    </p>
                    <p className="text-[10px] text-bloom-900/50 line-through">
                      {brl(b.crossed)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-3xl border border-bloom-700/15 bg-white p-5 shadow-sm">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-bloom-700">
                  você paga
                </p>
                <p className="font-display text-3xl font-semibold text-bloom-950">
                  {brl(selected.price)}
                </p>
                <p className="text-xs text-bloom-900/60">
                  ou 12x de {brl(selected.price / 12)} sem juros
                </p>
              </div>
              <div className="text-right text-xs text-bloom-700">
                <p>🚚 frete grátis</p>
                <p>📦 envio em 24h</p>
              </div>
            </div>
            <button className="btn-primary mt-4 w-full !py-4 text-base">
              eu quero florescer →
            </button>
            <p className="mt-3 text-center text-[11px] text-bloom-900/60">
              30 dias de garantia · você devolve se não amar
            </p>
          </div>

          {/* payment icons */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-bloom-900/60">
            <span>aceita</span>
            {["Pix", "Visa", "Master", "Amex", "ApplePay", "GPay"].map((p) => (
              <span
                key={p}
                className="rounded-md border border-bloom-700/15 bg-white px-2 py-1 text-[10px] font-semibold text-bloom-900"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
