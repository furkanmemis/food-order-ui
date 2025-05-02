import React, { useState } from "react";
import {
  SwipeableDrawer,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CloseIcon from "@mui/icons-material/Close";
import API from "../../services/api-services";

interface PaymentOperationProps {
  open: boolean;
  onClose: () => void;
  onRefresh: (rfrs: boolean) => void;
}

const PaymentOperation: React.FC<PaymentOperationProps> = ({
  open,
  onClose,
  onRefresh,
}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const payment_api_service = new API("payment/");

  const reset = () => {
    setName("");
    setDescription("");
  };

  const createPayment = async () => {
    try {
      let data = {
        name,
        description,
      };

      const response = await payment_api_service.post("create-payment", data);
      reset();
      console.log("create payment response ->" + response);
      onRefresh(true);
      onClose();
    } catch (error) {
      console.log("payment create error " + error);
    }
  };
  return (
    <SwipeableDrawer
      open={open}
      onClose={() => {
        onClose();
      }}
      onOpen={() => {}}
      anchor="top"
    >
      <Grid container size={12} sx={{ margin: 3 }}>
        <Grid container size={12} display="flex">
          <Grid size={6}>
            <Typography variant="h4" style={{ color: "darkslateblue" }}>
              {"Create Payment"}
            </Typography>
          </Grid>

          <Grid size={6} display="flex" justifyContent="flex-end">
            <IconButton
              onClick={() => {
                onClose();
                reset();
              }}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid size={12} spacing={3} sx={{ marginTop: 2 }} container>
          <Grid size={4}>
            <TextField
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              fullWidth
              label="Name"
            />
          </Grid>

          <Grid size={4}>
            <TextField
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              label="Description"
              fullWidth
              multiline
              rows={3}
            />
          </Grid>

          <Grid
            size={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              onClick={() => {
                createPayment();
              }}
              disabled={name === ""}
              variant="contained"
              sx={{
                backgroundColor: "darkslateblue",
                textTransform: "none",
                width: "30%",
              }}
            >
              Add Payment
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
};

export default PaymentOperation;
