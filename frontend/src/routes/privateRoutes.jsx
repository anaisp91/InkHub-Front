import { Outlet, Navigate } from "react-router-dom";
import { authStore } from "../utils/authStore";

export const PrivateRoute = () => {
  const token = authStore.get();

  return token ? <Outlet /> : <Navigate to={"/login"} />;
};
