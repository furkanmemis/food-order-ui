import React from "react";
import UserManagement from "../components/User/UserManagement";
import Grid from "@mui/material/Grid2";

const User: React.FC = () => {
  return (
    <Grid sx={{margin: 3}} container>
      <UserManagement />
    </Grid>
  );
};

export default User;
