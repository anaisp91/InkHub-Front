import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import { AuthService, authService } from "../services/authService";
import { storage } from "../utils/storage";

const AuthContext = createContext(null);

export const AuthProivider = ({ children }) => {
  const [token, setToken] = useState(() => storage.get("token"));
  const [user, setUser] = useState(() => storage.get("user"));

  useEffect(() => {
    storage.set("token");
  }, [token]);

  useEffect(() => {
    storage.set("user");
  }, [user]);

  const login = useCallback(async (email, password) => {
    const data = await authService.login({ email, password });
    const tokenLogin = data.token ?? data?.data?.token;
    const userLogin = data.user ?? data?.data?.user ?? data?.data;

    if (!tokenLogin)
      throw new Error("El servidor de backend no ha devuelto token");

    setToken(tokenLogin);
    setUser(userLogin ?? null);

    return { token: tokenLogin, user: userLogin };
  }, []);

  const logOut = useCallback(() => {
    setToken(null);
    setUser(null);
    storage.remove("token");
    storage.remove("user");
  }, []);

  const profile = useCallback(()=>{
    if(!token) return null
    const profile = await AuthService.profile(token)
    setUser(profile)
    return profile
  },[token])
};
