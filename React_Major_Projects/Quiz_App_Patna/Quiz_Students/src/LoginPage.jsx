import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import NavBar from "./NavBar";

const LoginPage = ({ isDarkMode, handleThemeToggle }) => {
  return (
    <>
      <div className={styles.curvedDiv}>
        <NavBar
          isDarkMode={isDarkMode}
          handleThemeToggle={handleThemeToggle}
          customClassName={styles.LoginNavbar} // Use class from QuizPage.module.css
        ></NavBar>
      </div>
      <div className={styles.DetailsContainer}>
        {/* here two more div ek me bacground image daalo jaise intro div me kiye the aur dusre trf sara input wala */}

        <div className={styles.Thinking}>
          {/* <img src="Thinking.png" alt="" /> */}
        </div>
        <div className={styles.LogingCredentials}>
          <h2>Login</h2>
          <p>Hello Welcome</p>

          <form action="">
            <button>
              <img src="google.png" alt="" />
              {/* <p>SIGN IN WITH GOOGLE</p> */}
              SIGN IN WITH GOOGLE
            </button>

            <div>______________________or___________________________</div>

            <input type="text" placeholder="Email or Phone" />
            <input type="text" placeholder="Password" />
            <h3>Forget Password</h3>
            <button className={`${styles.greenCol} ${styles.greenButton}`}>
              Login
            </button>
            <p>
              Don't have an Account{" "}
              <span className={styles.greenCol}>Register</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
