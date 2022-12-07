import React from "react";
import "./Stats.css";
import { PokeDataContext } from "../PokeGrilla/Context/PokeDataContext";
import { useContext } from "react";

export const Stats = ({ setClickedStat, setData }) => {

  const { setShowSinglePokemon } = useContext(PokeDataContext);

  const handleChange = (e) => {
    setShowSinglePokemon(false)
    setData([]);
    setClickedStat(e.target.innerText);
  };

  const handleReset = () => {
    setClickedStat("");
    setShowSinglePokemon(false);
  };

  return (
    <>
      <ul
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <li onClick={handleChange}>
          <button className="statButtons">HP</button>
        </li>
        <li onClick={handleChange}>
          <button className="statButtons">ATTACK</button>
        </li>
        <li onClick={handleChange}>
          <button className="statButtons">DEFENSE</button>
        </li>
        <li onClick={handleChange}>
          <button className="statButtons">S.ATTACK</button>
        </li>
        <li onClick={handleChange}>
          <button className="statButtons">S.DEFENSE</button>
        </li>
        <li onClick={handleChange}>
          <button className="statButtons">SPEED</button>
        </li>
        <li onClick={handleReset}>
          <button className="statButtons">ID</button>
        </li>
      </ul>
    </>
  );
};
