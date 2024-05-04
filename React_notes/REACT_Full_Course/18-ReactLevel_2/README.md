  # React Level 2-

-----------------------------
![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/input.png)

In React, when you use the `value` and `onChange` attributes together, it creates what is known as a **controlled input**. This means that React has control over the input's value, allowing you to manage its behavior and updates through React state.

With a controlled input:
- React manages the input's value, and any changes to it are controlled by React state.
- You have control over how the input behaves and how its value is updated based on user interactions.

On the other hand, if you only use the `defaultValue` parameter, the browser has control over the input, and it behaves as an **uncontrolled input**. In this case:
- The input's value is initially set by the browser's default value.
- Users can still input text freely, but there is no way to update any React state variable based on these inputs.


----- 

## Importing Non-JavaScript Files

### Example:

```javascript
// Importing CSS file
import "./styles.css";

// Importing JSON file
import user from "./user.json";

function App() {
    // Rendering JSON data as a string
    return <h1>{JSON.stringify(user)}</h1>;

    // Alternatively, to render the object directly:
    // return <h1>{user.name}, {user.age}</h1>;
}
```

Explanation:
- When importing JSON data, it's necessary to stringify it before rendering, as objects are not valid React child elements.

Result:
- The output will be: `{"name":"Kyle","age":27}`.

## How to Import Images

```javascript
// Importing image file
import img from "./Code.png";

function App() {
    // Rendering the imported image
    return <img src={img} alt="code" />;
}
```

Explanation:
- When importing images, simply use the imported variable as the `src` attribute value in the `<img>` tag.

Result:
- The image specified by `Code.png` will be displayed in the rendered component.

---

# `Fragments______`


Read in Copy notes .📖🙈🙈




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

Read in Copy notes .📖🙈🙈

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

const ErrorMessage = ({ items }) => {
  //   let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      {items.length === 0 && <h3>I am still hungry.</h3>}
      {/* This is optional chaining  so the thing after and operator will run 
      if before and operator statement is true else it willnot run*/}
    </>

    // we are adding fragments because we are writing jsx code inside it that's why .
  );
};

export default ErrorMessage;



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



`JO BHI CHIZ MULTIPLE MODULE ME Defined  hai usko hum global css me chhor sakte hai baaki single file pe lagne wala css ko hum module.css file banakae daalenge`
`


# How TO USE module .css 


In order to use it do the following steps .

1.  Identify which styles are only applied to individual files then only create that style in module.css .

2. copy the style defined in global css file and .

3. Create another file in component folder with name of the specific file where the css is applied .

for example . _ 

 	a ) if there is a file name with AppName.jsx and you have applied a style in that then .
	b) Create a file called AppName.module.css for that file specified styles.
	c) paste all the styles there in that file .
	d) In order to use the style now go to the AppName.jsx file and then there .
 		PUT the reference of module.css which you created jsut now.
	e) Also import the styles which you made in the AppName.jsx file at top .


for example

```jsx

import styles from "./AppName.module.css";

function AppName() {
  return <h1 className={styles["appName_style"]}>Todo App</h1>;
}
export default AppName;

// This is the way to export default function in react .
// Brother it is a function component so it is basically a function so you have to return it .


```



---

# Using Module.css in React

Yes, both ways of using the module.css in React are correct. Let's break down each approach:

1. Using bracket notation:
```jsx
import styles from "./AppName.module.css";

function AppName() {
  return <h1 className={styles["appName_style"]}>Todo App</h1>;
}
export default AppName;
```
In this approach, `styles` is imported from the `AppName.module.css` file. The `styles` object contains all the CSS classes defined in the module, and each class name is a property of this object. By using bracket notation (`styles["appName_style"]`), you can access the class name defined in the module and apply it to the `h1` element.

2. Using curly brackets:
```jsx
import styles from "./AppName.module.css";

function AppName() {
  return <h1 className={styles.appName}>Todo App</h1>;
}
export default AppName;
```
In this approach, `styles` is again imported from the `AppName.module.css` file. Here, the class name is accessed using dot notation (`styles.appName`). This approach is more concise and readable, `especially when the class name doesn't contain special characters or spaces`.

Both approaches are correct and achieve the same result. You can choose whichever one you prefer based on your personal preference or coding style guidelines.

---

# When to Use square Bracket Notation in CSS Modules

In CSS modules, curly braces are used when the class names contain special characters or spaces. This is because class names with special characters or spaces would not be accessible using dot notation. Here are some instances where curly bracket notation is required:

1. **Special Characters in Class Names**: If the class name defined in the CSS module contains special characters such as hyphens, underscores, or spaces, you must use bracket notation to access it. For example:
   ```jsx
   import styles from "./AppName.module.css";

   function AppName() {
     return <h1 className={styles["app-name"]}>Todo App</h1>;
   }
   export default AppName;
   ```

2. **Dynamic Class Names**: When you need to dynamically generate class names based on variables or props, you must use bracket notation. For example:
   ```jsx
   import styles from "./AppName.module.css";

   function AppName({ isImportant }) {
     const className = isImportant ? styles["important"] : styles["normal"];
     return <h1 className={className}>Todo App</h1>;
   }
   export default AppName;
   ```

3. **Reserved JavaScript Keywords**: If the class name coincides with a reserved JavaScript keyword, bracket notation should be used to avoid conflicts. For instance:
   ```jsx
   import styles from "./AppName.module.css";

   function AppName() {
     return <h1 className={styles["class-name"]}>Todo App</h1>;
   }
   export default AppName;
   ```

In these cases, using bracket notation ensures that you can access the CSS class correctly and apply it to your React components without encountering any errors.

--- 


