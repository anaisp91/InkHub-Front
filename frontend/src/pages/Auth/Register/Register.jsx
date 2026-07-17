import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../../../services/authService";

export const Register = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phoneNum: "",
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
    if (!form.name.trim()) return "El nombre del estudio es obligatorio";
    if (!form.email || !form.email.includes("@"))
      return "Introduce un email valido";
    if (!form.password || form.password.length < 6)
      return "La contraseña debe tener almenos 6 caracteres";
    if (!form.address || !form.phoneNum)
      return "Los datos del estudio son obligatorios";
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
        email: form.email.trim().toLocaleLowerCase(),
        password: form.password,
        studioData: {
          name: form.name.trim(),
          address: form.address.trim(),
          phoneNum: form.phoneNum.trim(),
        },
      };

      const data = await AuthService.register(payload);
      console.log("Respuesta register", data);

      setOk("Registro completado, puedes hacer login");
    } catch (err) {
      setError(err.message || "Error en el registro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" relative h-auto w-screen bg-[url('/images/logos/Baum24_019.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center">
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10">
        <img
          alt="InkHub Logo"
          src="/images/logos/InkHub-logo2-blanco.png"
          className="mx-auto mt-20 w-80 
                    md:w-[600px] md:p-6 md:pb-0 
                    lg:w-[500px] lg:p-10 lg:mt-7 lg:pb-3"
        />
        <div className="mt-[-30px]">
          <h2
            className=" text-center text-xl font-bold tracking-tight text-white pt-3
                      md:text-2xl "
          >
            Create your Account
          </h2>
        </div>
      </div>

      <div
        className="relative z-0 m-8 p-4 bg-slate-300 
                      md:m-20 md:mt-10 md:p-10 
                      lg:w-[600px]  "
      >
        <form
          action="#"
          method="POST"
          className="space-y-6"
          onSubmit={onSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Studio's Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Studio's Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                value={form.address}
                onChange={onChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phoneNum"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phoneNum"
                name="phoneNum"
                type="tel"
                value={form.phoneNum}
                onChange={onChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={onChange}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          {ok && (
            <div className="bg-green-200 px-6 py-4  my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
              <svg
                viewBox="0 0 24 24"
                className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
              >
                <path
                  fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                ></path>
              </svg>
              <span className="text-green-800">Registro completado</span>
            </div>
          )}

          {error && (
            <div className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center  max-w-lg">
              <svg
                viewBox="0 0 24 24"
                className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
              >
                <path
                  fill="currentColor"
                  d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                ></path>
              </svg>
              <span className="text-red-800"> {error} </span>
            </div>
          )}

          <div class="px-2 mt-16">
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Do you have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
};
