import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Divider } from "@mui/material";
import FavoriKitchen from "./HeaderComponents/FavoriKitchen";
import Campaign from "./HeaderComponents/Campaign";
import ChainRestaurant from "./HeaderComponents/ChainRestaurant";

const Header: React.FC = () => {
  return (
    <Grid container size={12}>
      <Card
        sx={{ width: "100%", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
      >
        <CardContent>
          <Grid container spacing={4}>
            <Grid size={12}>
              <FavoriKitchen />
            </Grid>

            <Grid size={12}>
              <Divider />
            </Grid>

            <Grid size={12}>
                <ChainRestaurant />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Header;
