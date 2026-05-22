import { Navigate } from "react-router-dom";
import { authStore } from "../utils/authStore";

export const hasToken = () => {
  return !!authStore.get();
};

export const logOut = () => {
  authStore.clear();
  Navigate("/");
};
