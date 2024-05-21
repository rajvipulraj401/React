import React from "react";

const Card = ({ isDarkMode }) => {
  return (
    <>
      {/* <div className="card"> */}
      <div className={`card ${isDarkMode ? "darkBtn" : "lightCard"}`}>
        <div className="bckImgQuiz">
          <div className="bckImgDiv">
            <span>10 Qs</span>
            <span>20 Plays</span>
          </div>
        </div>
        <div className="cardTextDiv">
          {/* conditionally rendering the color theme based on the
          props (the state of the parent)  */}
          <p>Computer Science Basic</p>
          <p>Quiz-1</p>
        </div>
      </div>
    </>
  );
};

export default Card;
