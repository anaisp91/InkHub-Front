import { createBrowserRouter, redirect } from "react-router-dom";
import { Login, Register, Dashboard, NotFound, Home } from "../pages";
import App from "../App";

const requireAuth = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (!token || !user) {
    throw redirect("/login");
  }

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
