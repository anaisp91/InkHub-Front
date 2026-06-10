import { useAuth } from "../../contexts/useAuth";
import { Gallery } from "../../components";
import { useEffect, useState } from "react";
import { StudioService } from "../../services/StudioService";
import { Link } from "react-router-dom";

export const Crew = () => {
  const { user, token } = useAuth();
  const [artists, setArtists] = useState([]);
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
    <div className="min-h-screen ">
      <div className="flex flex-row-reverse m-10 ">
        <Link
          to="newArtist"
          className="btn bg-slate-400 text-black  font-semibold p-2 rounded-md btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        >
          + New Artist
        </Link>
      </div>

      <Gallery />
    </div>
  );
};
