import React from "react";
import styles from "./Button.module.css";

const Button = ({
  background,
  id,
  hoverBackground,
  width,
  height,
  children,
  handleBtnClick,
  "aria-label": label,
  /*  ❌❌❌🔇🔇🔇
   We are accepting the 'aria-label' prop and assigning it to the variable 'label'.
   In JavaScript, variable names cannot contain hyphens ('-'), as they are not valid syntax.
   To avoid a syntax error, we wrap 'aria-label' in quotes and assign it to the variable 'label'.
   */
}) => {
  // Create a styles object and pass it as a styles object inside styles attribute (as styles attribute accepts an object)
  //   const btnStyles = {
  //     backgroundColor: background,
  //     width: width,
  //     height: height,
  //     // we cannot do like name : "name" (here it wont work incorrectl)
  //   };

  /*  Shorthand ----------- (Ye approach se jaldi bana jayega component me hover effect bhi
   aa jayeg css variable lene se object me)
  */
  // const btnStyles = { backgroundColor: background, width, height };
  const btnStyles = { "--bg": background, width, height };

  return (
    <>
      <button
        type="submit"
        id={id}
        className={styles.buttonContainer}
        /* GETTING bg color as props but not setting it here directly setting
         it in css file as a variable css and bs iska opacity ghata badha diye
         Always follow the css variable naming convention --bg 
        */
        style={btnStyles}
        aria-label={label}
        onClick={handleBtnClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
