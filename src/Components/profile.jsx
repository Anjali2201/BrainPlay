import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
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

const Admin = () => {
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
        <Typography variant="h4" sx={{ color: "#CED4DA", fontWeight: "bold" }}>
          Hello User !
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
            md: "repeat(3, 1fr)",
          },
          gap: "2rem",
        }}
      >
        {/* 2nd item */}
        <Grid item sx={styles.features}>
          <FormatListNumberedIcon sx={{ fontSize: 80, color: "#3772ff" }} />
          <Typography sx={styles.text}> Rank: </Typography>
        </Grid>
        {/* 3rd item */}
        <Grid item sx={styles.features}>
          <EmojiEventsIcon sx={{ fontSize: 80, color: "#f9c80e" }} />
          <Typography sx={styles.text}> Highest Point: </Typography>
        </Grid>

        {/* 4th item */}
        <Grid item sx={styles.features}>
          <VideogameAssetIcon sx={{ fontSize: 80, color: "#1282a2" }} />
          <Typography sx={styles.text}>Max Level : </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Admin;
