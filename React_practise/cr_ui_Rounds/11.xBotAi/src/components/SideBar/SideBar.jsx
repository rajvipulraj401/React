import React from "react";
import styles from "./SideBar.module.css";
import Button from "../Button/Button"; // Apna button

import { Link } from "react-router";

import aiSmall from "../../assets/aiSmall.png";
import write from "../../assets/write.png";
const SideBar = () => {
  return (
    <div className={styles.sidebarContainer}>
      {/* New Chat Button */}

      <Link to="/">
        <Button width="200px">
          <div className={styles.buttonContent}>
            <img
              src={aiSmall} // Apna image path
              alt="Logo"
              className={styles.logoImage}
            />
            <span className={styles.buttonText}>New Chat</span>
            <img
              src={write} // Apna image path
              alt="write"
              className={styles.logoWrite}
            />
          </div>
        </Button>
      </Link>

      {/* Past Conversations Button */}
      <Link to="/history">
        <Button width="200px">
          <div className={styles.buttonContent}>
            <span className={styles.buttonText}>Past Conversations</span>
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default SideBar;
