import React from "react";
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";

const btn = {
  margin: "8px",
  height: 50,
  backgroundColor: "#CED4DA",
  color: "black",
  "&:hover": {
    color: "black",
    border: "1px solid black",
    backgroundColor: "#CED4DA",
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
          backgroundColor: "#212529",
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
            sx={{ textAlign: "center", color: "#CED4DA", fontWeight: "bold" }}
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
