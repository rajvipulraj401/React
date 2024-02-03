# React full course 

# 1.What is React?

1. JavaScript library to build Dynamic
and interactive user interfaces

2. Developed at Facebook in 2011.

3. Currently most widely used JS
library for front-end development.

4. Used to create single page
application (page does not re-load) .

## How can you say React is a library, not a framework? What is the difference between a library and a framework?


### React as a Library (Bricks Analogy):

**Description:** React is like a toolbox with bricks when building a house.

**Explanation:** In React, these "bricks" symbolize individual components. Developers create and define these components based on their application's needs.

**Connection:** React components act as the building blocks (bricks) for constructing the user interface.

### Freedom in Component Assembly:

**Analogy:** Developers, like builders, have the freedom to creatively assemble these "bricks."

**Explanation:**  React doesn't enforce a predefined structure for the entire application. Developers can arrange and organize components based on their specific design requirements.

**Inference:** React provides flexibility, emphasizing its role as a library that offers tools for building without dictating the entire architecture.

### User-Defined Components:

**Analogy:** The term "bricks" metaphorically represents user-defined components in React.

**Explanation:** React components are not predefined; developers create them according to the application's requirements.

**Inference:** Unlike some frameworks with predefined elements, React's focus is on user-defined components, reinforcing its nature as a library.

### Metaphor Clarification:

**Analogy Recap:** The term "bricks" is metaphorical, highlighting the building blocks (React components) that developers use to construct the application.

**Explanation:** React components are not predetermined; developers design and define them, aligning with the metaphor of using bricks to build.

### Flexibility vs. Structure:

- **Flexibility with Library (React):** React's flexibility allows developers to use its tools creatively, akin to arranging bricks for unique designs.

- **Structured Approach with Frameworks (Vue.js and Angular):** In contrast, Vue.js and Angular provide a more structured approach, acting like blueprints that guide the overall architecture, offering less freedom but a well-defined structure.

The analogy emphasizes that React's role is more aligned with a library, providing user-defined components (bricks) for construction. The user's freedom in arranging these components reinforces React's nature as a library, where the developer has more discretion in the application's design.

## 2. Working of DOM

Browser  when tries to load webpage and it takes all the files HTML,CSS , js AND through HTML `it creates a DOM  a tree like structure `. so the tree of this element is called DOM .


1. Browser takes HTML and create DOM.

2. JS helps us modify DOM based on user actions or
events.

3. In big applications, Working with DOM becomes
complicated.


## 3.WHAT was the Problems with JavaScript.


1) **React has a simple mental model.**

2) JS is cumbersome .

3) `JS is error- prone.`

4) **JS** is `Hard to maintain.`

## 4.Working of React..

1) No need to worry about `querying`and `updating DOM `(declarative)

2) React creates a web page with `small and reusable components`.

3) React will `take care of creating and Updating DOM element` .

4) It saves a lot of time cheezein aasan hai pahele se likhi huyi hai .


 

## 5.Difference between JS vs React.


1) `JS is imperative` : You define steps to reach your desire state.

2) `React is Declarative` : You define the targer UI State and  then reat figures out how to react that state.


##  **Features of React**-

1) It makes our website do very very fewer page reloads.

2) Extreme use of reusable components so making a dynamic website is easy.

3) Very efficient for the browser as the browser pe load nahi padega.

4) used to create single Page Appliction.







## 6. Introduction to Components.

React application is a `tree of component with App component as the root`  bringing everything together.



## 7, What is IDE

1. IDE stands for `Integrated
Development Environment.`

2. Software suite that
consolidates basic tools
required for software
development.

3. Central hub for coding, finding
problems, and testing.

4. `Designed to improve
developer efficiency.`

## 7. Need of IDE

1. Streamlines development.

2. Increases productivity.

3. Simplifies complex tasks.

4. Offers a unified workspace.

5. IDE Features
	1. Code Autocomplete
	2. Syntax Highlighting
	3. Version Control
	4. Error Checking

# 8. Create a React App

1. Official tool is CRA(Create React APP)

2. Vite is a modern tool to create React Project.

3. Vite produces Quick and Small bundle size.

4. Vite: Use npm run dev to launch dev server.

5. Use npm start for CRA.


`npm create vite@latest
npm  install on  that folder 
npm run dev
`
## 9) Project Structure.

1. node_modules/ has all the installed node packages

2. public/ Directory: Contains static files that don't change.

3. src/ Directory: Main folder for the React code.
	1. components/: Reusable parts of the UI,likebuttonsor headers.
	2. assets/: Images, fonts, and other static files.
	3. styles/: CSS or stylesheets.

4. package.json contains information about this project like name, version, dependencies on other react packages.

5. vite.config.js contains vite config.

--------------------------------------------------------------------------------------------------
## Chapter 1 : Creating React Components (1:08:05)


## 10) File Extensions.

**.JS**
• Stands for JavaScript

• Contains regular JavaScript code

• Used for general logic and
components

**.JSX**

• Stands for JavaScript XML

• Combines JavaScript with HTML-like
tags
• Makes it easier to design UI
components

## 11. Class vs Function Components

### `Class Components`

• Stateful: Can manage state.

• Lifecycle: Access to lifecycle methods.

• Verbose: More boilerplate code.

• Not Preferred anymore.

### `Functional Components`

• Initially stateless.
(This means by default you cannot keep a value in this value , thesee function don't have any prooperty)

• Can use Hooks for state and effects.

• Simpler and more concise.

• More Popular.


## What is `JSX`?

1. Definition: JSX determines how the UI will
look wherever the component is used.

2. Not HTML: Though it resembles HTML,
you're actually writing JSX, which stands
for JavaScript XML.

3. Conversion: JSX gets converted to regular
JavaScript.

4. Babeljs.io/repl is a tool that allows you to
see how JSX is transformed into
JavaScript.

We can use our component like normal html like
 for example 

```jsx
function App(){
}
export default App;

so the above App component when exported can be used like normal html tag. 
 <App/> in .jsx file.
```

`NOTE -We can use any component by importing and we can also export our component .`


![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/jsx1.png)




## 13 .Exporting Components


Example of exporting and importing a button from a different component( jsx file) inside other component (.jsx file).

```jsx
App.jsx


import KgButton from "./KgButton";

function App(){
return <div>
<>//
<h1>
This is the best React Course
</h1>
<KgButton></KgButton>
</div>
}
export default App;
```

```jsx
 KgButton.jsx 

function KgButton(){
return <button > Like this Video </button >
}
export default KgButton;
```

## Different ways of exporting


![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/export.png)



### `NOte - This concept covered in module notes.`


## 14. Other Important Points

1) Naming : `Must be capitalized` for writing component function ;
`lowercase for default HTML`.

2) HTML : unlike vanilla JS where you can't directly write HTML, in React, you can embed HTML-like syntax using JSX.

3) CSS: In React, CSS can be directly imported into component files, allowing for modular and component-specific styling.



 ## 15 Dynamic Components 

1) Dynamic Content : JSX allows the creation of dynamic and interactive UI components. 

2) javaScript Expressions : Using {}, we can embed any JS expression directly within JSX. This includes variables , function calls , and more.



`Wherever you want to do calculation or want to use javascript codes you can inclose it inside {} .`

exp

```jsx
HELLO.jsx

function Hello(){
let myName = "Vipul";
let number = 456;
let fullName =()=>{
return "Vipul Raj";
}
return <p>
MessageNo: {number} I am your Friend { fullName()}
</p>
}
export default Hello;
```

## 16) Reusable Components

1) Modularity : Components are modular, allowing for `easy reuse across different parts` of an application .

2) Consistency :Reusing components ensures `UI consitency` and reduces the chanceof discrepancies .

3) Efficiency : Reduces development time and effort by `avoiding duplication of code.`

4) Maintainability : Changes made to a reused component `reflect everywhere` it's used, simplifying updates and bug fixes.




----------------------------


## 16 Making  a Random component

```jsx

Random.jsx
------------------
function Random(){

let number = Math.random ()*100;
return <h1 style ={{ "background-color":"#776691"}}>Random number is : {Math.round(number)}</h1>
}
//Style element has to be included inside curly bracket as first curly is for jsx and second one is for css.
export default Random ;

```

```jsx
App.jsx
------------

import Random from "./Random";
function App(){
return <div>
<h1>
This is the best React course
</h1>
<Hello></Hello>
<Random></Random >
<Random></Random >
<Random></Random >
</div>
}
export default App;

```
### Note - Always remember to open and close the component tag
 ex

`<Random></Random>
or <Random/>`


-------------
