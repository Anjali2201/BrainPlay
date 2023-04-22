import React from "react";
import "./index.css";
import Homepage from "./Pages/Homepage";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Routes, Route } from "react-router-dom";
import Game1 from "./Pages/game1";
import Game2 from "./Pages/game2";
import Game3 from "./Pages/game3";

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
      </Routes>
    </div>
  );
};

export default App;
