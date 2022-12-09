import axios from "axios";
import { useEffect, useState } from "react";
import "../components/Pages/RandomPokemon/RandomPokemon.css";

export const LlamadaMoves = (url) => {
  const [singleMove, setSingleMove] = useState({});
  const [error, setError] = useState(false)

  const name = ''

  const moveName = name

//   const url = `https://pokeapi.co/api/v2/move/${moveName}`;

  useEffect(() => {
    axios.get(url).then((res) => setSingleMove(res.data)).catch(() => setError(true));
  }, [url]);


  return { singleMove, setSingleMove, error, setError };
};
