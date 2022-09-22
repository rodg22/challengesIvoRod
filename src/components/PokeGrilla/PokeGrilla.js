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
                    {types.map((type) => {
                      return (
                        <>
<div className="contenedorSpans">

                  <div
                    className="type"
                    style={{
                      backgroundColor:
                        `${types[0].type.name}` === "grass"
                          ? "lightGreen"
                          : `${types[0].type.name}` === "fire"
                          ? "#ff6c3e"
                          : `${types[0].type.name}` === "water"
                          ? "rgb(25, 118, 210)"
                          : `${types[0].type.name}` === "normal"
                          ? "lightgray"
                          : `${types[0].type.name}` === "bug"
                          ? "#c1c700"
                          : "black",
                    }}
                  >
                     { types[0].type.name.toUpperCase()}
                  </div>
                  <div className="secondType"
                  style={{
          
                      backgroundColor:
                        `${types[1]?.type.name}` === "grass"
                          ? "lightGreen"
                          : `${types[1]?.type.name}` === "fire"
                          ? "#ff6c3e"
                          : `${types[1]?.type.name}` === "water"
                          ? "rgb(25, 118, 210)"
                          : `${types[1]?.type.name}` === "normal"
                          ? "lightgray"
                          : `${types[1]?.type.name}` === "bug"
                          ? "#c1c700"
                          :`${types[1]?.type.name}` === "poison"
                          ? "purple"
                          :`${types[1]?.type.name}` === "flying"
                          ? 'gray'
                          : "white",
                    }}>
                  { types[1]?.type.name.toUpperCase()}
                  </div>
                      </div>
                        </>

                      )
                      
                    })
                    }
                    {/* [0].type.name.toUpperCase()} */}
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
                          <div
                            style={{
                              backgroundColor: "white",
                              width: 255,
                              marginLeft: 0,
                              borderRadius: 10,
                              border: "solid",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#1976d2",
                                width: `${stat["base_stat"]}px`,
                                marginLeft: 0,
                                color: "white",
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
