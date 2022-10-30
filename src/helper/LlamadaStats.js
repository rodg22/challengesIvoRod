import axios from "axios";
import { useEffect, useState } from "react";
import '../components/Pages/RandomPokemon/RandomPokemon.css';


export const LlamadaStats = () => {
  const [page, setPage] = useState(0);
  const [pokeStats, setPokeStats] = useState([]);
  const [results, setResults] = useState([]);

  const url = `https://pokeapi.co/api/v2/pokemon/?limit=1154&offset=${
    page > 0 ? page * 20 : 0
  }`;

  // TENGO CUANDO PONGO STATS TIENE QUE TRAERME DE LIMIT=1000
  // useEffect(() => {
  //   types === '' ? setData(pokeData) : setData(filteredPokeData)
  // }, [filteredPokeData, pokeData, types])

  useEffect(() => {
    axios.get(url).then((res) => setResults(res.data.results));
    setPokeStats([]);
  }, [url]);

  useEffect(() => {
    results.forEach((resultado) => {
      axios
        .get(resultado.url)
        .then(({ data }) => setPokeStats((pokeData) => [...pokeData, data]));
    });
  }, [results]);

  return { pokeStats, setPage, setPokeStats };
};
