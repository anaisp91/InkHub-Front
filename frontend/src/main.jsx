import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { AuthProivider } from "./contexts/authContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProivider>
      <RouterProvider router={router} />
    </AuthProivider>
  </StrictMode>,
);
