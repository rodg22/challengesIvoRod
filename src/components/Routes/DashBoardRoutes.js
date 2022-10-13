import React from "react";
import { HomeScreen } from "../Pages/HomeScreen";
import { Tournament } from "../Pages/Tournament";
import { RandomPokemon } from "../Pages/RandomPokemon";
import { PokeGrilla } from "../Pages/PokeGrilla/PokeGrilla";
import { Routes, Route, Navigate } from "react-router-dom";

export const DashBoardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/Tournament" element={<Tournament />} />
        <Route
          path="/RandomPokemon"
          element={<RandomPokemon id={4} name={"charmander"} />}
        />
        <Route path="/PokeGrid" element={<PokeGrilla />} />
        <Route path="/*" element={<Navigate to="HomeScreen" />} />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;
