import * as React from "react";
import { PokemonsApi } from "../../../helper/PokemonsApi";
import { LlamadaTipos } from "../../../helper/LlamadaTipos";
import { useState, useEffect } from "react";
import "./PokeGrilla.css";
import {ButtonsTypes} from "../PokeTypes/index";
import {Spinner} from "../../Spinner";
import { PaginationControlled } from "../../Pagination/PaginationControlled";
import { PokeGrillaItem } from "./PokeGrillaItem";


export const PokeGrilla = () => {
  const { pokeData, setPage, page } = PokemonsApi();
  const [types, setTypes] = useState("");
  const { filteredPokeData } = LlamadaTipos(types);
  const [data, setData] = useState([]);

  useEffect(() => {
    types === "" ? setData(pokeData) : setData(filteredPokeData);
  }, [filteredPokeData, pokeData, types]);

  data.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <>
      <h1>POKEGRID</h1>
      {data.length ? (
        <>
          <ButtonsTypes setTypes={setTypes} />
          <div className="divGrid">
           <PokeGrillaItem data={data} setData={setData} />
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
        {types === "" && (
          <PaginationControlled setPage={setPage} page={page} types={types} />
        )}
      </div>
    </>
  );
};
