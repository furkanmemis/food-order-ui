import React, { useState } from "react";
import { SwipeableDrawer, IconButton, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CloseIcon from '@mui/icons-material/Close';
import API from "../../services/api-services";
import { useSnackbar } from "notistack";


interface RestaurantCategoryDrawerProps {
  open: boolean;
  onClose: () => void;
  restaurantId: string;
  onRefresh: (refresh: boolean) => void;
}

const RestaurantCategoryDrawer: React.FC<RestaurantCategoryDrawerProps> = ({
  open,
  onClose,
  restaurantId,
  onRefresh
}) => {
    const [name,setName] = useState<string>("");
    const restaurant_api_service = new API("restaurant/");
  const { enqueueSnackbar } = useSnackbar();


    const reset = () =>{
        setName("");
    }

    const createRestaurantCategory = async() =>{
        try{

            let data = {
                name,
                restaurantId
            }

            const response = await restaurant_api_service.post('create-restaurant-category',data);
            console.log("restaurant create respnose -> ",response);
            onRefresh(true);
            reset();
            onClose();

            enqueueSnackbar("Restaurant category create success.", {
                variant: "success",
                autoHideDuration: 2000,
              });

        }catch(error){
            console.log("restaurant category create error -> "+error);
            enqueueSnackbar("Restaurant category create error.", {
                variant: "error",
                autoHideDuration: 2000,
              });
        }
    }

  return (
    <SwipeableDrawer
      open={open}
      onClose={() => {
        reset();
        onClose();
      }}
      anchor="right"
      onOpen={() => {}}
    >

        <Grid container spacing={3} size={12} sx={{width: "25vw", margin: 3}}>

            <Grid size={12} display="flex" justifyContent="flex-end">

                <IconButton onClick={()=>{reset(); onClose();}}>
                    <CloseIcon/>
                </IconButton>

            </Grid>

            <Grid size={12}>

                <Typography variant="h5" style={{color: "darkslateblue", fontFamily: "monospace", fontWeight: "bold"}}>Restaurant Category</Typography>

            </Grid>


            <Grid size={12}>

                <TextField
                value={name}
                onChange={(e) =>{setName(e.target.value)}}
                label={"Restaurant Name"}
                fullWidth
                />

            </Grid>


            <Grid size={12} container sx={{position: "absolute", bottom: 10}}>

                <Grid size={6}>

                    <Button disabled={name === ""} onClick={()=>{createRestaurantCategory();}} fullWidth sx={{backgroundColor: "darkslateblue" ,textTransform: "none", width: "70%"}} variant="contained">Save</Button>

                </Grid>

                <Grid size={6}>

                    <Button fullWidth sx={{backgroundColor: "darkred", textTransform: "none", width: "70%"}} onClick={()=>{reset(); onClose();}} variant="contained">Cancel</Button>

                </Grid>

            </Grid>

        </Grid>
    </SwipeableDrawer>
  );
};

export default RestaurantCategoryDrawer;
