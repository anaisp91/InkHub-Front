import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/useAuth";
import { ProfileNav } from "../../components";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  const { profile, token, user } = useAuth();
  const [error, setError] = useState(
    !token ? "No hay token de autenticación" : null,
  );

  useEffect(() => {
    if (!token) return;
    profile().catch((err) => {
      setError(err.message);
    });
  }, [token, profile]);
  return (
    <div className="">
      <ProfileNav />
      <main className="">
        {error && <p>{error}</p>}
        {user && <p>{user.email}</p>}
        <Outlet />
      </main>
    </div>
  );
};
