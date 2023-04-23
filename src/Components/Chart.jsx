import React from "react";
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

import { Grid, Typography, Divider } from "@mui/material";

const data = [
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
  {
    level: "level 5",
    score: 1890,
    time: 4800,
  },
];

const chart = {
  width: 500,
  height: 400,
  margin: "10px",
};

function Charts() {
  return (
    <Grid
      container
      xs={12}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Grid item xs={10}>
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
          <ComposedChart width={500} height={400} data={data}>
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
          <BarChart sx={chart} width={500} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="level" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="time" fill="#8da9c4" />
          </BarChart>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Charts;
