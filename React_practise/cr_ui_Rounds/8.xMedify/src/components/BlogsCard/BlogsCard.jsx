import React from "react";
import styles from "./BlogsCard.module.css";
const BlogsCard = ({ img, rebeccaImg }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={img} alt="Detox" height="100%" width="100%" />
      </div>
      {/* Placeholder image div */}
      <div className={styles.cardContent}>
        <p className={styles.meta}>
          <span className={styles.category}>Medical</span>
          <span className={styles.date}>March 31, 2022</span>
        </p>
        <h3 className={styles.heading}>
          6 Tips To Protect Your Mental Health When You’re Sick
        </h3>
        <div className={styles.author}>
          <div className={styles.avatar}>
            <img src={rebeccaImg} alt="rebeccaImg" height="100%" width="100%" />
          </div>
          <span>Rebecca Lee</span>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
