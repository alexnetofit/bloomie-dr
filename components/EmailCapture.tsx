export function EmailCapture() {
  return (
    <section className="container-x py-16">
      <div className="overflow-hidden rounded-3xl bg-bloom-700 p-8 text-cream-50 md:p-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="font-display text-3xl font-semibold leading-tight md:text-4xl">
              Ganha 10% de desconto na 1ª compra. 🌷
            </p>
            <p className="mt-3 text-sm text-cream-50/80">
              Entra na lista das besties e receba o cupom no e-mail em segundos.
              Sem spam, só conteúdo bom.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="seu melhor e-mail"
              className="w-full rounded-full border border-cream-50/20 bg-cream-50/10 px-5 py-3.5 text-sm text-cream-50 placeholder:text-cream-50/50 focus:border-cream-50/40 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-cream-50 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-bloom-900 transition hover:bg-cream-100"
            >
              quero o cupom
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
