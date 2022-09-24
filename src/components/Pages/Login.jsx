import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../Auth/Context/index';



export const LoginScreen = () => {
  const navigate = useNavigate();
  const { onLogin } = useContext( AuthContext )

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'


    onLogin('Iván Piccardo')


    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
