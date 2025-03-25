import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const { email, name, surname, role } = useAuth();
  const navigate = useNavigate();

  const redirectUser = () => {
    navigate("/user");
  };

  const redirectCategory = () => {
    navigate("/category");
  };

  const redirectRestaurant = () =>{
    navigate('/restaurant');
  }

  return (
    <Grid container size={12}>
      <Grid size={12} sx={{ marginLeft: 3, marginTop: 10 }}>
        <Typography
          variant="h4"
          style={{ fontFamily: "monospace", color: "darkslateblue" }}
        >
          Profile
        </Typography>
      </Grid>

      <Grid container size={12}>
        <Grid size={4} sx={{ margin: 3 }}>
          <Grid size={12}>
            <Typography
              variant="h5"
              sx={{ fontFamily: "monospace", color: "darkslateblue" }}
            >
              User Information
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography variant="h6">Name: {name}</Typography>
          </Grid>
          <Grid size={12}>
            <Typography variant="h6">Surname: {surname}</Typography>
          </Grid>

          <Grid size={12}>
            <Typography variant="h6">Email: {email}</Typography>
          </Grid>
          {role === "admin" ? (
            <Grid size={12}>
              <Typography variant="h6">Role: {role}</Typography>
            </Grid>
          ) : null}
        </Grid>

        {role === "admin" ? (
          <Grid size={4} sx={{ margin: 3 }}>
            <Grid size={12}>
              <Typography
                variant="h5"
                sx={{ fontFamily: "monospace", color: "darkslateblue" }}
              >
                Admin Panel
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography
                onClick={() => {
                  redirectUser();
                }}
                style={{ cursor: "pointer" }}
                variant="h6"
              >
                Users Page
              </Typography>
            </Grid>

            <Grid size={12}>
              <Typography
                onClick={() => {
                  redirectCategory();
                }}
                style={{ cursor: "pointer" }}
                variant="h6"
              >
                Category Page
              </Typography>
            </Grid>
          </Grid>
        ) : null}

        {role === "admin" || role === "vendor" ? (
          <Grid size={4} sx={{ margin: 3 }}>
            <Grid size={12}>
              <Typography
                variant="h5"
                sx={{ fontFamily: "monospace", color: "darkslateblue" }}
              >
                Vendor Panel
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography
                onClick={() => {redirectRestaurant()}}
                style={{ cursor: "pointer" }}
                variant="h6"
              >
                Restaurants Page
              </Typography>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Profile;
