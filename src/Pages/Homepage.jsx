import React from "react";
import { Grid } from "@mui/material";
import Landingpage from "../Components/landingpage";
import Rules from "../Components/rules";

const Homepage = () => {
  return (
    <Grid container>
      <Landingpage />
      <Rules />
    </Grid>
  );
};

export default Homepage;
