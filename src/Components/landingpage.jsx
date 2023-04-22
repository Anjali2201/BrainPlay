import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";

const Landingpage = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#3D2F2A",
            textAlign: "center",
            width: "auto",
            fontSize: "3rem",
          }}
        >
          Brain Play
        </Typography>

        <Typography
          sx={{ color: "#9A8174", textAlign: "center", width: "auto" }}
        >
          "Play your way to success with BrainPlay: Where soft skills meet fun!"
        </Typography>
        <Button
          sx={{
            color: "#3D2F2A",
            backgroundColor: "#F2E9E4",
            marginTop: "1rem",
            fontSize: "1rem",

            "&:hover": {
              border: "1px solid #3D2F2A",
            },
          }}
        >
          Start
        </Button>
      </Grid>
    </Grid>
  );
};

export default Landingpage;
