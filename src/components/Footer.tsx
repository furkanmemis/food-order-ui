import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Tooltip, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card
        sx={{
          width: "100%",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h5"
              style={{
                fontFamily: "monospace",
                color: "darkslateblue",
                fontSize: 24,
              }}
            >
              Fuzei{"©"}
            </Typography>
            <Tooltip title="Zeynep Otu">
              <a
                href="https://github.com/zeynepotu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="30px" src="/footer-icon/github.png" alt="Github" />
              </a>
            </Tooltip>

            <Tooltip title="Furkan Memiş">
              <a
                href="https://github.com/furkanmemis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="30px" src="/footer-icon/github.png" alt="Github" />
              </a>
            </Tooltip>
            <Tooltip title="Zeynep Otu">
              <a
                href="https://www.linkedin.com/in/zeynep-otu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30px"
                  src="/footer-icon/linkedin.png"
                  alt="Linkedin"
                />
              </a>
            </Tooltip>
            <Tooltip title="Furkan Memiş">
              <a
                href="https://www.linkedin.com/in/furkanmemis1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30px"
                  src="/footer-icon/linkedin.png"
                  alt="Linkedin"
                />
              </a>
            </Tooltip>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Footer;
