import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";

interface RestaurantFoodCardProps {
  name: string;
  price: number;
}

const RestaurantFoodCard: React.FC<RestaurantFoodCardProps> = ({
  name,
  price,
}) => {
  return (
    <Card sx={{boxShadow: 3}}>
      <CardContent>
        <Grid size={12} container>
          <Grid size={10} container>
            <Grid size={12}>
              <Typography
                variant="h6"
                style={{
                  color: "darkslateblue",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                }}
              >
                {name}
              </Typography>
            </Grid>

            <Grid size={12}>
              <Typography variant="body1" style={{ opacity: "0.8" }}>
                {price} TL
              </Typography>
            </Grid>
          </Grid>

          <Grid
            size={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton>
              <AddIcon
                sx={{
                  color: "rgba(72, 61, 139, 0.4)",
                  "&:hover": {
                    color: "darkslateblue",
                  },
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RestaurantFoodCard;
