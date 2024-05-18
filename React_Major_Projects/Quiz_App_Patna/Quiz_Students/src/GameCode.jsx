import React from "react";

const GameCode = () => {
  return (
    <div className="ContainerGame">
      <div className="Game-Code">
        <div className="Input-Container">
          <input type="number" placeholder="Enter Game Code"></input>
          <button className="black-Btn">Join Game</button>
        </div>
      </div>
    </div>
  );
};

export default GameCode;
