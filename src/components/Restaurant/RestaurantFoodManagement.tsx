import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import { RestaurantFoodModel } from "../../Models/Restaurant";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RestaurantFoodDrawer from "./RestaurantFoodDrawer";
import { RestaurantCategoryModel } from "../../Models/Restaurant";
import API from "../../services/api-services";
import { useSnackbar } from "notistack";

interface RestaurantFoodManagementProps {
  food: RestaurantFoodModel[];
  rc: RestaurantCategoryModel[];
  restaurantId: string;
  onRefresh: (refresh: boolean) => void;
}

const RestaurantFoodManagement: React.FC<RestaurantFoodManagementProps> = ({
  food,
  rc,
  restaurantId,
  onRefresh,
}) => {
  const tableColumns = ["Name", "Price", "Actions"];
  const [foods, setFoods] = useState<RestaurantFoodModel[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const restaurant_api_service = new API("restaurant/");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setFoods(food);
  }, [food]);

  const deleteFood = async (id: string) => {
    try {
      let data = {
        restaurantId,
      };

      const response = await restaurant_api_service.delete(
        "delete-restaurant-food/" + id,
        data
      );

      console.log("delete food -> ", response);
      onRefresh(true);

      enqueueSnackbar("Restaurant food delete success.", {
        variant: "success",
        autoHideDuration: 2000,
      });
    } catch (error) {
      console.log("delete food -> " + error);
      enqueueSnackbar("Restaurant food create error.", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };
  return (
    <Grid size={11} spacing={3} container sx={{ margin: 1 }}>
      <Grid size={12}>
        <RestaurantFoodDrawer
          open={open}
          onClose={() => {
            setOpen(!open);
          }}
          rc={rc}
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
          Add Food
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
            {foods && foods.length > 0 ? (
              foods.map((f, ind) => {
                return (
                  <TableRow key={ind}>
                    <TableCell sx={{ textAlign: "center" }}>{f.name}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {f.price}₺
                    </TableCell>
                    <TableCell
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Box display="flex">
                        <IconButton>
                          <EditIcon sx={{ color: "darkslateblue" }} />
                        </IconButton>

                        <IconButton
                          onClick={() => {
                            deleteFood(f.id);
                          }}
                        >
                          <DeleteIcon sx={{ color: "darkred" }} />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <Grid size={12}>
                <TableRow>
                  <TableCell >
                  </TableCell>
                </TableRow>
              </Grid>
            )}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default RestaurantFoodManagement;
