# --------------- React Level 3 -------------------

# 23 `Passing **Children** to a Component by using child props________`


### What it is ? 
If we want to render something that is between the component tags, then we need to use a special prop called `props.children`. This is a special prop provided by React, and its name should only be `children`, no other. (lowercase **c**, not capital C)   




```jsx
<Container>
  <h1>Welcome</h1>
  <p>Hi bhai</p>
</Container>
```

 

### **📌 Understanding `props.children`**
When we create a React component like this:
```jsx
<Container>
  <h1>Welcome</h1>
  <p>Hi bhai</p>
</Container>
```
Everything **inside** `<Container>...</Container>` is passed as `props.children` to the `Container` component.

---

### **✅ How to Use `props.children`**
```jsx
const Container = (props) => {
  return (
    <div className="container">
      {props.children} 
    </div>
  );
};
```
Now, when we use:
```jsx
<Container>
  <h1>Welcome</h1>
  <p>Hi bhai</p>
</Container>
```
✅ It will render as:
```html
<div class="container">
  <h1>Welcome</h1>
  <p>Hi bhai</p>
</div>
```
---

### **⛔ Common Mistakes**
1. `props.Children` ❌ (Wrong - "C" should be lowercase)  
2. `props.children()` ❌ (Wrong - `children` is **not a function**, it's just a prop)
3. `props.children && <div>{props.children}</div>` ✅ (Correct way to ensure rendering only if `children` exist)

---

### **🎯 When to Use `props.children`?**
- When you want to **wrap** components dynamically.  
- When creating **reusable layout components** like `Card`, `Modal`, or `Container`.

Hope this clears it up! Let me know if you need an example with `children` in a practical component. 🚀

----IN DETAIL SEE BELOW YAA PHIR BS UPAR KADEKH KECHHORO  👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼----


### Suppose we want to use pop up (container) something which doesn't care what text or data is inside it . we just need to have basic layout for that . so for this we will use passing children to a component. (and we will pass all the text or tag inside that it for example see below)👇🏼👇🏼

```jsx
function Container(props) {
  return <div className="container-style">{props.children}</div>;
}
```

```jsx
<Container>
	<h1> Welcome to My App </h1>
	<p>This content is passed as children to the
 	     Container component.</p>
<Container>

```

1. `children is a special prop for passing elements into components.``

2. Used for flexible and reusable component designs.

3. Common in layout or **container components.**

4. Accessed with props.children. we can even destructure the props object and use it.

5. Can be any content: strings, numbers, JSX, or components.

6. Enhances component composability and reusability.

![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/23to27-ReactLevel_3/food.png)

`container.jsx----------`

```jsx
import styles from "./Container.module.css";

// const Container = (props) => {
const Container = ({ children, asdf }) => {
  //   return <div className={styles.container}>{props.children}</div>;
  return <div className={styles.container}>{children}</div>;
};

export default Container;
```

`conatiner.module.css---`

```css
.container {
  border: 1px solid black;
  margin: 15px;
  width: 50%;
  min-width: 300px;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
}
```

`App.jsx-------------`

```jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";

function App() {
  // let foodItems =[];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <Container asdf="asdfff">
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems groccery={foodItems} />
      </Container>

      <Container>
        <p>
          Baby ,Why don't you eat it regualrly and see your body grow boy .You
          can do it . Healthy Mind in a Healthy Body
        </p>
      </Container>
    </>
  );
}

export default App;
```

## `Note---`

### By use of child props we can send any components inside it as children and whoever will take it as children props can use it by using `props.children or directly by destructuring it` and then render it accordingly.

# 24 `-------- Handling Events ------`

![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/23to27-ReactLevel_3/Handling.png)

1. React events use **camelCase, e.g., onClick.**

2. Uses `synthetic events,`` not direct browser events.

3. Event handlers can be functions or arrow functions.

4. Use onChange for controlled form inputs.

5. `Avoid inline arrow functions in JSX for performance.``
   for example 👇🏼👇🏼👇🏼

```jsx
import styles from "./FoodInput.module.css";

const handleOnChange = (event) => {
  console.log(event.target.value);
  /* When we go inside event object in console there is target object inside it and then 
    inside that there is a value property   */
};

const FoodInput = () => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
```

` Note - whenever we write  any **`onClick`** method THE `event`also gets passed  so WHenever we call onClick or any type of method which handles behaviour `so in this case what react does is that it by default creates a object of that event`  in which it has detail of  what event has happened.we can give it any name (event , e or d anything)`

`Item.jsx -----------------(filename)`

```jsx
import styles from "./Item.module.css";
const Item = ({ foods }) => {
  // THIS IS THE props object

  // const handleBuyButtonClicked = (foods) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    // this will directly work also
    console.log(`${foods} being bought`);
    // yaha jsx curly bracket nahi dena pada javascript code dene pe kyunki
    // ye function neeche call hoga aur wo sara code already {} curly bracket
    // ke andar hi hai
  };
  return (
    // <li className={`${styles["kg-item"]} list-group-item`}>
    <li className={`list-group-item`}>
      <span className={styles["kg-span"]}>{foods}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // handing click event in react
        // onClick={() => handleBuyButtonClicked(foods)}
        /*we were making anonymous method so that it doesn't get 
          get immediately called*/

        onClick={(event) => handleBuyButtonClicked(event)}
        // event object

        // now passing function reference

        // note - if we are inside jsx and we have to write javascript thenwe will use {} but if we are inside {} only then we won't use another
        // bracket.
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
```

`item.module.css-------------`

```css
.kg-item {
  background-color: khaki;
}

.kg-span {
  font-weight: 500;
  color: orangered;
}

.button {
  float: right;
  /* this will  algin every button to right of its parent  (the list item is parent here
  so it is to its right)*/
}
```

```jsx
App.jsx------

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems =[];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <Container asdf="asdfff">
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput />
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems groccery={foodItems} />
      </Container>

      {/* <Container>
        <p>
          Baby ,Why don't you eat it regualrly and see your body grow boy .You
          can do it . Healthy Mind in a Healthy Body
        </p>
      </Container> */}
    </>
  );
}

export default App;


```

`FoodInput.jsx------------`

```jsx
import styles from "./FoodInput.module.css";

const handleOnChange = (event) => {
  console.log(event.target.value);
  /* When we go inside event object in console there is target object inside it and then 
    inside that there is a value property   */
};

const FoodInput = () => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
```

`FoodInput.module.css-------------------`

```css
.foodInput {
  width: 100%;
  padding: 5px;
  margin: 10px 0px;
}
```

## synthetic Base Event -

`This is not normal base event . It is special react event .`synthetic Event` what it does is  it is different for different different devices (phone , laptop , computer)`

# 25 `Passing Functions via Props -----`

![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/23to27-ReactLevel_3/props.png)

1. Pass dynamic behaviour between components.

2. `Enables upward communication from child to parent.`

3. Commonly used for event handling.

4. **Parent defines a function, child invokes it.**

5. `Enhances component interactivity.`

6. Example:
   <Button onClick={handleClick} />



`App.jsx---------`

```jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems =[];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  let textToShow = "Food Item Entered by user";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    /* When we go inside event object in console there is target object inside it and then 
      inside that there is a value property   */
    textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnChange={handleOnChange} />
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems groccery={foodItems} />
      </Container>
    </>
  );
}

export default App;
```


`FoodItems.jsx---`

```jsx
import Item from "./Item";
// let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

const FoodItems = ({ groccery }) => {
  return (
    <ul className="list-group">
      {groccery.map((item) => (
        <Item
          key={item}
          foods={item}
          handleBuyButton={() => console.log(`${item} bought`)}
        />
        // Passing the 'foods' prop to the 'Item' component.
        // Note: 'foodItem' will be accessible within 'Item' component via the 'props' object.
        // (props is just the name you can have any name)

        // we have to wrte item inside curly bracketbecause it is jsx code
        // else the browser will interpret it as text and not the variable.

        // NOTE 2 - Ensure each component in the list has a unique "key" prop, required by React for efficient updates.
      ))}
    </ul>
  );
};

export default FoodItems;

// how we pass props

/* 
We pass as an attribute .
examples - <Header title = "My App"/>*/
```



`items.jsx----`

```jsx
import styles from "./Item.module.css";
const Item = ({ foods, handleBuyButton }) => {
  // THIS IS THE props object

  // const handleBuyButtonClicked = (foods) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    // this will directly work also
    console.log(`${foods} being bought`);
    // yaha jsx curly bracket nahi dena pada javascript code dene pe kyunki
    // ye function neeche call hoga aur wo sara code already {} curly bracket
    // ke andar hi hai
  };
  return (
    // <li className={`${styles["kg-item"]} list-group-item`}>
    <li className={`list-group-item`}>
      <span className={styles["kg-span"]}>{foods}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // handing click event in react
        // onClick={() => handleBuyButtonClicked(foods)}
        /*we were making anonymous method so that it doesn't get 
          get immediately called*/

        onClick={handleBuyButton}
        // event object

        // now passing function reference

        // note - if we are inside jsx and we have to write javascript thenwe will use {} but if we are inside {} only then we won't use another
        // bracket.
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
```

`FoodInput.jsx--------`

```jsx
import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
```

```jsx

```

What we actually want is `we want to write all the logics in parent and in small components we just want to show ui` ,so what we want is that our parent component which is bringing the data that should only know where to add data where to change data.how to add data how to delete data (so parent will pass behaviour along with props) and the small components duties will be to show the things correctly and add the behaviour and call the behaviour at right time.

and this goes to multiple level for example

A -> B -> C-> The behaviour which one parent is passing to other that parent also don't know about the behaviour it is getting data from its parent and that is getting from its own parent. so this way it can go on to multiple level .


## **`Principle of Logic Centralization and Component Decoupling in React`**

**Objective:**
- Centralize all logic within parent components, while child components focus solely on UI presentation.
- Parent components manage data operations such as addition, modification, and deletion, passing down behavior along with props to child components.

**Parent Component Responsibilities:**
- Handles all logic related to data manipulation and behavior definition.
- Determines where to add, modify, or delete data within the application.
- Passes down behavior along with props to child components, enabling them to execute specific actions.

**Child Component Responsibilities:**
- Primarily focuses on rendering UI elements in a visually appealing manner.
- Receives behavior from parent components as props and executes them at appropriate times.
- Does not concern itself with the origin or nature of the behavior it executes.

**Key Points:**
1. **Centralized Logic:** All application logic resides within parent components, promoting a clear separation of concerns and simplifying maintenance.
2. **Data Management:** Parents manage data operations and define behavior, delegating specific actions to child components through props.
3. **Component Decoupling:** Child components are decoupled from the intricacies of data manipulation, ensuring flexibility and reusability.
4. **Nested Hierarchies:** This principle extends seamlessly across nested component hierarchies, enabling behavior delegation across multiple levels of parent-child relationships.

**Illustrative Example:**
- A parent component (A) manages data and behavior, passing down relevant behavior to its child component (B).
- Component B, in turn, delegates behavior to its own child component (C), continuing the cascade of behavior delegation.
- Each component along the hierarchy focuses on its specific responsibilities, contributing to the overall modularity and maintainability of the application.

**Conclusion:**
Embracing this principle facilitates the development of scalable and maintainable React applications, fostering a clean separation of concerns and promoting code reusability across various components and levels of the component hierarchy.

--------------------------------------------------------------

## What is the problem we got here??? and what will solve it .

Answer - we change the value but this doesn't paint .  
`So we have to know that this app component is function and each time it is reloaded textToShow value is assigned eventhough we are changing textToShow value internally but it is still not reflecting as props are immutable in order to change it you have to use state (do state management). AS we cannot change props variable. because our component is stateless. SO WE HAVE TO add state`

```jsx
function App() {
  // let foodItems =[];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  let textToShow = "Food Item Entered by user";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    /* When we go inside event object in console there is target object inside it and then 
      inside that there is a value property   */
    textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnChange={handleOnChange} />
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems groccery={foodItems} />
      </Container>
    </>
  );
}
```

so , In order to use it we have to use state


### Problem:
- The issue here is that even though `textToShow` variable is being updated internally within the `handleOnChange` function, these updates are not reflected in the UI.
- This happens because the `App` component is a function component, and each time it's re-rendered, `textToShow` is reinitialized with the initial value "Food Item Entered by user".

### Solution:
- The solution to this problem is to use state management.
- Since props are immutable in React, and reinitializing variables within a function component does not cause re-renders or reflect UI changes, we need to utilize state to manage dynamic data that can change over time.
- By using state, we ensure that changes to the data trigger re-renders, updating the UI accordingly.
- In React, we can implement state management using hooks like `useState`.
  
### Conclusion:
Understanding the need for state management in React is crucial for building dynamic and interactive applications. In situations where data needs to change over time and reflect those changes in the UI, state management provides the mechanism to achieve this. In your case, incorporating state management using `useState` hook will allow you to update `textToShow` dynamically and reflect those changes in the UI.


Now what we want.

## we want two things :-

1) we want  that our app Component can save the value of textToShow and

2) we want between re-renders the value of textToShow doesnot reset whatever value we set at last it keeps like that . 

# 26 **`Managing  State`**-------------



1. State represents `data that changes over time.`

2. State is local and private to the component.
(state is associated with a particular component)

3. **State changes cause the component to re-render.**
  -> cause state change means that you changed a value and you have created your ui on the basis of that value or you have passed it to a child component. `IN both case it executes our function again and  it doesnot do assignment of that value again we will get our value back whatever changed has happened at last time .`

## `Understanding State Changes and Component Re-renders`

**State changes trigger component re-renders:** `Whenever a component's state changes in React, it initiates a process known as re-rendering. This means that React automatically updates the user interface to reflect the latest state values.`

**Function re-execution during re-renders:** During a re-render, React re-runs the entire component function, including any logic or JSX rendering defined within it. This ensures that the UI always reflects the most up-to-date state values.

**Automatic state value updates:** React handles state updates internally, ensuring that the most recent state values are readily available within the component function during re-renders. There's no need for manual reassignment of state values; React takes care of it behind the scenes.


4. For functional components, use the useState hook.
 
NOTE -`Hooks are special type of component that has been created by react we can also create our own hook .` .

5. React Functions that start with word use are called hooks

6. `Hooks should only be used inside components not on normal codes like any javascript functions`

7. Parent components can pass state down to children via props.

8. Lifting state up: share state between components by moving it to their
   closest common ancestor.

we have to keep the state at that point where all other component doesn't need to re - render so in turn it will give less load to browser(less work for browser). and also above the components which are going to use that state. 
As props can only be send from parents to child .Hence pulling the state up.


### Some scenarios where we typically use state in React:

1. **User Input Handling**: When we need to capture and respond to user input, such as form submissions, text input, or button clicks.

2. **Dynamic UI Updates**: When components need to update their appearance or content based on changes in data or user interactions.

3. **Component Lifecycle Changes**: When we need to manage component lifecycle events, such as mounting, updating, or unmounting components.

4. **Data Fetching and Asynchronous Operations**: When components need to fetch data from external sources or perform asynchronous operations, such as fetching data from an API.

5. **Conditional Rendering**: When we need to conditionally render components or elements based on certain conditions or states.

6. **Global State Management**: When we need to manage global application state that needs to be shared across multiple components.

These are some common scenarios where state management is crucial in React applications.

## useState hook -------

-> **Whenever we use useState hook it always returns an array which have two elements inside it.**

 -> 1st element -- `current value of our state`
 -> 2nd element -- ` A method through which we can change or edit our current value  `

example 

```jsx 

import {useState} from "react";

let textStateArr = useState();
let textStateVal = textStateArr[0]; //This gives current val
let setTextState = textStateArr[1]; // This gives a method through which we can change that value .

```
So , what we can do is if we want to use any value as the current value we can set it as . this and also pass the initial value in useState hook see below 👇🏼👇🏼
  
```jsx

import {useState} from "react";

let textStateArr = useState("Food Item Entered by user");
let textToShow = textStateArr[0]; //This gives current val
let setTextState = textStateArr[1]; // This gives a method through which we can change that value 
console.log(`Current value of textState:${textToShow}`);

// in order to change it 

const handleOnChange = (event )=>{
	console.log(event.target.value);
	//textToShow = event.target.value;
	setTextState(event.target.value);
};


```

`So what we are saying above is that Declare my state whose initial value is "Food Item Entered by user".`

`In order to change it what we are doing instead of setting textToShow value to event.target.value we pass it to setTextState method in order to set it using useState hook`



![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/23to27-ReactLevel_3/state.png)





---

## useState Hook

- **Return Values**: The `useState` hook always returns an array with two elements.
  - The first element represents the current value of the state.
  - The second element is a function that allows us to change or update the current value of the state.

Example:
```jsx 
import { useState } from "react";

let textStateArr = useState();
let textStateVal = textStateArr[0]; // This provides the current value
let setTextState = textStateArr[1]; // This provides a method to update the value
```

- **Array Destructuring**: To enhance readability, we can use array destructuring to directly assign the elements of the array returned by `useState` to variables.
  
Example:
```jsx 
import { useState } from "react";

const [textToShow, setTextState] = useState("Food Item Entered by user");
```

- **Initial State Value**: We can pass an initial value to `useState` as an argument. This initial value is used during the first render, and subsequent renders use the current state value.

Example:
```jsx 
import { useState } from "react";

const [textToShow, setTextState] = useState("Food Item Entered by user");
```

- **Updating State**: To update the state value, we use the updater function provided by `useState`. This function accepts a new value as its argument and triggers a re-render to reflect the updated state in the UI.

Example:
```jsx 
const handleOnChange = (event) => {
  setTextState(event.target.value); // Update state value
};
```

By following these conventions, we can effectively manage state within functional components using the `useState` hook, enabling dynamic updates to the UI based on changes in state.



`App.jsx------------`


```jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  let [foodItems, setFoodItems] = useState([
    /*"salad",
    "Green Vegetable",
    "Roti",*/
  ]);

  // let textToShow = "Food Item Entered by user";

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      // This will clean the input value of the input text which i have written in the input field.

      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is " + newFoodItem);
    }
    /* When we go inside event object in console there is target object inside it and then 
      inside that there is a value property   */
    // console.log(event.target.value);
    // textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems groccery={foodItems} />
      </Container>
    </>
  );
}

export default App;


```


`FoodItems.jsx----------------`

```jsx
import { useState } from "react";
import Item from "./Item";
// let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

const FoodItems = ({ groccery }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    // jo button item wala click hua usko active items me daal do
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {groccery.map((item) => (
        <Item
          key={item}
          foods={item}
          bought={activeItems.includes(item)}
          // handleBuyButton={(clicke) => onBuyButton(item, clicke)}
          handleBuyButton={(clicke) => {
            console.log(clicke);
            onBuyButton(item, clicke);
          }}
        />
      ))}
    </ul>
  );
};

export default FoodItems;

// how we pass props

/* 
We pass as an attribute .
examples - <Header title = "My App"/>*/


```

`Item.jsx--------`
```jsx
import styles from "./Item.module.css";
const Item = ({ foods, bought, handleBuyButton }) => {

  return (
    // <li className={`${styles["kg-item"]} list-group-item`}>
    <li className={`list-group-item ${bought && "active"}`}>
      <span className={styles["kg-span"]}>{foods}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // handing click event in react
        // onClick={() => handleBuyButtonClicked(foods)}
        /*we were making anonymous method so that it doesn't get 
          get immediately called*/

        onClick={handleBuyButton}
        // event object

        // now passing function reference

        // note - if we are inside jsx and we have to write javascript thenwe will use {} but if we are inside {} only then we won't use another
        // bracket.
      >
        Buy
      </button>
    </li>
  );
};

export default Item;


```

`FoodInput.jsx---`

```jsx

import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      // onChange={handleOnChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;

```

---


# `State vs Props -------`

## State:

• Local and mutable data within a component.

• Initialized within the component.

• Can change over time.

• Causes re-render when updated.

• Managed using useState in functional components.

## Props:


• Passed into a component from its parent.

• Read-only (immutable) within the receiving component.

• Allow parent-to-child component communication.

• Changes in props can also cause a re-render.
