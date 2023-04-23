import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RuleIcon from "@mui/icons-material/Rule";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const styles = {
  features: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    p: 2,
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
  },

  text: {
    textAlign: "center",
    color: "rgba(156, 163, 175)",
    width: "80%",
  },
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2a3750",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function createData(rank, user, level, points, time) {
  return { rank, user, level, points, time };
}

const rows = [
  createData(1, "User1", 1, 100, 10),
  createData(2, "User2", 2, 200, 20),
  createData(3, "User3", 3, 300, 30),
  createData(4, "User4", 4, 400, 40),
  createData(5, "User5", 5, 500, 50),
];

const Admin = () => {
  const [data, setData] = useState({
    totalUsers: 0,
    totalCompleted: 0,
    totalPoints: 0,
    totalData: [],
  });
  const minute = 1000 * 60;
  const hour = minute * 60;
  useEffect(() => {
    getData();
  }, data);
  const getData = () => {
    axios
      .get("http://localhost:8000/api/game/admin")
      .then((response) => {
        console.log(response.data.data);
        //setData(response.data.data);
      })
      .catch((error) => {
        console.log("Error");
      });
  };

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        mt: "100px",
        height: "auto",
        py: 4,
      }}
    >
      <Grid item xs={10}>
        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
          Admin
        </Typography>
        <Divider sx={{ mt: 2 }} />
      </Grid>

      <Grid
        item
        xs={10}
        sx={{
          justifyContent: "center",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: "2rem",
        }}
      >
        {/* 1st item */}
        <Grid item sx={styles.features}>
          <PeopleAltIcon sx={{ fontSize: 80, color: "#2952e3" }} />
          <Typography>Total users: </Typography>
        </Grid>

        {/* 2nd item */}
        <Grid item sx={styles.features}>
          <RuleIcon sx={{ fontSize: 80, color: "#2952e3" }} />
          <Typography>Users who completed the game: </Typography>
        </Grid>

        {/* 3rd item */}
        <Grid item sx={styles.features}>
          <EmojiEventsIcon sx={{ fontSize: 80, color: "#2952e3" }} />
          <Typography> Highest Point: </Typography>
        </Grid>

        {/* 4th item */}
        <Grid item sx={styles.features}>
          <VideogameAssetIcon sx={{ fontSize: 80, color: "#2952e3" }} />
          <Typography>Total Games : </Typography>
        </Grid>
      </Grid>

      <Grid item xs={10} sx={{ mt: 5 }}>
        <Typography
          variant="h4"
          sx={{ color: "black", fontWeight: "bold", m: 3 }}
        >
          User Analytics
        </Typography>
        {/* ----------------------------table------------------------------------------- */}
        <TableContainer
          sx={{
            mt: 2,
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Rank</StyledTableCell>
                <StyledTableCell align="center">User</StyledTableCell>
                <StyledTableCell align="center">Level</StyledTableCell>
                <StyledTableCell align="center">Points</StyledTableCell>
                <StyledTableCell align="center">Time</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow align="center" key={row.rank}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.rank}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.user}</StyledTableCell>
                  <StyledTableCell align="center">{row.level}</StyledTableCell>
                  <StyledTableCell align="center">
                    {" "}
                    {row.points}{" "}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.time}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Admin;
