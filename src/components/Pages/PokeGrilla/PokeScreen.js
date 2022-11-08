import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LlamadaPokemons } from "../../../helper/LlamadaPokemons";
import "./PokeScreen.css";
import { colorTipos } from "../../../helper/colorTipos";
import { Spinner } from "../../Spinner";

export const PokeScreen = () => {
  const { pokeId } = useParams();
  const navigate = useNavigate();
  const { singlePokeData } = LlamadaPokemons(pokeId);
  const [showMoves, setShowMoves] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showAbility, setShowAbility] = useState(false);

  const handleReturn = (e) => {
    navigate(-1);
  };

  const handleMovesOpen = (e) => {
    showMoves ? setShowMoves(false) : setShowMoves(true);
  };

  const handleStatsOpen = (e) => {
    showStats ? setShowStats(false) : setShowStats(true);
  };

  const handleAbilityOpen = (e) => {
    showAbility ? setShowAbility(false) : setShowAbility(true);
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
        <div>
          <div className="margin-button">
            <button
              onClick={handleReturn}
              size="small"
              color="primary"
            >
              Back
            </button>
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
              <h1>
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
            </div>
          </div>
          <div style={{ marginLeft: 50, marginTop: 50 }}>
            <div>
              <button className="pokeScreenButtons" onClick={handleAbilityOpen}>
                Abilities:
              </button>
              {showAbility && (
                <ul>
                  {abilities?.map(({ ability }) => {
                    console.log(ability)
                    return (
                      <li
                        style={{ color: "black", width: `100%` }}
                        key={ability.name}
                      >
                        {ability.name}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div>
              <button className="pokeScreenButtons" onClick={handleStatsOpen}>
                Stats:
              </button>
              {showStats && (
                <ul>
                  {stats?.map((stat, index) => {
                    return (
                      <li
                        style={{ color: "black", textAlign: "center" }}
                        key={index}
                      >
                        {stat.stat.name.toUpperCase()}
                        <div
                          className="borderDiv"
                          style={{
                            backgroundColor: "white",
                            width: 255,
                            marginLeft: 0,
                            borderRadius: 10,
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "#1976d2",
                              width: `${stat["base_stat"]}px`,
                              marginLeft: -1,
                              color: "white",
                              borderRadius: 10,
                            }}
                          >
                            <span
                              style={{
                                fontSize: `${stat["base_stat"]}` <= 25 && 12,
                              }}
                            >
                              {stat["base_stat"]}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div>
              <button className="pokeScreenButtons" onClick={handleMovesOpen}>
                Moves:
              </button>
              {showMoves && (
                <ul>
                  {moves?.map(({ move }, index) => {
                    return (
                      <li style={{ color: "black", width: `100%` }} key={index}>
                        {move.name}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PokeScreen;
