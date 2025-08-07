import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";

import Button from "./components/Button/Button";
import "./App.css";

const App = () => {
  return (
    <>
      {/* <div className="app-container">App</div> */}

      {/* <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/alok" element={<About />}></Route>
      </Routes> */}

      {/* <div className=" w-[200px] h-[200px] bg-color4 rounded-[5px]">App</div> */}

      <button className=" w-[80px] border-2 border-black bg-color4 cursor-pointer rounded-[10px] text-red-300 ">
        click me
      </button>

      {/* 
      <Button>
        <button className="">click me</button>
      </Button> */}
    </>
  );
};

export default App;
