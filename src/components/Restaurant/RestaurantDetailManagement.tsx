import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Tab, Tabs } from "@mui/material";
import RestaurantFoodManagement from "./RestaurantFoodManagement";
import RestaurantCategoryManagement from "./RestaurantCategoryManagement";
import { RestaurantCategoryModel } from "../../Models/Restaurant";
import { RestaurantFoodModel } from "../../Models/Restaurant";

interface RestaurantDetailManagementProps{
    allCategory: RestaurantCategoryModel[];
    allFoods: RestaurantFoodModel[];
    restaurantId: string;
    onRefresh: (refresh: boolean) => void;
}


const RestaurantDetailManagement: React.FC<RestaurantDetailManagementProps> = ({allCategory,allFoods, restaurantId, onRefresh}) => {
  const [tabValue, setTabValue] = useState<string>("category");
  const [food,setFood] = useState<RestaurantFoodModel[]>([]);
  const [category,setCategory] = useState<RestaurantCategoryModel[]>([]);

  useEffect(()=>{
    setFood(allFoods);
    setCategory(allCategory);
  },[allCategory,allFoods])


  return (
    <Grid size={12} container>
      <Grid size={12}>
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => {
            setTabValue(newValue);
          }}
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
              fontSize: 16,
            }}
            value={"category"}
            label={"Category"}
          />
          <Tab
            style={{
              color: "darkslateblue",
              fontWeight: "bold",
              textTransform: "none",
              fontFamily: "monospace",
              fontSize: 16,
            }}
            value={"food"}
            label={"Food"}
          />
        </Tabs>
      </Grid>

      <Grid size={12} container sx={{marginTop: 2}}>
        {tabValue === "food" ? (
          <RestaurantFoodManagement rc={category} food={food} restaurantId={restaurantId} onRefresh={(refresh) => {onRefresh(refresh);}} />
        ) : tabValue === "category" ? (
          <RestaurantCategoryManagement allFoods={food} category={category} restaurantId={restaurantId} onRefresh={(refresh) => {onRefresh(refresh)}} />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default RestaurantDetailManagement;
