import React from "react";
import { colorTipos } from "../../helper/colorTipos";
import './buttonsTypes.css'

const ButtonsTypes = ({setTypes}) => {
  

  let tipos = [
    "fighting",
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  const handleClick = (e) => {
    setTypes(e.target.innerHTML)
  }

  const handleReset = (e) => {
    setTypes('')
  }

  return (
      <>
    <div className="divButtons">
      {tipos.map((tipo) => {
        return(
        <button onClick={handleClick} style={{ backgroundColor: colorTipos(tipo), width: 80, color: 'white'}} key={tipo}>{tipo}</button>
        )
      })}
        <button onClick={handleReset} style={{width: 100}}>all types</button>
    </div>
    </>
      )
}

export default ButtonsTypes;
