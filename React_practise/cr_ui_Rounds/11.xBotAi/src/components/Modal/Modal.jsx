import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"; // React Icons se Cross Button
import Button from "../Button/Button";
import styles from "./Modal.module.css";

const Modal = ({ onClose, onConfirm }) => {
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scroll
    return () => {
      document.body.style.overflow = "auto"; // Enable scroll after close
    };
  }, []);

  const handleSubmit = () => {
    if (!feedback.trim()) {
      // Agar input empty hai
      alert("Please provide feedback before submitting!");
      return;
    }
    onConfirm(feedback); // Call parent function
  };

  return (
    <div className={styles.modal}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "left", fontSize: "20px" }}>
          Provide Additional Feedback
        </h2>
        <AiOutlineClose
          size={24}
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />
      </div>

      <textarea
        placeholder="Write your feedback..."
        className={styles.emailInput}
        value={feedback}
        required
        onChange={(e) => setFeedback(e.target.value)}
      />

      <div className={styles.buttonGroup}>
        <Button background="#d3bdf0" width="150px" handleClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Modal;
