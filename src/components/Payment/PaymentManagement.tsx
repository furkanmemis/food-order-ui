import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Button, Typography } from "@mui/material";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";

import API from "../../services/api-services";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Payment } from "../../Models/Payment";
import PaymentOperation from "./PaymentOperation";

const PaymentManagement: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const columns = ["Name", "Description", "Actions"];
  const [payments, setPayments] = useState<Payment[]>([]);
  const payment_api_service = new API("payment/");
    const { enqueueSnackbar } = useSnackbar();
  

  const redirectToProfile = () => {
    navigate("/profile");
  };

  const getAllPayment = async () => {
    try {
      const response = await payment_api_service.get("get-all-payment");
      console.log("get all response -> "+response);
      setPayments(response as Payment[]);
    } catch (error) {
      console.log("get all payment error " + error);
    }
  };

  const deletePayment = async(id: string) =>{
    try{

      const response = await payment_api_service.delete('delete-payment/'+id);
      console.log("delete payment respone -> "+response);

      getAllPayment();
      enqueueSnackbar("Paymenet delete success.", {
        variant: "success",
        autoHideDuration: 2000,
      });

    }catch(error){
      console.log("delete error -> payment"+error);
      enqueueSnackbar("Paymenet delete error.", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }

  useEffect(() => {
    getAllPayment();
  }, []);

  return (
    <Grid container size={12} sx={{ marginTop: 3 }}>
      <Grid size={12}>
        <PaymentOperation
          open={open}
          onClose={() => {
            setOpen(!open);
          }}
          onRefresh={(rfrs) => {
            console.log("ref-0")
            
            if (rfrs) {
              console.log("ref-1")
              getAllPayment();
            }
          }}
        />
      </Grid>
      <Grid size={12} sx={{ margin: 3 }}>
        <Typography
          sx={{ color: "darkslateblue", fontFamily: "monospace" }}
          variant="h4"
        >
          Payment Management
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
            Create Payment
          </Button>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Table sx={{ border: "5px solid darkslateblue" }}>
          <TableHead sx={{ backgroundColor: "darkslateblue" }}>
            <TableRow>
              {columns.map((column, ind) => {
                return (
                  <TableCell
                    key={ind}
                    sx={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {column}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {payments.map((pay, ind) => {
              return (
                <TableRow key={ind}>
                  <TableCell sx={{ textAlign: "center" }}>{pay.name}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {pay.description !== "" ? pay.description : "-"}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton>
                      <EditIcon sx={{ color: "darkslateblue" }} />
                    </IconButton>

                    <IconButton onClick={()=>{deletePayment(pay._id)}}>
                      <DeleteIcon sx={{ color: "darkred" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default PaymentManagement;
