import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LlamadaPokemons } from "../../../helper/LlamadaPokemons";
import "./PokeScreen.css";
import { colorTipos } from "../../../helper/colorTipos";
import { Spinner } from "../../Spinner";
import { Button } from "@mui/material";
import { Tabla} from '../PokeGrilla/index'
import StatTable from "./StatTable";
import MoveTable from "./MoveTable";

export const PokeScreen = () => {
  const { pokeId } = useParams();
  const navigate = useNavigate();
  const { singlePokeData } = LlamadaPokemons(pokeId);

  const handleReturn = (e) => {
    navigate(-1);
  };

  const {
    id,
    sprites,
    name,
    types,
    stats,
    moves,
    abilities,
    height,
    weight,
    ...siglePokeData
  } = singlePokeData;

  return (
    <>
      {sprites ? (
        <div className="pokeScreen-container">
          <div className="margin-button">
            <Button variant='contained' sx={{marginBottom: '20px'}}
              onClick={handleReturn}
              size="small"
              color="primary"
            >
              Back
            </Button>
          </div>
          <div className="imgDiv">
            <div className="animate__animated animate__fadeInLeft">
              <img
                className="imgClass"
                src={
                  sprites?.other["official-artwork"].front_default ||
                  sprites?.other["home"].front_default
                }
                alt={name}
              ></img>
            </div>
            <div className="animate__animated animate__fadeIn">
              <h1 style={{ textAlign: "left" }}>
                #{id} {name ? name[0].toUpperCase() + name?.substring(1) : null}
              </h1>
              <div
                className="typosEnPokeScreen"
                style={{ position: "relative" }}
              >
                {types?.map(({ type: { name } }, index) => {
                  return (
                    <div
                      key={index}
                      className="type"
                      style={{ backgroundColor: colorTipos(name) }}
                    >
                      <p key={index} className="typeText">
                        {name.toUpperCase()}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="div-measures">
                <p>Height: {height / 10} m</p>
                <p>Weight: {weight / 10} kg</p>
              </div>
              <Tabla abilities={abilities} />
            </div>
          </div>
          <div style={{ marginLeft: 50, marginTop: 50 }}>
            <StatTable stats={stats}/>
            <MoveTable moves={moves}/>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PokeScreen;
