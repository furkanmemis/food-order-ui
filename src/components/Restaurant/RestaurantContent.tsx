import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import API from "../../services/api-services";
import { RestaurantCategoryModel } from "../../Models/Restaurant";
import RestaurantCategory from "./RestaurantCategory";
import { RestaurantFoodModel } from "../../Models/Restaurant";
import { RestaurantManagementModel } from "../../Models/Restaurant";
import RestaurantDetailManagement from "./RestaurantDetailManagement";

interface RestaurantContentProps {
  restaurantId: string;
  currentRestaurant: RestaurantManagementModel | null;
}

const RestaurantContent: React.FC<RestaurantContentProps> = ({
  restaurantId,
  currentRestaurant,
}) => {
  const [tabValue, setTabValue] = useState<string>("category");
  const [id, setId] = useState<string>("");
  const { userId } = useAuth();
  const restaurant_api_service = new API("restaurant/");
  const [restaurantCategory, setRestaurantCategory] = useState<
    RestaurantCategoryModel[]
  >([]);

  const [restaurant, setRestaurant] =
    useState<RestaurantManagementModel | null>(null);

  const [restaurantFood, setRestaurantFood] = useState<RestaurantFoodModel[]>(
    []
  );

  useEffect(() => {
    setId(restaurantId);
    setRestaurant(currentRestaurant);
  }, [restaurantId, currentRestaurant]);

  const getAllCategory = async () => {
    try {
      const response = await restaurant_api_service.get(
        "get-all-restaurant-category/" + restaurantId
      );
      setRestaurantCategory(response as RestaurantCategoryModel[]);
    } catch (error) {
      console.log("Get all category error -> " + error);
    }
  };

  const getAllFood = async () => {
    try {
      const response = await restaurant_api_service.get(
        "get-all-restaurant-food/" + restaurantId
      );
      setRestaurantFood(response as RestaurantFoodModel[]);
    } catch (error) {
      console.log("Get all food ->" + error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getAllFood();
  }, []);

  const findFood = (categoryName: string) => {
    let foods = [];

    for (const food of restaurantFood) {
      if (food.restaurantCategory.name === categoryName) {
        foods.push(food);
      }
    }

    return foods;
  };

  return (
    <Grid size={12} container sx={{ marginLeft: 5, marginRight: 5 }}>
      <Card sx={{ width: "90vw", boxShadow: 10 }} square>
        <CardContent>
          <Grid
            container
            size={12}
            sx={{
              marginLeft: 7,
              marginRight: 7,
              marginTop: 7,
              marginBottom: 5,
            }}
          >
            <Tabs
              value={tabValue}
              onChange={(e, newValue) => setTabValue(newValue)}
              TabIndicatorProps={{
                style: { backgroundColor: "darkslateblue", height: 3 },
              }}
            >
              <Tab
                style={{
                  color: "darkslateblue",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontFamily: "monospace",
                  fontSize: 24,
                }}
                value="category"
                label="Category"
              />

              {restaurant?.vendorInformation._id === userId ? (
                <Tab
                  style={{
                    color: "darkslateblue",
                    fontWeight: "bold",
                    textTransform: "none",
                    fontFamily: "monospace",
                    fontSize: 24,
                  }}
                  value="management"
                  label="Management"
                />
              ) : null}
            </Tabs>
          </Grid>

          {tabValue === "category" ? (
            <div>
              {restaurantCategory && restaurantCategory.length > 0 ? (
                <Grid size={12} spacing={3} container sx={{ margin: 7 }}>
                  {restaurantCategory.map((cat, ind) => {
                    return (
                      <Grid size={11}>
                        <RestaurantCategory
                          name={cat.name}
                          restaurantFoods={findFood(cat.name)}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              ) : (
                <Grid size={12} container>

                  <Grid size={12} display="flex" justifyContent="center" textAlign="center">

                    <Typography variant="h6" style={{color: "darkslateblue", fontFamily: "monospace", fontWeight: "bold"}}>Any category and food not create for this restaurant</Typography>

                  </Grid>

                </Grid>
              )}
            </div>
          ) : tabValue === "management" ? (
            <Grid size={12} sx={{ marginLeft: 10, marginRight: 10 }}>
              <RestaurantDetailManagement
                allCategory={restaurantCategory}
                allFoods={restaurantFood}
                restaurantId={id}
                onRefresh={(refresh) => {
                  if (refresh) {
                    getAllCategory();
                    getAllFood();
                  }
                }}
              />
            </Grid>
          ) : null}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RestaurantContent;
