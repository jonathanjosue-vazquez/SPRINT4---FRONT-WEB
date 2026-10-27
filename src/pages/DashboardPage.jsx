import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import Gallery from "../components/Gallery";
import { useGallery } from "../hooks/useGallery";

export default function DashboardPage() {
  const { usuarioAtual, logout } = useAuth();
  const navigate = useNavigate();
  const { itens, carregando, erro } = useGallery();
  const [busca, setBusca] = useState("");
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState("Todas");

  useEffect(() => {
    document.title = "Minha Galeria — JOVI";
  }, []);

  const disciplinas = useMemo(() => {
    const unicas = new Set(itens.map((item) => item.disciplina));
    return ["Todas", ...unicas];
  }, [itens]);

  const itensFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return itens.filter((item) => {
      const combinaComBusca = !termo || item.titulo.toLowerCase().includes(termo);
      const combinaComDisciplina =
        disciplinaSelecionada === "Todas" || item.disciplina === disciplinaSelecionada;

      return combinaComBusca && combinaComDisciplina;
    });
  }, [itens, busca, disciplinaSelecionada]);

  function lidarComLogout() {
    logout();
    navigate("/");
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-[min(100%-32px,1120px)] py-10">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <Link to="/" className="text-lg font-extrabold text-dark" aria-label="JOVI — início">
            JOVI
          </Link>

          <button
            type="button"
            onClick={lidarComLogout}
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-dark transition-colors hover:border-primary hover:text-primary"
          >
            Sair
          </button>
        </header>

        <section className="py-8" aria-labelledby="dashboard-title">
          <span className="inline-flex w-fit rounded-full bg-soft-blue px-3.5 py-1.5 text-xs font-bold text-primary-dark">
            Área do estudante
          </span>
          <h1 id="dashboard-title" className="mt-3 text-[clamp(1.8rem,4.5vw,2.5rem)] font-extrabold text-dark">
            Olá, {usuarioAtual.usuario}!
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Esta é a sua Galeria Inteligente: tudo o que você capturou com a JOVI, já organizado
            por disciplina.
          </p>
        </section>

        <section className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5">
            <span className="material-symbols-outlined text-muted" aria-hidden="true">
              search
            </span>
            <input
              type="search"
              placeholder="Buscar por título..."
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              className="w-full bg-transparent text-sm outline-none"
              aria-label="Buscar na galeria por título"
            />
          </div>

          <select
            value={disciplinaSelecionada}
            onChange={(event) => setDisciplinaSelecionada(event.target.value)}
            className="rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-dark outline-none focus:border-primary"
            aria-label="Filtrar por disciplina"
          >
            {disciplinas.map((disciplina) => (
              <option key={disciplina} value={disciplina}>
                {disciplina}
              </option>
            ))}
          </select>
        </section>

        <section aria-live="polite">
          {carregando && <p className="text-sm text-muted">Carregando sua galeria...</p>}

          {erro && !carregando && (
            <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {erro}
            </p>
          )}

          {!carregando && !erro && <Gallery itens={itensFiltrados} />}
        </section>

        <p className="mt-10 rounded-xl border border-border bg-surface p-4 text-xs text-muted">
          <strong className="text-dark">Projeto acadêmico:</strong> esta área usa autenticação
          local demonstrativa (localStorage) e dados de uma API JSON local — não substituem um
          backend real.
        </p>
      </div>
    </main>
  );
}
