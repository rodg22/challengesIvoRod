import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MoveTableData from "./MoveTableData";

const MoveTable = ({ moves }) => {
  const [urlArrayMoves, setUrlArrayMoves] = useState([]);
  const [moveData, setMoveData] = useState([]);

  useEffect(() => {
    moves?.map(({ move: { url } }) => {
      setUrlArrayMoves((arrayMoves) => [...arrayMoves, url]);
    });
  }, [moves]);

  useEffect(() => {
    urlArrayMoves?.map((url) => {
      axios
        .get(url)
        .then(({ data }) =>
          setMoveData((moveData) => [...moveData, data])
        );
    });
  }, [urlArrayMoves]);

  return (
    <div>
      <MoveTableData moveData={moveData}/>
    </div>
  );
};

export default MoveTable;
