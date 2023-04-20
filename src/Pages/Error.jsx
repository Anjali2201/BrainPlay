import React from "react";
import { Grid, Typography } from "@mui/material";

const Error = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h1">404</Typography>
          <Typography variant="h2">Page Not Found</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Error;
