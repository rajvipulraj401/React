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
