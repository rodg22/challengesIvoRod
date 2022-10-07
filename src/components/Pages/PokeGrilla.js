import * as React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PokemonsApi } from "../../helper/PokemonsApi";
import { LlamadaTipos } from "../../helper/LlamadaTipos";
import { useState } from "react";

import "./PokeGrilla.css";
import { colorTipos } from "../../helper/colorTipos";
import ButtonsTypes from "./ButtonsTypes";

export const PokeGrilla = () => {
  const { pokeData, setPage } = PokemonsApi();
  const [types, setTypes] = useState("");
  const { filteredPokeData } = LlamadaTipos(types);
  const [data, setData] = useState([]);

  useEffect(() => {
    types === "" ? setData(pokeData) : setData(filteredPokeData);
  }, [filteredPokeData, pokeData, types]);

  data.sort((a, b) => {
    return a.id - b.id;
  });

  // Poner un spinner al esperar la respuesta
  // Toast con el tipo cambiado

  return (
    <>
      <h1>POKEGRID</h1>
      <ButtonsTypes setTypes={setTypes} />
      {data.length ? (
        <div className="divGrid">
          {data.map(({ name, stats, sprites, id, types }) => {
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
                    <Typography
                      style={{ fontWeight: "bold" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {name[0].toUpperCase() + name.substring(1)}
                    </Typography>

                    <div className="contenedorSpans">
                      {types.map(({ type: { name } }, index) => {
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
            );
          })}
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px 0",
        }}
      >
        <Pagination
          count={58}
          renderItem={(item) => (
            <>
              {item.selected && setPage(item.page - 1)}
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            </>
          )}
        />
      </div>
    </>
  );
};
