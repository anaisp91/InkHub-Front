import "./Nav.css";
import { NavLink } from "react-router-dom";
import { hasToken, logOut } from "../../layouts/authLayout";

export const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/register"}>Register</NavLink>

        {!hasToken() ? (
          <NavLink to={"/login"}>Login</NavLink>
        ) : (
          <>
            <NavLink to={"/profile"}>Dashboard</NavLink>
            <button onClick={logOut}>LogOut</button>
          </>
        )}
      </nav>
    </div>
  );
};
