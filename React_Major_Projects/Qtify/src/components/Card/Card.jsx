// import React from "react";

// const Card = () => {
//   return <div>Card</div>;
// };

// export default Card;

// -------------chtgpt crd----

import React from "react";
import styles from "./Card.module.css";
// import coverImage from "../../assets/demo-image.png"; // Change to your actual image path

const Card = ({ data }) => {
  // we got props object we destructure it and got our object
  // console.log(data);

  return (
    <div className={styles.card}>
      {/* Cover Image */}
      <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
          {/* <img src={coverImage} alt="Bollywood Covers" /> */}
          <img src={data.image} alt="Bollywood Covers" />
          <div className={styles.overlayText}>
            {/* <h2>Bollywood Covers</h2> */}
          </div>
        </div>

        {/* Followers Section */}
        <div className={styles.followSection}>
          {/* <span>{`${data.follows} Follows`}</span>
          <span>{`${data.follows} Follows`}</span> */}
          <span>
            {data.follows
              ? `${data.follows} follows`
              : data.likes
              ? `${data.likes} likes`
              : "No data"}
          </span>
        </div>
      </div>

      {/* Title Below */}
      <div className={styles.cardTitle}>
        <h3>{data.title}</h3>
      </div>
    </div>
  );
};

export default Card;
