import React from "react";
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";

const btn = {
  my: 2,
  color: "#FFE6BC",
  mx: 1,
  width: "auto",

  "&:hover": {
    color: "#E8D8C9",
    borderBottom: "3px solid #9A8174",
    borderRadius: "0px",
  },
};

const Completed = () => {
  return (
    <div>
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
          xs={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", color: "black", fontWeight: "bold" }}
          >
            Congratulations! You have completed the game.
          </Typography>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ mt: 2, backgroundColor: "none", boxShadow: "none" }}
          >
            <Button href="/profile" sx={btn}>
              Profile
            </Button>
            <Button href="/leaderboard" sx={btn}>
              Leaderboard
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
};

export default Completed;
