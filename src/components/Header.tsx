import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent } from "@mui/material";
import Campaign from "./HeaderComponents/Campaign";
import ChainRestaurant from "./HeaderComponents/ChainRestaurant";

const Header: React.FC = () => {
  return (
    <Grid container size={12}>
      <Card
        sx={{ width: "100%", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
      >
        <CardContent>
          <Grid container spacing={3}>
            <Grid size={6}>
              <Campaign />
            </Grid>
            <Grid size={6}>
              <ChainRestaurant />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Header;
