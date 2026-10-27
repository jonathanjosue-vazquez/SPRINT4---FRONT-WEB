import { createContext, useContext, useMemo, useState } from "react";
import {
  autenticar,
  obterUsuarioAtual,
  removerUsuarioAtual,
  salvarUsuarioAtual,
} from "./storage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuarioAtual, setUsuarioAtual] = useState(obterUsuarioAtual);

  const value = useMemo(
    () => ({
      usuarioAtual,
      login(usuario, senha) {
        const usuarioEncontrado = autenticar(usuario, senha);

        if (!usuarioEncontrado) {
          return null;
        }

        const usuarioAtual = { usuario: usuarioEncontrado.usuario };
        salvarUsuarioAtual(usuarioAtual.usuario);
        setUsuarioAtual(usuarioAtual);

        return usuarioAtual;
      },
      logout() {
        removerUsuarioAtual();
        setUsuarioAtual(null);
      },
    }),
    [usuarioAtual],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider.");
  }

  return context;
}
