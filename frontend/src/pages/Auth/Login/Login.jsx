import "./Login.css";
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
    <section className="login-container">
      <h2 className="login-title">LOGIN</h2>
      <form onSubmit={onSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="enter Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="enter Password"
            required
          />
        </div>
        {error && (
          <div role="alert" style={{ color: "red" }}>
            {error}
          </div>
        )}
        {ok && (
          <div role="status" style={{ color: "green" }}>
            {ok}
          </div>
        )}
        <button className="button-submit" disabled={loading}>
          {loading ? "Buscando estudio..." : "Login"}
        </button>
      </form>
    </section>
  );
};
