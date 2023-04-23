import React from "react";
import { Button, Grid, Typography, Modal } from "@mui/material";
import getCookie from "../hooks/getCookie";

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
    const login = getCookie("login");
    const logParse = JSON.parse(login);
    if (logParse.level == 1) {
      window.location.href = "/game1";
    }
    if (logParse.level == 2) {
      window.location.href = "/game2";
    }
    if (logParse.level == 3) {
      window.location.href = "/game3";
    }
    if (logParse.level == 4) {
      window.location.href = "/game4";
    }
    if (logParse.level == 5) {
      window.location.href = "/completed";
    }
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
        xs={7}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0,0,0,0.4)",
          borderRadius: "10px",
          p: 4,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            width: "auto",
            fontSize: "3rem",
            color: "#CED4DA",
          }}
        >
          Brain Play
        </Typography>

        <Typography
          sx={{ color: "#ADB5BD", textAlign: "center", width: "auto" }}
        >
          "Play your way to success with BrainPlay: Where soft skills meet fun!"
        </Typography>
        <Button
          onClick={beginGame}
          sx={{
            color: "black",
            marginTop: "1rem",
            fontSize: "1rem",
            backgroundColor: "white",

            "&:hover": {
              backgroundColor: "#E9ECEF",
              color: "black",
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
              boxShadow: 24,
              p: 4,
              borderRadius: "10px",
              backgroundColor: "#212529",
            }}
          >
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "1.5rem", color: "#F8F9FA" }}>
                Welcome to BrainPlay!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "1rem", color: "#F8F9FA" }}>
                BrainPlay is a game that helps you develop your soft skills
                through a series of fun and interactive games. You will be
                presented with a series of questions and scenarios that will
                help you develop your soft skills. You will be given a score at
                the end of each game. The higher your score, the more you have
                developed your soft skills. You will be able to track your score
                through Leaderboard.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Button
                onClick={startGame}
                sx={{
                  color: "black",
                  marginTop: "1rem",
                  fontSize: "1rem",
                  backgroundColor: "white",

                  "&:hover": {
                    backgroundColor: "#E9ECEF",
                    color: "black",
                  },
                }}
              >
                Begin Game
              </Button>
            </Grid>
          </Grid>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default Landingpage;
