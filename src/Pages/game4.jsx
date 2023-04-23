import React from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  Modal,
  Box,
  Divider,
} from "@mui/material";
import { useState, useEffect } from "react";
import MultipleValueTextInput from "react-multivalue-text-input";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import getCookie from "../hooks/getCookie";
import setCookie from "../hooks/setCookie";
import removeCookie from "../hooks/removeCookie";
import axios from "axios";
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

const buttons = { margin: "8px", backgroundColor: "#1D3557" };
var modalText = "Read Every word Carefully !!";

const game4 = () => {
  const [clicked, setClicked] = useState(false);
  const [displayed, setDisplayed] = useState(false);
  //////////

  const navigate = useNavigate();
  const form = useRef();
  const [formitems, setItems] = useState([]);
  let answer = ["small", "fluffy", "brown", "tall", "thin", "pale", "loudly"];
  answer.sort();

  ////////////// Time Function
  const d = new Date();
  let time = d.getTime();
  let level4time = getCookie("level4");
  if (!level4time) {
    let cookieState = {
      startTime: time,
      endTime: 0,
    };
    setCookie("level4", JSON.stringify(cookieState));
  }

  const [open, setOpen] = useState(false);
  const [lastpage, setLastpage] = useState("/game4");
  const [message, setMessage] = useState("Retry");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigation = () => {
    if (lastpage === "/game4") {
      window.location.reload();
    } else {
      navigate(lastpage);
    }
  };

  const checkComplete = (e) => {
    e.preventDefault();
    console.log(formitems);
    let data = formitems;
    data.sort();
    let login = getCookie("login");

    if (login) {
      let loginp = JSON.parse(login);
      /// calculate time
      const d = new Date();
      let time = d.getTime();
      let getstarttime = getCookie("level4");
      let getstarttimep = JSON.parse(getstarttime);
      let totalTime = time - getstarttimep.startTime;
      console.log(answer);
      console.log(data);
      if (JSON.stringify(answer) === JSON.stringify(data)) {
        removeCookie("level4");
        let cookieStatetime = {
          startTime: getstarttimep.startTime,
          endTime: time,
        };
        setCookie("level4", JSON.stringify(cookieStatetime));
        console.log(totalTime);
        ///////
        const cookieState = {
          email: loginp.email,
          password: loginp.password,
          username: loginp.username,
          level: 5,
          admin: false,
        };
        removeCookie("login");
        setCookie("login", JSON.stringify(cookieState));
        axios
          .post("https://super-ruby-rugby-shirt.cyclic.app/api/game/level4", {
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
        modalText = "Congratulations !! You have completed all the levels.";
        setMessage("Next Level");
        setLastpage("/completed");
      } else {
        axios
          .post("https://super-ruby-rugby-shirt.cyclic.app/api/game/level4", {
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
        modalText = "Read Every word Carefully !!";
        setMessage("Try Again");
      }
      handleOpen();
    } else {
      modalText = "Login to Play";
      setMessage("Retry");
      console.log("Retry");
      window.location.reload();
      handleOpen();
    }
  };
  //////////

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

  // ---------------------------------------------
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
              color: "black",
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
            A sentence will be displayed on the screen. Read the sentence
            carefully and write all the adjectives used in the sentence. <br />*
            Note : It will disappear after 5 seconds.
          </Typography>

          <br />

          {!clicked && (
            <Button onClick={handleClick}>
              Click me here to read the sentence
            </Button>
          )}
          {displayed && (
            <Typography variant="h6" sx={{ color: "#CED4DA" }}>
              The small, fluffy, brown dog barked loudly at the tall, thin, pale
              man.
            </Typography>
          )}

          <br />

          <Typography variant="h6" sx={{ color: "#CED4DA" }}>
            Write all the adjectives used in the above sentence.
          </Typography>

          {/* // Multi value Input */}

          <form ref={form} onSubmit={checkComplete}>
            <MultipleValueTextInput
              onItemAdded={(item, allItems) => {
                console.log(`Item added: ${item}`);
                setItems(allItems);
              }}
              onItemDeleted={(item, allItems) => {
                console.log(`Item Deleted: ${item}`);
                setItems(allItems);
              }}
              name="items"
              placeholder="Enter Items"
              style={{
                marginTop: "2rem",
                width: "50%",
                backgroundColor: "rgba(0,0,0,0.4)",
                height: "3rem",
                color: "white",
              }}
            />
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
              {/* <Link
                style={{ textDecoration: "None", color: "black" }}
                to={lastpage}
              > */}
              <Button
                onClick={navigation}
                style={buttons}
                variant="contained"
                color="primary"
              >
                {message}
              </Button>
              {/* </Link> */}
            </Typography>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
};

export default game4;
