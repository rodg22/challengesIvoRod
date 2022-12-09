import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { colorTipos } from "../../../helper/colorTipos";
import { Link } from "react-router-dom";
import { Spinner } from "../../Spinner";
import { PokeDataContext } from "./Context/PokeDataContext";
import { useContext } from "react";
import { useState, useEffect } from "react";

export const PokeGrillaItem = ({ data }) => {
  const [isSinglePokemon, setIsSinglePokemon] = useState(false);

  const { showSinglePokemon } = useContext(PokeDataContext);

  useEffect(() => {
    showSinglePokemon?.name ? setIsSinglePokemon(true) : setIsSinglePokemon(false)
    }, [showSinglePokemon]);

  return (
    <>
      {isSinglePokemon ? (
        <Link to={`/PokeScreen${showSinglePokemon?.id}`} style={{ textDecoration: "none" }}>
        <Card
          className="divGridDiv"
          key={showSinglePokemon?.id}
          sx={{ maxWidth: 500, minWidth: 300 }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                showSinglePokemon?.sprites?.other["official-artwork"]?.front_default ||
                showSinglePokemon?.sprites?.other["home"]?.front_default ||
                showSinglePokemon?.sprites?.front_default ||
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
              }
              alt={showSinglePokemon?.name}
            />
            <CardContent>
              <Typography
                style={{ fontWeight: "bold" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {showSinglePokemon? showSinglePokemon.name && showSinglePokemon?.name[0]?.toUpperCase() + showSinglePokemon?.name?.substring(1) : null}
              </Typography>

              <div className="contenedorSpans">
                {showSinglePokemon?.types?.map(({ type: { name } }, index) => {
                  return (
                    <div
                      key={name}
                      className="type"
                      style={{ backgroundColor: colorTipos(name) }}
                    >
                      <p className="typeText">
                        {name?.toUpperCase()}
                      </p>
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
                {showSinglePokemon?.stats?.map((stat, index) => {
                  return (
                    <li className="list" key={stat.stat.name}>
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
                              fontSize:
                                `${stat["base_stat"]}` <= 25 && 12,
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
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>      
      ) : data.length ? (
        data.map(({ name, stats, sprites, id, types }) => {
          return (
            <Link to={`/PokeScreen${id}`} key={id} style={{ textDecoration: "none" }}>
              <Card
                className="divGridDiv"
                sx={{ maxWidth: 500, minWidth: 300 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      sprites.other["official-artwork"].front_default ||
                      sprites.other["home"].front_default ||
                      sprites.front_default ||
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
                    }
                    alt={name}
                  />
                  <CardContent>
                    <Typography
                      style={{ fontWeight: "bold" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {name[0]?.toUpperCase() + name.substring(1)}
                    </Typography>

                    <div className="contenedorSpans">
                      {types.map(({ type: { name } }, index) => {
                        return (
                          <div
                            key={name + index}
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
                          <li className="list" key={stat.stat.name + index}>
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
                                    fontSize:
                                      `${stat["base_stat"]}` <= 25 && 12,
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
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          );
        })
      ) : (
        <Spinner />
      )}
    </>
  );
};
