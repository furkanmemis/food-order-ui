import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography, Button, TextField } from "@mui/material";
import { SessionUser } from "../models/SessionUser";
import { useAuth } from "../Context/AuthContext";

const SignIn: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    const myUser: SessionUser = {
      email,
      password,
    };

    login(myUser);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          border: "2px solid darkslateblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Grid mt={5} size={12}>
          <Typography
            variant="h6"
            style={{
              color: "darkslateblue",
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            Fuzei
          </Typography>
        </Grid>
        <Grid size={12}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid mb={5} size={12}>
          <Button
            disabled={email === "" || password === ""}
            onClick={() => {
              handleLogin();
            }}
            sx={{
              backgroundColor: "darkslateblue",
              fontFamily: "monospace",
              "&.Mui-disabled": {
                color: "white",
                backgroundColor: "gray",
              },
            }}
            variant="contained"
          >
            Sign In
          </Button>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
