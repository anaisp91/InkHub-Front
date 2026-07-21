import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/useAuth";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ok, setOk] = useState(null);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setOk(null);
    setLoading(true);

    try {
      const email = form.email.trim().toLocaleLowerCase();
      const password = form.password.trim();

      await login(email, password);
      setOk("Login correcto");
      navigate("/profile", { replace: true });
    } catch (err) {
      setError(err.message || "Error en el login");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" relative h-auto w-screen bg-[url('/images/logos/Baum24_097.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center">
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10">
        <img
          alt="InkHub"
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
            Sign In
          </h2>
        </div>
      </div>

      <div
        className="relative z-0 mt-10 bg-slate-300 p-10
                    md:m-20 md:mt-10 md:p-10 "
      >
        <form
          action="#"
          method="POST"
          className="space-y-6"
          onSubmit={onSubmit}
        >
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

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};
