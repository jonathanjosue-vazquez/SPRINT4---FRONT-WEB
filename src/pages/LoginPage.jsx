import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const timers = useRef([]);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    document.title = "Login — JOVI";

    return () => {
      timers.current.forEach(window.clearTimeout);
    };
  }, []);

  function definirMensagem(texto, tipo) {
    setMensagem(texto);
    setTipoMensagem(tipo);
  }

  function agendar(callback, atraso) {
    const timer = window.setTimeout(callback, atraso);
    timers.current.push(timer);
  }

  function lidarComLogin(event) {
    event.preventDefault();

    const destinoAposLogin = location.state?.from?.pathname || "/dashboard";
    const usuarioNormalizado = usuario.trim();

    if (!usuarioNormalizado || !senha) {
      definirMensagem("Preencha usuário e senha.", "error");
      return;
    }

    setEnviando(true);
    setMensagem("");
    setTipoMensagem("");

    agendar(() => {
      const usuarioEncontrado = login(usuarioNormalizado, senha);

      if (!usuarioEncontrado) {
        definirMensagem("Usuário ou senha incorretos.", "error");
        setEnviando(false);
        return;
      }

      definirMensagem("Login realizado com sucesso!", "success");
      agendar(() => navigate(destinoAposLogin, { replace: true }), 700);
    }, 300);
  }

  const corMensagem = tipoMensagem === "error" ? "text-red-600" : "text-primary-dark";

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <section
        className="w-full max-w-sm rounded-3xl border border-border bg-surface p-8 shadow-brand"
        aria-labelledby="login-title"
      >
        <Link to="/" className="text-lg font-extrabold text-dark">
          JOVI
        </Link>

        <h1 id="login-title" className="mt-4 text-2xl font-extrabold text-dark">
          Faça seu login
        </h1>
        <p className="mt-1 text-sm text-muted">Acesse sua Galeria Inteligente.</p>

        <form onSubmit={lidarComLogin} noValidate className="mt-6 grid gap-4">
          <div className="grid gap-1.5">
            <label htmlFor="usuario" className="text-sm font-medium text-dark">
              Usuário
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 focus-within:border-primary">
              <span className="material-symbols-outlined text-muted" aria-hidden="true">
                person
              </span>
              <input
                id="usuario"
                name="usuario"
                type="text"
                placeholder="admin"
                autoComplete="username"
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
                required
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="senha" className="text-sm font-medium text-dark">
              Senha
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 focus-within:border-primary">
              <span className="material-symbols-outlined text-muted" aria-hidden="true">
                lock
              </span>
              <input
                id="senha"
                name="senha"
                type="password"
                placeholder="••••"
                autoComplete="current-password"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                required
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
          >
            {enviando ? "Verificando..." : "Entrar"}
          </button>

          <p role="status" aria-live="polite" className={`text-sm ${corMensagem}`}>
            {mensagem}
          </p>
        </form>

        <p className="mt-4 text-xs text-muted">
          Credenciais de demonstração: <strong>admin / 123</strong>
        </p>

        <Link to="/" className="mt-6 block text-center text-sm text-muted hover:text-primary">
          ← Voltar para a página inicial
        </Link>
      </section>
    </main>
  );
}
