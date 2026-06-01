import { Outlet } from "react-router-dom";
import "./Main.css";
export const Main = () => {
  return (
    <main className="main-container">
      <Outlet />
    </main>
  );
};
