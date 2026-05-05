export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-bloom-600/10 bg-cream-50/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-baseline">
          <span className="wordmark text-3xl">Bloomie</span>
          <span className="ml-1 text-xs font-medium uppercase tracking-[0.2em] text-bloom-600/70">
            ®
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-bloom-900/80 md:flex">
          <a className="hover:text-bloom-600" href="#produto">
            Produto
          </a>
          <a className="hover:text-bloom-600" href="#ingredientes">
            Ingredientes
          </a>
          <a className="hover:text-bloom-600" href="#resultados">
            Resultados
          </a>
          <a className="hover:text-bloom-600" href="#faq">
            Dúvidas
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="hidden rounded-full p-2 text-bloom-900 hover:bg-bloom-100 sm:inline-flex"
            aria-label="Conta"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
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
