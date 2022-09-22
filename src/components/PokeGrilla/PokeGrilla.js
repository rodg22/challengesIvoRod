import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useState } from "react";
import { PokemonsApi } from "../../helper/PokemonsApi";
import './PokeGrilla.css'
import { flexbox } from "@mui/system";



/// TODO PAGINATION
/// TODO QUE NO SE VUELVA A LLAMAR LA API CUANDO SE REALIZA UN CAMBIO



export const PokeGrilla = ({ pokeData }) => {
  let pokemonsData = PokemonsApi()
  
  pokemonsData.sort((a, b) => {
    return a.id - b.id
  })
  
  const urt = 50
  

  return (
    <>
      <h1>POKEGRID</h1>
      <div className="divGrid">
        {pokemonsData.map(({ name, stats, sprites, id }) => {
          return(

          <Card className="divGridDiv" key={id} sx={{ maxWidth: 500, minWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={sprites.other['official-artwork'].front_default}
                alt={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name[0].toUpperCase() + name.substring(1)}
                </Typography>
                <ul style={{display: 'flex', justifyContent: "flex-start", flexDirection: 'column', padding: 'initial'}}>
                {
                stats.map((stat, index) => {
                  return (
                    <li className="list" key={index}>
                      {stat.stat.name.toUpperCase()}
                      <div style={{backgroundColor: 'grey', width: 255, marginLeft: 0}}>
                      <div style={{backgroundColor: 'lightGreen', width: `${stat['base_stat']}px`, marginLeft: 0}}>
                       {stat['base_stat']}
                      </div>
                      </div>
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
