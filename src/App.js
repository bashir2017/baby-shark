import React from "react";
import Sound from "react-sound";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import BabyShark from "./components/BabyShark";
const Song = require("./audio/baby.mp3");
function App() {
  return (
    <div className="App party-time" onClick={Song.PLAYING}>
      <Sound url={Song} playStatus={Sound.status.PLAYING} loop={true} />
      <NavBar />
      <BabyShark />
      <Footer />
    </div>
  );
}

export default App;
