import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Typography,
  Button,
  Table,
  TableCell,
  TableBody,
  TableHead,
  CardContent,
  Card,
  TableRow,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CategoryOperation from "./CategoryOperation";
import { Category } from "../../Models/Category";
import API from "../../services/api-services";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import ImageIcon from '@mui/icons-material/Image';
import ImageUploader from "../GeneralComponent/ImageUploader";

const CategoryManagement: React.FC = () => {
  const tableHead = ["Name", "Action"];
  const [open, setOpen] = useState<boolean>(false);
  const [allCategory, setAllCategory] = useState<Category[]>([]);
  const category_api_service = new API("category/");
  const navigate = useNavigate();
  const [imageOpen,setImageOpen] = useState<boolean>(false);
  const [parent,setParent] = useState<string>('');

  const getAllCategory = async () => {
    try {
      const response = await category_api_service.get("get-all-category");
      setAllCategory(response as Category[]);
    } catch (error) {
      console.log("get all category error -> ", error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const redirectToProfile = () => {
    navigate("/profile");
  };

  return (
    <Grid container size={12} sx={{ marginTop: 3 }}>
      <Grid size={12}>
        <CategoryOperation
          onClose={() => {
            setOpen(!open);
          }}
          open={open}
          onRefresh={(refresh) => {
            if (refresh) {
              getAllCategory();
            }
          }}
          title="Create Category"
        />
      </Grid>

      <Grid size={12}>

        <ImageUploader open={imageOpen} onClose={()=>{setImageOpen(!imageOpen)}} type="category" parent={parent} />

      </Grid>

      <Grid size={12} sx={{ margin: 3 }}>
        <Typography
          variant="h4"
          style={{ color: "darkslateblue", fontFamily: "monospace" }}
        >
          Category Management
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
            Create Category
          </Button>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Card square elevation={10}>
          <CardContent>
            <Table>
              <TableHead style={{ backgroundColor: "whitesmoke" }}>
                <TableRow>
                  {tableHead.map((head, index) => {
                    return (
                      <TableCell
                        sx={{
                          color: "darkslateblue",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                        key={index}
                      >
                        {head}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {allCategory.map((category, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell sx={{ textAlign: "center" }}>
                        {category.name}
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

                        {/* <IconButton onClick={()=>{setImageOpen(!imageOpen); setParent(category._id)}}>
                          <ImageIcon />
                        </IconButton> */}
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

export default CategoryManagement;
