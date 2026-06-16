import { useEffect, useState, useCallback } from "react";
import { AuthService } from "../services/authService";
import { storage } from "../utils/storage";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => storage.get("token"));
  const [user, setUser] = useState(() => storage.get("user"));
  const [studio, setStudio] = useState(() => storage.get("studio"));

  useEffect(() => {
    storage.set("token", token);
  }, [token]);

  useEffect(() => {
    storage.set("user", user);
  }, [user]);

  useEffect(() => {
    storage.set("studio", studio);
  }, [studio]);
  console.log(storage);

  const login = useCallback(async (email, password) => {
    const data = await AuthService.login({ email, password });
    const tokenLogin = data.token ?? data?.data?.token;
    const userLogin = data.user ?? data?.data?.user ?? data?.data;
    const studioLogin = data.studio ?? data?.data?.studio;

    if (!tokenLogin)
      throw new Error("El servidor de backend no ha devuelto token");

    if (!studioLogin)
      throw new Error("El servidor backend no devuelve estudio");
    setToken(tokenLogin);
    setUser(userLogin ?? null);
    setStudio(studioLogin ?? null);

    return { token: tokenLogin, user: userLogin, studio: studioLogin };
  }, []);

  const logOut = useCallback(() => {
    setToken(null);
    setUser(null);
    setStudio(null);
    storage.remove("token");
    storage.remove("user");
    storage.remove("studio");
  }, []);

  const profile = useCallback(async () => {
    if (!token) return null;
    const profileData = await AuthService.profile(token);
    setUser(profileData);

    return profileData;
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, user, studio, login, logOut, profile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
