import React from "react";
import styles from "./Hero.module.css";
import CategorySearch from "../YouMaybeLookingFor/CategorySearch";
import DoctorImage from "../../assets/Doc.png";
import Button from "../Button/Button";

const Hero = ({ onSubmit }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.topSection}>
        <div className={styles.leftSection}>
          <h3>Skip the travel! Find Online</h3>
          <h2 className={styles.title}>
            <span className={styles.highlight}>
              Medical <span className={styles.blueText}>Centers</span>
            </span>
          </h2>
          <p className={styles.description}>
            Connect instantly with a 24x7 specialist or choose to <br />
            video visit a particular doctor.
          </p>

          <Button width="140px" height="50px" background="var(--color-primary)">
            Find Centers
          </Button>
        </div>

        <div className={styles.rightSection}>
          <img src={DoctorImage} alt="Doctor" className={styles.docImg} />
        </div>
      </div>
      <CategorySearch onSubmit={onSubmit} />
    </div>
  );
};

export default Hero;
