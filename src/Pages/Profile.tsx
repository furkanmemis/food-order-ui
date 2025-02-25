import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const { email, name, surname, role } = useAuth();
  const navigate = useNavigate();


  const redirectUser = () => {
    navigate('/user');
  }

  return (
    <Grid container size={12}>
      <Grid size={12} sx={{marginLeft: 3, marginTop: 10}}>
      <Typography
          variant="h4"
          style={{ fontFamily: "monospace", color: "darkslateblue" }}
        >
          Profile
        </Typography>
      </Grid>
      <Grid size={6} sx={{margin: 3}}>
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
      <Grid size={6} sx={{margin: 3}}>
        <Grid size={12}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "monospace", color: "darkslateblue" }}
          >
            Admin Panel
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography onClick={()=>{redirectUser()}} style={{cursor: "pointer"}} variant="h6">Users Page</Typography>
        </Grid>

      </Grid>

    </Grid>
  );
};

export default Profile;
