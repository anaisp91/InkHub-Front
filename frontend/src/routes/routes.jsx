import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register/Register";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { NotFound } from "../pages/Not Found/NotFound";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
