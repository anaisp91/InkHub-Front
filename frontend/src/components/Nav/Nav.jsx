import "./Nav.css";
import { NavLink } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to={"/"}>Dashboard</NavLink>
    </nav>
  );
};
