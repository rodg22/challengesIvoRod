import React, { useState } from "react";
import { LlamadaPokemons } from "../../../helper/LlamadaPokemons";
import './SearchBar.css'
import { PokeDataContext } from "./Context/PokeDataContext";
import { useContext, useEffect } from "react";


export const SearchBar = () => {
  const {showSinglePokemon, setShowSinglePokemon } = useContext( PokeDataContext )

  const [values, setValues] = useState('');

  const reset = () => {
    setValues('');
  };

  const handleInputChange = (e) => {
    setValues(e.target.value)
    };

  const [pokeName, setPokeName] = useState('')
  const { singlePokeData, setSinglePokeData } = LlamadaPokemons(pokeName);
  
  
  const handleSearch = (e) => {
    e.preventDefault()
    pokeName === '' ? setShowSinglePokemon(null) : setShowSinglePokemon(singlePokeData)
    pokeName === '' && reset()
  }
  useEffect(() => {
    if (values) {
      setPokeName((values.length > 2 && values !== '') ? values : '')
      setSinglePokeData(pokeName)
    }
  }, [values])
  

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
              name={values}
              autoComplete="off"
              value={values}
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
