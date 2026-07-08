import { useAuth } from "../../contexts/useAuth";
import { ArtistForm } from "../../components";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArtistService } from "../../services/ArtistService";

export const EditArtist = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { artistId } = useParams();

  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const [form, setForm] = useState();

  useEffect(() => {
    if (!token) return;

    const artistData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await ArtistService.getArtistById(artistId, token);

        setForm(data);
      } catch (err) {
        setError(err.message || "Error al cargar la data");
      } finally {
        setLoading(false);
      }
    };
    artistData();
  }, [artistId, token]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "El nombre del artista es obligatorio";
    if (!form.lastName.trim()) return "el apellido del artisa es obligatorio";
    if (!form.persId.trim()) return "El DNI/NIF es obligatorio";
    if (!form.phoneNum) return "El telefono es obligatorio";
    if (!form.SanNum.trim())
      return "El numero higienico sanitario es obligatorio";

    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validation = validate();
    if (validation) {
      setError(validation);
      return;
    }
    setLoading(true);

    try {
      const payload = {
        name: form.name.trim(),
        lastName: form.lastName.trim(),
        persId: form.persId.trim(),
        phoneNum: form.phoneNum,
        SanNum: form.SanNum.trim(),
      };

      await ArtistService.updateArtist(artistId, payload, token);

      navigate(`/profile/crew/${artistId}`);
    } catch (err) {
      setError(err.message || "Error en la edicion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {form ? (
        <ArtistForm
          onSubmit={onSubmit}
          onChange={onChange}
          form={form}
          title={"Edit Artist"}
          loading={loading}
          error={error}
          withPassword={false}
          withEmail={false}
        />
      ) : (
        "Cargando"
      )}
    </div>
  );
};
