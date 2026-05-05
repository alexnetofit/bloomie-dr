"use client";

import { useEffect, useState } from "react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownBanner() {
  const [target] = useState(() => {
    const t = new Date();
    t.setHours(23, 59, 59, 999);
    return t.getTime();
  });
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);

  return (
    <div className="bg-bloom-900 text-cream-50">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-xs">
        <span className="font-medium">🌱 só hoje · 35% OFF no kit floração</span>
        <span className="opacity-70">·</span>
        <span className="font-medium">🚚 frete grátis a partir de R$199</span>
        <span className="opacity-70">·</span>
        <span className="flex items-center gap-1.5">
          <span className="opacity-80">a promoção encerra em</span>
          <span className="rounded-md bg-cream-50/10 px-1.5 py-0.5 font-mono tabular-nums">
            {pad(h)}:{pad(m)}:{pad(s)}
          </span>
        </span>
      </div>
    </div>
  );
}
