import demoImg from "../assets/billy.png";
import React from "react";
// const Cards = ({ item }) => {
const Cards = () => {
  //We are getting an object inside our props object {{} } so we destructure it
  return (
    <div className="cards">
      {/* <img src={item.flag} alt="name" />
      <p>{item.name}</p> */}
      <img src={demoImg} alt="demoImg" />
      <p>Billy Idol </p>
    </div>
  );
};

export default Cards;
