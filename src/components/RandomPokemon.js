import { useState } from "react";
import { getPokemons } from "../helper/allPokemons.ts";
import "./RandomPokemon.css";

export const RandomPokemon = () => {
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

  return (
    <>
      <div className="container">
        <h1>{pokes.id}</h1>
        <h2>{pokes.name}</h2>
        <img src={pokes.image} alt="imagen pokemon" />
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
