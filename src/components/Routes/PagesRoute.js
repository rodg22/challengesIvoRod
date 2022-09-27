import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import DashBoardRoutes from './DashBoardRoutes'

const PagesRoute = () => {
  return (
    <Routes>
    <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashBoardRoutes />
            </PrivateRoute>
          }
        />
      {/* <Route path="/HomeScreen" element={<HomeScreen />} />
      <Route path="/Tournament" element={<Tournament />} />
      <Route
        path="/RandomPokemon"
        element={<RandomPokemon id={4} name={"charmander"} />}
      />
      <Route path="/PokeGrid" element={<PokeGrilla />} /> */}
      
      
      
      <Route path="/login" element={
        <PublicRoute>
          <LoginScreen />
        </PublicRoute>
      } />

      <Route path="/*" element={<Navigate to="HomeScreen" />} />
    </Routes>
  );
};

export default PagesRoute;
