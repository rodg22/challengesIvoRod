import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { colorTipos } from "../../../helper/colorTipos";
import { Link } from "react-router-dom";

export const PokeGrillaItem = ({ data }) => {
 
  return (
    <>
      {data.map(({ name, stats, sprites, id, types }) => {
        return (
          <Link to={`/PokeScreen${id}`} style={{textDecoration: 'none'}}>
          <Card
          className="divGridDiv"
          key={id}
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
      </Link>
        );
      })}
    </>
  );
};
