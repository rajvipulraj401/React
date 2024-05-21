import React from "react";
import Card from "./Card";
import "./index.css";

const CardContainer = ({ isDarkMode }) => {
  return (
    <div className="ContainerGame">
      <div className="CardContainerDiv">
        <div className="upperDiv">
          <span>
            <h3 className={isDarkMode ? "dark-title" : "light-title"}>
              Computer
            </h3>
          </span>
          <span>
            <button
              className={`upperDivButton ${
                isDarkMode ? "darkBtn" : "lightBtn"
              }`}
            >
              <a href="">
                <p>View More</p>
              </a>
            </button>
          </span>
        </div>
        <div className="cardsDiv">
          <Card isDarkMode={isDarkMode} />
          <Card isDarkMode={isDarkMode} />
          <Card isDarkMode={isDarkMode} />
          <Card isDarkMode={isDarkMode} />
          <Card isDarkMode={isDarkMode} />
        </div>
      </div>
      <button className="arrow">
        {/* <img src="arrowRight.png" alt="arrow" /> */}
        {/* conditionally rendering the image  */}
        <img src={isDarkMode ? "arrowRightWhite.png" : "arrowRight.png"} />
      </button>
    </div>
  );
};

export default CardContainer;
