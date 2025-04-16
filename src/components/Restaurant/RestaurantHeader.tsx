import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { RestaurantManagementModel } from "../../Models/Restaurant";
import { Card, CardContent, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestaurantAbout from "./RestaurantAbout";
import InfoIcon from "@mui/icons-material/Info";

interface RestaurantHeaderProps {
  currentRestaurant: RestaurantManagementModel | null;
}

const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({
  currentRestaurant,
}) => {
  const [restaurant, setRestaurant] = useState<RestaurantManagementModel>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (currentRestaurant) {
      setRestaurant(currentRestaurant);
    }
  }, [currentRestaurant]);

  return (
    <Grid container size={12} sx={{ margin: 5 }}>
      <Card sx={{ width: "90vw", boxShadow: 10 }} square>
        <CardContent>
          <Grid size={12}>
            <RestaurantAbout
              open={open}
              onClose={() => {
                setOpen(!open);
              }}
            restaurant={restaurant}
            />
          </Grid>
          <Grid
            size={12}
            container
            sx={{
              backgroundColor: "darkslateblue",
              borderRadius: "10px",
              marginBottom: 3,
            }}
          >
            <Grid size={12} sx={{ margin: 3 }}>
              <Typography
                variant="h4"
                style={{ fontFamily: "monospace", color: "white" }}
              >
                {restaurant?.name}
              </Typography>
            </Grid>
          </Grid>

          <Grid container size={12} sx={{ margin: 1 }}>
            <Grid size={2}>
              <img
                width="200px"
                height="200px"
                src={`/foods-icon/` + restaurant?.image}
                alt="category"
                style={{
                  border: "5px solid darkslateblue",
                  backgroundColor: "rgba(72, 61, 139, 0.2)",
                  padding: 10,
                }}
              />
            </Grid>

            <Grid
              container
              size={10}
              sx={{
                border: "2px solid black",
                borderRadius: "10px",
                backgroundColor: "rgba(72, 61, 139, 0.2)",
              }}
            >
              <Grid container size={12} sx={{ margin: 3 }}>
                <Grid container size={10}>
                  <Grid size={12}>
                    <Typography variant="h4" style={{ fontWeight: "bold" }}>
                      {restaurant?.name}
                    </Typography>
                  </Grid>

                  <Grid size={12}>
                    <Typography variant="body2" style={{}}>
                      Open: 10.00 AM - Close: 11.00 PM
                    </Typography>
                  </Grid>

                  <Grid size={12} container>
                    <Typography variant="body1" style={{ fontWeight: "bold" }}>
                      {restaurant?.categories.join(" , ")}
                    </Typography>
                  </Grid>

                  <Grid size={12}>
                    <Typography variant="body2" style={{ fontWeight: "bold" }}>
                      Min 200₺ | 30 - 40 Minute
                    </Typography>
                  </Grid>

                  <Grid size={12}>
                    <Typography variant="body2">
                      Cash, Online Payment, Multinet
                    </Typography>
                  </Grid>

                  <Grid
                    size={1}
                    onClick={() => {
                      setOpen(!open);
                    }}
                    sx={{
                      cursor: "pointer",
                    }}
                    display="flex"
                    alignItems="center"
                  >
                    <InfoIcon />
                    <p>About</p>
                  </Grid>
                </Grid>

                <Grid size={2} display="flex" justifyContent="flex-end">
                  <FavoriteIcon
                    sx={{
                      cursor: "pointer",
                      color: "rgba(72, 61, 139, 0.4)",
                      "&:hover": {
                        color: "darkslateblue",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RestaurantHeader;
