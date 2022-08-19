import { useState } from "react";
import { getPokemons } from "../helper/allPokemons.ts";
import "./RandomPokemon.css";

export const RandomPokemon = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("withFilter");

  const [pokes, setPokes] = useState({
    id: 4,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    name: "charmander",
  });
  const handleChange = (e) => {
    getPokemons.random().then(({ id, image, name }) => {
      setPokes({
        id,
        image,
        name,
      });
      return {
        pokes,
      };
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    showPokemon();
    return {
      search,
    };
  };

  const showPokemon = () => {
    if (search === pokes.name.trim()) {
      setFilter("withoutFilter");
    } else {
      setFilter("withFilter");
    }
  };

  return (
    <>
      <div className="container">
        <h1>{pokes.id}</h1>
        <h2>{pokes.name}</h2>
        <div className="imgContainer">
          <img src={pokes.image} alt="imagen pokemon" className={filter} />
        </div>
        <form onSubmit={handleSearch}>
          <input
            onChange={handleSearch}
            text="text"
            placeholder="Escribi el pokemon en minuscula"
            value={search}
          ></input>
        </form>
        <br />
        <button
          onClick={handleChange}
          type="button"
          className="nes-btn is-primary"
        >
          Cambiar Pokemon
        </button>
      </div>
    </>
  );
};

export default RandomPokemon;
