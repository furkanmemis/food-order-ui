import React from "react";
import Grid from "@mui/material/Grid2";

import { Card, CardContent } from "@mui/material";


const Footer: React.FC = () => {

    return(

        <Grid container size={12}>

            <Card sx={{width: "100%",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"}}>

                <CardContent>
                    <p>Footer</p>
                </CardContent>

            </Card>
        </Grid>

    )
}

export default Footer;