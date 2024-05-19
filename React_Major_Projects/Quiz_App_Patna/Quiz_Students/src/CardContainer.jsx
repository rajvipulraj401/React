import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <>
      <div className="ContainerGame">
        <div className="CardContainerDiv">
          <div className="upperDiv">
            <span>
              <h3>Computer</h3>
            </span>
            <span>
              <button className="upperDivButton">
                <a href="">
                  <p>View More</p>
                </a>
              </button>
            </span>
          </div>

          <div className="cardsDiv">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
        <button className="arrow">
          <img src="arrow.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default CardContainer;
