import React from "react";
import Card from "../Card/Card";

import styles from "./Display.module.css";
import PieChartDisplay from "../PieChart/PieChartDisplay";

// const pieChartData = [
//   { name: "Food", value: 400 },
//   { name: "Entertainment", value: 0 },
//   { name: "Travel", value: 200 },
// ];
const Display = ({
  pieChartData,
  balance,
  expense,
  onAddIncomeClick,
  onAddExpenseClick,
}) => {
  return (
    <div className={styles.displayContainer}>
      {/* The main cards here */}
      <div className={styles.cardContainer}>
        <Card
          name="Wallet Balance"
          balance={balance}
          buttonName="+ Add Income"
          color="green"
          handleClick={onAddIncomeClick}

          // JAB ye card ka button click ho toh ye method trigger kro
        ></Card>
        <Card
          name="Expenses"
          balance={expense}
          buttonName="+ Add Expense"
          color="orange"
          handleClick={onAddExpenseClick}

          // JAB ye card ka button click ho toh ye method trigger kro
        ></Card>
      </div>
      {/* Below is the chart */}

      <div className={styles.chartContainer}>
        <div className={styles.pie}>
          <PieChartDisplay data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default Display;
