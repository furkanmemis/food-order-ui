import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import API from "../../services/api-services";
import { User } from "../../Models/User";
import DeleteIcon from "@mui/icons-material/Delete";
import UserOperation from "./UserOperation";
import { useSnackbar } from "notistack";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const UserManagement: React.FC = () => {
  const tableColumns = ["Name", "Surname", "Email", "Role", "Actions"];
  const [allUser, setAllUser] = useState<User[]>([]);
  const user_api_service = new API("user/");
  const [open, setOpen] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const getAllUser = async () => {
    try {
      const response = await user_api_service.get("get-all-user");
      setAllUser(response.allUser as User[]);
    } catch (error) {
      console.log("User Management error: ", error);
    }
  };

  const redirectToProfile = () => {
    navigate("/profile");
  };

  const deleteUser = async (id: string) => {
    try {
      const response = await user_api_service.delete("delete-user/" + id);
      console.log("Delete User Response: ", response);
      getAllUser();
      enqueueSnackbar("User delete success.", {
        variant: "success",
        autoHideDuration: 2000,
      });
    } catch (error) {
      console.log("User management delete error: ", error);
      enqueueSnackbar("User delete error.", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <Grid container size={12} sx={{ marginTop: 3 }}>
      <Grid size={12}>
        <UserOperation
          onClose={() => {
            setOpen(!open);
          }}
          open={open}
          title="Create User"
          onRefresh={(refresh) => {
            if (refresh) {
              getAllUser();
            }
          }}
        />
      </Grid>
      <Grid size={12} sx={{ margin: 3 }}>
        <Typography
          variant="h4"
          style={{ fontFamily: "monospace", color: "darkslateblue" }}
        >
          User Management
        </Typography>
      </Grid>

      <Grid
        size={12}
        container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <Grid display="flex" alignItems="center">
          <IconButton
            onClick={() => {
              redirectToProfile();
            }}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <p style={{ color: "darkslateblue", marginLeft: 8 }}>
            Back to profile page
          </p>
        </Grid>

        <Grid>
          <Button
            sx={{
              backgroundColor: "darkslateblue",
              color: "white",
              textTransform: "none",
            }}
            onClick={() => {
              setOpen(!open);
            }}
          >
            Create User
          </Button>
        </Grid>
      </Grid>

      <Grid size={12} sx={{ margin: 3 }}>
        <Card square elevation={10}>
          <CardContent>
            <Table>
              <TableHead style={{ backgroundColor: "whitesmoke" }}>
                {tableColumns.map((column, index) => {
                  return (
                    <TableCell key={index} sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h6"
                        style={{
                          fontFamily: "monospace",
                          color: "darkslateblue",
                          fontWeight: "bold",
                        }}
                      >
                        {column}
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableHead>

              <TableBody>
                {allUser.map((user, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell sx={{ textAlign: "center" }}>
                        {user.name}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {user.surname}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {user.email}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {user.role}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <IconButton>
                          <EditIcon
                            style={{ color: "darkslateblue" }}
                            sx={{ marginRight: 1 }}
                          />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            deleteUser(user._id);
                          }}
                        >
                          <DeleteIcon style={{ color: "darkred" }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserManagement;
