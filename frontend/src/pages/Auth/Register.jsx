import { useState } from "react";
import { AuthService } from "../../services/authService";

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
  return (
    <div>
      <h1>Register</h1>
    </div>
  );
};
