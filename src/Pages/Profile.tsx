import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";

const Profile: React.FC = () => {

    return (
        <Grid container  style={{ height: "100vh" }}>

            <Grid size={12} textAlign="center" sx={{marginTop: 3}}>

                <Typography variant="h4" style={{fontFamily: "monospace", color: "darkslateblue"}}>Profile</Typography>

            </Grid>

        </Grid>
    );
};

export default Profile;