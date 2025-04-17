import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { RestaurantCategoryModel } from "../../Models/Restaurant";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RestaurantCategoryDrawer from "./RestaurantCategoryDrawer";
import API from "../../services/api-services";
import { useSnackbar } from "notistack";
import { RestaurantFoodModel } from "../../Models/Restaurant";

interface RestaurantCategoryManagementProps {
  category: RestaurantCategoryModel[];
  restaurantId: string;
  onRefresh: (refresh: boolean) => void;
  allFoods: RestaurantFoodModel[];
}

const RestaurantCategoryManagement: React.FC<
  RestaurantCategoryManagementProps
> = ({ category, restaurantId, onRefresh, allFoods }) => {
  const tableColumns = ["Name", "Actions"];
  const [categories, setCategories] = useState<RestaurantCategoryModel[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const restaurant_api_service = new API("restaurant/");
  const { enqueueSnackbar } = useSnackbar();
  const [foods, setFoods] = useState<RestaurantFoodModel[]>([]);

  useEffect(() => {
    setCategories(category);
    setFoods(allFoods);
  }, [category, allFoods]);

  const deleteCategory = async (id: string) => {
    try {
      let data = {
        restaurantId,
      };

      const response = await restaurant_api_service.delete(
        "delete-restaurant-category/" + id,
        data
      );
      console.log("restaurant category delete response " + response);
      onRefresh(true);

      enqueueSnackbar("Restaurant category delete success.", {
        variant: "success",
        autoHideDuration: 2000,
      });
    } catch (error) {
      enqueueSnackbar("Delete restaurant category error", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  return (
    <Grid size={11} spacing={3} container sx={{ margin: 1 }}>
      <Grid size={12}>
        <RestaurantCategoryDrawer
          open={open}
          onClose={() => {
            setOpen(!open);
          }}
          restaurantId={restaurantId}
          onRefresh={(refresh) => {
            onRefresh(refresh);
          }}
        />
      </Grid>
      <Grid size={12} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          sx={{ backgroundColor: "darkslateblue", textTransform: "none" }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Add Category
        </Button>
      </Grid>
      <Grid size={12}>
        <Table sx={{ border: "5px darkslateblue solid" }}>
          <TableHead sx={{ backgroundColor: "darkslateblue" }}>
            <TableRow>
              {tableColumns.map((column, ind) => {
                return (
                  <TableCell
                    key={ind}
                    sx={{
                      color: "white",
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {column}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {categories && categories.length > 0 ? (
              categories.map((c, ind) => {
                return (
                  <TableRow key={ind}>
                    <TableCell sx={{ textAlign: "center" }}>{c.name}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <IconButton>
                          <EditIcon sx={{ color: "darkslateblue" }} />
                        </IconButton>

                        <IconButton
                          disabled={foods.some((f) =>
                            f.restaurantCategory._id === c._id ? true : false
                          )}
                          onClick={() => {
                            deleteCategory(c._id);
                          }}
                        >
                          <DeleteIcon sx={{color: foods.some((f) => f.restaurantCategory._id === c._id) ? "grey" : "darkred"}} />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <Grid size={12}>
                <TableRow>
                  <TableCell></TableCell>
                </TableRow>
              </Grid>
            )}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default RestaurantCategoryManagement;
