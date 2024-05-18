import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import "./index.css";
import GameCode from "./GameCode";

const App = () => {
  return (
    <>
      {/* 
Logic 

1-- let's first make the nav bar 
2-- then main content


*/}

      <NavBar></NavBar>
      <Intro></Intro>
      <GameCode></GameCode>
    </>
  );
};

export default App;
