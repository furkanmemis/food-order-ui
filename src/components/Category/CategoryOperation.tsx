import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  SwipeableDrawer,
  IconButton,
  Typography,
  TextField,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import API from "../../services/api-services";

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
  onRefresh
}) => {

  const category_api_service = new API("category/");
  const [name,setName] = useState<string>('');


  const createCategory = async () => {
    try{
      const response = await category_api_service.post('create-category',{name});
      console.log('create category response -> ',response);
      reset();
  
    }catch(error){
      console.log("Category create error: ", error);
    }
  };

  const reset = () =>{
    setName('');

    setTimeout(()=>{
      onClose();
      onRefresh(true);
    },100)

  }

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
            <TextField value={name} label="Name" fullWidth onChange={(e)=>{setName(e.target.value)}} />
          </Grid>

        </Grid>

        <Grid size={4} display="flex" alignItems="center" justifyContent="center">
            <Button onClick={()=>{createCategory();}} variant="contained" style={{textTransform: "none", width: "70%", backgroundColor: "darkslateblue"}}>{title}</Button>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
};

export default CategoryOperation;
