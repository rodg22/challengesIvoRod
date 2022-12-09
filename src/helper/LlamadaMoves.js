import axios from "axios";
import { useEffect, useState } from "react";
import "../components/Pages/RandomPokemon/RandomPokemon.css";

export const LlamadaMoves = ([arrayMoves]) => {
  const [singleMove, setSingleMove] = useState({});
  const [prueba, setPrueba] = useState('');
  const [error, setError] = useState(false);

  const name = "";

//   const moveName = name;


useEffect(() => {
      const url = `https://pokeapi.co/api/v2/move/${prueba}`;
    arrayMoves.map((move) => {
      setPrueba(move, "move");
    });
    axios
      .get(url)
      .then((res) => setSingleMove(res.data))
      .catch(() => setError(true));
  }, []);

  console.log(prueba)


  return { singleMove, setSingleMove, error, setError };
};
