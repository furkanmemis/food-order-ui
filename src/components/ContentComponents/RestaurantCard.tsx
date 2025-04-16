import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { RestaurantManagementModel } from "../../Models/Restaurant";
import { useNavigate } from "react-router-dom";


interface ContentHeaderProps {
  rate: number;
  restaurant: RestaurantManagementModel;
}

const RestaurantCard: React.FC<ContentHeaderProps> = ({ rate, restaurant }) => {
    const navigate = useNavigate();
  
  const getStar = () => {
    const stars = [];

    const star = Math.floor(rate);
    const emptyStar = 5 - star;

    for (let i = 0; i < star; i++) {
      stars.push(<StarIcon sx={{ color: "orange" }} key={i} />);
    }

    for (let i = 0; i < emptyStar; i++) {
      stars.push(<StarBorderIcon key={star + i} />);
    }

    return stars;
  };

  const redirectRestaurantDetail = (id: string) => {
    navigate("/restaurant-detail/"+id);
  };

  return (
    <Grid container size={12}>
      <Card
        sx={{
          width: "100%",
          height: "20vh",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#d0e8ff",
            cursor: "pointer",
          },
        }}
        onClick={()=>{redirectRestaurantDetail(restaurant.id)}}
      >
        <CardContent>
          <Grid container size={12}>
            <Grid
              size={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card>
                <CardContent
                  sx={{
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    width="50px"
                    height="50px"
                    src={`/foods-icon/`+restaurant.image}
                    alt="category"
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid size={8} container>
              <Grid container size={12}>
                <Grid size={6}>
                  <Typography
                    variant="h5"
                    style={{ fontFamily: "monospace", color: "darkslateblue" }}
                  >
                    {restaurant.name}
                  </Typography>
                </Grid>

                <Grid size={6}>{getStar()}</Grid>
              </Grid>

              <Grid size={6}>
                <Typography
                  variant="body1"
                  style={{ fontFamily: "monospace", color: "darkslateblue" }}
                >
                  {restaurant.categories.join(",").toUpperCase()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RestaurantCard;
