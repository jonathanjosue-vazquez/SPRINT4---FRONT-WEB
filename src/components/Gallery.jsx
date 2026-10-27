import GalleryItem from "./GalleryItem";

// Componente puramente de apresentação: recebe uma lista de itens via props
// e delega a renderização de cada um para GalleryItem. Não sabe de onde os
// dados vieram (API local hoje, poderia ser qualquer outra fonte amanhã).
export default function Gallery({ itens }) {
  if (itens.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center text-sm text-muted">
        Nenhuma captura encontrada para esse filtro.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {itens.map((item) => (
        <GalleryItem key={item.id} {...item} />
      ))}
    </div>
  );
}
