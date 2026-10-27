export default function FeatureSection({ id, kicker, title, items }) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      className="mx-auto w-[min(100%-32px,1120px)] py-16 sm:py-20"
      aria-labelledby={titleId}
    >
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="inline-flex w-fit rounded-full bg-soft-blue px-3.5 py-1.5 text-xs font-bold text-primary-dark">
          {kicker}
        </span>
        <h2 id={titleId} className="mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-extrabold text-dark">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon, title: itemTitle, description }) => (
          <article
            key={itemTitle}
            className="rounded-2xl border border-border bg-surface p-7 shadow-brand"
          >
            <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
              {icon}
            </span>
            <h3 className="mt-4 text-base font-semibold text-dark">{itemTitle}</h3>
            <p className="mt-2 text-sm text-muted">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
