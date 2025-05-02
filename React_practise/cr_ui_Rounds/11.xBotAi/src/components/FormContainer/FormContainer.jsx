import React from "react";
import Button from "../Button/Button"; // Assuming you already have a Button component
import styles from "./FormContainer.module.css";

const FormContainer = ({ handleAsk, handleSave }) => {
  const handleUserInput = (e) => {
    e.preventDefault();

    // console.log(e.target[0].input.value);
    // console.log(e.target[0].value);

    const val = e.target[0].value;
    e.target[0].value = "";

    handleAsk(val);
  };
  return (
    <>
      {/* <div className={styles.formContainer}> */}
      <form
        className={styles.formContainer}
        onSubmit={(e) => handleUserInput(e)}
      >
        <div className={styles.formContainerInput}>
          <input
            type="text"
            placeholder="Message Bot AI..."
            className={styles.input}
            aria-required
            required
          />
        </div>

        <div className={styles.buttonsContainer}>
          <Button
            background="#7d7dff"
            width="100px"
            // handleClick={handleAsk}
            type="submit"
          >
            Ask
          </Button>
          <Button background="#7d7dff" width="100px" handleClick={handleSave}>
            Save
          </Button>
        </div>
      </form>
      {/* </div> */}
    </>
  );
};

export default FormContainer;
