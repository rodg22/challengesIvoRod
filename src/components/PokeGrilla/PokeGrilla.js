import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useState } from "react";
import { PokemonsApi } from "../../helper/PokemonsApi";

export const PokeGrilla = ({pokes, pokeData}) => {
  const pokemonsData = PokemonsApi();

  // console.log(pokemonsData);
  // data.stats ? setWidth(data.stats[0].base_stat) : console.log('no hay data')

  // const hp = data.stats ? data.stats[0].base_stat : "";
  // const atack = data.stats ? data.stats[1].base_stat : "";
  // const defense = data.stats ? data.stats[2].base_stat : "";
  // const spAtack = data.stats ? data.stats[3].base_stat : "";
  // const spDefense = data.stats ? data.stats[4].base_stat : "";
  // const speed = data.stats ? data.stats[5].base_stat : "";

  // const pokeName = data.name;

  // return (
  //   <div className="cardGrid">
  //     <Card sx={{ maxWidth: 345 }}>
  //       <CardActionArea>
  //         <CardMedia
  //           component="img"
  //           height="140"
  //           image={pokes}
  //           alt={pokeName}
  //         />
  //         <CardContent>
  //           <Typography gutterBottom variant="h5" component="div">
  //             {pokeName}
  //           </Typography>
  //           <ul>
  //             <div
  //               style={{
  //                 width: 200,
  //                 backgroundColor: "#D93456",
  //                 borderRadius: 10,
  //                 marginBottom: 5,
  //               }}
  //             >
  //               <div
  //                 style={{
  //                   width: hp,
  //                   backgroundColor: "#8C0621",
  //                   borderRadius: 10,
  //                 }}
  //               >
  //                 <li>Hp: {hp}</li>
  //               </div>
  //             </div>
  //             <div
  //               style={{
  //                 width: 200,
  //                 backgroundColor: "#D93456",
  //                 borderRadius: 10,
  //                 marginBottom: 5,
  //               }}
  //             >
  //               <div
  //                 style={{
  //                   width: atack,
  //                   backgroundColor: "#8C0621",
  //                   borderRadius: 10,
  //                 }}
  //               >
  //                 <li>Atk: {atack}</li>
  //               </div>
  //             </div>

  //             <div
  //               style={{
  //                 width: 200,
  //                 backgroundColor: "#D93456",
  //                 borderRadius: 10,
  //                 marginBottom: 5,
  //               }}
  //             >
  //               <div
  //                 style={{
  //                   width: defense,
  //                   backgroundColor: "#8C0621",
  //                   borderRadius: 10,
  //                 }}
  //               >
  //                 <li>Def: {defense}</li>
  //               </div>
  //             </div>
  //             <div
  //               style={{
  //                 width: 200,
  //                 backgroundColor: "#D93456",
  //                 borderRadius: 10,
  //                 marginBottom: 5,
  //               }}
  //             >
  //               <div
  //                 style={{
  //                   width: spAtack,
  //                   backgroundColor: "#8C0621",
  //                   borderRadius: 10,
  //                 }}
  //               >
  //                 <li>Sp.Atk: {spAtack}</li>
  //               </div>
  //             </div>
  //             <div
  //               style={{
  //                 width: 200,
  //                 backgroundColor: "#D93456",
  //                 borderRadius: 10,
  //                 marginBottom: 5,
  //               }}
  //             >
  //               <div
  //                 style={{
  //                   width: spDefense,
  //                   backgroundColor: "#8C0621",
  //                   borderRadius: 10,
  //                 }}
  //               >
  //                 <li>Sp.Def: {spDefense}</li>
  //               </div>
  //             </div>
  //             <div
  //               style={{
  //                 width: 200,
  //                 backgroundColor: "#D93456",
  //                 borderRadius: 10,
  //                 marginBottom: 5,
  //               }}
  //             >
  //               <div
  //                 style={{
  //                   width: spDefense,
  //                   backgroundColor: "#8C0621",
  //                   borderRadius: 10,
  //                 }}
  //               >
  //                 <li>Sp: {speed}</li>
  //               </div>
  //             </div>
  //           </ul>
  //         </CardContent>
  //       </CardActionArea>
  //       <CardActions>
  //         <Button size="small" color="primary">
  //           Share
  //         </Button>
  //       </CardActions>
  //     </Card>
  //   </div>
  // );
};
