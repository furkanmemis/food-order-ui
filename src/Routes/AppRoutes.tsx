import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid2";
import Profile from "../Pages/Profile";
import User from "../Pages/User";
import Category from "../Pages/Category";

const AppRoutes: React.FC = () => {
  return (
    <Grid container>
      <Grid size={12}>
        <Navbar />
      </Grid>
      <Grid size={12}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default AppRoutes;
