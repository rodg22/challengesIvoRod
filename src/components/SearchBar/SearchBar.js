import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({setSearch, search, showPokemon, disabled}) => {

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        return {
          search,
        };
      };


  return (
    <>
    <form 
    onSubmit={showPokemon} 
    autoComplete="off">
          <input
            className="nes-inputs"
            onChange={handleSearch}
            id="name_field"
            text="text"
            placeholder="Nombre del Pokemon"
            value={search}
            disabled={disabled}
            ></input>
          <button
            onClick={showPokemon}
            type="button"
            className="nes-btn is-success"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
            </>

  )
}

export default SearchBar


