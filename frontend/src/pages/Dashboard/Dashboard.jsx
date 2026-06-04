import { useEffect, useState } from "react";
import { Gallery } from "../../components";
import { useAuth } from "../../contexts/useAuth";

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
    <div>
      <Gallery />
      <div>
        {error && <p>{error}</p>}
        {user && <p>{user.email}</p>}
      </div>
    </div>
  );
};
