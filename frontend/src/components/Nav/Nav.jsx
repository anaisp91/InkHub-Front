import "./Nav.css";
import { NavLink } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to={"/login"}>
        <button className="button">Login</button>
      </NavLink>
      <NavLink to={"/register"}>
        <button className="button">Register</button>
      </NavLink>
      <NavLink to={"/"}>
        <button className="button">Dashboard</button>
      </NavLink>
    </nav>
  );
};
