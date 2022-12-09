import * as React from "react";
import { PokemonsApi } from "../../../helper/PokemonsApi";
import { LlamadaTipos } from "../../../helper/LlamadaTipos";
import { useState, useEffect, useContext } from "react";
import "./PokeGrilla.css";
import { ButtonsTypes } from "../PokeTypes/index";
import { Spinner } from "../../Spinner";
import { PaginationControlled } from "../../Pagination/PaginationControlled";
import { PokeGrillaItem } from "./PokeGrillaItem";
import { Stats } from "../Stats";
import { LlamadaStats } from "../../../helper/LlamadaStats";
import { SearchBar } from "./SearchBar";
import { PokeDataContext } from "./Context/PokeDataContext";

export const PokeGrilla = () => {
  const { showSinglePokemon } = useContext(PokeDataContext);


  const { pokeData, setPage, page } = PokemonsApi();
  const { pokeStats, setPokeStats } = LlamadaStats();
  const [types, setTypes] = useState("");
  const [clickedStat, setClickedStat] = useState("");
  const { filteredPokeData } = LlamadaTipos(types);
  const [data, setData] = useState([]);

  useEffect(() => {
    types === ""
      ? clickedStat === ""
        ? setData(pokeData)
        : setData(pokeStats)
      : setData(filteredPokeData);
  }, [filteredPokeData, pokeData, types, clickedStat]);

  // Sort original
  data.sort((a, b) => {
    return a.id - b.id;
  });

  const ordenarData = (posicion) => {
    data.sort((a, b) => {
      return b.stats[posicion]["base_stat"] - a.stats[posicion]["base_stat"];
    });
  };

  switch (clickedStat) {
    case "HP":
      ordenarData(0);
      break;
    case "ATTACK":
      ordenarData(1);
      break;
    case "DEFENSE":
      ordenarData(2);
      break;
    case "S.ATTACK":
      ordenarData(3);
      break;
    case "S.DEFENSE":
      ordenarData(4);
      break;
    case "SPEED":
      ordenarData(5);
      break;
    default:
      break;
  }

  return (
    <>
      {/* Filtrar por stat: HP, Attack, Defense, S.a, S.d, Speed.
      De mayor a menor --> pagination? Renderizar de a 20

      Data viene ordenada por id: del 1 al 1043
      Agarrar esa data y filtrar por el stat elegido de mayor a menor (filter con sort)

      Setear ese estado en setData 
      
      Nosotros nos traemos la data, que viene de a 20 en 58 paginas
      Se tienen que acomodar de tal forma que quede de mayor a menos por stat
      
      */}
      <h1>POKEGRID</h1>
      {data.length ? (
        <>
          <ButtonsTypes setTypes={setTypes} />
          <SearchBar />
          <div className="pokegrillaContainer">
            <Stats
              setClickedStat={setClickedStat}
              clickedStat={clickedStat}
              setData={setData}
            />
            <div className="divGrid">
              <PokeGrillaItem data={data} setData={setData} />
            </div>
          </div>
        </>
      ) : (
        <div className="backgroundSpinner">
          <Spinner />
        </div>
      )}
      <div
        style={{
          display: `${data.length ? "flex" : "none"}`,
          justifyContent: "center",
          margin: "50px 0",
        }}
      >
        {types === "" && clickedStat === "" && !showSinglePokemon?.name && (
          <PaginationControlled setPage={setPage} page={page} types={types} />
        )}
      </div>
    </>
  );
};
