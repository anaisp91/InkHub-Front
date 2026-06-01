import { createBrowserRouter } from "react-router-dom";
import { Login, Register, Dashboard, NotFound, Home } from "../pages";
import { ProtectedRoutes } from "../components/Auth/ProtectedRoutes";
import App from "../App";
import { DashboardLayout, PublicLayout } from "../layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <PublicLayout />,
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
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        element: (
          <ProtectedRoutes>
            <DashboardLayout />
          </ProtectedRoutes>
        ),
        children: [
          {
            path: "profile",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
