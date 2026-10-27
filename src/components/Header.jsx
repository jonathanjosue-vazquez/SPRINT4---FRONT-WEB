import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const LINKS = [
  { href: "#solucao", label: "Solução" },
  { href: "#publico", label: "Público-Alvo" },
  { href: "#jornada", label: "Galeria" },
  { href: "#equipe", label: "Equipe" },
];

export default function Header() {
  const { usuarioAtual } = useAuth();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex w-[min(100%-32px,1120px)] items-center justify-between py-4">
        <a
          href="#inicio"
          className="text-lg font-extrabold tracking-tight text-dark"
          aria-label="JOVI — início"
          onClick={() => setMenuAberto(false)}
        >
          JOVI
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="text-sm font-medium text-text hover:text-primary">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-brand transition-colors hover:bg-primary-dark"
            to={usuarioAtual ? "/dashboard" : "/login"}
          >
            {usuarioAtual ? "Minha Galeria" : "Entrar"}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-dark md:hidden"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {menuAberto ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuAberto && (
        <nav
          className="border-t border-border bg-surface px-4 pb-4 md:hidden"
          aria-label="Navegação principal (mobile)"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-lg px-2 py-2 text-sm font-medium text-text hover:bg-background"
                  onClick={() => setMenuAberto(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Link
                className="block rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-white"
                to={usuarioAtual ? "/dashboard" : "/login"}
                onClick={() => setMenuAberto(false)}
              >
                {usuarioAtual ? "Minha Galeria" : "Entrar"}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
