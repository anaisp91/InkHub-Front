import { authStore } from "../utils/authStore";

export const hasToken = () => {
  return !!localStorage.getItem("token");
};

export const logOut = () => {
  authStore.clear?.();
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
};
