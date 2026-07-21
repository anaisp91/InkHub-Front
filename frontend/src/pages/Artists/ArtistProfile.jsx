import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
import { useEffect, useState } from "react";
import { ArtistService } from "../../services/ArtistService";
import { Link } from "react-router-dom";

export const ArtistProfile = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { artistId } = useParams();

  const [artist, setArtist] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token || !artistId) return;

    const artistProfile = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await ArtistService.getArtistById(artistId, token);

        setArtist(data);
      } catch (err) {
        setError(err?.message || "Error ar cargar al artista");
      } finally {
        setLoading(false);
      }
    };

    artistProfile();
  }, [artistId, token]);

  const onDelete = async (e) => {
    e.preventDefault();
    setError(null);

    const confirmed = window.confirm(
      "¿Estas seguro de que quieres borrar este artista?",
    );
    if (!confirmed) return;
    try {
      setLoading(true);
      await ArtistService.deleteArtist(artistId, token);
      navigate("/profile/crew");
    } catch (err) {
      setError(err.message || "Error en Delete");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[url('/images/logos/foto-fondo.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/80"></div>

      <section className=" relative z-10  p-8 text-center lg:pb-20">
        <h2 className="font-bold text-center text-gray-300 text-6xl mb-8 pt-6 pb-8">
          ARTIST PROFILE
        </h2>

        <div className="flex flex-row justify-center items-center gap-9">
          <Link
            to={`/profile/crew/${artistId}/new-client`}
            className=" bg-gray-700/60 text-white mb-10  font-semibold font-sans p-3 "
          >
            New Client
          </Link>
          <Link className=" bg-gray-700/60 text-white mb-10  font-semibold font-sans p-3 ">
            New Consent
          </Link>
        </div>

        <div className="max-w-[400px] mx-auto mt-10 rounded-xl bg-gray-700/60 p-6 text-left">
          <div>
            <h3 className="text-[1rem] font-semibold text-slate-400 font-serif p-1">
              Nombre:
            </h3>
            <p className="text-base text-white font-sans">{artist.name}</p>
          </div>

          <div>
            <h3 className="text-[1rem] font-semibold text-slate-400 font-serif p-1">
              Apellidos:
            </h3>
            <p className="text-base text-white font-sans">{artist.lastName}</p>
          </div>

          <div>
            <h3 className="text-[1rem] font-semibold text-slate-400 font-serif p-1">
              DNI / NIE / Pasaporte:
            </h3>
            <p className="text-base text-white font-sans">{artist.persId}</p>
          </div>

          <div>
            <h3 className="text-[1rem] font-semibold text-slate-400 font-serif p-1">
              Teléfono:
            </h3>
            <p className="text-base text-white font-sans">{artist.phoneNum}</p>
          </div>

          <div>
            <h3 className="text-[1rem] font-semibold text-slate-400 font-serif p-1">
              Nº Registro Sanitario:
            </h3>
            <p className="text-base text-white font-sans">{artist.SanNum}</p>
          </div>
        </div>

        <div className="m-5 text-white flex flex-row items-center justify-center gap-24">
          <Link
            to={`/profile/crew/${artistId}/edit`}
            className="bg-gray-700/60 text-white mt-9 px-5 py-2 rounded-md"
          >
            Edit
          </Link>
          <button
            onClick={onDelete}
            className="bg-red-800/80 mt-9 px-5 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </section>
    </div>
  );
};
