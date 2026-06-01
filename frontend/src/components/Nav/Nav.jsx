import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

export const Nav = () => {
  const { logOut, token } = useAuth();
  return (
    <div>
      <nav className="nav">
        <NavLink to={"/"}>InkHub</NavLink>
        <NavLink to={"/register"}>Register</NavLink>

        {!token ? (
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
