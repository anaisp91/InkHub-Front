import { useAuth } from "../../contexts/useAuth";
import { Gallery } from "../../components";
import { StudioService } from "../../services/StudioService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Crew = () => {
  const { token, studio } = useAuth();
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!studio?._id || !token) return;
    const fetchArtists = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await StudioService.getStudioArtists(studio._id, token);

        setArtists(data);
      } catch (err) {
        setError(err?.message || "Error al cragar artistas");
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, [studio?._id, token]);

  if (loading) return <p>Cargando Artistas</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="relative min-h-screen bg-[url('/images/logos/foto-fondo.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="flex flex-row-reverse relative  mr-7 pt-6">
        <Link
          to="new"
          className="btn bg-gray-700 text-white text-[1rem] m-5  font-semibold font-serif p-4 rounded-md   md:btn-md md:m-7 "
        >
          New Artist
        </Link>
      </div>

      <Gallery artists={artists || []} />
    </div>
  );
};
