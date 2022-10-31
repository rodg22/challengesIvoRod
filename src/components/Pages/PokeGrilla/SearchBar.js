import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import { LlamadaPokemons } from "../../../helper/LlamadaPokemons";
import './SearchBar.css'
import { PokeDataContext } from "./Context/PokeDataContext";
import { useContext, useEffect } from "react";


export const SearchBar = () => {
  const {showSinglePokemon, setShowSinglePokemon } = useContext( PokeDataContext )
  const [clearInput, setClearInput] = useState(false)
  
  
  const [values, handleInputChange] = useForm({
  });
  
  const { searchText } = values;
  const [pokeName, setPokeName] = useState('')
  const { singlePokeData, setSinglePokeData } = LlamadaPokemons(pokeName);
  
  
  const handleSearch = (e) => {
    e.preventDefault()
    pokeName === '' ? setShowSinglePokemon(null) : setShowSinglePokemon(singlePokeData)
    setClearInput(true)
  }
  useEffect(() => {
    if (searchText) {
      setPokeName(searchText.length > 2 ? searchText : '')
      setSinglePokeData(pokeName)
    }
  }, [searchText, pokeName])
  

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
              name={"searchText"}
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
