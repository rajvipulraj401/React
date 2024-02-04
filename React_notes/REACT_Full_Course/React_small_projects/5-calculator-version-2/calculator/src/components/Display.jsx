// import styles from "../App.module.css";
import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    ></input>
    // readOnly attribute means we cannot change it we can jsut read that value
  );
};
export default Display;
