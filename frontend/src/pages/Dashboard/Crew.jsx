import { useAuth } from "../../contexts/useAuth";
import { Gallery } from "../../components";
import { StudioService } from "../../services/StudioService";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const Crew = () => {
  const { user, token } = useAuth();
  const {
    data: artists,
    isLoading,
    hasError,
  } = useFetch(() => {
    if (!user?.studioId || !token) return null;
    return StudioService.getStudioArtists(user.studioId, token);
  }, [user?.studioId, token]);

  if (isLoading) return <p>Cargando Artistas</p>;
  if (hasError) return <p>{hasError}</p>;

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
