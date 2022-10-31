import React, { useMemo, useState } from "react";
import useForm from "../../Hooks/useForm";
import { useNavigate, useLocation } from "react-router-dom";
import { LlamadaPokemons } from "../../../helper/LlamadaPokemons";
import './SearchBar.css'
import { PokeDataContext } from "./Context/PokeDataContext";
import { useContext, useEffect } from "react";

export const SearchBar = () => {
  const {showSinglePokemon, setShowSinglePokemon } = useContext( PokeDataContext )
  
  
  const [formValues, handleInputChange] = useForm({
  });
  
  const { searchText } = formValues;
  const [pokeName, setPokeName] = useState('')
  const { singlePokeData } = LlamadaPokemons(pokeName);
  
  const handleSearch = (e) => {
    e.preventDefault()
    pokeName !== '' && setShowSinglePokemon(singlePokeData)
  }
  
  useEffect(() => {
    if (searchText) {
      setPokeName(searchText)
    }
  }, [searchText])
  

  console.log(searchText)


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
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="searchButton" type="submit">Search</button>
          </form>
        </div>
        <div>
        </div>
        </div>
    </>
  );
};

export default SearchBar;
