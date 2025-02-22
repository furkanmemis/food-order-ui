import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { SessionUser } from "../Models/SessionUser";
import { useAuth } from "../Context/AuthContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignIn: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
            variant="h3"
            style={{
              color: "darkslateblue",
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            Fuzei
          </Typography>
        </Grid>
        <Grid size={12} sx={{margin: 3}}>
          <TextField
          fullWidth
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid size={12} sx={{margin: 3}}>
          <TextField
          fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
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
