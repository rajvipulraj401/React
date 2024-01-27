  # React Level 2-

# `Fragments______`

### 1. What?

`Allows grouping of multiple elements without
extra DOM nodes.(without extra div)`

### 2. Why?

• Return multiple elements without a wrapping
parent.
• Cleaner DOM and consistent styling.

### 3. How? Two syntaxes:

1. <React.Fragment>...</React.Fragment>
2. Short: <>...</>



# `Map method in React______`


 **Purpose**: Render lists from array data.

 **JSX Elements**: Transform array items into JSX.

 **Inline Rendering**: Directly inside JSX

```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```
 **Key Prop**: Assign unique key for optimized re-renders.

```jsx
<div key={item.id}>{item.name}</div>
```


**NOTE - Each child in a list should have unique key prop We have to add a key  as it helps react , React kahta hai ki jabhi bhi aap ek list ko render krte hai toh har item ke paas apna ek id hona chahiye kyunki React ka kaam hi yahi hai ki ye update ko save krta hai .Agr page me kuch change hua hai toh  bas utna hi page mujhe change krna pade poore page me change na karna pade  . SO it says that ki agar aap iske andar id de denge toh mujhe pata chal jayega jab iske andar changes honge , `Mujhe sirf iswale me  change krna hai, nahi toh agar saare item same honge toh ek bhi change hoga toh mujhe sabko change krna hoga so REACT USE KRNE KA WHOLE POINT KHARAB HOJAYEGA`**




NOTE2 - Key is saved in virtual Dom it will not be seen in browser inspect


![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/mapKey.png)




# `Conditional Rendering______`

#### `When we do rendering based on certain condition it is called conditional Rendering`

• Displaying content based on certain conditions.
• Allows for dynamic user interfaces.


## Methods---

### 1.`If-else statements:` Choose between two blocks of content.

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/conditional0.png)


### 2.`Ternary operators`: Quick way to choose between two options.

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/conditional1.png)

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/conditional2.png)

### 3.`Logical operators`: Useful for rendering content when a condition is true.

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/conditional3.png)

## `Benefits of Doing conditional rendering :---`


• Enhances **user experience**.

• Reduces unnecessary rendering.

• Makes apps **more interactive and responsive**.




# `Props______` 


## Props in React

• Short for properties

• Mechanism for passing data.

• Read-only by default

## Usage

• Pass data from parent to child component.

• Makes components reusable.

• Defined as attributes in JSX.

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/props1.png)


## `Key Points`

• Props is an object in javascript which catches all the arguments inside the props object•

• Data flows `one-way` (downwards).

• `Props are immutable.`

• Used for communication between components.
Examples
<Header title="My App" />


### `App.jsx---`
```jsx

```


### `App.jsx---`
```jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems =[];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems groccery={foodItems} />
    </>
  );
}

export default App;


```


### `ErrorMessage.jsx---`
```jsx

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems =[];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems groccery={foodItems} />
    </>
  );
}

export default App;


```


### `FoodItems.jsx---`
```jsx

import Item from "./Item";
// let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

const FoodItems = ({ groccery }) => {
  return (
    <ul className="list-group">
      {groccery.map((item) => (
        <Item key={item} foods={item} />
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


### `Item.jsx---`
```jsx

// THIS item.jsx will make a single list item

// const Item = (props) => {
//   // THIS IS THE props object
//   return <li className="list-group-item">{props.foodItem}</li>;
// };

// we can also do via destructuring

const Item = ({ foods }) => {
  // THIS IS THE props object
  return <li className="list-group-item">{foods}</li>;
};

export default Item;



```


### `main.jsx---`
```jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```


`props are passed as a attribute
props are catched similarly like in normal jScript function -> arguments and destructuring.`



![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/props2.png)



#  Css Modules ----

1. `Localized class names to avoid global conflicts.`

ex--
```css
 	.cat_meow_j3xk{
	        color : orange;
	}
/* JUST like above we just give normal className like meow but css module make this name
 in a random code type name so that the name is localized*/
``` 
2. Styles are scoped to individual components.

3. **Helps in creating component-specific styles**.

4. Automatically generates unique class names.

5. Promotes modular and maintainable CSS.

6. Can use alongside global CSS when needed.

--(jaha tumko global css use krna hai wo bhi kr sakte ho aur modular bhi aur yaha tak ki bootstrap wagairah bhi use kr sakte hai saath me)

` NOTE -
whenever we are applying a custom css . 
we should use module css  in react application . 
iska unique class name  hoga so isse name clash nahi hoga .



`JO BHI CHIZ MULTIPLE MODULE ME DEFined  hai usko hum global css me chhor sakte hai baaki single file pe lagne wala css ko hum module.css file banakae daalenge`
`