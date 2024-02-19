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

import React, { useState } from 'react';
function App() {

// Initializing score state with value 0
const [score, setScore] = useState(0);

// Updating the score
setScore(score + 10);

}
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
```

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

## NOW SOMETHING IMPORTANT TO KNOW 

The above example is actually incorrect way to  update a value based on the previous value.


```jsx
  
function decremenCount(){
setCount(count-1)
{/*suppose here count value is 4 so we are doing in both cases 4-1 =3 so both will return same value  They are just overriding each other . */}
setCount(count -1)
}



```

 `The above code will not work ,it will not subtract -2 it will only subtract -1` 

**`Reason**  :--- Our count value is just the value of count when we render our function so here we are doing ,suppose here count value is 4 so we are doing in both cases 4-1 =3 so both will return same value  They are just overriding each other . 

 ### But when  we pass another anonymous function 

```jsx
function decremenCoun(){
setCount(prevCount => prevCount -1)
setCount(prevCount => prevCount -1)
}

```
  ### Here on Above what happens is that our previous value (latest value of count) is passed into it .Therefore we are doing -2 on the above code .


```jsx

function incrementCount () {

setCount (prevCount => prevCount -1 )
}

```

2) So, Anytime you need to modify the state you need to send previous state value to create the new value , You need to make sure to use function version of setting your state just like if you were setting the state of inside of a class component.


