import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { useAuth } from "../Context/AuthContext";

const Profile: React.FC = () => {
  const { email, name, surname, role } = useAuth();

  return (
    <Grid container style={{ height: "100vh", flexDirection: "column" }}>
      <Grid size={12} textAlign="center">
        <Typography
          variant="h4"
          style={{ fontFamily: "monospace", color: "darkslateblue" }}
        >
          Profile
        </Typography>
      </Grid>
      <Grid size={12} sx={{ marginLeft: 4 }}>
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
    </Grid>
  );
};

export default Profile;
