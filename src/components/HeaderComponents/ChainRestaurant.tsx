import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const ChainRestaurant: React.FC = () => {
  const imageList = [
    "burger-king.png",
    "dominos.png",
    "kfc.png",
    "popeyes.png",
    "starbucks.png",
  ];

  return (
    <Grid
      container
      spacing={1}
      sx={{
        minHeight: "12vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      size={12}
    >
      <Grid size={12} sx={{textAlign: "center"}}>
        <Typography
          variant="h5"
          style={{
            color: "darkslateblue",
            fontFamily: "monospace",
            fontSize: 24,
          }}
        >
          Chain Restaurant
        </Typography>
      </Grid>
      {imageList.map((image, index) => (
        <Grid
          key={index}
          sx={{
            width: "10%",
            textAlign: "center",
            mt: 2,
          }}
        >
          <img
            width="50px"
            height="50px"
            src={`/chain-restaurant/${image}`}
            alt={image.split(".")[0]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ChainRestaurant;
