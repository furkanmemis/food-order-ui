import React from "react";
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
  IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CategoryManagement: React.FC = () => {
  const tableHead = ["Name", "Action"];

  return (
    <Grid container size={12} sx={{ marginTop: 3 }}>
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
        display="flex"
        justifyContent="flex-end"
        sx={{ margin: 3 }}
      >
        <Button
          sx={{
            backgroundColor: "darkslateblue",
            color: "white",
            textTransform: "none",
          }}
        >
          Create Category
        </Button>
      </Grid>

      <Grid size={12}>
        <Card square elevation={10}>
          <CardContent>
            <Table>
              <TableHead style={{ backgroundColor: "whitesmoke" }}>
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
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{textAlign: "center"}}>Fast Food</TableCell>

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
                      onClick={() => {}}
                    >
                      <DeleteIcon style={{ color: "darkred" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CategoryManagement;
