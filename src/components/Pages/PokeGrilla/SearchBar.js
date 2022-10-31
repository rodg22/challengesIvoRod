import React, { useMemo, useState } from "react";
import useForm from "../../Hooks/useForm";
import { useNavigate, useLocation } from "react-router-dom";
import { LlamadaPokemons } from "../../../helper/LlamadaPokemons";
import './SearchBar.css'
import { PokeGrillaItem } from "./PokeGrillaItem";

export const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pokeName, setPokeName] = useState('')
  const { singlePokeData } = LlamadaPokemons(pokeName);

  const [formValues, handleInputChange] = useForm({
  });

  const { searchText } = formValues;
  
  const handleSearch = (e) => {
    e.preventDefault()
    setPokeName(e.target.value)
  }

  console.log(pokeName)
  console.log(singlePokeData)
  
  return (
    <>
      <div>
        <div>
          <form className="searchForm" onClick={handleSearch}>
            <input
              type="text"
              placeholder="Buscar por Nombre"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={handleInputChange}
              value={searchText}
            />
          </form>
        </div>
        <div>
        </div>
        </div>
    </>
  );
};

export default SearchBar;
