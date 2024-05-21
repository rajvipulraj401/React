import React, { useState } from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import "./index.css";
import GameCode from "./GameCode";
import CardContainer from "./CardContainer";
import Footer from "./Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode
      ? "white"
      : "rgb(31 41 55)";
  };

  return (
    <>
      <NavBar isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
      <Intro />
      <GameCode isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <CardContainer isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default App;
