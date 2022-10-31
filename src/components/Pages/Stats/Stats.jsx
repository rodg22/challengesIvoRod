import React from "react";
import "./Stats.css";

export const Stats = ({ setClickedStat, setData }) => {
  const handleChange = (e) => {
    setData([]);
    setClickedStat(e.target.innerText);
  };

  const handleReset = () => {
    setClickedStat("");
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
