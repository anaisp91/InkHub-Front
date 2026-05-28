import { useContext } from "react";
import { AuthContext } from "./authContext";
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};
