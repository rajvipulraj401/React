import React from "react";
import styles from "./Blogs.module.css";
import Detox from "../../assets/Detox.png";
import rebeccaImg from "../../assets/rebecca.png";

import BlogsCard from "../BlogsCard/BlogsCard";

const Blogs = () => {
  return (
    <section className={styles.blogsSection}>
      <p className={styles.subtitle}>Blog & News</p>
      <h2 className={styles.title}>Read Our Latest News</h2>
      <div className={styles.blogsGrid}>
        <BlogsCard img={Detox} rebeccaImg={rebeccaImg}></BlogsCard>
        <BlogsCard img={Detox} rebeccaImg={rebeccaImg}></BlogsCard>
        <BlogsCard img={Detox} rebeccaImg={rebeccaImg}></BlogsCard>
      </div>
    </section>
  );
};

export default Blogs;
