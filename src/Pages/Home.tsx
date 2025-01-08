import React from "react";
import Grid  from "@mui/material/Grid2";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";


const Home: React.FC = () => {
    return(


        <Grid container spacing={6} sx={{paddingTop: 8, paddingLeft: 16, paddingRight: 16}}>

            <Grid size={12}>
                <Header />
            </Grid>

            <Grid size={12}>

                <Content />

            </Grid>

            <Grid size={12}>
                <Footer />
            </Grid>

        </Grid>

    )

}

export default Home;