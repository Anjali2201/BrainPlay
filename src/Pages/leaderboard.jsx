import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#bcb8b1",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  color: "white",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  color: "white",
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

const leaderboard = () => {
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
    <div>
      <Grid
        container
        spacing={2}
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#212529",
          minHeight: "100vh",
        }}
      >
        <Grid item xs={10} sx={{ mt: 5 }}>
          <Typography
            variant="h4"
            sx={{ color: "#ADB5BD", fontWeight: "bold", my: 3 }}
          >
            LeaderBoard
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
                    <StyledTableCell align="center">
                      {row.level}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {" "}
                      {row.points}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {" "}
                      {Math.round((row.time / 1000 / 60) % 60)} minutes
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default leaderboard;
