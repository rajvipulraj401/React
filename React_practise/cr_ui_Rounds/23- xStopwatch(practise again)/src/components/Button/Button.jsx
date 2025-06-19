import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, handleClick }) => {
  return (
    <>
      <button onClick={handleClick} className={styles.btn}>
        {children}
      </button>
    </>
  );
};

export default Button;
