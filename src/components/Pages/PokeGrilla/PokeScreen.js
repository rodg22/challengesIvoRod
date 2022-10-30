import React from "react";
import { useParams } from "react-router-dom";
import { LlamadaPokemons } from "../../../helper/LlamadaPokemons";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import  {CardActionArea}  from "@mui/material";
import { colorTipos } from "../../../helper/colorTipos";
import {CardActions} from "@mui/material";



export const PokeScreen = () => {
  const { pokeId } = useParams();
  const { singlePokeData } = LlamadaPokemons(pokeId);

  console.log(singlePokeData);

  const { id, sprites, name, types, stats, ...siglePokeData } = singlePokeData;

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={sprites?.other["official-artwork"].front_default}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button size="small" color="primary">
            Share
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PokeScreen;
