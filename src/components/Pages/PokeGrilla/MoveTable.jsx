import React from "react";
import { useState, useEffect } from "react";
import { LlamadaMoves } from "../../../helper/LlamadaMoves";


const MoveTable = ({ moves }) => {

  const [arrayMoves, setArrayMoves] = useState([])

  LlamadaMoves([arrayMoves])

useEffect(() => {
  moves?.map(({move:{name}}) => {
    setArrayMoves((arrayMoves) => [...arrayMoves, name])
  })
}, [moves])


// arrayMoves.map((name) => {
//   console.log(name)
// })



  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
};

export default MoveTable;
