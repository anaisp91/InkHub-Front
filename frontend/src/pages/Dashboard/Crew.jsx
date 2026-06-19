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

  // console.log("AUTH USER", user);
  // console.log("AUTH STUDIO", studio);
  // console.log("AUTH TOKEN", token);
  useEffect(() => {
    if (!studio?._id || !token) return;
    const fetchArtists = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("STUDIO ID", studio?._id);

        const data = await StudioService.getStudioArtists(studio._id, token);

        console.log("ARTISTS RESPONSE", data);

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
    <div className="min-h-screen ">
      <div className="flex flex-row-reverse m-10 ">
        <Link
          to="new"
          className="btn bg-slate-400 text-black  font-semibold p-2 rounded-md btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        >
          + New Artist
        </Link>
      </div>

      <Gallery artists={artists || []} />
    </div>
  );
};
