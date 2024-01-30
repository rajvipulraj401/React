// import React from "react";
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";
function App() {
  return (
    <div className={styles.calculator}>
      {/* <div className={styles["display"]}></div> */}
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;
