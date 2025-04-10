import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, balance, buttonName, color, handleClick }) => {
  // Conditional inline style based on color prop
  const buttonStyle =
    color === "green"
      ? {
          background: "linear-gradient(90deg, #B5DC52 0%, #89E148 100%)",
        }
      : color === "orange"
      ? {
          background:
            "linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)",
        }
      : {}; // default (no special background)

  const balanceColor =
    color === "orange"
      ? {
          color: "rgb(244, 187, 74)",
          fontWeight: "700",
        }
      : color === "green"
      ? {
          color: "rgb(157, 255, 91)",
          fontWeight: "700",
        }
      : {
          fontWeight: "700",
        };

  // NOTE - inside jsx <> </> here we need to write every js expression in  {} but outside we can write in js way normally
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          <span>{name}</span>: <span style={balanceColor}>₹{balance}</span>
        </div>
        <button
          className={styles.button}
          style={buttonStyle}
          onClick={handleClick}
          type="button"
        >
          {buttonName}
        </button>
      </div>
    </>
  );
};

export default Card;
