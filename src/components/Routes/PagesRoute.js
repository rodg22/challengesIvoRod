import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeScreen, Tournament } from "../Pages/index";
import { RandomPokemon } from "../Pages/RandomPokemon";
import { PokeGrilla } from "../Pages/PokeGrilla";

const PagesRoute = () => {
  return (
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
  );
};

export default PagesRoute;
