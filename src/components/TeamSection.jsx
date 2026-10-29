import { integrantes } from "../data/equipe";

function obterIniciais(nome) {
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();
}

export default function TeamSection() {
  return (
    <div className="mx-auto w-[min(100%-32px,1120px)] py-16 text-center sm:py-20">
      <span className="inline-flex w-fit rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white">
        Quem está por trás
      </span>
      <h2 className="mt-3 text-[clamp(1.8rem,4.5vw,2.5rem)] font-extrabold text-white">
        Nossa Equipe
      </h2>

      {/* Ajustado para grid-cols-3 direto no mobile com espaçamento responsivo */}
      <div
        className="mt-10 grid grid-cols-3 gap-2 sm:gap-8 justify-center items-start max-w-3xl mx-auto"
        aria-live="polite"
      >
        {integrantes.map(({ nome, rm, foto }) => (
          <article key={rm} className="flex flex-col items-center gap-2">
            <div className="h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full bg-white/10 text-base sm:text-lg font-bold text-white">
              {foto ? (
                <img src={foto} alt={nome} className="h-full w-full object-cover" />
              ) : (
                <span className="flex h-full w-full items-center justify-center">
                  {obterIniciais(nome)}
                </span>
              )}
            </div>
            <h3 className="text-xs sm:text-sm font-semibold text-white leading-tight">
              {nome}
            </h3>
            <span className="text-[10px] sm:text-xs text-white/70">{rm}</span>
          </article>
        ))}
      </div>
    </div>
  );
}