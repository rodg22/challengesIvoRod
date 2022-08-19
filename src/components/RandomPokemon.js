import { useState } from "react";
import { getPokemons } from "../helper/allPokemons.ts";
import "./RandomPokemon.css";

export const RandomPokemon = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("withFilter");
  const [showTitle, setShowtTitle] = useState("titleDisplayNone");
  const [showid, setShowtId] = useState("idDisplayNone");
  const [contador, setContador] = useState(
    window.localStorage.getItem("contador")
  );
  const [contadorIncorrectas, setContadorIncorrectas] = useState(
    window.localStorage.getItem("contadorIncorrectas")
  );

  const [pokes, setPokes] = useState({
    id: 4,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    name: "charmander",
  });

  const setLocalStorage = (value) => {
    try {
      setContador(contador + 1);
      window.localStorage.setItem("contador", value);
    } catch (error) {
      console.error(error);
    }
  };

  const setLocalStorageIncorrectas = (value) => {
    try {
      setContadorIncorrectas(contadorIncorrectas + 1);
      window.localStorage.setItem("contadorIncorrectas", value);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    getPokemons.random().then(({ id, image, name }) => {
      setPokes({
        id,
        image,
        name,
      });
      setFilter("withFilter");
      setShowtTitle("titleDisplayNone");
      setShowtId("idDisplayNone");
      return {
        pokes,
      };
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    return {
      search,
    };
  };

  const showPokemon = (e) => {
    e.preventDefault();
    if (search.toLowerCase() === pokes.name || search.toLowerCase === "") {
      setFilter("withoutFilter");
      setSearch("");
      setShowtTitle("");
      setShowtId("");
      setLocalStorage(contador + 1);
    } else {
      e.preventDefault();
      setFilter("withFilter");
      setSearch("");
      setLocalStorageIncorrectas(contadorIncorrectas + 1);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setContador(0);
    setContadorIncorrectas(0);
    setSearch("");
    setShowtTitle("titleDisplayNone");
    setShowtId("idDisplayNone");
    setFilter("withFilter");
  };

  return (
    <>
      <div className="container">
        <h1 className={showTitle}>
          Felicitaciones, es{" "}
          <span className="nes-text is-error">
            {pokes.name[0].toUpperCase() + pokes.name.substring(1)}
          </span>
          !!!!
        </h1>
        <h2 className={showid}>Pokemon N°: {pokes.id}</h2>
        <div className="imgContainer">
          <img src={pokes.image} alt="imagen pokemon" className={filter} />
        </div>
        <form onSubmit={showPokemon} autoComplete="off">
          <input
            className="nes-input"
            onChange={handleSearch}
            id="name_field"
            text="text"
            placeholder="Escribí el nombre del Pokemon"
            value={search}
          ></input>
        </form>
        <br />
        <div className="buttonsContainer">
          <button
            onClick={handleChange}
            type="button"
            className="nes-btn is-primary"
          >
            Cambiar Pokemon
          </button>
          <button
            onClick={handleReset}
            type="button"
            className="nes-btn is-error"
          >
            Resetear
          </button>
        </div>
      </div>
      <div className="contenedorDeRespuestas">
        <h2>
          <span className="nes-text is-primary">Respuestas Correctas:</span>
        </h2>
        <h1>{contador}</h1>
        <h2>
          <span className="nes-text is-error">Respuestas Incorrectas:</span>
        </h2>
        <h1>{contadorIncorrectas}</h1>
      </div>
    </>
  );
};

export default RandomPokemon;
