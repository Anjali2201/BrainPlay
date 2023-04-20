import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  ButtonGroup,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
  Drawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
// import getCookie from "../hooks/getCookie";
// import removeCookie from "../hooks/removeCookie";
import logo from "../Assets/logo.gif";

const styles = {
  AppBar: {
    backgroundColor: "#E5E5E5",
    width: "100%",
    height: "auto",
    py: "1px",
  },
  logo: {
    width: "50px",
    height: "50px",
    px: 1,
  },
  menutext: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    textTransform: "none",
    fontFamily: "Figtree",
    // lineHeight: "29px",
    color: "#000000",
  },
  btn: {
    my: 2,
    color: "#F9A826",
    mx: 1,
    width: "100%",

    "&:hover": {
      backgroundColor: "#E5E5E566",
      color: "black",
      borderBottom: "3px solid #F9A826",
      borderRadius: "0px",
    },
  },
  btn2: {
    marginRight: "20px",
    color: "black",
    backgroundColor: "transparent",
    height: "40px",
    width: "auto",
    "&:hover": {
      backgroundColor: "#F9A826",
      color: "black",
    },
  },
};

const buttons = ["Rules", "Login", "Register"];
// let token = getCookie("login");
// let username = "";
// if (token) {
//   username = JSON.parse(getCookie("login")).username;
// }
// console.log(username);

// const logout = () => {
//   let token = getCookie("login");
//   if (token) {
//     removeCookie("login");
//     window.location.reload();
//   }
// };
export default function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", m: 2 }}>
      <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
        <img src={logo} alt="logo" style={styles.logo} />
      </Link>
      <Divider />
      <List>
        {buttons.map((item) => (
          <Link to={`/${item}`} style={{ textDecoration: "none" }}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Typography sx={styles.menutext}>{item}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          backgroundColor: "transparent",
          height: "180px",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            m: 2,
            backgroundColor: "#0c1821",
            borderRadius: "10px",
            boxShadow: "1px 1px 1px 1px #DADDD8",
          }}
        >
          {/* Drawer for Mobile View */}

          <Button
            onClick={handleDrawerToggle}
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              },
              color: "black",
            }}
          >
            <Grid container xs={12}>
              <Grid item xs={1}>
                <MenuIcon />
              </Grid>
              <Grid xs={11}>
                <Typography
                  sx={{
                    color: "black",
                    fontWeight: 600,
                    width: "auto",
                  }}
                >
                  Brain Play
                </Typography>
              </Grid>
            </Grid>
          </Button>

          {/* ------------ Desktop -------------- */}

          <Grid
            container
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            <>
              {/* <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <img src={logo} alt="logo" style={{ height: "50px" }} />
              </Link> */}
            </>
            {/* 
            {!token ? (
              <ButtonGroup variant="text">
                {buttons.map((button) => (
                  <Link
                    to={`/${button.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button sx={styles.btn2}>{button}</Button>
                  </Link>
                ))}
              </ButtonGroup>
            ) : (
              <ButtonGroup variant="text">
                <Link
                  to="/feed"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button sx={btn}>Rules</Button>
                </Link>
                <Button sx={btn} onClick={logout}>
                  Logout
                </Button>
                <Button sx={btn}>{username}</Button>
              </ButtonGroup>
            )} */}
          </Grid>

          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "block" },

                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: 240,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
