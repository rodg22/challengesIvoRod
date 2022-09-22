import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useState } from "react";
import { PokemonsApi } from "../../helper/PokemonsApi";
import "./PokeGrilla.css";
import { flexbox } from "@mui/system";

/// TODO PAGINATION
/// TODO QUE NO SE VUELVA A LLAMAR LA API CUANDO SE REALIZA UN CAMBIO

export const PokeGrilla = ({ pokeData }) => {
  let pokemonsData = PokemonsApi();

  pokemonsData.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <>
      <h1>POKEGRID</h1>
      <div className="divGrid">
        {pokemonsData.map(({ name, stats, sprites, id, types }) => {
          return (
            <Card
              className="divGridDiv"
              key={id}
              sx={{ maxWidth: 500, minWidth: 300 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={sprites.other["official-artwork"].front_default}
                  alt={name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name[0].toUpperCase() + name.substring(1)}
                  </Typography>

                  <div className="contenedorSpans">
                    {types.length > 1
                      ? types.map(({ type }) => {
                          console.log(type.name);
                          return (
                            <>
                              <div
                                className="type"
                                style={{
                                  backgroundColor:
                                    `${type.name}` === "grass"
                                      ? "lightGreen"
                                      : `${type.name}` === "fire"
                                      ? "#ff6c3e"
                                      : `${type.name}` === "water"
                                      ? "rgb(25, 118, 210)"
                                      : `${type.name}` === "normal"
                                      ? "lightgray"
                                      : `${type.name}` === "bug"
                                      ? "#c1c700"
                                      : `${types[1]?.type.name}` === "poison"
                                      ? "purple"
                                      : `${types[1]?.type.name}` === "flying"
                                      ? "gray"
                                      : "white",
                                }}
                              >
                                <p className="typeText">{type.name.toUpperCase()}</p>
                              </div>
                            </>
                          );
                        })
                      : types.map(({ type }) => {
                          console.log(type.name, "un solo tipo");
                          return (
                            <div
                              className="type"
                              style={{
                                backgroundColor:
                                  `${type.name}` === "grass"
                                    ? "lightGreen"
                                    : `${type.name}` === "fire"
                                    ? "#ff6c3e"
                                    : `${type.name}` === "water"
                                    ? "rgb(25, 118, 210)"
                                    : `${type.name}` === "normal"
                                    ? "lightgray"
                                    : `${type.name}` === "bug"
                                    ? "#c1c700"
                                    : `${types[1]?.type.name}` === "poison"
                                    ? "purple"
                                    : `${types[1]?.type.name}` === "flying"
                                    ? "gray"
                                    : "white",
                              }}
                              
                            >
                              <p className="typeText">{type.name.toUpperCase()}</p>
                            </div>
                          );
                        })}
                  </div>

                  <ul
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      padding: "initial",
                    }}
                  >
                    {stats.map((stat, index) => {
                      return (
                        <li className="list" key={index}>
                          {stat.stat.name.toUpperCase()}
                          <div className="borderDiv"
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
                                marginLeft: 0,
                                color: "white",
                                borderRadius: 10,
                                marginLeft: -1
                              }}
                            >
                              {stat["base_stat"]}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </>
  );
};
