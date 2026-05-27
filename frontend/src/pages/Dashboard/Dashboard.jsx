import { useEffect, useState } from "react";
import { Gallery } from "../../components";
import { AuthService } from "../../services/authService";

export const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(
    !token ? "No hay token de autenticación" : null,
  );

  useEffect(() => {
    if (!token) return;

    AuthService.profile(token)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [token]);
  return (
    <div id="dashboard-container">
      <Gallery />
      <div>
        {error && <p>{error}</p>}
        {user && <p>{user.email}</p>}
      </div>
    </div>
  );
};
