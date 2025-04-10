import React from "react";
import styles from "./ExpenseModal.module.css";

const ExpenseModal = ({ name, onClose, onAddExpense }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.expenseModalContent}>
        <h2>{name}</h2>

        <form action="" onSubmit={onAddExpense}>
          <div className={styles.formRow}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              required
              className={styles.inputField}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              required
              className={styles.inputField}
            />
          </div>

          <div className={styles.formRow}>
            <select
              name="category"
              className={styles.inputField}
              required
              defaultValue=""
            >
              <option
                value=""
                hidden
                style={{ color: "rgba(0, 255, 255, 0.2 )" }}
              >
                Select Option
              </option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Travel">Travel</option>
            </select>
            <input
              type="date"
              name="date"
              required
              defaultValue=""
              className={styles.inputField}
            />
          </div>

          <div className={styles.buttonRow}>
            <button type="submit" className={styles.addBtn}>
              Add Expense
            </button>
            <button
              type="button"
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

export default ExpenseModal;
