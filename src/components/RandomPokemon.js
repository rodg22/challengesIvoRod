import { useState, useEffect } from "react";
import { getPokemons } from "../helper/allPokemons.ts";
import "./RandomPokemon.css";
import ReactHowler from "react-howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

import pokemon from "../assets/pokemon.mp3";

export const RandomPokemon = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("withFilter");
  const [showTitle, setShowtTitle] = useState("titleDisplayNone");
  const [showid, setShowtId] = useState("idDisplayNone");
  const [option, setOption] = useState(false);
  const [play, setPlay] = useState("");
  const [pause, setPause] = useState("notShowPause");
  const [contadorBoton, setContadorBoton] = useState(0);
  const [firstPushAlert, setFirstPushAlert] = useState(false);
  const [getStorage] = useState(window.localStorage.getItem("contador"));
  const [getStorageIncorrectas] = useState(
    window.localStorage.getItem("contadorIncorrectas")
  );
  const [contador, setContador] = useState(
    getStorage > 0 ? parseInt(getStorage) : 0
  );

  const [contadorIncorrectas, setContadorIncorrectas] = useState(
    getStorageIncorrectas > 0 ? parseInt(getStorageIncorrectas) : 0
  );

  const [disabled, setDisabled] = useState(false);

  const [addClass, setAddClass] = useState("nonNextPokemon");

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

  // REZISE DE LA RESOLUCiÓN DE LA PÁGINA

  // function useWindowSize() {
  //   const [size, setSize] = useState([0, 0]);
  //   useEffect(() => {
  //     function updateSize() {
  //       setSize([window.innerWidth, window.innerHeight]);
  //     }
  //     window.addEventListener("resize", updateSize);
  //     updateSize();
  //     return () => window.removeEventListener("resize", updateSize);
  //   }, []);
  //   return size;
  // }

  // function ShowWindowDimensions(props) {
  //   const [width, height] = useWindowSize();
  //   if (width < 1024) console.log("pequeña");
  //   else if (width < 1280) console.log("Mediana");
  //   else console.log("Grande");
  //   return (
  //     <span>
  //       Window size: {width} x {height}
  //     </span>
  //   );
  // }
  // ShowWindowDimensions();

  const handleChange = (e) => {
    getPokemons.random().then(({ id, image, name }) => {
      setPokes({
        id,
        image,
        name,
      });
      if (!firstPushAlert && addClass === "nonNextPokemon" && contador <= 1) {
        swal({
          title: "Advertencia, este cartel te saldrá solo está vez!",
          text: "Recordá que si cambias de pokemons 3 veces sin intentar ninguna respuesta, se te contará 1 respuesta incorrecta",
          icon: "warning",
          button: "aceptar",
        });
        setFirstPushAlert(true);
      }
      setFilter("withFilter");
      setShowtTitle("titleDisplayNone");
      setShowtId("idDisplayNone");
      setDisabled(false);
      setContadorBoton(contadorBoton + 1);
      setAddClass("nonNextPokemon");

      if (contadorBoton >= 2) {
        setLocalStorageIncorrectas(contadorIncorrectas + 1);
        setContadorBoton(0);
      } else {
      }
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
    if (search.toLowerCase() === pokes.name) {
      setFilter("withoutFilter");
      setSearch("");
      setShowtTitle("");
      setShowtId("");
      setLocalStorage(contador + 1);
      setDisabled(true);
      setFirstPushAlert(false);
      setAddClass("nextPokemon");
    } else if (search === "") {
      swal({
        title: "Por favor ingresá el nombre de algún pokemon",
        text: "",
        icon: "warning",
        button: "aceptar",
      });
      setSearch("");
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
    setDisabled(false);
    setFirstPushAlert(true);
    setAddClass("nonNextPokemon");
    localStorage.clear();
    window.location.reload();
  };

  const onPlay = () => {
    if (option === true) {
      setPause("swhoPause");
      setOption(false);
      setPause("notShowPause");
      setPlay("showPlay");
    } else {
      setPlay("notShowPlay");
      setPause("");
      setOption(true);
    }
  };

  useEffect(() => {
    if (contador === 0) {
      setPokes({
        id: 4,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        name: "charmander",
      });
    } else {
      getPokemons.random().then(({ id, image, name }) => {
        setPokes({
          id,
          image,
          name,
        });
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            className="nes-inputs"
            onChange={handleSearch}
            id="name_field"
            text="text"
            placeholder="Nombre del Pokemon"
            value={search}
            disabled={disabled}
          ></input>
          <button
            onClick={showPokemon}
            type="button"
            className="nes-btn is-success"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <br />
        <div className="buttonsContainer">
          <button
            onClick={handleChange}
            type="button"
            className="nes-btn is-primary"
          >
            <span
              className={
                addClass === "nonNextPokemon" ? "nextPokemon" : "nonNextPokemon"
              }
            >
              Cambiar Pokemon
            </span>
            <span className={addClass}>Siguiente Pokemon</span>
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

      <button
        onClick={onPlay}
        type="button"
        className="nes-btn is-success song buttonPlay"
      >
        <ReactHowler src={pokemon} playing={option} />

        <FontAwesomeIcon icon={faPlay} className={play} />

        <FontAwesomeIcon icon={faPause} className={pause} />
      </button>
    </>
  );
};

export default RandomPokemon;
