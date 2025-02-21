import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";


const ContentHeader: React.FC = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: "darkslateblue", height: "10vh", width: "100%" }}
    >
      <Grid
        size={12}
        container
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Typography
          variant="h6"
          sx={{ fontFamily: "monospace", color: "white", textAlign: "center" }}
        >
          Restaurant List
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContentHeader;
