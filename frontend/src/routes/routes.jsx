import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register/Register";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { NotFound } from "../pages/Not Found/NotFound";
import App from "../App";
import { PrivateRoute } from "./privateRoutes";
import { Home } from "../pages";

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
        element: <PrivateRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
