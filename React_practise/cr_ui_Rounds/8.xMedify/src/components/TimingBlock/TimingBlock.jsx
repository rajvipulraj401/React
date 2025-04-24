import React, { useState } from "react";
import styles from "./TimingBlock.module.css";
const TimingBlock = ({ time, handleTimeClick, isSelected }) => {
  return (
    <>
      <div
        onClick={(e) => {
          // console.log("clicked btn");
          //  handleTimeClick(event);
          handleTimeClick(e);
          // a state to handle the selected button
        }}
        // ---directly passsing the reference
        // onClick={
        //   handleTimeClick
        // }

        className={`${styles.timeContainer} ${
          isSelected ? styles.selected : ""
        }`}
      >
        {time}
      </div>
    </>
  );
};

export default TimingBlock;
