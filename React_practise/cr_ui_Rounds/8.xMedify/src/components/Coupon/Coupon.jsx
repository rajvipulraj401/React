import React from "react";
import styles from "./Coupon.module.css";
import Coupon1 from "../../assets/Coupon1.png";
import Coupon2 from "../../assets/Coupon2.png";

const Coupon = () => {
  return (
    <div className={styles.container}>
      <img src={Coupon1} alt="Coupon 1" className={styles.couponImg} />
      <img src={Coupon2} alt="Coupon 2" className={styles.couponImg} />
      <img src={Coupon1} alt="Coupon 3" className={styles.couponImg} />
      {/* <img src={Coupon1} alt="Coupon 1" className={styles.couponImg} />
      <img src={Coupon2} alt="Coupon 2" className={styles.couponImg} />
      <img src={Coupon1} alt="Coupon 3" className={styles.couponImg} /> */}
    </div>
  );
};

export default Coupon;
