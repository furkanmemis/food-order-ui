import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent } from "@mui/material";
import RestaurantCard from "./ContentComponents/RestaurantCard";
import ContentHeader from "./ContentComponents/ContentHeader";
import { Restaurant } from "../Models/Restaurant";

const Content: React.FC = () => {

    const restaurants: Restaurant[] = [
        { name: "Lezzet Durağı", category: "doner", rate: 4.7 },
        { name: "Sushi Master", category: "fish", rate: 4.5 },
        { name: "Pizza Time", category: "pizza", rate: 3.2 },
        { name: "Burger House", category: "burger", rate: 4.3 },
        { name: "Vegan Life", category: "breakfast", rate: 2.3 },
        { name: "Steak & Grill", category: "meat", rate: 1 },
        { name: "Curry Palace", category: "dessert", rate: 4.4 },
        { name: "Taco Fiesta", category: "meat", rate: 4.1 },
        { name: "Mediterranean Bites", category: "coffe", rate: 0.5 },
        { name: "French Elegance", category: "pasta", rate: 4.7 }
    ];

    return(

        <Grid container size={12}>

            <Card sx={{width: "100%",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"}}>

                <CardContent>

                    <Grid sx={{mb: 3}} size={12}>

                        <ContentHeader />

                    </Grid>
                    
                    <Grid size={12} spacing={3} container>

                       {restaurants.map((restaurant) => {
                        return(
                            <Grid size={6}>

                                <RestaurantCard name={restaurant.name} rate={restaurant.rate} category={restaurant.category} />

                            </Grid>
                        )
                       })} 


                    </Grid>
                
                </CardContent>

            </Card>
        </Grid>

    )
}

export default Content;