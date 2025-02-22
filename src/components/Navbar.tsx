import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const redirectProfile = () => {
    navigate("/profile");
  };

  const redirectHome = () => {
    navigate('/home');
  }

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
            style={{ color: "white", fontFamily: "monospace", fontSize: 24, cursor: "pointer" }}
            onClick={()=>{redirectHome()}}
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
          <IconButton
            onClick={() => {
              redirectProfile();
            }}
          >
            <PersonIcon style={{ color: "white" }} />
          </IconButton>
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
