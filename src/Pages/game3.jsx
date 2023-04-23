import React from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  Modal,
  Divider,
} from "@mui/material";
import getCookie from "../hooks/getCookie";
import setCookie from "../hooks/setCookie";
import removeCookie from "../hooks/removeCookie";
import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import level1 from "../Assets/level11.jpg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  backgroundColor: "#212529",
};

const buttons = { margin: "8px", backgroundColor: "#1D3557" };

var modalText = "Read Every word Carefully !!";
// Input field style
const textfield = {
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
  color: "white",
  m: 1,
};

const game2 = () => {
  const navigate = useNavigate();
  const form = useRef();

  ////////////// Time Function
  const d = new Date();
  let time = d.getTime();
  let level3time = getCookie("level3");
  if (!level3time) {
    let cookieState = {
      startTime: time,
      endTime: 0,
    };
    setCookie("level3", JSON.stringify(cookieState));
  }

  const [open, setOpen] = useState(false);
  const [lastpage, setLastpage] = useState("/game3");
  const [message, setMessage] = useState("Try Again");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigation = () => {
    if (lastpage === "/game3") {
      window.location.reload();
    } else {
      navigate(lastpage);
    }
  };

  const checkComplete = (e) => {
    e.preventDefault();
    let login = getCookie("login");
    let answer = form.current.answer.value;
    answer = answer.toLowerCase();

    if (login) {
      let loginp = JSON.parse(login);
      /// calculate time
      const d = new Date();
      let time = d.getTime();
      let getstarttime = getCookie("level3");
      let getstarttimep = JSON.parse(getstarttime);
      let totalTime = time - getstarttimep.startTime;
      if (answer == "einstein") {
        removeCookie("level3");
        let cookieStatetime = {
          startTime: getstarttimep.startTime,
          endTime: time,
        };
        setCookie("level3", JSON.stringify(cookieStatetime));
        console.log(totalTime);
        ///////
        const cookieState = {
          email: loginp.email,
          password: loginp.password,
          username: loginp.username,
          level: 4,
          admin: false,
        };
        removeCookie("login");
        setCookie("login", JSON.stringify(cookieState));
        axios
          .post("http://localhost:8000/api/game/level3", {
            email: loginp.email,
            complete: true,
            endtime: totalTime,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log("Error");
          });
        console.log("Success");
        modalText = "Congratulations !!!  You have completed the level 3 ";
        setMessage("Next Level");
        setLastpage("/game4");
      } else {
        axios
          .post("http://localhost:8000/api/game/level3", {
            email: loginp.email,
            complete: false,
            endtime: 0,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log("Error");
          });
        console.log("Try Again");
        modalText = "Read Each word Carefully !!";
        setMessage("Try Again");
      }
      handleOpen();
    } else {
      modalText = "Login to Play";
      setMessage("Retry");
      console.log("Retry");
      //window.location.reload();
      handleOpen();
      navigate("/login");
    }
  };

  return (
    <div>
      <Grid
        container
        sx={{
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${level1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* // left grid  */}
        <Grid
          item
          xs={10}
          sx={{
            p: 4,
            my: "10vh",
            borderRadius: "10px",
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#CED4DA",
              fontWeight: "bold",
            }}
          >
            Instructions
          </Typography>
          <Divider sx={{ backgroundColor: "#CED4DA" }} />
          <Typography
            variant="h6"
            sx={{
              color: "#CED4DA",
            }}
          >
            <br />
            Your team has been tasked with finding a treasure hidden somewhere
            on a deserted island. However, to find the treasure, you must first
            decode the following message:
            <br />
            {/* EINSTEIN */}
            5 - 9 - 14- 19- 20- 5- 9- 14
            <br />
            To decode the message, you must first identify the pattern. The
            pattern is based on the positions of the letters in the English
            alphabet.
            <br />
            For example, the first letter "A" is in position 1, the second
            letter "B" is in position 2, and so on. Using this pattern, can you
            decode the message and find the hidden treasure? Hint: The pattern
            is related to a famous Scientist.
            <br />
            <br />
            *Note: The answer is a name. Write the answer in small letters.
          </Typography>
          <form ref={form} onSubmit={checkComplete}>
            <TextField
              id="outlined-basic"
              name="answer"
              label="Answer"
              variant="outlined"
              sx={textfield}
            />
            <br />

            <Button
              id="submit"
              variant="contained"
              sx={{
                m: 2,
                backgroundColor: "#3c6e71",
                color: "#CED4DA",

                "&:hover": {
                  backgroundColor: "#3c6e71",
                  color: "#CED4DA",
                },
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
          <br />
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "#CED4DA",
                fontWeight: "bold",
              }}
            >
              {modalText}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button
                onClick={navigation}
                style={buttons}
                variant="contained"
                color="primary"
              >
                {message}
              </Button>
            </Typography>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
};

export default game2;
