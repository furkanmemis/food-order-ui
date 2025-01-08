import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAuth } from "../Context/AuthContext";

const Navbar: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 1000,
        width: "100%",
        backgroundColor: "darkslateblue",
        height: "6vh",
      }}
    >
      <Grid container size={12}>
        <Grid sx={{ padding: 1 }} size={6}>
          <Typography
            style={{ color: "white", fontFamily: "monospace", fontSize: 24 }}
          >
            Fuzei
          </Typography>
        </Grid>

        <Grid
          size={6}
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 1,
          }}
        >
          <SettingsIcon style={{ color: "white" }} />
          <PersonIcon style={{ color: "white" }} />
          <IconButton
            onClick={() => {
              logout();
            }}
          >
            <LogoutIcon style={{ color: "white" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
