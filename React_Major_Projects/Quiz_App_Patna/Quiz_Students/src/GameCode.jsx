import React from "react";

const GameCode = ({ isDarkMode }) => {
  return (
    <div className="ContainerGame">
      {/* <div className="Game-Code"> */}
      <div className={`Game-Code ${isDarkMode ? "BorderWhite" : ""}`}>
        <div
          className={`Input-Container ${
            isDarkMode ? "BorderWhite" : "BorderYellow"
          }`}
        >
          <input type="number" placeholder="Enter Game Code"></input>
          <button className="black-Btn">Join Game</button>
        </div>
      </div>
    </div>
  );
};

export default GameCode;
