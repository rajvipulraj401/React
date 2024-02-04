// import React from "react";
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, SetCalVal] = useState("");

  /* We need to pass a method to display and buttonsContainer component */

  //  1st way to find which button was clicked.
  // const onButtonClick = (event) => console.log(event);

  // 2nd way to find which button was clicked.(by changing its signature not we donot need event
  //  we need buttonText now the child will have to make sure that the method inside parent gets buttonText on the button click )
  const onButtonClick = (buttonText) => {
    // now we will do conditional rendering of the text we got.

    if (buttonText === "C") {
      SetCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      // inside eval method we can pass a string inside and it calculates all teh mathematical expression inside of it

      SetCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      // basically above we did string concatenation
      SetCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      {/* <div className={styles["display"]}></div> */}
      <Display displayValue={calVal} />
      {/* passing the value of calVal in Display component in order to show */}
      {/* passing props to Display component */}
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
