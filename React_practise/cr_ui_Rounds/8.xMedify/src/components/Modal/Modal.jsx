// import React from "react";
// import styles from "./Modal.module.css";

// const Modal = () => {
//   return (
//     <>
//       <div className={styles.modalContainer}>
//         <div className={styles.modal}></div>
//       </div>
//     </>
//   );
// };

// export default Modal;

// -------------v2 (adding logic of modal)---------

import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import { useSnackbar } from "notistack"; // import this hook from notisack .

const Modal = ({ onClose, onConfirm }) => {
  const [email, setEmail] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar(); // This function triggers the snackbar
  // This useSnackbar hooks returns two properties inside the object one is a function to show a snackbar and other one is optional
  // to close the snackBar

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // Track snackbar open status so that use cant hit confirm again if he wrote wrong email

  useEffect(() => {
    document.body.style.overflow = "hidden";
    // so due to this we cant do scrolling unless we close or book with this
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleConfirm = () => {
    const emailRegex = /\S+@\S+\.\S+/;

    // if (!email || !emailRegex.test(email)) {
    //   // IF EMAIL NAHI hai ya galat hia toh ye kro

    //   // alert("Please enter a valid email"); // temp validation using only alert
    //   enqueueSnackbar("Please enter a valid email!", {
    //     variant: "error", // red color for error
    //   });
    //   return;
    // }

    if (!email || !emailRegex.test(email)) {
      // Show persistent error snackbar (it won't disappear until closed manually)
      enqueueSnackbar("Please enter a valid email", {
        variant: "error", // Red color for error
        // persist: true, // Keep snackbar visible until manually closed
        action: (key) => (
          <button
            style={{ cursor: "pointer" }}
            onClick={() => closeSnackbar(key)}
          >
            ❌
          </button>
        ),
        onClose: () => setSnackbarOpen(false), // Close snackbar and re-enable button when closed
      });

      setSnackbarOpen(true); // Set snackbar state to true to disable the button
      return;
    }

    onConfirm(email); // pass email back to App
  };

  return (
    <div className={styles.modal}>
      <h2>Confirm Booking</h2>
      <input
        type="email"
        placeholder="Enter your email"
        required
        className={styles.emailInput}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className={styles.buttonGroup}>
        <Button
          background={"var(--color-primary)"}
          handleBtnClick={handleConfirm}
          // handleBtnClick={onConfirm(email)}
          // pass email back to App
          width="120px"
          height="50px"
          disabled={snackbarOpen} // Disable button when snackbar is open
        >
          Confirm
        </Button>

        <Button
          background="black"
          handleBtnClick={onClose}
          width="120px"
          height="50px"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Modal;
