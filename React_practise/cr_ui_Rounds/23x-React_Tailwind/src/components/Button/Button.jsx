import React from "react";
// import styles from "./Button.module.css";
import "./Button.css";

const Button = ({ children }) => {
  return (
    <>
      {/* <h1>button hoon mai mujhe daba do</h1> */}

      {/* <button >Dabaona </button> */}
      {/* <div className={`${styles.btn}   ${styles.btn2} `}>{children}</div> */}
      {/* <div className={styles.btn styles.btn2 }>{children}</div> */}

      {/* <div className="bg-amber-400 text-[20px] w-[100px]">{children}</div> */}
      {/* {children} */}

      {/* <button className="text-[20px] w-[100px] rounded px-2 py-1"> */}
      <button className="">{children}</button>
    </>
  );
};

export default Button;

/**
 * Logic:--what btn needs to know
 *
 * Width , backgroundcolor , fontcolor ,height
 *
 */
