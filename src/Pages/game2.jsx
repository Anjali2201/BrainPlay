import React from "react";
import { Button, Grid, Typography, TextField, Modal } from "@mui/material";
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

const game2 = () => {
  const navigate = useNavigate();
  const form = useRef();

  ////////////// Time Function
  const d = new Date();
  let time = d.getTime();
  let level2time = getCookie("level2");
  if (!level2time) {
    let cookieState = {
      startTime: time,
      endTime: 0,
    };
    setCookie("level2", JSON.stringify(cookieState));
  }

  const [open, setOpen] = useState(false);
  const [lastpage, setLastpage] = useState("/game2");
  const [message, setMessage] = useState("Try Again");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigation = () => {
    if (lastpage === "/game2") {
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
      let getstarttime = getCookie("level2");
      let getstarttimep = JSON.parse(getstarttime);
      let totalTime = time - getstarttimep.startTime;

      if (answer == "rotterdam") {
        removeCookie("level2");
        let cookieStatetime = {
          startTime: getstarttimep.startTime,
          endTime: time,
        };
        setCookie("level2", JSON.stringify(cookieStatetime));
        console.log(totalTime);
        ///////
        const cookieState = {
          email: loginp.email,
          password: loginp.password,
          username: loginp.username,
          level: 3,
          admin: false,
        };
        removeCookie("login");
        setCookie("login", JSON.stringify(cookieState));
        axios
          .post("https://super-ruby-rugby-shirt.cyclic.app/api/game/level2", {
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
        modalText =
          "Congratulations !!!The Garden of Earthly Delights is a famous triptych painting by the Dutch artist Hieronymus Bosch. One of Bosch's most famous works, The Haywain Triptych, is housed in the Prado Museum in Madrid, Spain. On the museum's website, you can find a sentence that reads In the closed triptych Bosch depicted the subject of the Pilgrimage of Life in full colour, rather than in grisaille or semi-grisaille as in the Rotterdam version of the subject.";
        setMessage("Next Level");
        setLastpage("/game3");
      } else {
        axios
          .post("https://super-ruby-rugby-shirt.cyclic.app/api/game/level2", {
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
            backdropFilter: "blur(10px)",
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
          <Typography variant="h6" sx={{ color: "#CED4DA" }}>
            In order to find the next clue, you must first find the name of the
            famous artist who created a painting titled "The Garden of Earthly
            Delights." <br />
            Once you have the artist's name, visit the official website of a
            famous museum that houses one of the artist's most famous works.{" "}
            <br />
            Somewhere on the museum's website, you will find a sentence that
            says <br /> <br />
            "In the closed triptych Bosch depicted the subject of the Pilgrimage
            of Life in full colour, rather than in grisaille or semi-grisaille
            as in the ________ version of the subject. "
            <br /> <br />
            Fill in the blank with the name.
            <br />
            Clue 1: "The Garden of Earthly Delights" is a triptych painting by a
            famous artist. <br />
            Clue 2: The artist who painted "The Garden of Earthly Delights" is
            well-known for his surreal and fantastical works. <br />
            Clue 3: The museum that houses one of the artist's most famous works
            is located in Madrid, Spain. Good luck!
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

            <Button id="submit" variant="contained" sx={{ m: 2 }} type="submit">
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
