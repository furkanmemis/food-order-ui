import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import {Card, CardContent, Table, TableBody, TableHead, TableCell, TableRow} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const UserManagement: React.FC = () => {

    const tableColumns = ["Name", "Surname", "Email", "Actions"]


  return (
    <Grid container size={12} sx={{marginTop: 3}}>
      <Grid size={12} sx={{margin: 3}}>
        <Typography
          variant="h4"
          style={{ fontFamily: "monospace", color: "darkslateblue" }}
        >
          User Management
        </Typography>
      </Grid>

      <Grid size={12} sx={{margin: 3}}>

        <Card>
            <CardContent>

                <Table>

                    <TableHead style={{backgroundColor: 'whitesmoke'}}>
                        {tableColumns.map((column,index)=>{
                            return(
                                <TableCell key={index} sx={{textAlign: "center"}}>
                                    <Typography variant="h6" style={{fontFamily: "monospace", color: "darkslateblue", fontWeight: "bold"}}>{column}</Typography>
                                </TableCell>
                            )
                        }) }
                    </TableHead>

                    <TableBody>
                        <TableRow >
                            <TableCell sx={{textAlign: "center"}}>Furkan</TableCell>
                            <TableCell sx={{textAlign: "center"}}>Memiş</TableCell>
                            <TableCell sx={{textAlign: "center"}}>furkan@fuzei.com</TableCell>
                            <TableCell sx={{textAlign: "center"}}> <EditIcon style={{color: "darkslateblue"}}/> </TableCell>
                        </TableRow>
                    </TableBody>

                </Table>

            </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserManagement;
