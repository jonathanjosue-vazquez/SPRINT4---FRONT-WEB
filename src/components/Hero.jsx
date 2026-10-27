import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Hero() {
  const { usuarioAtual } = useAuth();
  const ctaTarget = usuarioAtual ? "/dashboard" : "/login";
  const ctaLabel = usuarioAtual ? "Acessar Minha Galeria" : "Começar Agora";

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-gradient"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto flex w-[min(100%-32px,1120px)] flex-col items-center gap-6 py-20 text-center sm:py-28">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold text-white">
          ✦ Agora com câmera inteligente
        </span>

        <h1
          id="hero-title"
          className="max-w-3xl text-[clamp(2.1rem,6vw,3.5rem)] font-extrabold leading-tight text-white"
        >
          Capture<span className="text-dark/40">/</span>Organize
          <span className="text-dark/40">/</span>Estude.
        </h1>

        <p className="max-w-xl text-base text-white/90 sm:text-lg">
          A câmera do seu smartphone, redesenhada para o dia a dia de quem estuda: fotografe o
          quadro e deixe a JOVI organizar tudo por disciplina, automaticamente.
        </p>

        <Link
          className="rounded-full bg-dark px-7 py-3 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.03]"
          to={ctaTarget}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
