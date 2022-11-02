import axios from "axios";
import { useEffect, useState } from "react";
import "../components/Pages/RandomPokemon/RandomPokemon.css";

export const LlamadaPokemons = (id=1) => {
  const [singlePokeData, setSinglePokeData] = useState({});
  const [error, setError] = useState(false)

  const name = ''

  const pokeId = id ? id : name

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

  useEffect(() => {
    axios.get(url).then((res) => setSinglePokeData(res.data)).catch(() => setError(true));
  }, [url]);


  return { singlePokeData, setSinglePokeData, error, setError };
};
