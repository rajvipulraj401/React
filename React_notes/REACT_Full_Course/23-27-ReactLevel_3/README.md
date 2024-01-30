 # React Level 3 -

# `Passing **Children** to a Component________`

```jsx

function Container (props){
   return (
       <div className = "container-style">
	{props.children}
        </div>
     );
}

```

```jsx
<Container>
	<h1> Welcome to My App </h1>
	<p>This content is passed as children to the 
 	     Container component.</p>
<Container>



1. children is a special prop for passing elements into components.

2. Used for flexible and reusable component designs.

3. Common in layout or container components.

4. Accessed with props.children.

5. Can be any content: strings, numbers, JSX, or components.

6. Enhances component composability and reusability.




![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/23-27-ReactLevel_3/food.png)





NOTE -------------------KHUD KA NOTES LIKHO AISE SAMGH ME NAHI AAYEGA..........???????????????🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣





# `Handling Events .-----`


`CLICK A SCREEN SHOT FROM THE YOUTUBE AND ATTACH IT HERE `


1. React events use camelCase, e.g., onClick.

2. Uses synthetic events, not direct browser events.

3. Event handlers can be functions or arrow functions.

4. Use onChange for controlled form inputs.

5. Avoid inline arrow functions in JSX for performance.


# `Passing **Functions via Props** -----`


1. Pass dynamic behaviour between components.

2. Enables upward communication from child to parent.

3. Commonly used for event handling.

4. Parent defines a function, child invokes it.

5. Enhances component interactivity.

6. Example:
<Button onClick={handleClick} />





# `Managing **State**-------------`



1. State represents `data that changes over time.`

2. State is local and private to the component.

3. **State changes cause the component to re-render.**

4. For functional components, use the useState hook.

5. React Functions that start with word use are called hooks

6. `Hooks should only be used inside components`

7. Parent components can pass state down to children via props.

8. Lifting state up: share state between components by moving it to their
closest common ancestor.
















# `State vs Props -------`



## State: 

• Local and mutable data within a component.

• Initialized within the component.

• Can change over time.

• Causes re-render when updated.

• Managed using useState in functional components.


## Props:

• Passed into a component from its parent.

• Read-only (immutable) within the receiving component.

• Allow parent-to-child component communication.

• Changes in props can also cause a re-render.