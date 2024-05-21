import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import styles from "./QuizPage.module.css"; // Import QuizPage.module.css

const QuizPage = ({ isDarkMode, handleThemeToggle }) => {
  return (
    <div className={styles.QuizPage}>
      <NavBar
        isDarkMode={isDarkMode}
        handleThemeToggle={handleThemeToggle}
        customClassName={styles.quizNavbar} // Use class from QuizPage.module.css
        // Passing a custom ClassName props

        // Add a class name to the NavBar component
      />
      <div className={styles.QuizContent}>
        {/* This is the way to use module css */}
        <img
          src="quizQueston.png"
          alt=""
          className={styles.QuizQuestionMarkImg}
          height={250}
          px
        />

        <h1>Universe Quiz</h1>
        <p>Answer these simple questions correctly and earn coins</p>
        <h3>
          Difficulty Level :<button className={styles.greenButton}>Easy</button>
        </h3>
        <h2>❓ 10 Questions</h2>
        <button className={styles.blueButton}>Play</button>
      </div>
      <Footer isDarkMode={isDarkMode}></Footer>
      {/* Add your quiz content here */}
    </div>
  );
};

export default QuizPage;
