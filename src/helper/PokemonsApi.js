import { useEffect, useState } from "react";
import { PokeGrilla } from "../components/Pages/PokeGrilla";
import "../components/Pages/RandomPokemon.css";

export const PokemonsApi = () => {
  const [pokeData, setPokeData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    // const randomPoke = Math.floor(Math.random() * 898);
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${
      page > 0 ? page * 20 : 0
    }`;

    const peticion = fetch(url);

    peticion
      .then((resp) => {
        resp.json().then((data) => {
          const { results } = data;
          setPokeData([])
          
          results.map(({ url }) => {
            const peticion2 = fetch(url);
            peticion2.then((resp) => {
              resp.json().then((data) => {
                setPokeData((pokeData) => [...pokeData, data]);
              });
            });
          });
        });
      })
      .catch(console.warn);
  }, [page]);
  return {
    pokeData,
    setPage,
    page,
  };
};
