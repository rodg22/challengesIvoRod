import { useEffect, useState } from "react";
import { PokeGrilla } from "../components/PokeGrilla/PokeGrilla";
import "../components/Pages/RandomPokemon.css";

export const PokemonsApi = async() => {
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
          resultados.map(async ({ url }) => {
            const peticion2 = fetch(url);
            await peticion2.then((resp) => {
              resp.json().then((data) => {
                setPokeData((pokeData) => [...pokeData, data]);
              });
            });
          });
          // setData(data);
          // setPokes(data.sprites.other["official-artwork"].front_default);

          // console.log(data);
          // console.log(pokes);

          // //   const {
          // //     sprites: { other },
          // //   } = data;
          // //   setPokes(other["official-artwork"].front_default)
          // return data;
        });
      })
      .catch(console.warn);

  }, []);
  console.log(pokeData);
  return [pokes, pokeData];
};

// return (
//   <>
//     <div className="getPokemonFromApi">
//       <img src={pokes}></img>
//     </div>
//     <PokeGrilla data={data} pokes={pokes} />
//   </>
// );
