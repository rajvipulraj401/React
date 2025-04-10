// ---------------Do above again -----------------------------

import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../assets/search-icon.svg"; // Import the search icon

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search an album of your choice"
        className={styles.search}
      />
      <button className={styles.searchButton}>
        <img src={searchIcon} alt="Search" width={20} />
      </button>
    </div>
  );
};

export default Search;
