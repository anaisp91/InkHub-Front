import { createBrowserRouter } from "react-router-dom";
import { Login, Register, Dashboard, NotFound, Home } from "../pages";
import { ProtectedRoutes } from "../components/Auth/ProtectedRoutes";
import App from "../App";

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
        element: (
          <ProtectedRoutes>
            <Dashboard />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
