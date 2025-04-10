import React from "react";
import styles from "./ExpenseSection.module.css";

const ExpenseSection = ({ color, name }) => {
  return (
    <div className={styles.expenseContainer}>
      <div className={styles.box} style={{ backgroundColor: color }}></div>
      <div>{name}</div>
    </div>
  );
};

export default ExpenseSection;
