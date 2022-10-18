import axios from "axios";
import { useEffect, useState } from "react";
import '../components/Pages/RandomPokemon/RandomPokemon.css';


export const PokemonsApi = () => {
  const [page, setPage] = useState(0);
  const [pokeData, setPokeData] = useState([]);
  const [results, setResults] = useState([]);

  const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${
    page > 0 ? page * 20 : 0
  }`;
  
  useEffect(() => {
    axios.get(url).then((res) => setResults(res.data.results));
    setPokeData([]);
  }, [url]);

  useEffect(() => {
    results.forEach((resultado) => {
      axios
        .get(resultado.url)
        .then(({ data }) => setPokeData((pokeData) => [...pokeData, data]));
    });
  }, [results]);

  return { pokeData, setPage, setPokeData };
};
