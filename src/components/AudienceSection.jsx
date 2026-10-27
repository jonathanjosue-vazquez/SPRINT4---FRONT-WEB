export default function AudienceSection({ items }) {
  return (
    <section
      id="publico"
      className="mx-auto w-[min(100%-32px,1120px)] py-16 sm:py-20"
      aria-labelledby="publico-title"
    >
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="inline-flex w-fit rounded-full bg-soft-blue px-3.5 py-1.5 text-xs font-bold text-primary-dark">
          Para quem é a JOVI
        </span>
        <h2 id="publico-title" className="mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-extrabold text-dark">
          Público-Alvo
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {items.map(({ title, description }) => (
          <article
            key={title}
            className="rounded-2xl border border-border bg-surface p-8 text-center shadow-brand"
          >
            <h3 className="text-lg font-semibold text-dark">{title}</h3>
            <p className="mt-3 text-sm text-muted">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
