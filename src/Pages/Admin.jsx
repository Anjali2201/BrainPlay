import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RuleIcon from "@mui/icons-material/Rule";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
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
import Paper from "@mui/material/Paper";

const styles = {
  features: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
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
function createData(user, level, points, time) {
  return { user, level, points, time };
}

const rows = [
  createData("User1", 1, 100, 10),
  createData("User2", 2, 200, 20),
  createData("User3", 3, 300, 30),
  createData("User4", 4, 400, 40),
  createData("User5", 5, 500, 50),
];

const Admin = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mt: "130px",
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
            gridTemplateColumns: "repeat(4, 1fr)",
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
          <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
            User Analytics
          </Typography>
          {/* ----------------------------table------------------------------------------- */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">User</StyledTableCell>
                  <StyledTableCell align="right">Level</StyledTableCell>
                  <StyledTableCell align="right">Points</StyledTableCell>
                  <StyledTableCell align="right">Time</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow align="center" key={row.name}>
                    <StyledTableCell align="center">{row.user}</StyledTableCell>
                    <StyledTableCell align="right">{row.level}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.points}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.time}</StyledTableCell>
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

export default Admin;
