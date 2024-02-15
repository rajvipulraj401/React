# ****_useState Hook_**

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



-------------------------------------------------------------------------------------------------------------------------------------

				# _Intermediate useState_

Sometimes we need the old value when using `setVal`. If we need the old value, we use the functional way, and if we do not need the old value, we can use the spread operator.

Inside `setVal`:

1. We can directly give a new value for our state.
2. Or we can pass any function (inside the setter function) when we want to use the previous value.

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

export default App;

```

`HERE onClick has an anonymous function and it will run that function only when it gets clicked` .In order to use updater onClick pass it inside an anonymous function 



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
