  # Calculator project version 2

##  Key Points:

1. **Adding Behaviors in ButtonsContainer:**
    - Utilize state in the parent component (App) to display button clicks in the Display component.
    - State cannot be kept within ButtonsContainer due to the need to send state updates to Display, which are sibling components in the App container.
   
2. **Finding Which Button Was Clicked:**
    - Implement conditional rendering based on the clicked button.
    - Two methods proposed:
    -  a) Logging the event object to identify the clicked button.
```jsx
	const onButtonClick = (event) => console.log(event);
```

    -    b) Passing the buttonText as a parameter to the onClick handler.
	 In this the child will have to make sure that the method inside parent gets buttonText on the button click



- c)   For Buttons -
 
	 a) we want that the buttons that we click gets display on the screen.

   	 b) we want C button to empty the display .

	 c) we want = button to evaluate all the inputs .

a)  we need to find a way to know which button was  clicked AND `after that we will use conditional rendering and use the functionality of the buttons as well as display them when clicked`


3. **Adding Behavior from Child:**
    - ButtonsContainer communicates with App by passing button names through a function callback.
    - App handles logic based on the button name received from ButtonsContainer.

 

### `Here's a summary of how the second way works:`

In the ButtonsContainer component:

Define an array called buttonNames containing the names of all the buttons.
Use the map function to iterate over each button name.
For each button name, render a <button> element.
Attach an onClick event handler to each button. When clicked, it calls the onButtonClick function with the corresponding buttonName as an argument.
In the parent component (App):

Pass the onButtonClick function as a prop to the ButtonsContainer.
When a button is clicked in the ButtonsContainer, it triggers the onButtonClick function with the clicked button's name.
In the App component, the onButtonClick function handles the logic based on the button name passed to it.
For example, if the button clicked was "C", it clears the display (SetCalVal("")), if it was "=", it evaluates the expression (eval(calVal)), and so on.
This approach allows the child component (ButtonsContainer) to communicate with the parent component (App) by passing data (the button name) through a function callback (onButtonClick).

------------------------------------------------------------------------------------------------------------------------------------------------------


- b&c) In order to do calculation in javascript we use `**eval method**`

**inside eval method we can pass a string  and it will calculate its value**

` const result = eval(calVal);`

`App.jsx----------------------------------`
```jsx


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

```

`ButtonsContainer.jsx--------------------------`

```jsx
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles["buttonsContainer"]}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
          // so now instead of passing onButtonClick as a reference to parent component we will now
          // call onButtonClick and whenever the button will be click  and AS WE know the button name here cause 
          // when we were setting up each button  using map method and we were getting each buttonName so
          // wohi naam toh aa rha tha we can no send this {buttonName} as a parameter in onButtonClick method so that 
          // whenever we click on the button and it goes to parent component as the event gets Triggered
        >
     
          {buttonName}
        </button>
      ))}

      {/* {buttonNames.map((buttonName) => {
        return <button className={styles.button}>{buttonName}</button>;
      })} */}

      {/* <button className={styles.button}>c </button> */}
    </div>
  );
};

export default ButtonsContainer;


```


`Display.jsx------------------------------`


```jsx

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

```
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Difference between passing reference vs pasing new method reference?


**Normal Function Reference:**  
When you pass a function reference directly, you're essentially passing a reference to an existing function defined elsewhere in your code. This function reference points directly to the function that you want to call when an event occurs. It's like saying, "Hey, here's the function, call it when needed."

**Making a New Method and Passing its Reference:**  
In this approach, instead of passing the function reference directly, you define a new function within the component that acts as a wrapper around the original function. This new method typically calls the original function with some additional logic or parameters, if necessary. So, you're not passing the original function itself, but rather a new function that serves as a proxy or intermediary. It's like saying, "Hey, here's a new function that wraps around the original one, call this new function when needed."

**Difference:**  
The main difference lies in the level of abstraction and control you have over the function call. Passing the original function reference directly is straightforward and simpler. Creating a new method allows you to add extra logic or parameters before calling the original function, providing more flexibility and control.

**Example:**  
```jsx
// Direct function reference
onClick={onButtonClick}

// Creating a new method and passing its reference
onClick={() => onButtonClick(buttonName)}
```
Where `handleClick` is a new method that wraps around `onButtonClick`, possibly with additional parameters (`param`).

**Conclusion:**  
Both approaches have their uses depending on the specific requirements of your application. Direct function references are simpler and more concise. Creating new methods allows for more customization and flexibility in handling events.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        b) Passing the buttonText as a parameter to the onClick handler.
	-> In this the child will have to make sure that the method inside parent gets buttonText on the button click



 For Buttons -
 
	a) we want that the buttons that we click gets display on the screen.
	b) we want C button to empty the display .
	c)we want = button to evaluate all the inputs .

a) So we need to find a way to know which button was  clicked AND `after that we will use conditional rendering and use the functionality of the buttons as well as display them when clicked`


3. **Adding Behavior from Child:**
    - ButtonsContainer communicates with App by passing button names through a function callback.
    - App handles logic based on the button name received from ButtonsContainer.

 

`Here's a summary of how the second way works:`

In the ButtonsContainer component:

Define an array called buttonNames containing the names of all the buttons.
Use the map function to iterate over each button name.
For each button name, render a <button> element.
Attach an onClick event handler to each button. When clicked, it calls the onButtonClick function with the corresponding buttonName as an argument.
In the parent component (App):

Pass the onButtonClick function as a prop to the ButtonsContainer.
When a button is clicked in the ButtonsContainer, it triggers the onButtonClick function with the clicked button's name.
In the App component, the onButtonClick function handles the logic based on the button name passed to it.
For example, if the button clicked was "C", it clears the display (SetCalVal("")), if it was "=", it evaluates the expression (eval(calVal)), and so on.
This approach allows the child component (ButtonsContainer) to communicate with the parent component (App) by passing data (the button name) through a function callback (onButtonClick).




b&c) In order to do calculation in javascript we use `**eval method**`

**inside eval method we can pass a string  and it will calculate its value**

` const result = eval(calVal);`

`App.jsx----------------------------------`
```jsx


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

```

`ButtonsContainer.jsx--------------------------`

```jsx
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles["buttonsContainer"]}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
          // so now instead of passing onButtonClick as a reference to parent component we will now
          // call onButtonClick and whenever the button will be click  and AS WE know the button name here cause 
          // when we were setting up each button  using map method and we were getting each buttonName so
          // wohi naam toh aa rha tha we can no send this {buttonName} as a parameter in onButtonClick method so that 
          // whenever we click on the button and it goes to parent component as the event gets Triggered
        >
     
          {buttonName}
        </button>
      ))}

      {/* {buttonNames.map((buttonName) => {
        return <button className={styles.button}>{buttonName}</button>;
      })} */}

      {/* <button className={styles.button}>c </button> */}
    </div>
  );
};

export default ButtonsContainer;


```


`Display.jsx------------------------------`


```jsx

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

```
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Difference between passing reference vs pasing new method reference?


**Normal Function Reference:**  
When you pass a function reference directly, you're essentially passing a reference to an existing function defined elsewhere in your code. This function reference points directly to the function that you want to call when an event occurs. It's like saying, "Hey, here's the function, call it when needed."

**Making a New Method and Passing its Reference:**  
In this approach, instead of passing the function reference directly, you define a new function within the component that acts as a wrapper around the original function. This new method typically calls the original function with some additional logic or parameters, if necessary. So, you're not passing the original function itself, but rather a new function that serves as a proxy or intermediary. It's like saying, "Hey, here's a new function that wraps around the original one, call this new function when needed."

**Difference:**  
The main difference lies in the level of abstraction and control you have over the function call. Passing the original function reference directly is straightforward and simpler. Creating a new method allows you to add extra logic or parameters before calling the original function, providing more flexibility and control.

**Example:**  
```jsx
// Direct function reference
onClick={onButtonClick}

// Creating a new method and passing its reference
onClick={() => onButtonClick(buttonName)}
```
Where `handleClick` is a new method that wraps around `onButtonClick`, possibly with additional parameters (`param`).

**Conclusion:**  
Both approaches have their uses depending on the specific requirements of your application. Direct function references are simpler and more concise. Creating new methods allows for more customization and flexibility in handling events.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
