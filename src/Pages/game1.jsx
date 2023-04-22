import React from "react";
import { Button, Grid, Typography, TextField } from "@mui/material";

const game1 = () => {
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
            Your challenge requires you to use your communication skills to
            decipher the following riddle:
            <br />
            I am not alive, but I grow; <br />
            I don't have lungs, but I need air; <br />
            I don't have a mouth, but I need water; <br />
            What am I? Once you have solved the riddle, head over to the next
            clue. Good luck!"
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

export default game1;
