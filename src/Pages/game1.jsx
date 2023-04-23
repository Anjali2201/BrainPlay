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

const buttons = { margin: "8px", backgroundColor: "#" };

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

var modalText = "Read Every word Carefully !!";

const game1 = () => {
  const navigate = useNavigate();
  const form = useRef();

  // Time Function
  const d = new Date();
  let time = d.getTime();
  let level1time = getCookie("level1");
  if (!level1time) {
    let cookieState = {
      startTime: time,
      endTime: 0,
    };
    setCookie("level1", JSON.stringify(cookieState));
  }

  const [open, setOpen] = useState(false);
  const [lastpage, setLastpage] = useState("/game1");
  const [message, setMessage] = useState("Try Again");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigation = () => {
    if (lastpage === "/game1") {
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
      let getstarttime = getCookie("level1");
      let getstarttimep = JSON.parse(getstarttime);
      let totalTime = time - getstarttimep.startTime;
      if (answer == "fire") {
        removeCookie("level1");
        let cookieStatetime = {
          startTime: getstarttimep.startTime,
          endTime: time,
        };
        setCookie("level1", JSON.stringify(cookieStatetime));
        console.log(totalTime);
        ///////
        const cookieState = {
          email: loginp.email,
          password: loginp.password,
          username: loginp.username,
          level: 2,
          admin: false,
        };
        removeCookie("login");
        setCookie("login", JSON.stringify(cookieState));
        axios
          .post("http://localhost:8000/api/game/level1", {
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
        modalText = "Congratulations !!! You have completed the first level.";
        setMessage("Next Level");
        setLastpage("/game2");
      } else {
        axios
          .post("http://localhost:8000/api/game/level1", {
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

          <br />
          <Typography
            variant="h6"
            sx={{
              color: "#CED4DA",
            }}
          >
            Your challenge requires you to use your communication skills to
            decipher the following riddle:
            <br />
            I am not alive, but I grow; <br />
            I don't have lungs, but I need air; <br />
            I don't have a mouth, but I need water; <br />
            What am I? Once you have solved the riddle, head over to the next
            clue. Good luck!"
            <br />
            <br />
            <br />* Hint: The answer is a 4 letter word. Write in small letters.
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

export default game1;
