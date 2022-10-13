import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {LoginScreen} from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import DashBoardRoutes from "./DashBoardRoutes";

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
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        }
      />
      <Route path="/*" element={<Navigate to="HomeScreen" />} />
    </Routes>
  );
};

export default PagesRoute;
