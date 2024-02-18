# ****_useState Hook_**

gotcha 
1) You can only use hooks in functional components , You cannot use in class components.

2) Every time your funtion runs your hooks must execute in exact same order .
  so you cannot call it conditionally or put it inside functions , loops .
They must be at the top levels .

This will not work .

```jsx

function App(){
if (true){
     useState()
}
useState()
useState()
useState()

```
### The above code would fail to compile 

- we would get error "useState" is called conditionally . React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks



## What is a State?

A state is data that React manages. Whenever this data changes, React updates the page accordingly. React doesn't change it automatically when you click the button , In order to change anything in the page you have to update the data .

For example, if a button is initially red and you want to change it to blue, you need to update the data. This data is typically stored in what's called "state."

### State Example:

```jsx
// Initializing score state with value 0
const [score, setScore] = useState(0);

// Updating the score
setScore(score + 10);
```

In this example, the `score` is stored in a state. When the score changes, React automatically updates any part of the page that depends on the score.

States can hold any type of data. For instance, a game might start with a score of 0, which increases by 10 in the future. In this case, it's crucial to store the score variable in a state because React only updates what's in the state.


```jsx
import React, { useState } from 'react';

function App() {
  const [ban, setBan] = useState(false);

  return (
    <div className="p-4">
      <h1>{ban.toString()}</h1>
      {/* We cannot print a boolean in a header, so we need to convert it into a string */}
      <button onClick={() => setBan(!ban)}>Toggle Ban</button>
    </div>
  );
}


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Other code Example (wrong one )

```jsx

import React ,{useState }from 'react';

function App() {
const [count ,setCount] =useState(4)

function decrementCount() {
setCount (count-1)
}
return(
<>
   <button onClick = {decrementCount}>-</button>
<span>{count}</span>
<button> + </button>
</>
  )
}
	export default App;
```

## NOW SOMETHING IMPORTANT TO KNOW is the above is actually incorrect way to  update a value based on the previous value.


```jsx
  
function decremenCount(){
setCount(count-1)
{/*suppose here count value is 4 so we are doing in both cases 4-1 =3 so both will return same value  They are just overriding each other . */}
setCount(count -1)
}



```

#### `This above code will not work it will not work it will not subtract -2 it will only subtract -1` 

**`Reason**  :--- Our count value is just the value of count when we render our function so here we are doing ,suppose here count value is 4 so we are doing in both cases 4-1 =3 so both will return same value  They are just overriding each other . 

 ### But when  we pass another anonymous function 

```jsx
function decremenCoun(){
setCount(prevCount => prevCount -1)
setCount(prevCount => prevCount -1)
}

```
  ### Here on Above what happens is that our previous value is passed into it so we get last value of count each time Therefore we are doing -2 on the above code .


```jsx

function incrementCount () {

setCount (prevCount => prevCount -1 )
}

```

2) So, Anytime you need to modify the state you need to send previous state value to create the new value , You need to make sure to use function version of setting your state just like if you were setting the state of inside of a class component.



-------------------------------------------------------------------------------------------------------------------------------------

				# _Intermediate useState_

Sometimes we need the old value when using `setVal`. If we need the old value, we use the functional way, and if we do not need the old value, we can use the spread operator.

Inside the setVal method:

1. We can directly give a new value for our state.
2. Alternatively, we can pass a function inside the setter function  when we want to utilize the previous value.

Example:

```jsx
import React, { useState } from 'react';

function App() {
  const [val, setVal] = useState(12);

  return (
    <div className="p-4">
      <h1>{val}</h1>
      <button onClick={() => setVal(prev => prev + 1)}>Increment Value</button>
    </div>
  );
}

export default App;


```

In the above example, the onClick event handler utilizes an anonymous function to ensure that the function is executed only when the button is clicked.  .In order to use updater function pass it in the button inside  onClick attribute passed inside an anonymous function .




## Important Considerations ----


When using a functional component with useState(initialValue), the initial value is called every time the component function runs. This can lead to performance issues (slowing of our app), especially with complex initial values such as computations involving Fibonacci sequences.

To mitigate this performance impact, useState offers two ways to pass in the initial state:



1. **Passing the value directly:**
   ```jsx
   const [count, setCount] = useState(4);
   ```
   In this approach, the initial value is called every time the component function runs,  so for complex value like for calculating fibonnaci or something and if that would keep happening over and over again that would really slow down the performance of our application.

2. **Passing a function:**
   ```jsx
   const [count, setCount] = useState(() => 4);
   ```
   By passing a function, it runs only once when the component initially renders. This can improve performance for components with complex initial state values.

### Example:

```jsx
const [count, setCount] = useState(() => {
  console.log('Initial value setup');
  return 4;
});

// Alternatively, using a separate function reference:
function countInitial() {
  console.log('Initial value setup');
  return 4;
}

const [count, setCount] = useState(() => countInitial());
```

In the second approach, by passing a function reference, the function is executed only once during the initial render, improving performance for complex initial state setups.


 ###  Additional Note


So ,above we see  that countInitial function runs everytime our component renders. 


<u>So, if we use a function and then call countInitial inside it, the countInitial function will only run once during the first render.</u>


```jsx

funciton countInitial () {
   console.log("run function ")
   return 4
}

const [count , setCount] = useState (()=>countInitial())

```

------------------------------------------------------------------------------------------------------------------------------------
# _Advanced Usage of useState_-----------------------------------------

In React, the `useState` hook is commonly used for managing component state. While its basic usage involves simple data types like strings or numbers, `useState` can also handle more complex data structures like objects and arrays. However, when dealing with objects or arrays, which are of reference type, special considerations need to be taken into account.

## Dealing with Objects and Arrays

When a state variable is an object or an array, React's immutability principle becomes crucial. React may not detect state updates properly if the state is mutated directly, as it compares the references of the old and new objects or arrays.

To ensure that React detects state updates correctly, it's essential to create a new object or array with the updated values while preserving the immutability principle. This is where the spread operator (`...`) comes into play.

### Using the Spread Operator

The spread operator (`...`) in JavaScript is used to create a shallow copy of an object or an array. When updating an object or array state variable, the spread operator helps in creating a new object or array with the updated values, without directly mutating the original state.

Here's an example of how to update an object state variable `val` while toggling the `isBanned` property:

```jsx
import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({ name: "john", isBanned: false });

  return (
    <div>
      <button onClick={() => setVal({ ...val, isBanned: !val.isBanned })}>
        Toggle Ban
      </button>
    </div>
  );
}

export default App;
```

	### setVal is our setter function it each time needs a  new value isse pichli value se koi matlab nahi hota hai .

In this example, `...val` creates a shallow copy of the `val` object. By then updating the `isBanned` property to its opposite value (`!val.isBanned`) within the new object passed to `setVal`, we ensure that the original `val` object remains unchanged.

### Importance of Immutability

React relies on detecting changes in state references to determine when to re-render components. By following the immutability principle and creating new object or array references when updating state variables, React can accurately detect state changes and trigger component re-renders as needed.

Understanding and applying immutability when working with complex state variables ensures efficient and predictable state management in React applications.


## Why Create a New Object or Array?

When updating state variables that contain objects or arrays, it's crucial to create new object or array references rather than mutating the existing state directly. This practice ensures that React can accurately detect state changes and trigger UI updates as necessary.

### Importance of Creating New References (in case of objects and arrays)

React determines whether to re-render components by comparing the references of old and new state variables. If the references are different, React knows that a state update has occurred and re-renders the component.

However, React doesn't compare the internal values of objects or arrays; it only compares their references. If you mutate the existing object or array directly without creating a new reference, React won't detect the change in state, leading to inconsistencies in UI rendering.

### Using the Spread Operator

To overcome this limitation and ensure proper UI updates, you should create a new object or array using the spread operator (`...`) when updating state variables. By providing a new object or array reference with the desired changes, React can accurately detect and reflect the state update in the UI.

For example, if you want to update the `isBanned` property of an object state variable, you would create a new object with the updated property:

```jsx
setVal({ ...val, isBanned: true });
```

In this example, `...val` creates a new object reference with all the properties of the existing `val` object. By specifying the updated `isBanned` property within the new object, you ensure that React detects the state change and updates the UI accordingly.

**Note:** Additionally, when dealing with primitive values, React doesn't directly update the existing variable. Instead, it creates a new variable in memory, assigns the new value to it, and then points to the new variable. This means that the old variable `count` is not updated; instead, a new variable is created, and the new value (in this case, `1`) is assigned to it. 

For example, when updating a state variable `count` of type `number`:

```jsx
const [count, setCount] = useState(0);

// Updating the count state
setCount(count + 1);
```

In this scenario, React creates a new variable in memory to hold the updated value of `count`, ensuring that the original state remains unchanged.


By following this approach, you maintain the immutability principle and ensure consistent and reliable state management in React applications.

-------------------------------------------------------------------------------------------------------------------------------

# Mastering useState ----

# **Mastering useState() part 1**

### In order to change color ---

To change the color of a button when clicked, we need to dynamically pass the classNames in JSX using curly braces `{}`. This allows us to write JavaScript code inside the classNames in backticks and apply conditional styling based on state values.

Example code:

```jsx
import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({ name: "john", isBanned: false });

  return (
    <div>
      <h1>Name: {val.name}</h1>
      <h2>Banned: {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 ${val.isBanned ? "bg-blue-500" : "bg-red-500"} text-xs rounded-full text-white`}
      >
        Change
      </button>
    </div>
  );
}

export default App;
```

# **Mastering useState() part 2**

### How to add another property in the old object using useState?

To add another property to an object managed by useState, we use the setVal function along with the spread operator `{...}`.

Example:

```jsx
import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({ name: "john", age: 24 });

  return (
    <div>
      <button onClick={() => setVal({ ...val, gender: "male" })}>
        console.log(val);
      </button>
    </div>
  );
}

export default App;
```
### We see the result `gender property is not being added in the object and why is that ???

**Reason:** `useState` does not update the state immediately. It updates the state asynchronously behind the scenes, so we cannot immediately check for the updated value.

### `Even if we put async function we will still not get the property in the object. (updation has been done but we are not seeing it immediately `

### **Note:** The setter function updates the state asynchronously, so we cannot check the updated value immediately in the next line of code. To check for updates, we use `useEffect`.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# `useState Arrays []----------`

To manage arrays with useState, we can use array methods like `map`, `filter`, etc., to manipulate and update the array state.


Note - forEach doesn't returns an array and we have to return an array in jsx so use map method 

Example:

```jsx
import React, { useState } from 'react';

function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="p-5">
      {val.map(item => <h1>{item}</h1>)}
      <button onClick={() => setVal(val.filter(item => item !== val[val.length - 1]))} className="px-2 py-1 text-xs text-white rounded-full bg-blue-500">

{/* Here we have to give an array to setVal because it have to return an array so we are passing funciton in setVal function . */}
        Click
      </button>
    </div>
  );
}

export default App;
```
------------------------------------------------------------------------------------------------------------------------------------------------------------
# useState Arrays part 2 (Arrays Removal)



```jsx

import React ,{useState} from 'react'
 
function App(){
const [val, serVal] = useState([1,2,3,4,5,6])
return (
<div className = "p-5">
{val.map (item=><h1>{item}</h1>)}
<button onClick ={()=>setVal(()=>{
val.filter ((item => item%2 !== 0))} className = "px-2 py-1 text
</div>
)}

export default App;

```


### Example: (TO remove even index in array when button clicked)

```jsx
import React, { useState } from 'react';

function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="p-5">
      {val.map(item => <h1>{item}</h1>)}
      <button onClick={() => setVal(val.filter(item => item % 2 !== 0))} className="px-2 py-1 text-xs text-white rounded-full bg-blue-500">
        Click
      </button>
    </div>
  );
}

export default App;
```
	

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#  useState() part 3 (Arrays Addition)


```jsx
import React, { useState } from 'react';

function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="p-5">
      {val.map(item => <h1>{item}</h1>)}
      <button onClick={() => setVal([...val ,7])
} className="px-2 py-1 text-xs text-white rounded-full bg-blue-500">


        Click
      </button>
    </div>
  );
}

export default App;
```
`output 
1 2 3 4 5 6 7`


# useState(Arrays Addition part 2)

## How to change array of objects ??


```jsx
import { useState } from "react";
import "./App.css";

function App() {

  const [val, setVal] = useState([
    { name: "Vipul", age: 23 },
    { name: "Shivam", age: 34 },
    { name: "golu", age: 19 },
  ]);

  return (
    <div className="p-4">
     
      {val.map((item, index) => (
        <>
          <h1 key={index}>Name : {item.name}</h1>
          <p>Age : {item.age}</p>
        </>
      ))}

      <button
        onClick={() =>
          setVal(() =>
            val.map((item, index) =>
              item.name === "Shivam" ? ({ name: "Shivam", age: 35 }) : item

{/* Here, the parentheses around the object { name: "Shivam", age: 35 } are used to avoid ambiguity in syntax. It makes it clear that the object is a single value being returned when the condition is true. This syntax is more explicit and can help prevent syntax errors.
  NOTE - without small bracket it will still work it's just for understanding*/
            )
          )
        }
        
        className="px-3 py-1 text-md bg-blue-500 rounded-full text-white"
      >
        Change
      </button>
    </div>
  );
}

export default App;


```

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	## Creating Something with useState----------------


### `App.jsx-------------------`

```jsx
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import SomeThing from "./components/SomeThing";

function App() {
  // const [val, setVal] = useState({ name: "lucky", isBanned: false });
  // const [val, setVal] = useState({ name: "lucky", age: 23 });

  // const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  // const [val, setVal] = useState([
  //   { name: "lucky", age: 23 },
  //   { name: "Shivam", age: 34 },
  //   { name: "golu", age: 25 },
  // ]);

  return (
    <div>
      {/* <h1>Name : {val.name}</h1>
      <h2>Banned : {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 ${
          val.isBanned ? "bg-blue-600" : "bg-red-700"
        } text-white text-md rounded-full`}
      >
        Change Button
      </button> */}

      {/* <h1>Name : {val.name}</h1>
      <h2>Age : {val.age}</h2>
      <h3>Role : {val.gender}</h3>

      <button
        className="px-3 py-1 mt-3 bg-red-500 text-md rounded-full"
        onClick={() => setVal({ ...val, gender: "Male" })}
      >
        Click
      </button> */}
      {/* 
      {val.map((item, index) => (
        <>
          <h1 key={index}>Name : {item.name}</h1>
          <p>Age : {item.age}</p>
        </>
      ))} */}

      {/* <button
        onClick={() =>
          setVal(() =>
            val.map((item, index) =>
              item.name === "Shivam" ? { name: "Shivam", age: 55 } : item
            )
          )
        }
        // onClick={() => setVal([...val, 10])}
        // onClick={() =>
        //   setVal(() => val.filter((item, index) => item % 2 !== 0))
        // }
        // onClick={() => setVal(() => val.filter((item, index) => index != 2))}
        // onClick={() =>
        //   setVal(() => {
        //     return val.filter((item, index) => index != val.length - 1);
        //   })
        // }
        className="px-3 py-1 text-md bg-blue-500 rounded-full text-white"
      >
        Change
      </button> */}

      {/* <Card /> */}
      <SomeThing />
    </div>
  );
}

export default App;

```


### `card.jsx----------------`


```jsx


import React, { useState } from "react";

const Card = () => {
  const [data, setData] = useState(false);

  return (
    <div>
      <h2>{data.toString()}</h2>

      {/* print bahar jaao if val is false and print mat jao iv val is true */}

      <p>{data === false ? "BAHAR JAO" : "MAT JAO"}</p>

      <button
        // onClick={() => setData(!data)}
        onClick={() => setData(() => !data)}
        className="px-3 py-1 bg-sky-500 text-md rounded-full"
      >
        Change Data
      </button>
    </div>
  );
};

export default Card;

```

### `SomeThing.jsx---------------------------------`



```jsx


import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const SomeThing = () => {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="w-60 relative h-32 flex bg-zinc-500 rounded-md overflow-hidden">
        <img
          className={`w-full h-full ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } transition-transform ease-out duration-300 object-cover shrink-0`}
          src="https://images.unsplash.com/photo-1682685797743-3a7b6b8d8149?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card"
        />
        <img
          className={`w-full h-full transition-transform ease-out duration-300 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } object-cover shrink-0`}
          src="https://images.unsplash.com/photo-1702234867439-bec43ed4e369?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card"
        />
        <span
          onClick={() => setVal(() => !val)}
          className="w-10 h-10 bg-[#dadada8b] flex items-center justify-center rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]"
        >
          <FaArrowRight size={"1em"} />
        </span>
      </div>
    </div>
  );
};

export default SomeThing;

```




## Note ----


1- If you want add styling to icons from react-icon library what you can do it that you can put it inside span tag and give classes to span and then give styling .

2- Boolean cannot be printed as a string .

### The below code is not right way .

```jsx
<button onClick = {() =>setVal(!val)} >
```
### _This code is the correct way to do it_

```jsx
<button onClick = {() =>setVal(()=>!val)} >
```


###  3) Using Small Brackets with Arrow Functions in JSX

When working with JSX and arrow functions, especially when mapping over arrays or handling complex JSX expressions, using small brackets (parentheses) to enclose the arrow function's body is a good practice. This approach allows you to break the JSX expression into multiple lines for improved readability and maintainability. While omitting the small brackets may work in simple cases, it can lead to syntax errors or confusion, especially in more complex scenarios.

### Example:

```jsx
import React from 'react';

export function App(props) {
  const data = ["harsh", "harsh2", "vipul"];
  
  return (
    <div className='App'>
      {data.map((elem, index) => (
        <div key={index}>
          {elem}
        </div>
      ))}
    </div>
  );
}
```

In the above example, small brackets are used to enclose the arrow function's body when mapping over the `data` array. This ensures that the JSX expression inside the arrow function is properly formatted across multiple lines, enhancing code readability.

### Alternative Syntax:

While using small brackets is the recommended approach, omitting them may still work in simpler cases. However, it's advisable to adopt the consistent use of small brackets for arrow functions in JSX to maintain code consistency and readability, especially in larger projects or when working collaboratively with other developers.

### Alternative Syntax Example:

```jsx
import React from 'react';

export function App(props) {
  const data = ["harsh", "harsh2", "vipul"];
  
  return (
    <div className='App'>
      {data.map((elem, index) =>
        <div key={index}>
          {elem}
        </div>
      )}
    </div>
  );
}
```

In this alternative syntax, small brackets are omitted from the arrow function. While this syntax may still work in simpler cases, using small brackets consistently across your codebase is recommended for improved code readability and maintainability.

