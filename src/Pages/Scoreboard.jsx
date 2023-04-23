import React from "react";
import Charts from "../Components/Chart";
import { Grid } from "@mui/material";
import Profile from "../Components/profile";

const Scoreboard = () => {
  return (
    <Grid
      container
      xs={12}
      sx={{
        backgroundColor: "#212529",
      }}
    >
      <Profile />
      <Charts />
    </Grid>
  );
};

export default Scoreboard;
