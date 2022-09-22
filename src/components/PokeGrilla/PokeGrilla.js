import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useState } from "react";
import { PokemonsApi } from "../../helper/PokemonsApi";
import './PokeGrilla.css'



/// TODO PAGINATION
/// TODO QUE NO SE VUELVA A LLAMAR LA API CUANDO SE REALIZA UN CAMBIO



export const PokeGrilla = ({ pokeData }) => {
  let pokemonsData = PokemonsApi()

  pokemonsData.sort((a, b) => {
      return a.id - b.id
  })


  return (
    <>
      <h1>POKEGRID</h1>
      <div className="divGrid">
        {pokemonsData.map(({ name, stats, sprites, id }) => {
          return(

          <Card key={id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={sprites.other['official-artwork'].front_default}
                alt={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <ul>
                {
                stats.map((stat, index) => {
                  return (
                    <li className="list" key={index}>
                      {stat.stat.name} {stat['base_stat']}
                    </li>
                  )
                })
                }
                </ul>
              </CardContent>
            </CardActionArea>
          </Card>
          )
        })}
      </div>
    </>
  );
};
