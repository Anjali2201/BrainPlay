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
import getCookie from "../hooks/getCookie";
import removeCookie from "../hooks/removeCookie";
import PsychologyIcon from "@mui/icons-material/Psychology";
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
    color: "#000000",
  },
  btn: {
    my: 2,
    color: "#CED4DA",
    mx: 1,
    width: "auto",

    "&:hover": {
      color: "#CED4DA",
      borderBottom: "1px solid #CED4DA",
      borderRadius: "0px",
    },
  },
};

const buttons = ["Login", "Register"];
let token = getCookie("login");
let username = "";
if (token) {
  username = JSON.parse(getCookie("login")).username;
}
console.log(username);

const logout = () => {
  let token = getCookie("login");
  if (token) {
    removeCookie("login");
    window.location.reload();
  }
};
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
        {!token ? (
          buttons.map((item) => (
            <Link to={`/${item}`} style={{ textDecoration: "none" }}>
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText>
                    <Typography sx={styles.menutext}>{item}</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          ))
        ) : (
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <Typography sx={styles.menutext}>{username}</Typography>
                  <Button onClick={logout} sx={styles.menutext}>
                    Logout
                  </Button>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#00000066",
        }}
      >
        <Toolbar>
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
              color: "white",
            }}
          >
            <Grid container xs={12}>
              <Grid item xs={1}>
                <MenuIcon />
              </Grid>
              <Grid xs={11}>
                <Typography
                  sx={{
                    color: "white",
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
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography
                  sx={{ fontWeight: 600, width: "auto", color: "white" }}
                >
                  <PsychologyIcon /> Brain Play
                </Typography>
              </Link>
            </>

            {!token ? (
              <ButtonGroup variant="text">
                {buttons.map((button) => (
                  <Link
                    to={`/${button.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button sx={styles.btn}>{button}</Button>
                  </Link>
                ))}
              </ButtonGroup>
            ) : (
              <ButtonGroup variant="text">
                <Button sx={styles.btn} href="/leaderboard">
                  LeaderBoard
                </Button>
                <Button sx={styles.btn} onClick={logout}>
                  Logout
                </Button>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Button sx={styles.btn}>{username}</Button>
                </Link>
              </ButtonGroup>
            )}
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
