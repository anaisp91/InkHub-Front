import { useEffect, useState, useCallback } from "react";
import { AuthService } from "../services/authService";
import { storage } from "../utils/storage";
import { AuthContext } from "./authContext";
import { StudioService } from "../services/StudioService";

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
    if (studio) {
      storage.set("studio", studio);
    } else {
      storage.remove("studio");
    }
  }, [studio]);

  const login = useCallback(async (email, password) => {
    const data = await AuthService.login({ email, password });
    // console.log("login Response", data);
    const tokenLogin = data.token;
    const userLogin = data.user;

    if (!tokenLogin)
      throw new Error("El servidor de backend no ha devuelto token");

    // console.log("tokenLogin:", tokenLogin);
    // console.log("userLogin:", userLogin);

    setToken(tokenLogin);
    setUser(userLogin ?? null);

    return { token: tokenLogin, user: userLogin };
  }, []);

  const fetchStudio = useCallback(
    async (studioId) => {
      // console.log("fetchinng Called");
      // console.log("studioId", studioId);
      // console.log("token", token);
      if (!studioId || !token) return;

      const studioData = await StudioService.getStudioById(studioId, token);
      if (!studioData) {
        throw new Error("El servidor no ha encontardo el Studio");
      }

      // console.log("studioData response:", studioData);
      setStudio(studioData);
    },
    [token],
  );

  const studioId = user?.studio?.id;

  // console.log("USER IN STATE", user);
  // console.log("USER:STUDIO", user?.studio);

  useEffect(() => {
    // console.log("useEffect trigger:");
    // console.log("studioID", studioId);
    // console.log("token", token);

    if (!studioId || !token) return;
    fetchStudio(studioId);
  }, [studioId, token, fetchStudio]);

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
