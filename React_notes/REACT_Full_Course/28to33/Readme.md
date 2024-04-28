# 28 **React-icon Library**

Notes:

1) Each child in a list should have a unique `key` prop, which should be provided in the list component.

2) It's recommended to remove `console.log` statements from the final production app to maintain cleaner code and optimize performance.

3) Always provide initial values instead of leaving them as `undefined`. If no value is available, consider initializing them as empty.

1. You can use a lot of icons without managing them.

2. Install Package-

   `npm install react-icons –save`

3. Use icon:

   `import {IconName} from "react-icons/fc";`

   // Also, you can directly copy the icon from the react-icons website and use it as a component:

   // e.g., <BiMessageAdd/>

   // Remember to import it:

   // import {BiMessageAdd} from "react-icons/bi";

   // Then, you can use it in your code.

   //ex `import {BiMessageAdd} from "react-icons/bi";`

**The bi at last means all the icons starting with the name Bi**

# 29 **Inspecting with React Dev Tools**

1. Inspection: Allows inspection of React component hierarchies.


`This developer tool not only allows viewing the application's structure but also facilitates editing directly within the tool, providing a unique advantage.`

2. State & Props: View and edit the current state and props of components.
3. Performance: Analyze component re-renders and performance bottlenecks.
4. Navigation: Conveniently navigate through the entire component tree.
5. Filtering: Filter components by name or source to locate them quickly.
6. Real-time Feedback: See live changes as you modify state or props.

# 30 **How React Works**

## Root Component:

• The App is the main or root component of a React application.

• It's the starting point of your React component tree.


- Upon initialization, the web application first parses `index.html`.
- Inside `index.html`, there are typically two elements within the `body` tag:
   1. A `div` tag with an `id` of `"root"` serving as a container for the React application.
   2. A `script` tag pointing to the main JavaScript file, often `main.jsx`.

```html
<script type ="module" src ="/src/main.jsx"></script>
```
so, INSIDE the src tag we have main.jsx..

Inside `main.jsx`:
- React and ReactDOM are imported.
- The empty `div` from HTML becomes the root element for rendering the entire React application.
- The `App` component is rendered inside the `root` div.

`React.StrictMode`:
- Wrapping the `App` component inside `<React.StrictMode>` detects potential mistakes during development.

`SO in CONCLUSION all our content is inside the root element`



# 30 **React and ReactDOM (virtual DOM)**

React and ReactDOM:
- React builds components, while ReactDOM converts these components into the actual DOM.

In Conclusion:
- Virtual DOM is a representation of React components, and the final HTML tree generated from these components is known as the actual DOM.

• The actual updating of the browser's DOM isn't done by React itself

• It's handled by a companion library called react-dom

• `React Dom converts the React component tree into actual browser DOM means in Html`

## **Root Element**

• The root div acts as a container for the React app

• The script tag is where the React app starts executing

• The component tree is rendered inside this root element

## **Strict Mode Component**

• It's a special component in React

• Doesn't have a visual representation

• Its purpose is to spot potential issues in your React app

## **Platform Independence**

• React's design allows it to be platform-agnostic

• While react-dom helps build web UIs using React, ReactNative can be used to craft mobile app UIs

## 31 **React Vs Angular Vs Vue**

### React, Angular, and Vue:

• React is a library, while Angular and Vue.js are frameworks.

• React focuses on UI; Angular and Vue.js offer comprehensive tools for full app development.

### Library vs. Framework:

• A library offers specific functionality.

• A framework provides a set of tools and guidelines.

• React is a tool; Angular and Vue.js are toolsets.

`Example - Understand that a library is like a hammer which is only for one specific purpose. For instance, React is a library that is only used for making UI.`

`In contrast, a framework is like a toolset which offers a complete package. It includes various tools such as a hammer, screw, screwdriver, etc. So basically, it is complete.`

**Example frameworks include Vue and Angular.**

### React's Specialty:

• React's main role is crafting dynamic, interactive UIs.

• It doesn't handle routing, HTTP calls, state management, and more.

### React's Flexibility:

• React doesn't dictate tool choices for other app aspects.

• Developers pick what fits their project best.

### About Angular and Vue.js:

• Angular, developed by Google, provides a robust framework with a steep learning curve.

• Vue.js is known for its simplicity and ease of integration, making it beginner-friendly.

**Note**

`Always remove console.log from the final project.
Read errors that you get in the browser; it's essential for becoming a good developer.`



------------------------------------------------------------------------------------------------------------------------------------------------


## 32 `USING FORMS----------`

- When taking input from users, forms are utilized.
- **State Management**: Each input's state is stored in the component's state.
- **Handling Changes**: `onChange` event is used to detect input changes.
- **Submission**: `onSubmit` event is used for form submissions, and `event.preventDefault()` is used to prevent the default behavior.
- **Validation**: Implement custom
validation or use third-party libraries.

### Two-Way Binding in React:

- It refers to the synchronization of data between the UI (such as input boxes) and the component's state.
- For example, as the user types in an input box, the state updates, and as the state updates, the input box's value reflects the new state.


```jsx

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleNameChange = (ev) => {
    setTodoName(ev.target.value);
  };

  const handleDateChange = (ev) => {
    setdueDate(ev.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setdueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here "
            value={todoName}
            onChange={handleNameChange}
          />
);
}
export default AddTodo;


**see the code TO understand 2 way binding**

```

### Form Handling:

- `All input fields and buttons should be enclosed within the `<form>` tag.`
- The default behavior of a button inside a form is to submit the form. To prevent this, set `type="button"`. So what submit type does in button tag it goes inside form and tells it that you are being submitting  and the handler that will be called is onSubmit .
- The `action` attribute in the `<form>` tag specifies the URL where form data should be submitted. If not specified, data is submitted to the current URL.
- Use the `onSubmit` handler in the `<form>` tag to handle form submissions , THE default behaviour of onSubmit handler is to collect data and send it to the server but we don't want it , we want to prevent the default method we can  prevent the default behavior using `event.preventDefault()`.



So now what changes we did from previous time ??

 #### See both code and understand what is the change 

**old Way**


```jsx
import { useState } from "react";
import styles from "./AddTodo.module.css";

/* Now i want to send the date and name back to the app component so how to do 
that */

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");
  const handleNameChange = (ev) => {
    setTodoName(ev.target.value);
  };

  const handleDateChange = (ev) => {
    setdueDate(ev.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setdueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here "
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2 kg-col">
          <button
            type="button"
            className="btn btn-success  kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;



```


**NEW way**

```jsx

import { useState } from "react";
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";
/* Now i want to send the date and name back to the app component so how to do 
that */

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleNameChange = (ev) => {
    setTodoName(ev.target.value);
  };

  const handleDateChange = (ev) => {
    setdueDate(ev.target.value);
  };

  const handleAddButtonClicked = (event) => {
    onNewItem(todoName, dueDate);
    event.preventDefault();
    setdueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleAddButtonClicked}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here "
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
          <div className="col-2 kg-col">
            <button
              /* when we don't write type attribute in button tag
                 then its type attribute its treated as submit*/
              // type="button"
              className="btn btn-success  kg-button"
              // onClick={handleAddButtonClicked}
            >
              <BiMessageAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;



```


-------------------------------------------------------------------------------------------------

## 33 . Use `Ref`-----

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/28to33/useRef.png)


- `useRef` allows access to DOM elements and retains mutable values without causing re-renders.
- It is used with the `ref` attribute for direct DOM interactions.
- `useRef` can hold previous state or prop values and is not limited to DOM references.
- Refs can also be passed as props.



---------------------------------------------------------------------------------------------------------------------------------------------------------------

### What was the problem useState was solving?

The problem `useState` solved was the inability to retain values across component re-renders. Without it, every time a component re-rendered, its state variables reset to their initial values. This caused issues when we needed to store and update values over time, such as form inputs or counters. `useState` allowed us to persist values between re-renders and triggered component updates when those values changed.

### But what is the benefit of useRef?

The benefit of `useRef` lies in its ability to store mutable values that persist across re-renders without triggering component updates. Unlike `useState`, which causes a re-render when its state changes, `useRef` maintains a reference to a value that can be accessed and updated without affecting the component's rendering. This makes it useful for storing values that need to persist across renders but don't require updates to trigger re-renders, such as accessing DOM elements or caching previous values.
 
### How to use useRef

`import {useState, useRef } from "react";`


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### `useState` vs `useRef`:

1. **useState:**
   - **Purpose:** Manages stateful values in functional components, triggering re-renders when the state changes.
   - **Example:**
     ```jsx
     import { useState } from "react";
     
     function Counter() {
       const [count, setCount] = useState(0);
       
       const increment = () => {
         setCount(count + 1); // Updates count state
       };
       
       return (
         <div>
           <p>Count: {count}</p>
           <button onClick={increment}>Increment</button>
         </div>
       );
     }
     ```
   - **Notes:**
     - Used to manage dynamic values that trigger component re-renders.
     - Suitable for managing data that affects the UI and requires re-rendering.

2. **useRef:**
   - **Purpose:** Retains mutable values without causing re-renders, useful for accessing and storing references to DOM elements.
   - **Example:**
     ```jsx
     import { useRef } from "react";
     
     function FocusInput() {
       const inputRef = useRef(null);
       
       const focusInput = () => {
         inputRef.current.focus(); // Accesses and focuses the input element
       };
       
       return (
         <div>
           <input ref={inputRef} type="text" />
           <button onClick={focusInput}>Focus Input</button>
         </div>
       );
     }
     ```
   - **Notes:**
     - Use `useRef` when you need to store mutable values that don't trigger re-renders.
     - Commonly used to access DOM elements, manage previous state or props, and other non-render-related tasks.


## Let's break it down:

**useState:**

- Imagine you have a variable that you want to change over time and make your component react to that change. For example, let's say you have a counter in your component, and you want to increase it when a button is clicked.
  
- `useState` is like having a box where you can put your variable, and React keeps an eye on it. Whenever the variable changes, React knows, and it updates your component to show the new value.

- So, when you use `useState`, you're telling React, "Hey, keep track of this value for me, and whenever it changes, make sure my component reflects that change."

**useRef:**

- Now, imagine you have something in your component that you don't want to cause your component to re-render every time it changes. For example, you have an input field, and you want to focus on it when a button is clicked.

- `useRef` is like having a special tag on something that says, "Hey, remember this for me, but don't let it affect anything else." So, you can use `useRef` for things like storing references to HTML elements (like input fields) or keeping track of some value that you don't want to trigger a re-render.

- When you use `useRef`, you're telling React, "Hey, remember this thing for me, but don't worry about changing my component when it changes. I'll take care of that myself."

**Use Cases:**

- Use `useState` when you want to manage stateful values that trigger component re-renders. For example, managing the value of a form input, controlling the visibility of a component, or updating a counter.

- Use `useRef` when you want to store mutable values that don't trigger re-renders. For example, accessing and managing DOM elements (like focusing an input field), keeping track of previous values, or performing side-effects without affecting the component's rendering.




--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


### `------------Old code-------------------------------`

```jsx
import { useState} from "react";
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";
/* Now i want to send the date and name back to the app component so how to do 
that */

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");
  const handleNameChange = (ev) => {
    setTodoName(ev.target.value);
    noOfUpdates.current += 1;
  };

  const handleDateChange = (ev) => {
    setdueDate(ev.target.value);
    console.log(`noOfUpdates are  :${noOfUpdates.current}`);
    // .current - will give current value when we use useRef

  };

  const handleAddButtonClicked = (event) => {
    onNewItem(todoName, dueDate);
    event.preventDefault();
    setdueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleAddButtonClicked}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here "
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
          <div className="col-2 kg-col">
            <button
              /* when we don't write type attribute in button tag
                 then its type attribute its treated as submit*/
              // type="button"
              className="btn btn-success  kg-button"
              // onClick={handleAddButtonClicked}
            >
              <BiMessageAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

```


## What changes are there in the second code from the previous one ??

- useRef creates a variable that persists across component renders.
- The value of the useRef variable can be updated without triggering re-renders.
- Unlike state variables created with useState, useRef values don't cause re-renders when updated.
- Useful for maintaining mutable values without re-renders, such as accessing DOM elements or retaining previous state.
- useRef values are not shared between components, unlike variables declared outside components.
- When used with JSX elements, useRef provides a way to access and manipulate DOM elements directly.
- The useRef hook is commonly used when we need to preserve values between renders without causing re-renders.



`useRef` creates a variable for me. Whenever I want its value, it will be updated, or I can fetch its value. But finally, what happens is that between different render cycles, its value won't update. Another advantage is that if I use the same component in 4 places, the state for each of them is separate. That means the state across components isn't the same; it's not a static variable like in Java or C++. So, this variable `noOfUpdates` here runs with components. 

This means if I have used a component at two different places, their states will also be different. `useRef` works similarly. So, what we could have done is declare the variable outside the function. Then, that variable would be declared in the JavaScript environment, and its value would not change between cycles. But the disadvantage is that it would be shared between different components.

But here, what we want is not to share it between different components; we only want to share it within my own component between multiple paint cycles (between multiple re-renders). If we want states but no UI repainting, then we can use `useRef`.



### Benefits of Using useRef


We can use useRef directly with JSX elements. If we want to get a reference of our JSX elements, meaning we want to use our JSX elements, then we can use useRef.

 For example, in order to add our todo item, whenever the add button is pressed, the form onSubmit is triggered. We want to obtain the input values of text and date, but we don't know where they are.

"If I try to search by using IDs and similar things, it will be like normal JavaScript code. So what I need to do here is, I have to always put an `onChange` handler. So, alternatively, what I can do is create references for them (both input elements). And when the actual submission happens, then I can fetch their current values. This way, I don't have to update the entire page every time I add something. This is happening every time I add something. So, we can save all these paint cycles (re-rendering) by using `useRef`.

So, by using `useRef` -
Suppose if we want to use `useRef` in any JSX element, then there is an attribute called `ref` which is by default available in all React components, and we can assign any value to it."



- **Direct Access to JSX Elements:** useRef allows direct access to JSX elements by creating references to them that mean we want to use our jsx elements then we can use useRef.. This is useful when we need to manipulate DOM elements or access their properties.



- **Efficient Handling of Form Submissions:** For example, when adding a to-do item to a list, useRef can be used to retrieve the input values of text and date fields upon form submission. This avoids the need for complex querying of elements by IDs or class names, streamlining the process.


- **Avoids Repainting:** When updating values using useRef, it does not trigger UI repaints or re-renders. This is beneficial for preserving values without causing unnecessary updates to the user interface.

- **Optimizes Performance:** By preventing unnecessary re-renders, useRef helps optimize performance, especially in scenarios where frequent updates occur, such as form submissions or user interactions.

- **Preserves Current Values:** useRef maintains the current values of elements or variables across renders, ensuring that the latest data is accessible when needed, without the need for additional event handlers or state updates.

- **Saves Paint Cycles:** The use of useRef can save paint cycles (re-rendering) by retrieving the current values of elements only when necessary, reducing the workload on the browser and improving overall application performance.

- **Simple Integration with JSX:** Integration of useRef with JSX elements is straightforward. By utilizing the `ref` attribute, which is inherent in all React components, we can assign any value to it, enabling easy access to elements within the component.

- **Enhances Development Efficiency:** useRef enhances development efficiency by simplifying the process of accessing and manipulating DOM elements within React components. This leads to cleaner, more concise code and a more streamlined development experience.





-----------------------------------------------------------------------------------------------------------------------------------------------------

So In Conclusion ,

Because of this, we do not needed any state, so we are removing it. What I had to update every time, I am removing that.

Now we will only perform actions when our button is clicked.

 How will we get the value? 

-- We already have our `ref` attribute, and we pass the ref to our JSX elements. When we do `todoName.current`, we will get the current value.

So, we were able to remove `useState`. We put `useRef` for each element (input and date) using the `ref` attribute, and we accessed their value whenever we required it.

This is a very good way if we want to do state management but want to control repaint cycles (re-render). This enhances the performance of our code.






### `NEW Code (after using use Ref)--------------------------`


```jsx

import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";
/* Now i want to send the date and name back to the app component so how to do 
that */

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); // preventing the default behaviour of onSubmit attri in forms
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = ""; //emptyin the inputs
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
    // in order to use todoName or todoDate (wo pehle hona bhi toh chahiye )
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleAddButtonClicked}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo Here "
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-2 kg-col">
            <button
              /* when we don't write type attribute in button tag
                 then its type attribute its treated as submit*/
              // type="button"
              className="btn btn-success  kg-button"
              // onClick={handleAddButtonClicked}
            >
              <BiMessageAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

```


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





## 34 Updating State from Previous State:

**Spread Operator:** - When updating state based on previous state, the spread operator (`...`) is used to maintain immutability for arrays or objects.
- However, the spread operator may not work as intended when the application becomes more complex due to React's asynchronous nature.

NOTE - if your setting of new value doesn't depend on old value then use spread operator but if it does then do not use spread operator for passing value inside of setter function  instead pass a method inside that setter function .



arrey setTodoItems ke andar ek method pass kr diye hai wo bs uska todoItems ka current value hoga wo uska use kr lega kyunki setTodoItems ke paas toh rhta hai hi.


**Functional Updates:**- Functional updates, such as `(existingPosts) => [postData, ...existingPosts]`, can be used to avoid stale values during asynchronous updates.
- To update state based on previous state, use functional updates or pass a method inside the setter function instead of using the spread operator.


Note - 

1) we cannot update the value of state if we want to update the value of the state we need to use updater function . 

2) similarly child can also not edit props .




```jsx
 const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added : ${itemName} Date:${itemDueDate}`);
    // const newTodoItems = [
    //   ...todoItems,
    //   { name: itemName, dueDate: itemDueDate },
    // ];
    // setTodoItems(newTodoItems);

    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);

    //  If we want to set new value based on old value then instead 
    // of using spread use a method inside setter function of use state 
  };


```

