 # --------------- React Level 3 ----------------

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





# `-------- Handling Events ------` 

 ![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/23to27-ReactLevel_3/Handling.png)


1. React events use camelCase, e.g., onClick.

2. Uses synthetic events, not direct browser events.

3. Event handlers can be functions or arrow functions.

4. Use onChange for controlled form inputs.

5. Avoid inline arrow functions in JSX for performance. 
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



` Note - whenever we write  any **`onClick`** method THE `event` also gets passed  so WHenever we call onClick or any type of method which handles behaviour  `so in this case what react does is that  it by default creates a object of that event`  in which it has detail of  what event has happened.we can give it any name (event , e or d anything)`



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

  

# `Passing **Functions** via Props** -----`


 ![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/23to27-ReactLevel_3/props.png)

1. Pass dynamic behaviour between components.

2. Enables upward communication from child to parent.

3. Commonly used for event handling.

4. Parent defines a function, child invokes it.

5. `Enhances component interactivity.`

6. Example:
<Button onClick={handleClick} />



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


```jsx


```


What we actually want is `we want to write all the logics in parent and in small components we just want to show ui`  ,so what we want is that our parent component which is bringing the data that should only know where to add data where to change data.how to add data how to delete data (so parent will pass behaviour along with props) and the small components duties will be to show the things correctly and add the behaviour and call the behaviour at right time.


 and this goes to multiple level for example


A -> B -> C-> (the behaviour which one parent is passing to other that parent also don't know about the behaviour it is getting data from its parent and that is getting from its own parent. so this way it can go on to multiple level .



## What is the problem we got here??? and what will solve it .

Answer - we change the value but this doesn't paint .  
`So we have to know that this app component is function and each time it is reloaded textToShow value is assigned eventhough we are changing textToShow value internally but it is still not reflecting as props are immutable in order to change it you have to use state (do state management). AS we cannot change props variable. because our component is stateless.

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
















# **`Managing  State`**-------------



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