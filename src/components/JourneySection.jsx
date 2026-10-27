import tela1 from "../assets/jornada/tela1.png";
import tela2 from "../assets/jornada/tela2.png";
import tela3 from "../assets/jornada/tela3.png";
import tela4 from "../assets/jornada/tela4.png";
import tela5 from "../assets/jornada/tela5.png";
import { jornada } from "../data/conteudo";

const IMAGENS = { tela1, tela2, tela3, tela4, tela5 };

export default function JourneySection() {
  return (
    <section
      id="jornada"
      className="mx-auto w-[min(100%-32px,1120px)] py-16 sm:py-20"
      aria-labelledby="jornada-title"
    >
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="inline-flex w-fit rounded-full bg-soft-blue px-3.5 py-1.5 text-xs font-bold text-primary-dark">
          Da câmera à Galeria Inteligente
        </span>
        <h2 id="jornada-title" className="mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-extrabold text-dark">
          Como funciona
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {jornada.map(({ id, legenda, descricao }, index) => (
          <figure
            key={id}
            className="overflow-hidden rounded-2xl border border-border bg-surface shadow-brand"
          >
            <img
              src={IMAGENS[id]}
              alt={legenda}
              className="h-56 w-full object-cover object-top sm:h-64"
              loading="lazy"
            />
            <figcaption className="p-5">
              <span className="text-xs font-bold text-primary">{`0${index + 1}`}</span>
              <h3 className="mt-1 text-sm font-semibold text-dark">{legenda}</h3>
              <p className="mt-1 text-xs text-muted">{descricao}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
