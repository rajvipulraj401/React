import React from "react";
import styles from "./SpecialisationCard.module.css";

const SpecialisationCard = ({ icon, label, background, border }) => {
  return (
    <div className={styles.card} style={{ background, border }}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default SpecialisationCard;
