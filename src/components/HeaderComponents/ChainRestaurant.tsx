import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import API from "../../services/api-services";
import { RestaurantManagementModel } from "../../Models/Restaurant";

const ChainRestaurant: React.FC = () => {
  const restaurant_api_service = new API("restaurant/");
  const [chain, setChain] = useState<RestaurantManagementModel[]>([]);

  const getChainRestaurant = async () => {
    try {
      const response = await restaurant_api_service.get("get-all-restaurant");
      let chain = (response as RestaurantManagementModel[]).filter(
        (rest) => rest.type === "chain"
      );
      setChain(chain as RestaurantManagementModel[]);
    } catch (error) {
      console.log("get all restaurant error");
    }
  };

  useEffect(() => {
    getChainRestaurant();
  }, []);

  return (
    <Grid
      container
      spacing={1}
      sx={{
        minHeight: "12vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      size={12}
    >
      <Grid size={12} sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          style={{
            color: "darkslateblue",
            fontFamily: "monospace",
            fontSize: 24,
          }}
        >
          Chain Restaurant
        </Typography>
      </Grid>
      {chain && chain.length > 0 ? (
        chain.slice(0,7).map((rest, index) => (
          <Grid
            key={index}
            sx={{
              width: "10%",
              textAlign: "center",
              mt: 2,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#d0e8ff",
                cursor: "pointer",
              },
            }}
          >
            <img
              width="50px"
              height="50px"
              src={`/foods-icon/`+rest.image}
              alt={rest.categories[0]}
            />
            <p
              style={{
                color: "darkslateblue",
                fontFamily: "monospace",
                fontSize: 16,
              }}
            >
              {rest.name}
            </p>
          </Grid>
        ))
      ) : (
        <Grid size={12} display="flex" justifyContent="center">
          <p
            style={{
              fontFamily: "monospace",
              color: "darkslateblue",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Any chain restaurant not found.
          </p>
        </Grid>
      )}
    </Grid>
  );
};

export default ChainRestaurant;
