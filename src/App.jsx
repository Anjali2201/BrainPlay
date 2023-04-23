import React from "react";
import "./index.css";
import Homepage from "./Pages/Homepage";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Routes, Route } from "react-router-dom";
import Scoreboard from "./Pages/Profile";
import Game1 from "./Pages/game1";
import Game2 from "./Pages/game2";
import Game3 from "./Pages/game3";
import Game4 from "./Pages/game4";
import Admin from "./Pages/Admin";
import Completed from "./Pages/Completed";
import Leaderboard from "./Pages/leaderboard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/game1" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/game4" element={<Game4 />} />
        <Route path="/profile" element={<Scoreboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
};

export default App;
