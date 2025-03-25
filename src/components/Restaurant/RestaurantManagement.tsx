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
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import API from "../../services/api-services";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSnackbar } from "notistack";
import { RestaurantManagementModel } from "../../Models/Restaurant";
import RestaurantOperation from "./RestaurantOperation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const RestaurantManagement: React.FC = () => {
  const tableColumns = ["Name", "Categories", "Address", "Vendor", "Actions"];
  const restaurant_api_service = new API("restaurant/");
  const [open, setOpen] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const [allRestaurant, setAllRestaurant] = useState<
    RestaurantManagementModel[]
  >([]);
  const navigate = useNavigate();

  const getAllRestaurant = async () => {
    try {
      const response = await restaurant_api_service.get("get-all-restaurant");
      setAllRestaurant(response as RestaurantManagementModel[]);
    } catch (error) {
      console.log("User Management error: ", error);
    }
  };

  const deleteRestaurant = async (id: string) => {
    try {
      const response = await restaurant_api_service.delete(
        "delete-restaurant/" + id
      );
      console.log("Delete User Response: ", response);
      getAllRestaurant();
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
    getAllRestaurant();
  }, []);

  const redirectToProfile = () => {
    navigate("/profile");
  };

  return (
    <Grid container size={12} sx={{ marginTop: 3 }}>
      <Grid size={12}>
        <RestaurantOperation
          open={open}
          onClose={() => {
            setOpen(!open);
          }}
          onRefresh={(refresh) => {
            if (refresh) {
              getAllRestaurant();
            }
          }}
        />
      </Grid>
      <Grid size={12} sx={{ margin: 3 }}>
        <Typography
          variant="h4"
          style={{ fontFamily: "monospace", color: "darkslateblue" }}
        >
          Restaurant Management
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
            Create Restaurant
          </Button>
        </Grid>
      </Grid>

      <Grid size={12} sx={{ margin: 3 }}>
        <Card square elevation={10}>
          <CardContent>
            <Table>
              <TableHead style={{ backgroundColor: "whitesmoke" }}>
                <TableRow>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {allRestaurant.map((rest, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell sx={{ textAlign: "center" }}>
                        {rest.name}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {rest.categories.join(",")}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {rest.address}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <Tooltip title={rest.vendorInformation.email}>
                          <span>
                            {rest.vendorInformation.name +
                              " " +
                              rest.vendorInformation.surname}
                          </span>
                        </Tooltip>
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
                        <IconButton onClick={() => {}}>
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

export default RestaurantManagement;
