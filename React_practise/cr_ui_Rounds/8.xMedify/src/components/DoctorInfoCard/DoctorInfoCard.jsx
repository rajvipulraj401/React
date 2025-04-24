import React from "react";
import styles from "./DoctorInfoCard.module.css";

const DoctorInfoCard = ({ imgSrc, name, specialization }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={imgSrc} alt={name} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.specialization}>{specialization}</p>
    </div>
  );
};

export default DoctorInfoCard;
