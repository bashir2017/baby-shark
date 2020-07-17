import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BabyShark from './components/BabyShark'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BabyShark />
      <Footer />
    </div>
  );
}

export default App;
