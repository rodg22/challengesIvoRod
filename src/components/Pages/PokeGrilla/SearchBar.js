import React, { useState } from "react";
import { LlamadaPokemons } from "../../../helper/LlamadaPokemons";
import './SearchBar.css'
import { PokeDataContext } from "./Context/PokeDataContext";
import { useContext, useEffect } from "react";


export const SearchBar = () => {
  const {showSinglePokemon, setShowSinglePokemon } = useContext( PokeDataContext )

  const [values, setValues] = useState('');
  const [inputValues, setInputValues] = useState('');

  const handleInputChange = (e) => {
    setInputValues(e.target.value)
    };

  const [pokeName, setPokeName] = useState('')
  const { singlePokeData, setSinglePokeData } = LlamadaPokemons(pokeName);
  
  
  const handleSearch = (e) => {
    e.preventDefault()
    inputValues !== '' ? setValues(inputValues) : setShowSinglePokemon(null)
  }
  useEffect(() => {
    if (values) {
      setPokeName(inputValues)
    } 
  }, [values])

  useEffect(() => {
      setShowSinglePokemon(singlePokeData)
      setValues('')
      setInputValues('')
  }, [singlePokeData])

  return (
    <>
      <div>
        <div>
          <form className="searchForm" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar por Nombre"
              className="form-control"
              name={inputValues}
              autoComplete="off"
              value={inputValues}
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
