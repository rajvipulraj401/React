import React from "react";
import styles from "./Specialisation.module.css";
import Button from "../Button/Button";
import SpecialisationCard from "../SpecialisationCard/SpecialisationCard";

// React Icons
import {
  FaTooth,
  FaUserMd,
  FaHeart,
  FaBrain,
  FaVial,
  FaUserNurse,
  FaFlask,
  FaXRay,
} from "react-icons/fa";

const Specialisation = () => {
  return (
    <div className={styles.specialisationContainer}>
      <h2 className={styles.title}>Find By Specialisation</h2>
      <div className={styles.cardsWrapper}>
        <SpecialisationCard icon={<FaTooth />} label="Dentistry" />
        <SpecialisationCard icon={<FaUserMd />} label="Primary Care" />
        <SpecialisationCard icon={<FaHeart />} label="Cardiology" />
        <SpecialisationCard icon={<FaBrain />} label="MRI Resonance" />
        <SpecialisationCard icon={<FaVial />} label="Blood Test" />
        <SpecialisationCard icon={<FaUserNurse />} label="Psychologist" />
        <SpecialisationCard icon={<FaFlask />} label="Laboratory" />
        <SpecialisationCard icon={<FaXRay />} label="X-Ray" />
      </div>

      <div className={styles.buttonWrapper}>
        <Button
          width="120px"
          height="45px"
          background="var(--color-primary)"
          aria-label="View All"
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default Specialisation;
