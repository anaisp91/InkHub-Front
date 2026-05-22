import { createBrowserRouter, redirect } from "react-router-dom";
import { Login, Register, Dashboard, NotFound, Home } from "../pages";
import App from "../App";
import { authStore } from "../utils/authStore";

const requireAuth = () => {
  if (!authStore.get()) throw redirect("/login");
  return null;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Dashboard />,
        loader: requireAuth,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
