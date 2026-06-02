import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      console.error(err);
      setError(err.message || "Error en el login");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center w-full min-h-full bg-gray-50">
      <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border px-3 py- shadow-sm"
            placeholder="Enter Email"
            name="email"
            onChange={onChange}
            value={form.email}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter Password"
            name="password"
            onChange={onChange}
            value={form.password}
            required
          />
        </div>
        <button
          type="submit"
          className="text-black bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          disabled={loading}
        >
          Login
        </button>
      </form>
    </div>

    // <section className="login-container">
    //   <h2 className="login-title">LOGIN</h2>
    //   <form onSubmit={onSubmit} className="login-form">
    //     <div className="form-group">
    //       <label htmlFor="email">Email</label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         value={form.email}
    //         onChange={onChange}
    //         placeholder="enter Email"
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         value={form.password}
    //         onChange={onChange}
    //         placeholder="enter Password"
    //         required
    //       />
    //     </div>
    //     {error && (
    //       <div role="alert" style={{ color: "red" }}>
    //         {error}
    //       </div>
    //     )}
    //     {ok && (
    //       <div role="status" style={{ color: "green" }}>
    //         {ok}
    //       </div>
    //     )}
    //     <button className="button-submit" disabled={loading}>
    //       {loading ? "Buscando estudio..." : "Login"}
    //     </button>
    //   </form>
    // </section>
  );
};
