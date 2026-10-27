const ICONE_POR_TIPO = {
  quadro: "draw",
  caderno: "menu_book",
  slide: "slideshow",
};

const DATA_FORMATTER = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" });

export default function GalleryItem({ titulo, disciplina, tipo, data }) {
  const icone = ICONE_POR_TIPO[tipo] || "image";
  const dataFormatada = DATA_FORMATTER.format(new Date(`${data}T00:00:00`));

  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 shadow-brand">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-blue text-primary-dark">
        <span className="material-symbols-outlined" aria-hidden="true">
          {icone}
        </span>
      </span>

      <h3 className="text-sm font-semibold leading-snug text-dark">{titulo}</h3>

      <div className="mt-auto flex items-center justify-between text-xs text-muted">
        <span className="rounded-full bg-background px-2.5 py-1 font-medium text-primary-dark">
          {disciplina}
        </span>
        <span>{dataFormatada}</span>
      </div>
    </article>
  );
}
