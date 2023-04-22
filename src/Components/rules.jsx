import { Typography, Grid } from "@mui/material";
import React from "react";

const rules = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#3D2F2A", width: "auto", fontSize: "3rem" }}>
          Rules
        </Typography>

        <Typography sx={{ color: "#9A8174", width: "auto" }}>
          1. Eligibility: Only registered users are allowed to access the games
          on BrainPlay. Users must be at least 13 years of age to register.
          <br />
          2. Fair Play: Cheating or attempting to cheat in any form is strictly
          prohibited. This includes but is not limited to hacking, using bots or
          scripts, exploiting game glitches, or colluding with other players.
          Any user found to be engaging in such activities will be immediately
          banned from the platform. <br />
          3. Respectful Conduct: All users are expected to behave in a
          respectful and professional manner towards other players, moderators,
          and staff. Any form of harassment, hate speech, or inappropriate
          behavior will not be tolerated and may result in suspension or
          termination of the user's account. <br />
          4. Game Results: The results of each game played on BrainPlay are
          final and cannot be changed or disputed. Users may review their scores
          and progress at any time, but any requests for score adjustments must
          be submitted within 24 hours of the game's completion. <br />
          5. Privacy: BrainPlay values the privacy of its users and takes all
          necessary measures to protect their personal information. Users are
          responsible for safeguarding their login credentials and are advised
          to use strong passwords and keep them confidential. <br />
          6. Modifications: BrainPlay reserves the right to modify, update, or
          discontinue any game or feature on the platform at any time without
          prior notice. Users will be notified of any significant changes that
          may affect their gameplay or account.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default rules;
