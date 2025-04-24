// Download.jsx
import React, { useState } from "react";
import Button from "../Button/Button";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import styles from "./Download.module.css";

const Download = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => setPhone(e.target.value);

  return (
    <section className={styles.downloadContainer}>
      <header>
        <h2>
          Download the <span>Medify</span> App
        </h2>
        <p>Get the link to download the app</p>
      </header>

      <form
        className={styles.phoneForm}
        onSubmit={(e) => e.preventDefault()}
        role="form"
      >
        <div
          className={styles.inputWrapper}
          role="group"
          aria-label="Phone input"
        >
          <div className={styles.countryCode}>+91</div>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={handlePhoneChange}
            aria-label="Phone number"
          />
        </div>
        <Button
          width="100px"
          height="50px"
          background="var(--color-primary)"
          aria-label="Send SMS"
        >
          Send SMS
        </Button>
      </form>

      <div
        className={styles.downloadButtonContainer}
        role="group"
        aria-label="Download buttons"
      >
        <Button width="140px" height="50px" background="black">
          <div className={styles.iconDownload}>
            <FaGooglePlay />
          </div>
          <div>Google Play</div>
        </Button>

        <Button width="140px" height="50px" background="black">
          <div className={styles.iconDownload2}>
            <FaApple />
          </div>
          <div>App Store</div>
        </Button>
      </div>
    </section>
  );
};

export default Download;
