import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import API from "../../services/api-services";
import { RestaurantManagementModel } from "../../Models/Restaurant";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantContent from "./RestaurantContent";
import CircularProgress from "@mui/material/CircularProgress";

interface RestaurantDetailMainProps {
  id: string;
}

const RestaurantDetailMain: React.FC<RestaurantDetailMainProps> = ({ id }) => {
  const [restaurantId, setRestaurantId] = useState<string>("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const restaurant_api_service = new API("restaurant/");
  const [myRestaurant, setMyRestaurant] =
    useState<RestaurantManagementModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getRestaurantInformation = async (newId: string) => {
    try {
      const response = await restaurant_api_service.get(
        "get-restaurant/" + newId
      );
      setMyRestaurant(response as RestaurantManagementModel);
    } catch (error) {
      enqueueSnackbar("This restaurant is not available.", {
        variant: "warning",
        autoHideDuration: 2000,
      });
      navigate("/home");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id && id !== "") {
      setRestaurantId(id);
      getRestaurantInformation(id);
    }
  }, [id]);

  return (
    <Grid container>
      {loading ? (
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "60vh" }}
        >
          <CircularProgress />
          <span style={{ marginLeft: 8 }}>Loading Page</span>
        </Grid>
      ) : (
        <>
          <Grid size={12}>
            <RestaurantHeader currentRestaurant={myRestaurant} />
          </Grid>
          <Grid size={12}>
            <RestaurantContent restaurantId={restaurantId} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default RestaurantDetailMain;