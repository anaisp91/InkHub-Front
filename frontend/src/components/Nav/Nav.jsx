import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <NavLink
          className="text-gray-700 hover:text-indigo-700 text-sm font-medium p-6"
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className="text-gray-700 hover:text-indigo-700 text-sm font-medium p-4"
          to={"/register"}
        >
          Register
        </NavLink>
        <NavLink
          className="text-gray-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm p-4 "
          to={"/login"}
        >
          Login
        </NavLink>
      </nav>
    </div>
  );
};
