import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
import { useState } from "react";
export const ProfileNav = () => {
  const { logOut } = useAuth();
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <img
              className="block h-auto w-auto"
              src="/images/logos/InkHub-logo-blanco.png"
              alt="InkHub"
            />
          </div>
          <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
            <button
              className="md:hidden p-2 text-white "
              onClick={() => setOpen(!isOpen)}
            >
              ☰
            </button>

            <nav className="hidden md:flex items-center">
              <NavLink
                className="text-white hover:text-indigo-700 text-sm font-medium p-4"
                to={"crew"}
              >
                Crew
              </NavLink>
              <NavLink
                className="text-white hover:text-indigo-700 text-sm font-medium p-4"
                to={""}
              >
                Clients
              </NavLink>
              <NavLink className="text-white hover:text-indigo-700 text-sm font-medium p-4">
                Consents
              </NavLink>
              <button
                className="text-gray-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center border border-transparent text-sm font-medium rounded-md shadow-sm p-3 "
                onClick={logOut}
              >
                LogOut
              </button>
            </nav>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden border-t bg-gray-900">
            <nav className="flex flex-col py-2">
              <NavLink
                className="px-4 py-3 text-white hover:text-indigo-700"
                to="crew"
                onClick={() => setOpen(false)}
              >
                Crew
              </NavLink>

              <NavLink
                className="px-4 py-3 text-white hover:text-indigo-700"
                to=""
                onClick={() => setOpen(false)}
              >
                Clients
              </NavLink>

              <NavLink
                className="px-4 py-3 text-white hover:text-indigo-700"
                to=""
                onClick={() => setOpen(false)}
              >
                Consents
              </NavLink>

              <button
                className="px-4 py-3 text-left text-gray-400 hover:text-indigo-700"
                onClick={logOut}
              >
                LogOut
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
