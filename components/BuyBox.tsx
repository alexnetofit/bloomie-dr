"use client";

import { useState } from "react";
import { SmartImage } from "./SmartImage";

const flavors = [
  {
    id: "pink-lemonade",
    label: "Pink Lemonade",
    tag: "best-seller",
    note: "morango + limão siciliano",
    img: "/products/stick.png",
    bg: "#ffe2ed",
  },
  {
    id: "hibisco",
    label: "Hibisco & Lichia",
    tag: "novo sabor",
    note: "floral + adocicado",
    img: "/products/stick-hibisco.png",
    bg: "#fab8cd",
  },
  {
    id: "frutas-vermelhas",
    label: "Frutas Vermelhas",
    tag: "vendendo rápido",
    note: "morango + framboesa + amora",
    img: "/products/stick-berry.png",
    bg: "#f592b2",
  },
];

const bundles = [
  {
    id: "single",
    title: "1 caixinha",
    sub: "30 sachês · 1 mês",
    price: 197.9,
    crossed: 247.9,
    pillar: "experimentar",
    discount: null as string | null,
  },
  {
    id: "duo",
    title: "2 caixinhas",
    sub: "60 sachês · 2 meses",
    price: 339.8,
    crossed: 395.8,
    pillar: "casal de besties",
    discount: "14% OFF",
  },
  {
    id: "trio",
    title: "3 caixinhas",
    sub: "90 sachês · 3 meses",
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
  const selectedFlavor = flavors.find((f) => f.id === flavor)!;

  return (
    <section
      id="produto"
      className="grain relative overflow-hidden bg-cream-50"
    >
      {/* floating petals */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-10 top-20 h-40 w-40 rounded-full bg-rose-300 blur-3xl opacity-50"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 h-56 w-56 rounded-full bg-bloom-200 blur-3xl opacity-60"
      />

      <div className="container-x relative grid items-start gap-10 py-10 md:grid-cols-2 md:gap-14 md:py-16">
        {/* gallery */}
        <div className="grid gap-3">
          <div className="relative">
            <SmartImage
              src="/products/pouch.png"
              alt="Bloomie Pink Lemonade — caixinha com 30 sachês"
              fallback="#ffe2ed"
              priority
              className="aspect-square rounded-3xl"
            />
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream-50 px-3 py-1 text-xs font-semibold text-bloom-700 shadow-sm">
              ⭐ 4.9 · 28.4k besties
            </span>
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-bloom-600 px-3 py-1 text-xs font-semibold text-cream-50 shadow-sm">
              30% OFF
            </span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <SmartImage
              src="/products/stick.png"
              alt="Sachê individual Bloomie"
              fallback="#fab8cd"
              className="aspect-square rounded-2xl"
            />
            <SmartImage
              src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80&auto=format&fit=crop"
              alt="Bebida pink lemonade"
              className="aspect-square rounded-2xl"
            />
            <SmartImage
              src="https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=600&q=80&auto=format&fit=crop"
              alt="Morangos"
              className="aspect-square rounded-2xl"
            />
            <SmartImage
              src="https://images.unsplash.com/photo-1582176604856-e824b4736522?w=600&q=80&auto=format&fit=crop"
              alt="Limão siciliano"
              className="aspect-square rounded-2xl"
            />
          </div>
        </div>

        {/* offer */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="pill">+36 ativos</span>
            <span className="pill">sem glúten · sem lactose</span>
            <span className="pill">0 açúcar</span>
            <span className="pill">⭐ 4.9 · 28.4k</span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-bloom-900 md:text-5xl">
            Viva seu momento
            <span className="wordmark block text-5xl md:text-6xl">
              Bloomie.
            </span>
          </h1>

          <p className="max-w-prose text-base text-bloom-900/75">
            Suco verde natural em pó, agora em sachê e com sabor{" "}
            <strong className="text-bloom-700">Pink Lemonade</strong>. 36+
            greens & superfoods, 13 vitaminas e 10 minerais pra digestão leve,
            energia e zero inchaço. Tão gostoso que você vai lembrar de tomar.
          </p>

          {/* flavors */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-bloom-900/60">
              escolha o sabor · {selectedFlavor.label}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {flavors.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFlavor(f.id)}
                  className={`group relative overflow-hidden rounded-2xl border p-2 text-left transition ${
                    flavor === f.id
                      ? "border-bloom-600 ring-2 ring-bloom-600/30"
                      : "border-bloom-600/15 hover:border-bloom-600/40"
                  }`}
                >
                  <SmartImage
                    src={f.img}
                    alt={f.label}
                    fallback={f.bg}
                    className="aspect-square rounded-xl"
                  />
                  <div className="mt-2 px-1">
                    <p className="text-xs font-semibold text-bloom-900">
                      {f.label}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-bloom-600">
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
                      ? "border-bloom-600 bg-bloom-50 ring-2 ring-bloom-600/20"
                      : "border-bloom-600/15 bg-white hover:border-bloom-600/40"
                  }`}
                >
                  {"featured" in b && b.featured && (
                    <span className="absolute -top-2 left-4 rounded-full bg-bloom-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cream-50">
                      mais escolhido
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-5 w-5 place-items-center rounded-full border-2 ${
                        bundle === b.id
                          ? "border-bloom-600 bg-bloom-600"
                          : "border-bloom-600/30"
                      }`}
                    >
                      {bundle === b.id && (
                        <span className="h-2 w-2 rounded-full bg-cream-50" />
                      )}
                    </span>
                    <div>
                      <p className="font-semibold text-bloom-900">
                        {b.title}
                        <span className="ml-2 text-xs font-medium text-bloom-600">
                          {b.pillar}
                        </span>
                      </p>
                      <p className="text-xs text-bloom-900/60">{b.sub}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {b.discount && (
                      <span className="mb-1 inline-block rounded-md bg-rose-200 px-1.5 py-0.5 text-[10px] font-bold text-bloom-800">
                        {b.discount}
                      </span>
                    )}
                    <p className="text-sm font-bold text-bloom-900">
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
          <div className="rounded-3xl border border-bloom-600/15 bg-white p-5 shadow-sm">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-bloom-600">
                  você paga
                </p>
                <p className="font-display text-3xl font-semibold text-bloom-900">
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

          <div className="flex flex-wrap items-center gap-2 text-xs text-bloom-900/60">
            <span>aceita</span>
            {["Pix", "Visa", "Master", "Amex", "ApplePay", "GPay"].map((p) => (
              <span
                key={p}
                className="rounded-md border border-bloom-600/15 bg-white px-2 py-1 text-[10px] font-semibold text-bloom-900"
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
