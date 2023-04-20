import React from "react";
import Homepage from "./Pages/Homepage";
import Error from "./Pages/Error";
import Navbar from "./Components/navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
