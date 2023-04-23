import React from "react";
import { Grid } from "@mui/material";
import Landingpage from "../Components/landingpage";

const Homepage = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        backgroundImage: `url("https://user-images.githubusercontent.com/86847380/233854837-305a5b08-8680-4f42-a443-08d061a955b1.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Landingpage />
    </Grid>
  );
};

export default Homepage;
