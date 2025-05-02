import React from "react";
import PaymentManagement from "../components/Payment/PaymentManagement";
import Grid from "@mui/material/Grid2";


const Payment: React.FC = () =>{
    return(
    <Grid container sx={{margin: 3}}>
        <PaymentManagement />
    </Grid>
    )
}

export default Payment;