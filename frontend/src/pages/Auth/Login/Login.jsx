import { useState, useNavigate } from "react";
import {authService} from '../../../services/authService'

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [ok, setOk] = useState();

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setOk(null)
    setLoading(true)

    try {
      const data = await authService.login({
        email: form.email.trim().toLowerCase(),
        password: form.password
      })
      const token = data.token ?? data?.data?.token
      const user = data.user ?? data?.data?.user ?? data?.data?

    
    } catch (err) {
      
    }
  }

  return (
    <section>
      <h2>LOGIN</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
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
            required
          />
        </div>
      </form>
    </section>
  );
};
