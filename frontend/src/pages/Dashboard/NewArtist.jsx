import { useNavigate } from "react-router-dom";
import { ArtistService } from "../../services/ArtistService";
import { useState } from "react";

export const NewArtist = () => {
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
    <div className="min-h-screen p-5 bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-slate-100">
          Create Artist
        </h2>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-3xl mt-10 p-10 bg-slate-600"
        >
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Name
              </label>
              <input
                onChange={onChange}
                type="text"
                id="name"
                name="name"
                value={form.name}
                className="bg-slate-300  rounded-md text-heading text-sm text-slate-900 rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Last name
              </label>
              <input
                onChange={onChange}
                type="text"
                id="lastName"
                name="lastName"
                value={form.lastName}
                className="bg-slate-300  rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                required
              />
            </div>

            <div>
              <label
                htmlFor="persId"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Personal Id
              </label>
              <input
                onChange={onChange}
                type="text"
                id="persId"
                name="persId"
                value={form.persId}
                className="bg-slate-300  rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phoneNum"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Phone number
              </label>
              <input
                onChange={onChange}
                type="tel"
                id="phoneNum"
                name="phoneNum"
                value={form.phoneNum}
                className="bg-slate-300  rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                required
              />
            </div>

            <div>
              <label
                htmlFor="SanNum"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Sanitary Number
              </label>
              <input
                onChange={onChange}
                type="text"
                id="SanNum"
                name="SanNum"
                value={form.SanNum}
                className="bg-slate-300  rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              className="bg-slate-300  rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              className="bg-slate-300  rounded-md text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              required
            />
          </div>

          <button
            type="submit"
            className="text-slate-900 bg-slate-400 box-border rounded-md border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-6 py-2.5 focus:outline-none "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
