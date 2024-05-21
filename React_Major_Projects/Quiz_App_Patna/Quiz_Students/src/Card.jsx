// Card.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ isDarkMode }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/QuizPage");
  };

  return (
    /* <div className="card"> */
    <div
      onClick={handleClick}
      className={`card ${isDarkMode ? "darkBtn" : "lightCard"}`}
      style={{ cursor: "pointer" }}
    >
      {/* conditionally rendering the color theme based on the
          props (the state of the parent)  */}
      <div className="bckImgQuiz">
        <div className="bckImgDiv">
          <span>10 Qs</span>
          <span>20 Plays</span>
        </div>
      </div>
      <div className="cardTextDiv">
        <p>Computer Science Basic</p>
        <p>Quiz-1</p>
      </div>
    </div>
  );
};

export default Card;
