import React from "react";
import { FaArrowUp } from "react-icons/fa"; // Up arrow
import styles from "./InitialScreenCard.module.css";

const InitialScreenCard = ({ title, subtitle, onClick }) => {
  return (
    <>
      <div className={styles.card} onClick={onClick}>
        <div className={styles.textContainer}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <FaArrowUp className={styles.arrow} />
      </div>
    </>
  );
};

export default InitialScreenCard;
