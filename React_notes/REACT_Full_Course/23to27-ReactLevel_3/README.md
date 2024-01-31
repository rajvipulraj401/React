 # React Level 3 -

# `Passing **Children** to a Component by using child props________`


### Suppose we want to use pop up (container) something which doesn't care what text or data is inside it . we just need to have basic layout for that . so for this we will use passing children to a  component. (and we will pass all the text or tag inside that it for example see below)👇🏼👇🏼


```jsx

function Container (props){
   return (
       <div className = "container-style">
	{props.children}
        </div>
     );
}

```

```jsx
<Container>
	<h1> Welcome to My App </h1>
	<p>This content is passed as children to the 
 	     Container component.</p>
<Container>

```

1. children is a special prop for passing elements into components.

2. Used for flexible and reusable component designs.

3. Common in layout or container components.

4. Accessed with props.children.

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

##  `Note---`

### By use of child props we can send any components inside it  as children and whoever will take it as children props can use it by using `props.children or directly by destructuring it` and then render it accordingly.





# `Handling Events .-----`


`CLICK A SCREEN SHOT FROM THE YOUTUBE AND ATTACH IT HERE `


1. React events use camelCase, e.g., onClick.

2. Uses synthetic events, not direct browser events.

3. Event handlers can be functions or arrow functions.

4. Use onChange for controlled form inputs.

5. Avoid inline arrow functions in JSX for performance.



` Note - whenever we write  any **`onClick`** method THE `event` also gets passed 



# `Passing **Functions via Props** -----`


1. Pass dynamic behaviour between components.

2. Enables upward communication from child to parent.

3. Commonly used for event handling.

4. Parent defines a function, child invokes it.

5. Enhances component interactivity.

6. Example:
<Button onClick={handleClick} />


NOTE -------------------KHUD KA NOTES LIKHO AISE SAMGH ME NAHI AAYEGA..........???????????????🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣






# `Managing **State**-------------`



1. State represents `data that changes over time.`

2. State is local and private to the component.

3. **State changes cause the component to re-render.**

4. For functional components, use the useState hook.

5. React Functions that start with word use are called hooks

6. `Hooks should only be used inside components`

7. Parent components can pass state down to children via props.

8. Lifting state up: share state between components by moving it to their
closest common ancestor.
















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