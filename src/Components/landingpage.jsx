import React from "react";
import { Button, Grid, Typography, Box, Modal } from "@mui/material";
import getCookie from "../hooks/getCookie";
import removeCookie from "../hooks/removeCookie";

const Landingpage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const loggedIn = getCookie("login");

  const beginGame = () => {
    if (loggedIn) {
      handleOpen();
    } else {
      window.location.href = "/login";
    }
  };

  const startGame = () => {
    handleClose();
    window.location.href = "/game1";
  };

  return (
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
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#3D2F2A",
            textAlign: "center",
            width: "auto",
            fontSize: "3rem",
          }}
        >
          Brain Play
        </Typography>

        <Typography
          sx={{ color: "#9A8174", textAlign: "center", width: "auto" }}
        >
          "Play your way to success with BrainPlay: Where soft skills meet fun!"
        </Typography>
        <Button
          onClick={beginGame}
          sx={{
            color: "#3D2F2A",
            backgroundColor: "#F2E9E4",
            marginTop: "1rem",
            fontSize: "1rem",

            "&:hover": {
              border: "1px solid #3D2F2A",
            },
          }}
        >
          Start
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Grid
            container
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "auto",
              bgcolor: "#3D2F2A",
              boxShadow: 24,
              p: 4,
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "1.5rem", color: "#E8D8C9" }}>
                Welcome to BrainPlay!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "1rem", color: "#E8D8C9" }}>
                Rules : <br />
                1. You will be given a set of questions.
                <br /> 2. You will have 30 seconds to answer each question.{" "}
                <br />
                3. You will be given 3 lifelines. <br />
                4. You can use the lifelines only once. <br />
                5. You can skip a question only once.
                <br /> 6. You will be given 10 points for each correct answer.{" "}
                <br />
                7. You will be deducted 5 points for each wrong answer. <br />
                8. You will be deducted 10 points for each skipped question.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              {/* // Agree to terms and conditions button */}
              <input type="checkbox" id="terms" name="terms" value="terms" />
              <label
                for="terms"
                style={{
                  color: "#E8D8C9",
                  fontSize: "1.5rem",
                  marginLeft: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                I agree to the terms and conditions of BrainPlay.
              </label>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={startGame}
                sx={{
                  color: "#3D2F2A",
                  backgroundColor: "#F2E9E4",
                  marginTop: "1rem",
                  fontSize: "1rem",

                  "&:hover": {
                    border: "1px solid #F2E9E4",
                    color: "#F2E9E4",
                  },
                }}
              >
                Start
              </Button>
            </Grid>
          </Grid>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default Landingpage;
