import React from "react";
// importing React default export from react library (we can give any name but we are sticking with the conventions)
import { Route, Routes, Link } from "react-router";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Routes>
        {/* // For defining all the route inside the routes component */}

        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </>
  );
};

export default App;
