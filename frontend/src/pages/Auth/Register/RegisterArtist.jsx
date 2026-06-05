import { useNavigate } from "react-router-dom";
import { ArtistService } from "../../../services/ArtistService";
import { useState } from "react";

export const RegisterArtist = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    persId: "",
    phoneNum: "",
    SanNum: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ok, setOk] = useState(null);

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
    if (!form.email || !form.email.includes("@"))
      return "Introduce un email valido";
    if (!form.password || form.password.length < 6)
      return "La contraseña debe tener almenos 6 caracteres";

    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setOk(null);

    const validation = validate();
    if (validation) {
      setError(validation);
      return;
    }
    setLoading(true);

    try {
      const payload = {
        email: form.email.trim().toLowerCase(),
        password: form.password,
        artistData: {
          name: form.name.trim(),
          lastName: form.lastName.trim(),
          persId: form.persId.trim(),
          phoneNum: form.phoneNum,
          SanNum: form.SanNum.trim(),
        },
      };

      const data = await ArtistService.registerArtist(payload);
      setOk("Registro completado");
      setForm({
        name: "",
        lastName: "",
        persId: "",
        phoneNum: "",
        SanNum: "",
        email: "",
        password: "",
      });

      navigate("/profile/crew");
    } catch (err) {
      setError(err.message || "Error en el registro");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <section>
        <form></form>
      </section>
    </div>
  );
};
