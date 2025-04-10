// ---------------crio above code -----DOfrom yourself👇🏼👇🏼👇🏼👇🏼
import React from "react";
import styles from "./Hero.module.css";
import headphonesImg from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands of podcast episodes</h1>
      </div>
      <div>
        <img src={headphonesImg} width={212} alt="headphones" />
      </div>
    </div>
  );
}

export default Hero;
