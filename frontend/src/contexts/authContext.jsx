import { createContext, useEffect, useState, useCallback } from "react";

import { authService } from "../services/authService";
import { storage } from "../utils/storage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => storage.get("token"));
  const [user, setUser] = useState(() => storage.get("user"));

  useEffect(() => {
    storage.set("token", token);
  }, [token]);

  useEffect(() => {
    storage.set("user", user);
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

  const profile = useCallback(async () => {
    if (!token) return null;
    const profile = await authService.profile(token);
    setUser(profile);
    return profile;
  }, [token]);

  return (
    <AuthContext.AuthProivider value={{ token, user, login, logOut, profile }}>
      {children}
    </AuthContext.AuthProivider>
  );
};
