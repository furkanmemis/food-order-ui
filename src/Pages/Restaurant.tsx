import React from "react";
import RestaurantManagement from "../components/Restaurant/RestaurantManagement";
import Grid from "@mui/material/Grid2";

const Restaurant: React.FC = () => {
  return (
    <Grid sx={{ margin: 3 }} container>
      <RestaurantManagement />
    </Grid>
  );
};

export default Restaurant;
