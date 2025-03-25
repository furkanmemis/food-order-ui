import React, { useEffect, useState } from "react";
import {
  SwipeableDrawer,
  Typography,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CloseIcon from "@mui/icons-material/Close";
import API from "../../services/api-services";
import { Category } from "../../Models/Category";
import { useSnackbar } from "notistack";


interface RestaurantOperationProps {
  open: boolean;
  onClose: () => void;
  onRefresh: (refresh:boolean) => void;
}

const RestaurantOperation: React.FC<RestaurantOperationProps> = ({
  open,
  onClose,
  onRefresh
}) => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const category_api_service = new API("category/");
  const restaurant_api_service = new API("restaurant/");
  const { enqueueSnackbar } = useSnackbar();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const getAllCategory = async () => {
    try {
      const response = await category_api_service.get("get-all-category");
      setCategories(response as Category[]);
    } catch (error) {
      console.log("get all category error -> ", error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);


  const saveRestaurant = async () =>{
    try{

        const response = await restaurant_api_service.post("create-restaurant",{name,address,"categories":selectedCategories});
        onRefresh(true);
        enqueueSnackbar('Restaurant create success.',{variant: "success", autoHideDuration: 2000});
        onClose();

    }catch(error){
        console.log("Restaurant create error ",error);
        enqueueSnackbar('User create failed.',{variant: "error", autoHideDuration: 2000});

    }
  }

  return (
    <SwipeableDrawer
      open={open}
      onClose={onClose}
      anchor="right"
      onOpen={() => {}}
      PaperProps={{
        style: { width: "35vw" },
      }}
    >
      <Grid container spacing={3} size={12} sx={{ margin: 3 }}>
        <Grid size={12} container>
          <Grid size={8}>
            <Typography variant="h5" style={{ color: "darkslateblue" }}>
              Restaurant Management
            </Typography>
          </Grid>

          <Grid size={4} display="flex" justifyContent="flex-end">
            <IconButton
              onClick={() => {
                onClose();
              }}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            label={"Restaurant Name"}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            fullWidth
            label="Restaurant Address"
            multiline
            rows={3}
          />
        </Grid>

        <Grid size={12}>
          <FormControl fullWidth>
            <InputLabel>Categories</InputLabel>
            <Select
              multiple
              value={selectedCategories}
              onChange={(e) =>
                setSelectedCategories(e.target.value as string[])
              }
              fullWidth
            >
              {categories.map((category, index) => {
                return (
                  <MenuItem key={index} value={category._id}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={12} sx={{ position: "absolute", bottom: 10 }} container>
          <Grid size={6}>
            <Button
              sx={{
                width: "70%",
              }}
              style={{
                backgroundColor: "darkslateblue",
                color: "white",
                textTransform: "none",
              }}
              onClick={()=>{saveRestaurant()}}
            >
              Save
            </Button>
          </Grid>

          <Grid size={6} display="flex" justifyContent="flex-end">
            <Button
              sx={{
                width: "70%",
                marginRight: 5,
              }}
              style={{
                backgroundColor: "darkred",
                color: "white",
                textTransform: "none",
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
};

export default RestaurantOperation;
