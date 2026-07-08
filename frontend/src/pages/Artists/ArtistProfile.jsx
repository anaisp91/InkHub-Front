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
        console.log("DATA ARTIST", data);
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
    <section className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8"> Profile</h2>

      <div className="space-y-6 rounded-xl bg-slate-200 p-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Nombre</h3>
          <p className="text-lg">{artist.name}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500">Apellidos</h3>
          <p className="text-lg">{artist.lastName}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500">
            DNI / NIE / Pasaporte
          </h3>
          <p className="text-lg">{artist.persId}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500">Teléfono</h3>
          <p className="text-lg">{artist.phoneNum}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500">
            Nº Registro Sanitario
          </h3>
          <p className="text-lg">{artist.SanNum}</p>
        </div>
      </div>

      <div>
        <Link to={`/profile/crew/${artistId}/edit`}>Edit</Link>
        <button onClick={onDelete}>Delete</button>
      </div>
    </section>
  );
};
