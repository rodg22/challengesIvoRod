import React from "react";
import { colorTipos } from "../../helper/colorTipos";
import "./buttonsTypes.css";
import Swal from "sweetalert2";

const ButtonsTypes = ({ setTypes }) => {


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
    setTypes(e.target.innerHTML);
    Swal.fire({
      background: `var(--${e.target.innerHTML})`,
      color: "#fff",
      padding: "1em",
      position: "top-right",
      showConfirmButton: false,
      timer: 1500,
      title: `${
        e.target.innerHTML[0].toUpperCase() + e.target.innerHTML.substring(1)
      } type!`,
      toast: true,
      width: "200px",
    });
  };

  const handleReset = () => {
    setTypes("");
  };

  return (
    <>
      <div className="divButtons">
        {tipos.map((tipo) => {
          return (
            <button
              onClick={handleClick}
              style={{
                backgroundColor: colorTipos(tipo),
                width: 80,
                color: "white",
              }}
              key={tipo}
            >
              {tipo}
            </button>
          );
        })}
        <button onClick={handleReset} style={{ width: 100 }}>
          all types
        </button>
      </div>
    </>
  );
};

export default ButtonsTypes;
