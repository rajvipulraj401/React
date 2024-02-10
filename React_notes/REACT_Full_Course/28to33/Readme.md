# 28 **React-icon Library**

Notes:

1) Each child in a list should have a unique `key` prop, which should be provided in the list component.

2) It's recommended to remove `console.log` statements from the final production app to maintain cleaner code and optimize performance.

3) Always provide initial values instead of leaving them as `undefined`. If no value is available, consider initializing them as empty.


1. You can use a lot of icons without managing them.

2. Install Package

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


## Virtual DOM:

Virtual DOM:
- Serves as a mediator between the React code and the actual DOM.
- It's faster because:
   1. Changes are first made to the virtual DOM.
   2. React compares the virtual DOM with the actual DOM and updates only the differences in the real dom (the part which actually affects the ui) and other same things are not reloaded .Hence  reducing browser load.

• React creates an in-memory structure called the virtual DOM.

• Different from the actual browser DOM.

• It's a lightweight representation where each node stands for a component and its attributes.

## Reconciliation Process:

• When component data changes, React updates the virtual DOM's state to mirror these changes.

• React then compares the current and previous versions of the virtual DOM.

• It identifies the specific nodes that need updating. (means specific HTML nodes which have been changed and it will identify them and only change them )

• Only these nodes are updated in the real browser DOM, making it efficient.

so,
` IN conclusion - Virtual dom is the tree of my components and the Html tree is the real dom which is made by browser.THis tree (virtual dom ) is made by react and i only do changes in the components and react put my changes in the virtual dom and the final changes which happens (only the changed part from the previous version ) react only put that in the real DOM.`

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

## **React Vs Angular Vs Vue**

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


## `USING FORMS----------`

Whenever we have to take input from user we use forms.


State Management: Each input's state
is stored in the component's state.
2. Handling Changes: Use onChange to
detect input changes.
3. Submission: Utilize onSubmit for form
submissions and prevent default with
event.preventDefault().
4. Validation: Implement custom
validation or use third-party libraries.

What is two way binding in React ?

- use  example of input box and state. jaise input box se state update ho rha hai aur state se input box ka value .



 NOw we want to make it a form and we can wrap all of this  code inside form  and we need to remember that from where we are adding form all the input and buttons should be inside that form so place form at that place only 



Button tag have by default `type attribute` set to submit.
 so we have to set it as type = button.

What submit type does it , it sends all the things to the server .



 We have to give an action attribute to the form tag, as action attribute asks you the URL ki kis site pe le jaana hai so it basically asks for the url. IF we donot give anything it will submit all the thing to the local host on which we are coding . So By default page gets refresh.

So we can use onSubmit handler in the Form tag . We donot  need to write type = "submit" in button tag as it is by default only .

 So what submit type does in button tag it goes inside form and tells it that you are being submitting  and the handler that will be called is onSubmit .


 note - THE default behaviour of onSubmit handler is to collect data and send it to the server but we don't want it , we want to prevent the default method therefore use 
`event.preventDefault();`




So now what changes we did from previous time ??


``````` Seeeee this from code and compare it ````````````````````




-------------------------------------------------------------------------------------------------

# 33 . Use `Ref`

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/28to33/useRef.png)

What state 
Whenever we changed the state it created a re rendered cycle
  So we  don't need to remember we 


What was the problem useState was solving ?

Problem was that we were not able to put value when we were using useState is that we were not put any value , when we wanted to store because at every re render (repaint ) things were getting reinitialized 
so it's solution was useState , It used to retain our values during multiple runsand also on the update of value the whole ui used to rerender (repaint).


But what is the benefit of useRef?

-> The benefit of useRef is that if we want to keep  value also but we donot want to repaint (rerender), we will only do when we want so for that we use useRef.

 
How to use useRef

import {useState, useRef } from "react";




useRef

useRef allows access to DOM elements and
retains mutable values without re-renders.
2. Used with the ref attribute for direct DOM
interactions.
3. Can hold previous state or prop values.
4. Not limited to DOM references; can hold any
value.
5. Refs can be passed as props also






useState vs useRef






## update state from previous state .


Spread Operator: Use to maintain
immutability when updating arrays or
objects.


note - when the app becomes more complex the ` spread  operator way will not work as intended as REACT works in async form (So it works in sequence) therefore the current value might be old.`

NOTE - if your setting of new value doesn't depend on old value then use spread operator but if it does then do not use spread operator for passing value inside of setter function  instead pass a method inside that setter function .




arrey setTodoItems ke andar ek method pass kr diye hai wo bs uska todoItems ka current value hoga wo uska use kr lega kyunki setTodoItems ke paas toh rhta hai hi.


• Functional Updates: Use
(existingPosts) => [postData, ...existingPosts]
to avoid stale values during asynchronous
updates.



note - 

1) we cannot update the value of state if we want to update the value of the state we need to use updater function . 

2) similarly child can also not edit props .

