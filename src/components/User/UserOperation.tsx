import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  SwipeableDrawer,
  IconButton,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import API from "../../services/api-services";

interface UserOperationProps {
  onClose: () => void;
  open: boolean;
  title: string;
  onRefresh: (refresh: boolean) => void;
}

const UserOperation: React.FC<UserOperationProps> = ({
  onClose,
  open,
  title,
  onRefresh,
}) => {
  const user_api_service = new API("user/");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("user");

  const createUser = async () => {
    try {
      const response = await user_api_service.post("create-user", {
        name,
        surname,
        email,
        password,
        role,
      });
      console.log("create user response -> ", response);
      reset();
    } catch (error) {
      console.log("User create error: ", error);
    }
  };

  const reset = () => {
    setName("");
    setSurname("");
    setPassword("");
    setEmail("");
    setRole("user");

    setTimeout(() => {
      onClose();
      onRefresh(true);
    }, 100);
  };

  return (
    <SwipeableDrawer
      anchor="top"
      onClose={() => {
        onClose();
      }}
      onOpen={() => {}}
      open={open}
    >
      <Grid container spacing={2} size={12} sx={{ margin: 3 }}>
        <Grid size={6}>
          <Typography variant="h4" style={{ color: "darkslateblue" }}>
            {title}
          </Typography>
        </Grid>

        <Grid size={6} display="flex" justifyContent="flex-end">
          <IconButton
            onClick={() => {
              onClose();
            }}
          >
            <CloseIcon />
          </IconButton>
        </Grid>

        <Grid container spacing={3} size={4}>
          <Grid size={12}>
            <TextField
              value={name}
              label="Name"
              fullWidth
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              value={surname}
              label="Surname"
              fullWidth
              onChange={(e) => {
                setSurname(e.target.value);
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} size={4}>
          <Grid size={12}>
            <TextField
              value={email}
              label="Email"
              fullWidth
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              value={password}
              label="Password"
              fullWidth
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          size={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid size={12}>
            <Select
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              fullWidth
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="vendor">Vendor</MenuItem>
            </Select>
          </Grid>

          <Grid size={12}>
            <Button
              onClick={() => {
                createUser();
              }}
              variant="contained"
              style={{
                textTransform: "none",
                backgroundColor: "darkslateblue",
              }}
              fullWidth
            >
              {title}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
};

export default UserOperation;
