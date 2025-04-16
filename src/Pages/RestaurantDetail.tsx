import React from "react";
import RestaurantDetailMain from "../components/Restaurant/RestaurantDetailMain";
import Grid from "@mui/material/Grid2";
import { useParams } from "react-router-dom";

const RestaurantDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <Grid sx={{margin: 5}} container size={12}>
      <RestaurantDetailMain id={id || ""} />
    </Grid>
  );
};

export default RestaurantDetail;
