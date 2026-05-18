import "./Register.css";
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
        name: form.name.trim(),
        email: form.email.trim().toLocaleLowerCase(),
        password: form.password,
        address: form.address.trim(),
        phoneNum: form.phone.trim(),
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
    <div className="register-page">
      <section className="register-container">
        <h3 class="register-title">REGISTER</h3>
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="InkHub Studio..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Street..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNum">Phone Number</label>
            <input
              type="tel"
              id="phoneNum"
              name="phoneNum"
              placeholder="+34..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@register.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu contraseña..."
              required
            />
          </div>
        </form>
        <button className="button-submit">Send</button>
      </section>
    </div>
  );
};
