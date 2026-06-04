import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
export const ProfileNav = () => {
  const { logOut } = useAuth();
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <img
              className="block h-auto w-auto"
              src="/images/logos/logo-inkhub.png"
            />
          </div>
          <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
            <nav className="nav">
              <NavLink
                className="text-gray-700 hover:text-indigo-700 text-sm font-medium p-4"
                to={"/crew"}
              >
                Crew
              </NavLink>
              <NavLink
                className="text-gray-700 hover:text-indigo-700 text-sm font-medium p-4"
                to={""}
              >
                Clients
              </NavLink>
              <NavLink className="text-gray-700 hover:text-indigo-700 text-sm font-medium p-4">
                Consents
              </NavLink>
              <button
                className="text-gray-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm p-4 "
                onClick={logOut}
              >
                LogOut
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
