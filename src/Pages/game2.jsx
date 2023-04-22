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
            In order to find the next clue, you must first find the name of the
            famous artist who created a painting titled "The Garden of Earthly
            Delights." Once you have the artist's name, visit the official
            website of a famous museum that houses one of the artist's most
            famous works. Somewhere on the museum's website, you will find a
            sentence in bold letters that says "The artist's works were heavily
            influenced by the ideas of the ancient philosopher ___________."
            <br />
            Fill in the blank with the name of the philosopher to reveal the
            next clue.
            <br />
            Clue 1: "The Garden of Earthly Delights" is a triptych painting by a
            famous artist. <br />
            Clue 2: The artist who painted "The Garden of Earthly Delights" is
            well-known for his surreal and fantastical works. <br />
            Clue 3: The museum that houses one of the artist's most famous works
            is located in Madrid, Spain. Good luck!
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
