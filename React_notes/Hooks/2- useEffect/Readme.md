# See CODE OF 27 folder in your React folder (Before) in order to understand fully


##  What  is a pure function ?
Ans - If a function has no side effects at all then that function is known as pure function .

## What is  a side Effect ?

--When you are changing something whihc is outside of you function scope then you are doing a side effect .

**Note - All the function in react needs to be pure function (not doing any side Effects)**



##  What is the difference between reference and values ?

The difference between reference and values


note -- Every time we render the object .The new object is created and the reference is changed even though the value is same and so it is technically a different object.

Remember -- useEffect compares by doing === so 


```jsx

const person = {name}

useEffect (()=>{
console.log(person)
},[person])



Conclusion -- Above the person object is changing every single time in the re-render cause they have different reference that's why things work differently when dealing with objects .

```





----------------------------------------------------------------------------------------------------------------------------------------------


---------------------------------------------------------

 # What is a <i><u>useEffect</i></u> ?

Answer ---useEffect is very good for doing side effects in our component so if we ever want to deal with browser , Dom or fetch Data from Api we will always use useEffect.
This hook is very good for doing side effect with your component .In Conclusion useEffect is for anytime  when we want a side effect to occur whether when the components mounts or when it unmounts, when variable changes , when state changes like when anything update and you want to do something This is when you will use useEffect hook.As It allows you to do side effects while keeping your function a pure function .


This Hook takes three things as a parameter 

1) A callback function , as a first parameter
2) A cleanup function or a return function .
3) A dependancy Array .



There are three cases of useEffect :--

1) Case 1 -- run on every render (here we don't pass any dependancy array so it runs every time)

2) Case 2 - Run only when certain values changes 

3) case 3 --- Run on only first render 
(here we pass empty dependancy array)

(Here we run when certain values changes as we pass them in dependancy array)

### Case 1:-----------------

By Default when you use useEffect and you pass it a function it's just going to call that function every single time our component gets re-rendered. It doesn't matter what you change if your state changes or if you parent state changes it's going to call it.

App.jsx:---

```jsx

import Children from "./Children";

const App = () => {
  return <Children></Children>;
};

export default App;


```

 Children.jsx:------
```jsx

import { useEffect, useState } from "react";

const Children = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Baby Calm Down");
  });
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
};

export default Children;


```

Now This is fine at some scenarios but often time you want to run useEffect when certain things change  not always . Thats when the second parameter of use effect comes in . It takes in array of values . and everytime the value of that array of values changes it's going to call the use Effect . Now it is going to be only called when that array of values changes. This array of values it takes is called Dependancy array as it depends on it to run the useEffect Hook. It can also have multiple values in dependancy array .and anytime any of them changes its going to call the useEffect.




### Case 2-------------------------



App.jsx:---

```jsx

import Children from "./Children";

const App = () => {
  return <Children></Children>;
};

export default App;


```

 Children.jsx:------
```jsx

import { useEffect, useState } from "react";

const Children = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Name or age was changed" , name , count);
  } [name , count]);
/*GIVING IT AN ARRAY OF VALUES (DEPENDANCY ARRAY ) NOW only when this array changes the useEffect will be called  except for the first time during mounting . (so here we are changing name and age state it will call the useEffect only when any of them changes but if we do som other changes it will not call the useEffect hook
*/

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
};

export default Children;


```



 ### Case 3 ------- 

Note ---It will always run the first time when you mount your component for the first time.So Every useEffect will run for the first time no matter what .


We can also make useEffect run only on mounting not again , All we have to do is to pass nothing in our dependancy array just an empty array .So This dependancy array which is an empty array which will never change and nothing inside of it ever changes so that it means it never re-runs .Now we can do whatever we want in the component it will never re-run it again after mounting.

```jsx
  useEffect(() => {
    console.log(" Log when Mount ");
  }, []);
```
----------------------------------------------------------------------------------------------------------------------------------------------------

## Why does React wants us to keep function as pure ?

Answer -- The reason that react wants you to keep these as pure function is because react optimizes certain things and your component may be called multiple times. (like when there is a component rendered inside a component that component might be called multiple times  example multiple components inside app component gets re-rendered again and again .)





## -----Now let's do some side effect with our browser and dom .----------



## For Example:----


## 1) We want to change the title of our webpage then 

useEffect(()=>{
document.title = name
},[name])

//So HERE in above every time we change our name state which is inside our dependancy array our webpage title gets changed and update with name value of our state.



2)Another Thing that is really useful with useEffect is being able to set variables based on different side effects 
and action that occurs .

For Example :---

A) i want to get width of my website when i change its width each time . (i need an event listener and use state and useEffect )


#### App.jsx:------------


```jsx

import Children from "./Children";

const App = () => {
  return <Children></Children>;
};

export default App;


```

#### Children.jsx:--------
```jsx

import { useEffect, useState } from "react";

const Children = () => {

const [width ,setWidth] = useState(window.innerWidth);


  useEffect(() => {
    window.addEventListener("resize",()=>{
setWidth(window.innerWidth)
  }) 
},[]);

/*Even though the effect runs only once, the event listener remains active because the listener is attached to the global window object.So, whenever the window resizes, your callback function (setWidth) is executed.*/

  return (
    <div>{width}</div>
  );
};

export default Children;


```



## B)  When you want to fetch data from an api . 


#### App.jsx:----
	
```jsx

import Children from "./Children";

const App = () => {
  return <Children></Children>;
};

export default App;



```


#### Child.jsx:----------

 	
```jsx

import React, { useEffect, useState } from "react";

const CHILD = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      //   .then((json) => console.log(json));
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>

      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default CHILD;


```


----------------------------------------------------------------------------------------------------------------------------------------



##  What is a cleanup funciton in useEffect ?



Answer :-----The return statement inside the useEffect defines a cleanup function.
This function is executed when the component unmounts (i.e, when it’s removed from the DOM).
Inside the cleanup function, you remove the event listener

By explicitly removing the listener, you ensure proper memory management.

 Event listeners don’t automatically remove themselves when a component unmounts . So, React provides the useEffect cleanup function as a way to manually clean up resources (like event listeners)


Example Code :----

We can do above code as like this

```jsx
useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  // Add the event listener
  window.addEventListener("resize", handleResize);

  // Cleanup: Remove the event listener when the component unmounts
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```


## More Explanation of Cleanup function in useEffect :--------

what happens is that every single time the useEffect runs after the mounting phase whatever is in the return function runs first ( this cleanup runs first) and then the actual function inside the use Effect  runs .
 **Also this cleanup function return function runs every time your app gets unmount** .


For Example :---


NOTE- 

Cleanup function in use Effects

let's take an example

App.jsx

```jsx
import Children from "./Children";

const App = () => {
  return <Children></Children>;
};

export default App;


```

Children.jsx;---------------
```jsx

import { useEffect, useState } from "react";

const Children = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => {
      console.log(name);
    };
    document.addEventListener("click", handler);
    // document.addEventListener("click", ()=>{
    //   console.log(name);
    // })
    console.log("inside effect");

    return () => {
      // This return is cleanup function in useEffect

      document.removeEventListener("click", handler);
      console.log("cleanup");
    };
  }, [name]);

  // so everytime our name changes we run use effect and we
  // add an event listener and again and again.
  /* So this is obviously going to slow our page 
  
  SO in order to fix this we need to remove these event listeneres
  */
  // ---------------after adding cleanup function----------------
  /*
-->Now after adding cleanup function what happens is that every
  time we attach an event listener then the cleanup function runs after it in this way the only latest value has event listener attached to it 
--> Also after unmounting the component the cleanup function is run for all the useEffect we have*/
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
      {/* {width} */}
    </div>
  );
};

export default Children;


```
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  In Conclusion  cleanup function is used whenever we unmount our compnent so it removes everything of that component like its event listener 
 for example  if a component is removed and the event listener is still attached it will eventually slow down our app.





--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
