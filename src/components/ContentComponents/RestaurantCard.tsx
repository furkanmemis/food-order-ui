import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface ContentHeaderProps {
  name: string;
  rate: number;
  category: string;
}

const RestaurantCard: React.FC<ContentHeaderProps> = ({
  name,
  rate,
  category,
}) => {
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
    "sushi.png",
  ];

  const findMyCategory = () => {
    const myCategory = imageList.find((image) => image.includes(category));
    return myCategory;
  };

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

  return (
    <Grid container size={12}>
      <Card sx={{ width: "100%", height: "20vh" }}>
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
                    src={`/foods-icon/${findMyCategory()}`}
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
                    {name}
                  </Typography>
                </Grid>

                <Grid size={6}>{getStar()}</Grid>
              </Grid>

              <Grid size={6}>
                <Typography
                  variant="body1"
                  style={{ fontFamily: "monospace", color: "darkslateblue" }}
                >
                  {category.toUpperCase()}
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
