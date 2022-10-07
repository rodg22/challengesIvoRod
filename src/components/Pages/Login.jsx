import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Auth/Context/index";
import "./Login.css";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { onLogin } = useContext(AuthContext);
  const [form, setForm] = useState({
    usuario: "",
    contraseña: "",
  });

  const { usuario, contraseña } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {}, [form]);

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    onLogin(usuario);

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Usuario"
          type="text"
          name="usuario"
          value={usuario}
          onChange={handleChange}
        ></input>
        <input
          placeholder="xxxxxxxx"
          type="password"
          name="contraseña"
          value={contraseña}
          onChange={handleChange}
        ></input>
      </form>

      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
