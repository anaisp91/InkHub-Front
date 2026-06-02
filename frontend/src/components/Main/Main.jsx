import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <main className="flex-1 w-full flex">
      <Outlet />
    </main>
  );
};
