import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import { RestaurantManagementModel } from "../../Models/Restaurant";
import CloseIcon from '@mui/icons-material/Close';

interface RestaurantAboutProps {
  open: boolean;
  onClose: () => void;
  restaurant?: RestaurantManagementModel
}

const RestaurantAbout: React.FC<RestaurantAboutProps> = ({ open, onClose, restaurant }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          About a Restaurant
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Address: {restaurant?.address}
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Vendor Name: {restaurant?.vendorInformation.name}
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Vendor Surname: {restaurant?.vendorInformation.surname}
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Vendor Email: {restaurant?.vendorInformation.email}
        </Typography>
      </Box>
    </Modal>
  );
};

export default RestaurantAbout;