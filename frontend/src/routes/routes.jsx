import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Login,
  Register,
  Dashboard,
  NotFound,
  Home,
  ArtistProfile,
  Crew,
  NewArtist,
  EditArtist,
} from "../pages";
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
          { index: true, element: <Home /> },
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
          { path: "*", element: <NotFound /> },
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
            children: [
              { index: true, element: <Navigate to="crew" replace /> },
              {
                path: "crew",
                children: [
                  { index: true, element: <Crew /> },
                  { path: "new", element: <NewArtist /> },
                  { path: ":artistId", element: <ArtistProfile /> },
                  { path: ":artistId/edit", element: <EditArtist /> },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
