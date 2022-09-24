import React from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { useReducer } from "react";
import  {types}  from '../Types/Types';

const initialState = {
  logged: false,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState, init);

  const onLogin = async (name = "") => {
    const user = {
      id: "ABC",
      name,
    };
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

const onLogout = async (name = '') => {

  const user = {
    id: "ABC",
    name,
  };

  const action = {
    type: types.logout,
    payload: user,
  };
  localStorage.removeItem('user')
  dispatch(action)
}



  return (
    <AuthContext.Provider
      value={{
        // PROPS
        ...state,

        //METHODS
        onLogin: onLogin,
        onLogout: onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
