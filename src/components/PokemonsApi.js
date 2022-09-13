import { useEffect, useState } from "react";
import { PokeGrilla } from "./PokeGrilla/PokeGrilla";
import "./RandomPokemon.css";

export const PokemonsApi = () => {
  const [pokes, setPokes] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const randomPoke = Math.floor(Math.random() * 898);

    const url = `https://pokeapi.co/api/v2/pokemon/${randomPoke}`;

    const peticion = fetch(url);

    peticion
      .then( (resp) => {
         resp.json().then((data) => {
          setData(data);
          setPokes(data.sprites.other["official-artwork"].front_default);
         
        //   console.log(data.name);
        //   console.log(pokes);
          // console.log(pokes)

          //   const {
          //     sprites: { other },
          //   } = data;
          //   setPokes(other["official-artwork"].front_default)
          return data   
        });
      })
      .catch(console.warn);
  }, []);

  return (
    <>
      <div className="getPokemonFromApi">
        <img src={pokes}></img>
      </div>
      <PokeGrilla data={data} pokes={pokes} />
    </>
  );
};
