import React from "react";
import { Button, Grid, Typography, TextField } from "@mui/material";

const game2 = () => {
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
        {/* // left grid  */}
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
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Instructions
          </Typography>
          <Typography variant="h6" sx={{ color: "black" }}>
            <br />
            You are part of a team of explorers searching for a treasure hidden
            in the jungle. <br />
            Your team has split up to cover more ground, and you've just
            stumbled upon a clearing with a stone altar in the center. <br />
            On the altar, you find a piece of paper with strange symbols and
            markings. You recognize that the symbols correspond to letters in
            the English alphabet, but they're jumbled up and mixed with some
            unfamiliar ones. <br />
            Your task is to decode the message and communicate it to your team
            members, who are searching elsewhere in the jungle.
            <br />
            Here's the message: <br />
            Gdqf jvzi yjqc hdsmgj ejpklmu, twnobx racy vfls. <br />
            Can you decipher it and communicate the message to your team members
            so they can reunite with you and help solve the rest of the treasure
            hunt clues? Good luck!
          </Typography>
          <TextField
            id="outlined-basic"
            label="Answer"
            variant="outlined"
            sx={{ m: 2 }}
          />
          <br />
        </Grid>
      </Grid>
    </div>
  );
};

export default game2;
