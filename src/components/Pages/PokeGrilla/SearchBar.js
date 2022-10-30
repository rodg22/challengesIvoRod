import React, { useMemo } from "react";
import useForm from "../../Hooks/useForm";
import { useNavigate, useLocation } from "react-router-dom";
import './SearchBar.css'

export const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //el parse sirve para separar
  //la espresión { q = ""} Significa que si q no existe, que sea igual a un string vacío

  const [formValues, handleInputChange] = useForm({
  });

  const { searchText } = formValues;

  return (
    <>
      <div>
        <div>
          <form className="searchForm">
            <input
              type="text"
              placeholder="Buscar por Nombre"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />
          </form>
        </div>
        </div>
    </>
  );
};

export default SearchBar;
