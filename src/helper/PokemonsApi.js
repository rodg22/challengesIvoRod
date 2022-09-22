import { useEffect, useState } from "react";
import { PokeGrilla } from "../components/PokeGrilla/PokeGrilla";
import "../components/Pages/RandomPokemon.css";

export const PokemonsApi = () => {
  const [pokes, setPokes] = useState("");
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    // const randomPoke = Math.floor(Math.random() * 898);

    const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`;

    const peticion = fetch(url);

    peticion
      .then((resp) => {
        resp.json().then((data) => {
          const { results: resultados } = data;
          resultados.map(({ url }) => {
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

  }, []);
  console.log(pokeData);
  return pokeData;
};

