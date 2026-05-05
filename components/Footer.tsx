export function Footer() {
  return (
    <footer className="bg-bloom-950 text-cream-50">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <span className="font-display text-2xl font-semibold">
            bloomie<span className="text-bloom-300">.</span>
          </span>
          <p className="mt-3 max-w-xs text-sm text-cream-50/70">
            Suplemento de greens com 38 ativos pra quem quer florescer todo dia.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cream-50/50">
            produto
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream-50/85">
            <li>
              <a href="#produto" className="hover:text-cream-50">
                Comprar
              </a>
            </li>
            <li>
              <a href="#ingredientes" className="hover:text-cream-50">
                Ingredientes
              </a>
            </li>
            <li>
              <a href="#resultados" className="hover:text-cream-50">
                Resultados
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-cream-50">
                Dúvidas
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cream-50/50">
            ajuda
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream-50/85">
            <li>Fale com a gente</li>
            <li>Rastreio do pedido</li>
            <li>Política de troca</li>
            <li>Revendedores</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cream-50/50">
            siga
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream-50/85">
            <li>Instagram @usebloomie</li>
            <li>TikTok @usebloomie</li>
            <li>Pinterest /usebloomie</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream-50/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-cream-50/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bloomie · CNPJ 00.000.000/0001-00</p>
          <p>
            Este produto não substitui uma alimentação equilibrada. Consulte um
            profissional de saúde.
          </p>
        </div>
      </div>
    </footer>
  );
}
