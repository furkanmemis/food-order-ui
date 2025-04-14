import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent } from "@mui/material";
import RestaurantCard from "./ContentComponents/RestaurantCard";
import ContentHeader from "./ContentComponents/ContentHeader";
import { Restaurant } from "../Models/Restaurant";
import API from "../services/api-services";
import { RestaurantManagementModel } from "../Models/Restaurant";

const Content: React.FC = () => {

    const restaurant_api_service = new API('restaurant/');
    const [allRestaurant,setAllRestaurant] = useState<RestaurantManagementModel[]>([]);


    const getAllRestaurant = async() =>{
        try{

            const response = await restaurant_api_service.get('get-all-restaurant');

            setAllRestaurant(response as RestaurantManagementModel[]);

        }catch(error){
            console.log('restaurant get error');
        }
    }

    useEffect(()=>{
        getAllRestaurant();
    },[])


    return(

        <Grid container size={12}>

            <Card sx={{width: "100%",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"}}>

                <CardContent>

                    <Grid sx={{mb: 3}} size={12}>

                        <ContentHeader />

                    </Grid>
                    
                    <Grid size={12} spacing={3} container>

                       {allRestaurant && allRestaurant.length > 0 ? (allRestaurant.map((restaurant, index) => {
                        return(
                            <Grid key={index} size={6}>

                                <RestaurantCard  rate={4} restaurant={restaurant} />

                            </Grid>
                        )
                       })):(
                        <Grid size={12} display="flex" justifyContent="center">
                            <p style={{fontFamily: "monospace", color: "darkslateblue", fontWeight: "bold", fontSize: 18}}>Any Restaurant Not Found</p>
                        </Grid>
                       )} 


                    </Grid>
                
                </CardContent>

            </Card>
        </Grid>

    )
}

export default Content;