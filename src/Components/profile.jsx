import React from "react";
import { Grid } from "@mui/material";

const profile = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0D1B2A",
        }}
      >
        <Grid
          item
          xs={10}
          sx={{
            border: "1px solid black",
            p: 4,
            m: 2,
            backgroundColor: "#ffffff",
            borderRadius: "10px",
          }}
        >
          <h1>Profile</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default profile;
