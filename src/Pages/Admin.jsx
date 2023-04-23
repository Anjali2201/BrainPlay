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
    boxShadow: "0px 0px 10px 0px #343A40",
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

const Admin = () => {
  const [data, setData] = useState({
    totalUsers: 0,
    totalCompleted: 0,
    totalPoints: 0,
    totalData: [],
  });
  const [data2, setData2] = useState([]);
  const minute = 1000 * 60;
  const hour = minute * 60;
  useEffect(() => {
    getData();
  }, data2);
  const getData = () => {
    axios
      .get("https://super-ruby-rugby-shirt.cyclic.app/api/game/admin")
      .then((response) => {
        console.log(response.data.usersData);
        setData2(response.data.usersData.totalData);
        setData(response.data.usersData);
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
        height: "auto",
        backgroundColor: "#212529",
        minHeight: "100vh",
      }}
    >
      <Grid
        item
        xs={10}
        sx={{
          mt: "100px",
        }}
      >
        <Typography variant="h4" sx={{ color: "#CED4DA", fontWeight: "bold" }}>
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
          <Typography>Total users: {data.totalUsers} </Typography>
        </Grid>

        {/* 2nd item */}
        <Grid item sx={styles.features}>
          <RuleIcon sx={{ fontSize: 80, color: "#2952e3" }} />
          <Typography>
            Users who completed the game: {data.totalCompleted}{" "}
          </Typography>
        </Grid>

        {/* 3rd item */}
        <Grid item sx={styles.features}>
          <EmojiEventsIcon sx={{ fontSize: 80, color: "#2952e3" }} />
          <Typography> Highest Point: {data.totalPoints} </Typography>
        </Grid>

        {/* 4th item */}
        <Grid item sx={styles.features}>
          <VideogameAssetIcon sx={{ fontSize: 80, color: "#2952e3" }} />
          <Typography>Total Games : 4 </Typography>
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
              {data.totalData.map((row) => (
                <StyledTableRow align="center" key={row.rank}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.rank}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.username}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.level}</StyledTableCell>
                  <StyledTableCell align="center">
                    {" "}
                    {row.points}{" "}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {Math.round((row.time / 1000 / 60) % 60)} minutes
                  </StyledTableCell>
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
