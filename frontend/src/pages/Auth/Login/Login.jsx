import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../../services/authService";
import { authStore } from "../../../utils/authStore";

// export const Login = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [ok, setOk] = useState(null);

//   const onChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setOk(null);
//     setLoading(true);

//     try {
//       console.log("antes del login");
//       console.log("PAYLOAD:", {
//         email: form.email.trim().toLowerCase(),
//         password: form.password.trim(),
//       });
//       const data = await AuthService.login({
//         email: form.email.trim().toLowerCase(),
//         password: form.password,
//       });

//       console.log("despues del login");
//       const token = data?.token ?? data?.data?.token;
//       const user = data?.user ?? data?.data?.user ?? null;
//       console.log("TOKEN", token);
//       if (!token) {
//         throw new Error("El backend no devuelve token");
//       }

//       authStore.set(token);
//       storage.set("user", user ?? null);

//       navigate("/profile");
//     } catch (err) {
//       setError(err.message || "Error en el login");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="login-container">
//       <h2 className="login-title">LOGIN</h2>
//       <form onSubmit={onSubmit} className="login-form">
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={form.email}
//             onChange={onChange}
//             placeholder="enter Email"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={form.password}
//             onChange={onChange}
//             placeholder="enter Password"
//             required
//           />
//         </div>
//         {error && (
//           <div role="alert" style={{ color: "red" }}>
//             {error}
//           </div>
//         )}
//         {ok && (
//           <div role="status" style={{ color: "green" }}>
//             {ok}
//           </div>
//         )}
//         <button className="button-submit" disabled={loading}>
//           {loading ? "Buscando estudio..." : "Login"}
//         </button>
//       </form>
//     </section>
//   );
// };

export const Login = () => {
  const navigate = useNavigate();
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
      const payload = {
        email: form.email.trim().toLowerCase(),
        password: form.password,
      };

      const data = await AuthService.login(payload);

      const { token, user } = data;

      if (!token) {
        throw new Error("El backend no devuelve token");
      }

      authStore.set?.(token);

      //localStorage forzado
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

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
