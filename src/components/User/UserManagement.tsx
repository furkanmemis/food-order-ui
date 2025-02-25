import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import API from "../../services/api-services";
import { User } from "../../Models/User";

const UserManagement: React.FC = () => {
  const tableColumns = ["Name", "Surname", "Email","Role" ,"Actions"];
  const [allUser, setAllUser] = useState<User[]>([]);
  const user_api_service = new API("user/");

  const getAllUser = async () => {
    try {
      const response = await user_api_service.get_api("get-all-user");
      setAllUser(response.allUser as User[]);
    } catch (error) {
      console.log("User Management error: ", error);
    }
  };

  useEffect(() => {
    getAllUser();
  });

  return (
    <Grid container size={12} sx={{ marginTop: 3 }}>
      <Grid size={12} sx={{ margin: 3 }}>
        <Typography
          variant="h4"
          style={{ fontFamily: "monospace", color: "darkslateblue" }}
        >
          User Management
        </Typography>
      </Grid>

      <Grid size={12} sx={{ margin: 3 }}>
        <Card>
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
                {allUser.map((user,index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell sx={{ textAlign: "center" }}>{user.name}</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>{user.surname}</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>{user.email}</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>{user.role}</TableCell>
                      <TableCell sx={{ textAlign: "center" }}><EditIcon style={{ color: "darkslateblue" }} /></TableCell>
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
