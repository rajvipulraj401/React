import React from "react";
import styles from "./WrapperNav.module.css";

const WrapperNav = ({ text }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default WrapperNav;
