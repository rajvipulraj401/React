import React from "react";
import styles from "./Family.module.css";
import { FaHeart, FaHospital, FaMicroscope, FaUserMd } from "react-icons/fa";

const Family = () => {
  return (
    <section className={styles.familySection}>
      <div className={styles.leftContent}>
        <h4>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h4>
        <h2>Our Families</h2>
        <p>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>

      <div className={styles.rightStats}>
        <div className={styles.statCard}>
          <div className={styles.iconCircle + " " + styles.blue}>
            <FaHeart />
          </div>
          <h3>5000+</h3>
          <p>Happy Patients</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconCircle + " " + styles.red}>
            <FaHospital />
          </div>
          <h3>200+</h3>
          <p>Hospitals</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconCircle + " " + styles.yellow}>
            {/* Giving two styles by giving space in between  */}
            <FaMicroscope />
          </div>
          <h3>1000+</h3>
          <p>Laboratories</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconCircle + " " + styles.green}>
            <FaUserMd />
          </div>
          <h3>700+</h3>
          <p>Expert Doctors</p>
        </div>
      </div>
    </section>
  );
};

export default Family;
