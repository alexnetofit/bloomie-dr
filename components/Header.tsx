export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-bloom-700/10 bg-cream-50/80 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-bloom-700 text-cream-50">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 2C8 6 6 9 6 13a6 6 0 0012 0c0-4-2-7-6-11z" />
            </svg>
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight text-bloom-900">
            bloomie
            <span className="text-bloom-500">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-bloom-900/80 md:flex">
          <a className="hover:text-bloom-700" href="#produto">
            Produto
          </a>
          <a className="hover:text-bloom-700" href="#ingredientes">
            Ingredientes
          </a>
          <a className="hover:text-bloom-700" href="#resultados">
            Resultados
          </a>
          <a className="hover:text-bloom-700" href="#faq">
            Dúvidas
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="hidden rounded-full p-2 text-bloom-900 hover:bg-bloom-100 sm:inline-flex"
            aria-label="Conta"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>
          </button>
          <a href="#produto" className="btn-primary !px-4 !py-2 text-xs">
            comprar
          </a>
        </div>
      </div>
    </header>
  );
}
