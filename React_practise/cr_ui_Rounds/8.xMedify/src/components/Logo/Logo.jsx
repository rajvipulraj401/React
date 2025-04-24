import React from "react";
import styles from "./Logo.module.css";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <NavLink to="/" style={{ textDecoration: "none", all: "unset" }}>
      <div className={styles.logo}>
        <div className={styles.safetyIconBox}>
          <IoShieldCheckmarkSharp />
        </div>
        <div>
          <span>Medify</span>
        </div>
      </div>
    </NavLink>
  );
};

export default Logo;
