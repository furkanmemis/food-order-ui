import React from "react";
import Grid from "@mui/material/Grid2";

const Campaign: React.FC = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ justifyContent: "center", height: "16vh" }}
    >
      <Grid container spacing={3} sx={{ justifyContent: "center", marginLeft: 7 }} size={12}>
        <img
          width="150px"
          height="150px"
          src="/campaign/burger-camp.png"
          alt="Burger"
        />
        <img
          width="150px"
          height="150px"
          src="/campaign/pizza-camp.png"
          alt="Burger"
        />
        <img
          width="150px"
          height="150px"
          src="/campaign/baklava-camp.png"
          alt="Burger"
        />
        <img
          width="150px"
          height="150px"
          src="/campaign/durum-camp.png"
          alt="Burger"
        />
        <img
          width="150px"
          height="150px"
          src="/campaign/coffee-camp.png"
          alt="Burger"
        />
      </Grid>
    </Grid>
  );
};

export default Campaign;
