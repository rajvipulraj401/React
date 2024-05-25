import React, { useState } from "react";

import styles from "./LoginPage.module.css";
import NavBar from "./NavBar";

const LoginPage = ({ isDarkMode, handleThemeToggle }) => {
  const [showPass, setShowPass] = useState(false);

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
        <div className={styles.LoginCredentials}>
          <h2 className={styles.LogingCredentialsH2}>Login</h2>
          <p className={styles.LogingCredentialsP}>Hello Welcome</p>

          <form action="">
            <button className={styles.googleButton}>
              <img src="google.png" alt="" />
              {/* <p>SIGN IN WITH GOOGLE</p> */}
              SIGN IN WITH GOOGLE
            </button>
            <div className={styles.orDivider}>
              <div className={styles.dash}>_____________________________</div>
              <span className={styles.or}>Or </span>
              <div className={styles.dash}>_____________________________</div>
            </div>
            {/* <div>______________________or___________________________</div> */}

            <input
              type="text"
              placeholder="Email or Phone"
              className={styles.inputField}
            />
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Password"
                className={styles.inputField}
              />
              <img
                src="HidePass.png"
                alt="Toggle Password Visibility"
                className={styles.passwordToggle}
              />
            </div>

            <h3 className={styles.forgetPassword}>Forget Password</h3>
            <button className={`${styles.greenCol} ${styles.greenButton}`}>
              Login
            </button>
            <p className={styles.RegisterText}>
              Don't have an Account ?
              <span className={styles.registerLink}> Register</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

// import React from "react";
// import NavBar from "./NavBar";
// import SignIn from "./SignIn"; // Import SignIn component
// import styles from "./LoginPage.module.css";

// const LoginPage = ({ isDarkMode, handleThemeToggle }) => {
//   return (
//     <>
//       <div className={styles.curvedDiv}>
//         <NavBar
//           isDarkMode={isDarkMode}
//           handleThemeToggle={handleThemeToggle}
//           customClassName={styles.LoginNavbar}
//         />
//       </div>
//       <div className={styles.DetailsContainer}>
//         <div className={styles.Thinking}></div>
//         <div className={styles.LoginCredentials}>
//           <h2>Login</h2>
//           <p>Hello Welcome</p>
//           <SignIn /> {/* Add SignIn component */}
//           <form>
//             <div>______________________or___________________________</div>
//             <input type="text" placeholder="Email or Phone" />
//             <input type="text" placeholder="Password" />
//             <h3>Forget Password</h3>
//             <button className={`${styles.greenCol} ${styles.greenButton}`}>
//               Login
//             </button>
//             <p>
//               Don't have an Account{" "}
//               <span className={styles.greenCol}>Register</span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginPage;
