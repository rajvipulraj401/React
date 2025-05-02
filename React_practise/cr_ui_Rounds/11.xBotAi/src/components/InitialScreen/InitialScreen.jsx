import React from "react";
import InitialScreenCard from "../InitialScreenCard/InitialScreenCard";
import styles from "./InitialScreen.module.css";
import aiLarge from "../../assets/aiLarge.png";

const InitialScreen = () => {
  // const handleCardClick = (title) => {
  //   // console.log("Clicked on:", title);
  // };

  return (
    <div className={styles.container}>
      {/* <NavBar /> */}

      <div className={styles.imageandHeading}>
        <h2 className={styles.heading}>How Can I Help You Today?</h2>

        <div className={styles.aiImgLargeContainer}>
          <img src={aiLarge} alt="" />
        </div>
      </div>

      {/* Below is the rendering of all the four cards----- */}

      <div className={styles.cardsWrapper}>
        <InitialScreenCard
          title="Hi, what is the weather"
          subtitle="Get immediate AI generated response"
          // onClick={() => handleCardClick("weather")}
        />
        <InitialScreenCard
          title="Hi, what is my location"
          subtitle="Get immediate AI generated response"
          // onClick={() => handleCardClick("location")}
        />
        <InitialScreenCard
          title="Hi, what is the temperature"
          subtitle="Get immediate AI generated response"
          // onClick={() => handleCardClick("temperature")}
        />
        <InitialScreenCard
          title="Hi, how are you"
          subtitle="Get immediate AI generated response"
          // onClick={() => handleCardClick("how are you")}
        />
      </div>
    </div>
  );
};

export default InitialScreen;
