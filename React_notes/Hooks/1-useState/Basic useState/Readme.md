# ****_useState Hook_**

gotcha 
1) You can only use hooks in functional components , You cannot use in class components.

2) Every time your funtion runs your hooks must execute in exact same order .
  so you cannot call it conditionally or put it inside functions , loops .
`They must happen at the very top of our file .which means inside the function component the very first thing should be all of your hooks and then the other code of your file.`

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

state is just the data that can changes  overtime  Whenever this data changes, React updates the page accordingly. React doesn't change it automatically when you click the button , In order to change anything in the page you have to update the data .When we update our state variable it re-runs the entire component with the new value that you set it to.

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



### Setting initial value as a function :-

for example 

```jsx
function slowGetter(){
// Really slow code
return "Kyle"
}

```
```jsx
function App(){
{
const [name ,setName ] = useState(slowGetter())
console.log("Render",name)
}

```

// `Note - If the above code is really slow then we are calling the  function everytime we are rendering our component or run our state.  so this is why we can pass a  function to useState instead of calling a function .`


### Passing a function reference instead of calling a function or value


```jsx
function App(){
const [name ,setName ] = useState(()=>{

console.log("State inline setter")
return "Joe"
}

// or just  do like this .instead of calling just pass reference it is the same as above


function App(){
const [name ,setName ] = useState(inlineFun)
}
function inlineFun (){

console.log("State inline setter")
return "Joe"
}
```

`Note - We notice that the function is only running once during the first re-render and never get's re-render for the second time that's  because if you pass a function to useState  instead of value it will run that only once the very first time when it gets the value and then never runs that again  ,no matter How many time my component gets refreshere .`


 
### What happens if we have multiple state ??

- We will just create another state .  

```jsx 
function App(){
const [name ,setName ] = useState("Rock")
const [age ,setAge] = useState(27)

function handleClick(){
setName ("sally")
setAge(age+1)
setAge(age+1)

}

return (
<h1 onClicke = {handleClick}>
Hi {name} {age}
</h1>
 )
}

```
### The above code is little bit buggy .


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


### When we use function version inside our setter method to get the current value of state ?


In this we use the function and the function always return the up to date state value so hence we get every time up to date state value.


example 


```jsx

function App(){
const [name ,setName ] = useState("Rock")
const [age ,setAge] = useState(27)

function handleClick(){
setName ("sally")

setAge (currentAge =>{
return currentAge +1
})
setAge(currentAge =>{
return currentAge+1
})

}
return (
<h1 onClicke = {handleClick}>
Hi {name} {age}
</h1>
 )
} 


```

This will actually update the state by two  cause this is a function that gets runs with the current value of our age .  

`So , in Conclusinon The only take away from this is if you are setting the value that depends on the previous value or current value of the state  we need  to use the function version of the set method.
otherwise if  we are just setting it to the different value where we don't care about the previous state value then we can just use normal set method .`


### **How many times does a component actually re-render during consecutive state updates in React?**


When multiple state updates occur in quick succession, React does not immediately re-render the component after each state update.
Instead, React combines consecutive state updates and schedules them to be handled asynchronously into a single re-render operation. 
This behavior keeps the website efficient by minimizing unnecessary DOM manipulations and improves the performance of the application.


In scenarios where there are no consecutive state updates, React will re-render the component as many times as there are setter methods used to update the state.


For example, consider the following code snippet:

```jsx
import React, { useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // Consecutive state updates
  function updateCount() {
    setCount(1); // First state update
    setCount(2); // Second state update
    setCount(3); // Third state update
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={updateCount}>Update Count</button>
    </div>
  );
}

export default ExampleComponent;
```

In this example, when the `updateCount` function is called, triggering three consecutive state updates, React optimizes these updates into a single re-render operation, resulting in the component being re-rendered only once despite the multiple state changes.

----------------------------------------------------------------------


## Q) create a new timer function component called counter and have a state for a counter that starts at 0 and render that in the jsx and when you click the number increment it by 1 .


```jsx
import {useState } from "react"


const Counter = () => {
  const [timer, setTimer] = useState(0);

  const handleClick = () => {
//setTimer(timer+1);  THIS IS WRONG you should not mutate the original state . we are using the current value of our state .

    setTimer((current) => current + 1);
    // Here, we correctly update the timer state using the previous value (current).
// Now here we are just taking the current value and updating it.
    // We are not modifying the initial value of 'timer'.
    // We are simply copying its value ('current') and using it to compute the new value.
  };

  return (
    <>
      <button onClick={handleClick}>Increment Timer</button>
      <p>Timer value: {timer}</p>
    </>
  );
};

export default Counter;

```

