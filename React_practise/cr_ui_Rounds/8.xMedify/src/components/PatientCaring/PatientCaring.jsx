import React from "react";
import styles from "./PatientCaring.module.css";
import patient from "../../assets/patient.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const PatientCaring = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgBox1}>
          {/* <img src="patient.png" alt="patient" /> */}
          <img src={patient} alt="patient" />
          {/* <div className={styles.consultBox}>
            <FaPhoneAlt className={styles.callIcon} />
            <div>
              <h4>Free Consultation</h4>
              <p>Consultation with the best</p>
            </div>
          </div> */}
        </div>
        {/* <div className={styles.imgBox2}>
          <img src={patient2} alt="patient2" />
        </div> */}
      </div>

      <div className={styles.right}>
        <p className={styles.subheading}>
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </p>
        <h1 className={styles.heading}>
          Patient <span>Caring</span>
        </h1>
        <p className={styles.desc}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>

        <ul className={styles.points}>
          <li>
            <FaCheckCircle className={styles.checkIcon} /> Stay Updated About
            Your Health
          </li>
          <li>
            <FaCheckCircle className={styles.checkIcon} /> Check Your Results
            Online
          </li>
          <li>
            <FaCheckCircle className={styles.checkIcon} /> Manage Your
            Appointments
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PatientCaring;
