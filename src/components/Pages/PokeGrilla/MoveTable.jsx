import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MoveTableData from "./MoveTableData";

const MoveTable = ({ moves }) => {
  const [urlArrayMoves, setUrlArrayMoves] = useState([]);
  const [moveData, setMoveData] = useState([]);
  const [learnedMethod, setLearnedMethod] = useState([])
  const [moveFinalData, setMoveFinalData] = useState([])

  useEffect(() => {
    moves?.map(({ move: { url } }) => {
      setUrlArrayMoves((urlArrayMoves) => [...urlArrayMoves, url]);
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


  useEffect(() => {
    moves.map((move) => {

      move.version_group_details[move.version_group_details.length -1] && setLearnedMethod((learnedMethod) => [...learnedMethod, {name: move.move.name, level: move.version_group_details[move.version_group_details.length -1].level_learned_at, method: move.version_group_details[move.version_group_details.length -1].move_learn_method.name}])
    })
  }, [moves])

  const orderedMoveData = moveData.sort((a, b) => {
    const moveA = a.name.toUpperCase(); // ignore upper and lowercase
    const moveB = b.name.toUpperCase(); // ignore upper and lowercase
    if (moveA < moveB) {
      return -1;
    }
    if (moveA > moveB) {
      return 1;
    }
    return 0;
  });

  const orderedlearnedMethod = learnedMethod.sort((a, b) => {
    const moveA = a.name.toUpperCase(); // ignore upper and lowercase
    const moveB = b.name.toUpperCase(); // ignore upper and lowercase
    if (moveA < moveB) {
      return -1;
    }
    if (moveA > moveB) {
      return 1;
    }
    return 0;
  });

    useEffect(() => {
      setMoveFinalData(orderedMoveData.map((item, i) => Object.assign({}, item, orderedlearnedMethod[i])))
    }, [orderedMoveData, orderedlearnedMethod])

    const orderedmoveByLevel = moveFinalData.sort((a, b) => a.level - b.level);

    const orderedmoveFinalData = orderedmoveByLevel.sort((a, b) => {
      const moveA = a.method.toUpperCase(); // ignore upper and lowercase
      const moveB = b.method.toUpperCase(); // ignore upper and lowercase
      if (moveA < moveB) {
        return -1;
      }
      if (moveA > moveB) {
        return 1;
      }
      return 0;
    });
    
  return (
    <div>
      <MoveTableData orderedMoveData={orderedmoveFinalData}/>
    </div>
  );
};

export default MoveTable;
