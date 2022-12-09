import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const MoveTable = ({ moves }) => {
  const [arrayMoves, setArrayMoves] = useState([]);
  const [newArrayMoves, setNewArrayMoves] = useState([]);


  useEffect(() => {
    moves?.map(({ move: { url } }) => {
      setArrayMoves((arrayMoves) => [...arrayMoves, url]);
    });
  }, [moves]);

  useEffect(() => {
    arrayMoves?.map((url) => {
      axios
        .get(url)
        .then(({ data }) =>
          setNewArrayMoves((newArrayMoves) => [...newArrayMoves, data])
        );
    });
  }, [arrayMoves]);

  return (
    <div>
      <h1 style={{marginTop: '20px', marginBottom: '20px'}}>Atacks</h1>
      <ul >
        {newArrayMoves?.map((move, index) => {
          return (
            <li
              style={{ color: "black", width: `100%` }}
              key={move.name + index}
            >
              <div style={{background: '#1976d2', color: 'white', padding: '0px 10px',}}>
                <h3>{move.name}</h3>
                <p>Power: {move.power}</p>
                <p>Accuracy: {move.accuracy}</p>
                <p>Category: {move.damage_class.name}</p>
                <p>Description: {move.effect_entries[0] && move.effect_entries[0].effect}</p>
                <p>PP: {move.pp}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <ul>
        {moves?.map(({ move }, index) => {
          return (
            <li
              style={{ color: "black", width: `100%` }}
              key={move.name + index}
            >
              <div>
              {move.name}
              </div>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default MoveTable;
