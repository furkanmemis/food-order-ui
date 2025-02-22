import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid2";
import Profile from "../Pages/Profile";

const AppRoutes: React.FC = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={12}>
        <Navbar />
      </Grid>
      <Grid size={12}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default AppRoutes;
