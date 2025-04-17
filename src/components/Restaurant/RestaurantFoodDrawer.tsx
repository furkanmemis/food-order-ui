import React, { useState } from "react";
import {
  IconButton,
  SwipeableDrawer,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CloseIcon from "@mui/icons-material/Close";
import { RestaurantCategoryModel } from "../../Models/Restaurant";
import API from "../../services/api-services";
import { useSnackbar } from "notistack";

interface RestaurantFoodDrawerProps {
  open: boolean;
  onClose: () => void;
  rc: RestaurantCategoryModel[];
  restaurantId: string;
  onRefresh: (refresh: boolean) => void;
}

const RestaurantFoodDrawer: React.FC<RestaurantFoodDrawerProps> = ({
  open,
  onClose,
  rc,
  restaurantId,
  onRefresh,
}) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(10);
  const [restaurantCategoryId, setRestaurantCategoryId] = useState<string>("");
  const restaurant_api_service = new API("restaurant/");
  const { enqueueSnackbar } = useSnackbar();

  const reset = () => {
    setName("");
    setPrice(10);
    setRestaurantCategoryId("");
  };

  const createRestaurantFood = async () => {
    try {
      let data = {
        name,
        price,
        restaurantCategoryId,
        restaurantId,
      };

      const response = await restaurant_api_service.post(
        "create-restaurant-food",
        data
      );

      console.log("restaurant create response -> ", response);
      onRefresh(true);
      reset();
      onClose();


      enqueueSnackbar("Restaurant food create success.", {
        variant: "success",
        autoHideDuration: 2000,
      });
    } catch (error) {
      console.log("create restaurant food -> ", error);


      enqueueSnackbar("Restaurant category create error.", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  return (
    <SwipeableDrawer
      open={open}
      onClose={() => {
        reset();
        onClose();
      }}
      onOpen={() => {}}
      anchor="right"
    >
      <Grid size={12} spacing={3} container sx={{ margin: 3, width: "25vw" }}>
        <Grid size={12} display="flex" justifyContent="flex-end">
          <IconButton
            onClick={() => {
              onClose();
            }}
          >
            <CloseIcon />
          </IconButton>
        </Grid>

        <Grid size={12}>
          <Typography
            variant="h5"
            style={{
              color: "darkslateblue",
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            Restaurant Food
          </Typography>
        </Grid>

        <Grid size={12}>
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            label={"Name"}
            fullWidth
          />
        </Grid>

        <Grid size={12}>
          <TextField
            value={price}
            type="number"
            onChange={(e) => {
              setPrice(Number(e.target.value));
            }}
            fullWidth
            label={"Price"}
          />
        </Grid>

        <Grid size={12}>
          <FormControl fullWidth>
            <InputLabel>Restaurant Category</InputLabel>
            <Select
              value={restaurantCategoryId}
              onChange={(e) => {
                setRestaurantCategoryId(e.target.value);
              }}
              fullWidth
            >
              {rc.map((category, ind) => {
                return (
                  <MenuItem key={ind} value={category._id}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid container size={12} sx={{ position: "absolute", bottom: 10 }}>
          <Grid size={6}>
            <Button
              onClick={() => {
                createRestaurantFood();
              }}
              disabled={name === "" || restaurantCategoryId === ""}
              sx={{
                backgroundColor: "darkslateblue",
                textTransform: "none",
                width: "70%",
              }}
              fullWidth
              variant="contained"
            >
              Save
            </Button>
          </Grid>

          <Grid size={6}>
            <Button
              sx={{
                backgroundColor: "darkred",
                textTransform: "none",
                width: "70%",
              }}
              fullWidth
              variant="contained"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
};

export default RestaurantFoodDrawer;
