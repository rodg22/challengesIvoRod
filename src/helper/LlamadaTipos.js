import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonsApi } from "./PokemonsApi";
import '../components/Pages/RandomPokemon/RandomPokemon.css';

export const LlamadaTipos = (types) => {
  const [filteredPokeData, setFilteredPokeData] = useState([]);
  const [results, setResults] = useState([]);
  const { setPokeData } = PokemonsApi();

  const url = `https://pokeapi.co/api/v2/type/${types}?/`;

  useEffect(() => {
    axios.get(url).then((res) => setResults(res.data.pokemon));
    setFilteredPokeData([]);
  }, [url]);

  useEffect(() => {
    results?.forEach((resultado) => {
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
