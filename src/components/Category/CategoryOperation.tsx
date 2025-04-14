import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  SwipeableDrawer,
  IconButton,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Avatar
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import API from "../../services/api-services";
import { useSnackbar } from "notistack";

interface CategoryOperationProps {
  onClose: () => void;
  open: boolean;
  title: string;
  onRefresh: (refresh: boolean) => void;
}

const CategoryOperation: React.FC<CategoryOperationProps> = ({
  onClose,
  open,
  title,
  onRefresh,
}) => {
  const category_api_service = new API("category/");
  const [name, setName] = useState<string>("");
  const { enqueueSnackbar } = useSnackbar();

  const [image, setImage] = useState<string>("");

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

  const createCategory = async () => {
    try {
      const response = await category_api_service.post("create-category", {
        name,
        image
      });
      console.log("create category response -> ", response);
      reset();
      enqueueSnackbar("Category create success.", {
        variant: "success",
        autoHideDuration: 2000,
      });
    } catch (error) {
      console.log("Category create error: ", error);
      enqueueSnackbar("Category create error.", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  const reset = () => {
    setName("");
    setImage("");

    setTimeout(() => {
      onClose();
      onRefresh(true);
    }, 100);
  };

  return (
    <SwipeableDrawer
      anchor="top"
      onClose={() => {
        onClose();
      }}
      onOpen={() => {}}
      open={open}
    >
      <Grid container spacing={2} size={12} sx={{ margin: 3 }}>
        <Grid size={6}>
          <Typography variant="h4" style={{ color: "darkslateblue" }}>
            {title}
          </Typography>
        </Grid>

        <Grid size={6} display="flex" justifyContent="flex-end">
          <IconButton
            onClick={() => {
              onClose();
            }}
          >
            <CloseIcon />
          </IconButton>
        </Grid>

        <Grid container spacing={3} size={4}>
          <Grid size={12}>
            <TextField
              value={name}
              label="Name"
              fullWidth
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
        </Grid>

        <Grid size={4} container>
          <Select
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
              console.log(e.target.value);
            }}
            sx={{width: "30%"}}
          >
            {imageList.map((img, ind) => {
              return (
                <MenuItem value={img} key={ind}>
                  <Avatar src={`/foods-icon/${img}`} sx={{ width: 30, height: 30 }} />
                </MenuItem>
              );
            })}
          </Select>
        </Grid>

        <Grid
          size={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            onClick={() => {
              createCategory();
            }}
            variant="contained"
            style={{
              textTransform: "none",
              width: "70%",
              backgroundColor: "darkslateblue",
            }}
          >
            {title}
          </Button>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
};

export default CategoryOperation;
