import { useAuth } from "../../contexts/useAuth";
import { Gallery } from "../../components";
import { useEffect, useState } from "react";
import { StudioService } from "../../services/StudioService";

export const Crew = () => {
  const { user, token } = useAuth();
  const [artist, setArtists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.studioId || !token) return;

    const fetchArtist = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await StudioService.getStudioArtists(user.studioId, token);
        setArtists(data);
      } catch (err) {
        setError(err?.message || "Error en la carga de artistas");
      } finally {
        setLoading(false);
      }
    };
    fetchArtist();
  }, [user?.studioId, token]);

  return (
    <div className="min-h-screen">
      <Gallery />
    </div>
  );
};
