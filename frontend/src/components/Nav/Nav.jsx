import { NavLink } from "react-router-dom";
// import { useAuth } from "../../contexts/useAuth";

export const Nav = () => {
  // const { logOut, token } = useAuth();
  return (
    <div>
      <nav className="nav">
        <NavLink
          className="text-gray-700 hover:text-indigo-700 text-sm font-medium p-6"
          to={"/"}
        >
          InkHub
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
        {/* <NavLink to={"/profile"}>Dashboard</NavLink> */}
        {/* <button onClick={logOut}>LogOut</button> */}
      </nav>
      {/* <a
        
        href="#"
      >
        Login
      </a> */}
      {/* <a
        className="text-gray-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
        href="#"
      >
        Sign up */}
      {/* </a> */}
    </div>
  );
};
