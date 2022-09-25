import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { PokemonsApi } from "../../helper/PokemonsApi";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import "./PokeGrilla.css";

/// TODO PAGINATION
/// TODO QUE NO SE VUELVA A LLAMAR LA API CUANDO SE REALIZA UN CAMBIO

export const PokeGrilla = () => {
  // let pokeData = PokemonsApi();

  const {pokeData, onNext, onPrevious, page, setPage} = PokemonsApi() 


  pokeData.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <>
      <h1>POKEGRID</h1>
      <div className="divGrid">
        {pokeData.map(({ name, stats, sprites, id, types }) => {
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
                    {types.map(({ type }, index) => {
                      return (
                        <div
                          key={index}
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
                                : `${type.name}` === "poison"
                                ? "purple"
                                : `${type.name}` === "flying"
                                ? "gray"
                                : "white",
                          }}
                        >
                          <p key={index} className="typeText">
                            {type.name.toUpperCase()}
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
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px 0",
        }}
      >
      <Pagination
  count={50}
  renderItem={(item) => (
    <>
       { 
        console.log(item.page, 'page')
        }
        {

        console.log(item.disabled, 'disabled')
        }
        {
        console.log(item.onClick, 'onClick')

        }
        {
        console.log(item.selected, 'selected')

        }
        <PaginationItem
      components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
      {...item}
    />
    </>
  )}
/>
        {/* <Pagination count={10} showFirstButton showLastButton /> */}
      </div>
    </>
  );
};
