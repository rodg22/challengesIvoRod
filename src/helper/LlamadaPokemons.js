import axios from "axios";
import { useEffect, useState } from "react";
import "../components/Pages/RandomPokemon/RandomPokemon.css";

export const LlamadaPokemons = (id=1) => {
  const [singlePokeData, setSinglePokeData] = useState({});
  const name = ''

  const pokeId = id ? id : name

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

  useEffect(() => {
    axios.get(url).then((res) => setSinglePokeData(res.data));
  }, [url]);


  return { singlePokeData, setSinglePokeData };
};
