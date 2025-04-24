import React from "react";
import styles from "./Faq.module.css";
import smiling from "../../assets/smiling.png";
import { FaPlus } from "react-icons/fa";

const faqData = [
  "Why choose our medical for your family?",
  "Why we are different from others?",
  "Trusted & experience senior care & love",
  "How to get appointment for emergency cases?",
];

const Faq = () => {
  return (
    <section className={styles.faqSection}>
      <p className={styles.topText}>Get Your Answer</p>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>

      <div className={styles.faqContent}>
        {/* Left Side */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img
              src={smiling}
              alt="Doctor with patient"
              className={styles.mainImg}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <p>{item}</p>
              <FaPlus />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
