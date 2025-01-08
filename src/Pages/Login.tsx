import React from "react";
import Grid from "@mui/material/Grid2";
import SignIn from "../components/SignIn";

const Login: React.FC = () => {
    return(
        <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} size={12}>
            <SignIn />
        </Grid>
    );
};

export default Login;