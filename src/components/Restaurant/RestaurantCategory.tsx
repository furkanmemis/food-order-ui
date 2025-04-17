import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { RestaurantFoodModel } from "../../Models/Restaurant";
import RestaurantFoodCard from "./RestaurantFoodCard";

interface RestaurantCategoryProps {
  name: string;
  restaurantFoods: RestaurantFoodModel[];
}

const RestaurantCategory: React.FC<RestaurantCategoryProps> = ({ name, restaurantFoods }) => {
    const [allFood,setAllFood] = useState<RestaurantFoodModel[]>([]);


    useEffect(()=>{
        setAllFood(restaurantFoods);
    },[restaurantFoods])


  return (
    <Card sx={{boxShadow: 2}}>
      <CardContent>
        <Grid container size={12}>
          <Grid size={12} display="flex" justifyContent="flex-start" sx={{margin: 2}}>
            <Typography
              variant="h5"
              style={{
                color: "darkslateblue",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              {name}
            </Typography>
          </Grid>

          {allFood && allFood.length > 0 ? (
            <Grid container spacing={3} size={12}>

                {allFood.map((food,ind) =>{
                    return(
                        <Grid key={ind} size={4}>
                            <RestaurantFoodCard name={food.name} price={food.price} />
                        </Grid>
                    )
                })}

                </Grid>
          ): null}
            

        </Grid>
      </CardContent>
    </Card>
  );
};

export default RestaurantCategory;
