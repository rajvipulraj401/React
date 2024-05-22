// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"; // Assuming you'll create this page
import QuizPage from "./QuizPage"; // Assuming you'll create this page
import LoginPage from "./LoginPage";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode
      ? "white"
      : "rgb(31 41 55)";
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
        }
      />
      <Route
        path="/QuizPage"
        element={
          <QuizPage
            isDarkMode={isDarkMode}
            handleThemeToggle={handleThemeToggle}
          />
        }
      />

      <Route
        path="/LoginPage"
        element={
          <LoginPage
            isDarkMode={isDarkMode}
            handleThemeToggle={handleThemeToggle}
          />
        }
      />
    </Routes>
  );
};

export default App;
