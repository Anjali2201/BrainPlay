import React from "react";
import { Button, Grid, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";

const game4 = () => {
  const [clicked, setClicked] = useState(false);
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (displayed) {
      timeoutId = setTimeout(() => {
        setDisplayed(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [displayed]);

  const handleClick = () => {
    setClicked(true);
    setDisplayed(true);
  };

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
          {!clicked && (
            <Button variant="contained" color="primary" onClick={handleClick}>
              Click me!
            </Button>
          )}
          {displayed && <p>The button was clicked!</p>}

          <br />

          <Typography variant="h6" sx={{ color: "black" }}>
            Write all the adjectives used in the above paragraph.
          </Typography>
          <TextField
            id="outlined-basic"
            label="Answer"
            variant="outlined"
            sx={{ m: 2 }}
          />
          <br />

          <Button id="submit" variant="contained" sx={{ m: 2 }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default game4;
