import axios from "axios";
import { useEffect, useState } from "react";
import "../components/Pages/RandomPokemon.css";

export const LlamadaTipos = () => {
  const [page, setPage] = useState(0);
  const [filteredPokeData, setFilteredPokeData] = useState([]);
  const [results, setResults] = useState([]);

  const url = `https://pokeapi.co/api/v2/type/2/`;

  useEffect(() => {
    axios.get(url).then((res) => setResults(res.data.pokemon));
    setFilteredPokeData([]);
  }, [url]);

  useEffect(() => {
    results.forEach((resultado) => {
      axios
        .get(resultado.pokemon.url)
        .then(({ data }) =>
          setFilteredPokeData((filteredPokeData) => [...filteredPokeData, data])
        );
    });
  }, [results]);

  return {
    filteredPokeData,
  };
};
