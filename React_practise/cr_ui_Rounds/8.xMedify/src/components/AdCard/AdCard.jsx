import React from "react";
import styles from "./AdCard.module.css";

const AdCard = () => {
  return (
    <div className={styles.adCard}>
      <p className={styles.top}>This World Oral Health Day,</p>
      <h2>
        Get a <span className={styles.blue}>FREE</span> Appointment* <br />
        with Top Dentists.
      </h2>
      <div className={styles.tag}>LIMITED PERIOD OFFER</div>
      <p className={styles.hash}>#BeSensitiveToOralHealth</p>
      <p className={styles.note}>
        *T&C Apply - only consultation fee. Procedures / surgeries not covered
      </p>
    </div>
  );
};

export default AdCard;
