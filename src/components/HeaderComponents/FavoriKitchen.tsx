import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const FavoriKitchen: React.FC = () => {
  const imageList = [
    "bakery.png",
    "breakfast.png",
    "burger.png",
    "coffee.png",
    "dessert.png",
    "doner.png",
    "fish.png",
    "meat.png",
    "pasta.png",
    "pizza.png",
    "sushi.png"
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{
        minHeight: "12vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid size={12} sx={{textAlign: "center"}}>
        <Typography variant="h5" style={{ color: "darkslateblue", fontFamily: "monospace", fontSize: 24 }}>
          Favorite Food
        </Typography>
      </Grid>
      {imageList.map((image, index) => (
        <Grid
          key={index}
          sx={{
            width: "7%",
            textAlign: "center",
            mt: 2
          }}
        >
          <img
            width="40px"
            height="40px"
            src={`/foods-icon/${image}`}
            alt={image.split(".")[0]}
          />
          <p style={{ color: "darkslateblue", fontFamily: "monospace", fontSize: 16 }}>{image.split('.')[0].toLocaleUpperCase()}</p>
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoriKitchen;