import React from "react";
import styles from "./IncomeModal.module.css";

const IncomeModal = ({ onClose, OnAddBalance }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.incomeModalContent}>
        <h2>Add Balance</h2>

        <form action="" onSubmit={OnAddBalance}>
          <div className={styles.buttonRow}>
            <input
              type="number"
              placeholder="Income Amount"
              required
              className={styles.inputField}
            />
            <button type="submit" className={styles.addBtn}>
              Add Balance
            </button>
            <button
              type="button"
              // Default submit hota hai islea daalo nahi toh ye bhi submit krne lgega
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncomeModal;
