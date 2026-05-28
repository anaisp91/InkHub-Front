import { useAuth } from "../../contexts/useAuth";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
