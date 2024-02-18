
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

