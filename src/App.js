import React from "react";
import Sound from "react-sound";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import soundFile from "./audio/babyShark.mp3";
import BabyShark from "./components/BabyShark";
// import "animate.min.css";

function App() {
  return (
    <div className='party-time'>
      <NavBar />
      <BabyShark />
      <Footer />
    </div>
  );
}

export default App;
