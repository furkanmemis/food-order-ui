import React from "react";
import Grid from "@mui/material/Grid2";
import CategoryManagement from "../components/Category/CategoryManagement";


const Category:React.FC = () =>{
    return(
        <Grid sx={{margin: 3}} container>
            <CategoryManagement />

        </Grid>
    )
}

export default Category;