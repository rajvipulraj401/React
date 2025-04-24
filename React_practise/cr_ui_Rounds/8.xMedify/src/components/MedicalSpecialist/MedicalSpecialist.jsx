import React from "react";
import DoctorInfoCard from "../DoctorInfoCard/DoctorInfoCard";
import styles from "./MedicalSpecialist.module.css";

import Doc1 from "../../assets/Doc1.png";
import Doc2 from "../../assets/Doc2.png";
import Doc3 from "../../assets/Doc3.png";

const MedicalSpecialist = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Our Medical Specialist</h2>
      <div className={styles.cardRow}>
        <DoctorInfoCard
          imgSrc={Doc3}
          name="Dr. Ahmad Khan"
          specialization="Neurologist"
        />
        <DoctorInfoCard
          imgSrc={Doc2}
          name="Dr. Heena Sachdeva"
          specialization="Orthopaedics"
        />
        <DoctorInfoCard
          imgSrc={Doc1}
          name="Dr. Ankur Sharma"
          specialization="Medicine"
        />
        <DoctorInfoCard
          imgSrc={Doc3}
          name="Dr. Ahmad Khan"
          specialization="Neurologist"
        />
        <DoctorInfoCard
          imgSrc={Doc2}
          name="Dr. Heena Sachdeva"
          specialization="Orthopaedics"
        />
        <DoctorInfoCard
          imgSrc={Doc1}
          name="Dr. Ankur Sharma"
          specialization="Medicine"
        />
      </div>
    </div>
  );
};

export default MedicalSpecialist;
