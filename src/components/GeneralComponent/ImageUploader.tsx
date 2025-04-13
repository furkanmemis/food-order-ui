import React, { useState } from "react";
import {
  IconButton,
  SwipeableDrawer,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Close from "@mui/icons-material/Close";

interface ImageUploaderProps {
  parent: string;
  type: string;
  open: boolean;
  onClose: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  open,
  onClose,
  parent,
  type,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string>("");
  const [name,setName] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setFile(file);
    }
  };

  const resetValue = () => {
    setFile(null);
    setImage("");
  };

  return (
    <SwipeableDrawer
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      PaperProps={{ style: { width: "25vw" } }}
    >
      <Grid container spacing={3} size={12}>
        <Grid container size={12} sx={{ margin: 3 }}>
          <Grid size={6}>
            <Typography variant="h5" style={{ color: "darkslateblue" }}>
              Image Upload
            </Typography>
          </Grid>

          <Grid size={6} display="flex" justifyContent="flex-end">
            <IconButton
              onClick={() => {
                onClose();
              }}
            >
              <Close />
            </IconButton>
          </Grid>
        </Grid>


        <Grid size={12} display="flex" justifyContent="center">

          <TextField
            value={name}
            label="Image Name"
            onChange={(e)=>{setName(e.target.value)}}
            sx={{width: "80%"}}
          />

        </Grid>

        <Grid size={12}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <Button
              style={{
                backgroundColor: "darkslateblue",
                textTransform: "none",
              }}
              variant="contained"
              component="label"
            >
              Upload Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </Button>
            {image && (
              <Box
                component="img"
                src={image}
                alt="Uploaded Image"
                sx={{
                  width: 300,
                  height: "auto",
                  maxHeight: 600,
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              />
            )}
          </Box>
        </Grid>

        {image !== "" || file !== null ? (
          <Grid display="flex" justifyContent={"center"} size={12}>
            <Button
              variant="contained"
              style={{ backgroundColor: "darkred", textTransform: "none" }}
              onClick={() => {
                resetValue();
              }}
            >
              Delete Image
            </Button>
          </Grid>
        ) : null}

        <Grid size={12} container sx={{ position: "absolute", bottom: 10 }}>
          <Grid size={6} display="flex" justifyContent="center">
            <Button
              sx={{
                width: "70%",
              }}
              variant="contained"
              style={{ backgroundColor: "darkslateblue" }}
            >
              Save
            </Button>
          </Grid>

          <Grid size={6} display="flex" justifyContent="center">
            <Button
              sx={{ width: "70%" }}
              variant="contained"
              style={{ backgroundColor: "darkred" }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
};

export default ImageUploader;
