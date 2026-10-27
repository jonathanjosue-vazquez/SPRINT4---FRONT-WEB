const USUARIOS_PADRAO = [
  { usuario: "admin", senha: "123" },
  { usuario: "joao", senha: "abc" },
  { usuario: "maria", senha: "456" },
];

const USERS_STORAGE_KEY = "hello-world-users";
const CURRENT_USER_STORAGE_KEY = "hello-world-current-user";

function estaNoNavegador() {
  return typeof window !== "undefined";
}

function ehCredencialValida(value) {
  return (
    value &&
    typeof value.usuario === "string" &&
    typeof value.senha === "string"
  );
}

export function obterUsuarios() {
  if (!estaNoNavegador()) {
    return USUARIOS_PADRAO;
  }

  try {
    const usuariosSalvos = window.localStorage.getItem(USERS_STORAGE_KEY);

    if (!usuariosSalvos) {
      return USUARIOS_PADRAO;
    }

    const usuarios = JSON.parse(usuariosSalvos);

    return Array.isArray(usuarios) && usuarios.every(ehCredencialValida)
      ? usuarios
      : USUARIOS_PADRAO;
  } catch {
    return USUARIOS_PADRAO;
  }
}

export function obterUsuarioAtual() {
  if (!estaNoNavegador()) {
    return null;
  }

  try {
    const usuarioSalvo = window.localStorage.getItem(CURRENT_USER_STORAGE_KEY);

    if (!usuarioSalvo) {
      return null;
    }

    const usuario = JSON.parse(usuarioSalvo);

    return usuario && typeof usuario.usuario === "string" && usuario.usuario
      ? { usuario: usuario.usuario }
      : null;
  } catch {
    return null;
  }
}

export function autenticar(usuario, senha) {
  return obterUsuarios().find(
    (usuarioCadastrado) =>
      usuarioCadastrado.usuario === usuario && usuarioCadastrado.senha === senha,
  );
}

export function salvarUsuarioAtual(usuario) {
  if (!estaNoNavegador()) {
    return;
  }

  try {
    window.localStorage.setItem(
      CURRENT_USER_STORAGE_KEY,
      JSON.stringify({ usuario }),
    );
  } catch {
    // O login continua disponível mesmo quando o armazenamento do navegador falha.
  }
}

export function removerUsuarioAtual() {
  if (!estaNoNavegador()) {
    return;
  }

  try {
    window.localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
  } catch {
    // Ignora falhas do armazenamento local no fluxo demonstrativo.
  }
}
