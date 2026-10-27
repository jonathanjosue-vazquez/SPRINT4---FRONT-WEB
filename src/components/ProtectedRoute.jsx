import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function ProtectedRoute({ children }) {
  const { usuarioAtual } = useAuth();
  const location = useLocation();

  if (!usuarioAtual) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
