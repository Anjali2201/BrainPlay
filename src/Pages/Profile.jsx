import React from "react";
import Charts from "../Components/Chart";
import { useState, useEffect } from "react";
import axios from "axios";
import getCookie from "../hooks/getCookie";
import { Divider, Grid, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
} from "recharts";

import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
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
  },
};

const chart = {
  width: 500,
  height: 400,
  margin: "10px",
};
const Scoreboard = () => {
  let login = getCookie("login");
  let loginP = JSON.parse(login);
  const [data, setData] = useState({
    rank: 0,
    points: 0,
    level: 0,
    time: 0,
    graph: [],
  });
  const [data2, setData2] = useState([
    {
      level: "level 1",
      score: 4000,
      time: 240,
    },
    {
      level: "level 2",
      score: 3000,
      time: 139,
    },
    {
      level: "level 3",
      score: 2000,
      time: 980,
    },
    {
      level: "level 4",
      score: 2780,
      time: 3908,
    },
  ]);

  const minute = 1000 * 60;
  const hour = minute * 60;

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .post("https://super-ruby-rugby-shirt.cyclic.app/api/game/scoreboard", {
        username: loginP.username,
      })
      .then((response) => {
        console.log(response.data.usersData);
        let graphData = [
          {
            level: "Game 1",
            score: response.data.usersData.graph[0].score,
            time: Math.round(
              (response.data.usersData.graph[0].time / 1000 / 60) % 60
            ),
          },
          {
            level: "Game 2",
            score: response.data.usersData.graph[1].score,
            time: Math.round(
              (response.data.usersData.graph[1].time / 1000 / 60) % 60
            ),
          },
          {
            level: "Game 3",
            score: response.data.usersData.graph[2].score,
            time: Math.round(
              (response.data.usersData.graph[2].time / 1000 / 60) % 60
            ),
          },
          {
            level: "Game 4",
            score: response.data.usersData.graph[3].score,
            time: Math.round(
              (response.data.usersData.graph[3].time / 1000 / 60) % 60
            ),
          },
        ];
        setData2(graphData);
        setData(response.data.usersData);
      })
      .catch((error) => {
        console.log("Error");
      });
  };

  return (
    <Grid
      container
      xs={12}
      sx={{
        backgroundColor: "#212529",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Grid
        item
        xs={10}
        sx={{
          justifyContent: "center",
          mt: "10vh",
        }}
      >
        <Typography variant="h4" sx={{ color: "#CED4DA", fontWeight: "bold" }}>
          Hello {data.username}
        </Typography>
        <Divider sx={{ my: 2, backgroundColor: "#495057" }} />
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
        {/* 2nd item */}
        <Grid item sx={styles.features}>
          <FormatListNumberedIcon sx={{ fontSize: 80, color: "#3772ff" }} />
          <Typography sx={styles.text}> Rank: {data.rank} </Typography>
        </Grid>
        {/* 3rd item */}
        <Grid item sx={styles.features}>
          <EmojiEventsIcon sx={{ fontSize: 80, color: "#f9c80e" }} />
          <Typography sx={styles.text}>
            {" "}
            Highest Point: {data.points}{" "}
          </Typography>
        </Grid>

        {/* 4th item */}
        <Grid item sx={styles.features}>
          <VideogameAssetIcon sx={{ fontSize: 80, color: "#1282a2" }} />
          {data.level == 5 ? (
            <Typography sx={styles.text}>Game Completed</Typography>
          ) : (
            <Typography sx={styles.text}>
              Maximum Level : {data.level}
            </Typography>
          )}
        </Grid>
        {/* 4th item */}
        <Grid item sx={styles.features}>
          <AccessTimeFilledIcon sx={{ fontSize: 80, color: "#f64f59" }} />
          <Typography sx={styles.text}>
            Time : {Math.round((data.time / 1000 / 60) % 60)} minutes
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={10}
        sx={{
          mt: 4,
        }}
      >
        <Typography variant="h4" sx={{ color: "#ADB5BD", fontWeight: "bold" }}>
          Your Progress
        </Typography>
        <Divider
          sx={{
            mt: 2,
            backgroundColor: "#495057",
          }}
        />
      </Grid>

      <Grid
        container
        xs={10}
        sx={{ justifyContent: "center", alignItems: "center", mt: 4 }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <ComposedChart width={500} height={400} data={data2}>
            <CartesianGrid stroke="#495057" />
            <XAxis dataKey="level" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="score"
              fill="#bcbd8b"
              stroke="#bcbd8b"
            />
            <Bar dataKey="time" barSize={20} fill="#373d20" />
          </ComposedChart>
        </Grid>

        <Grid item xs={12} sm={12} md={6} sx={{ mt: 4 }}>
          <BarChart sx={chart} width={500} height={400} data={data2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="level" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#8da9c4" />
          </BarChart>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Scoreboard;
