	# React full course 

## History of React.
(write from that )


Features-

3) used to create single Page Appliction.


Dom 

Browser  when tries to load webpage and it takes all the files HTML,CSS , js AND through HTML it creates a DOM  a tree like structure . so the tree of this element is called DOM .


1) Browser takes HTML and create DOM .

2) JS helps us modify DOM based on user actions or events.

3) In big applications, Working with DOM becomes complicated.





## WHAT was the Problems with JavaScript.


1) React has a simple mental model.

2) JS is sumbersome .

3) JS is error- prone.

4) JS is Hard to maintain.

 
## Working of React..

1) No need to worry about `querying`and `updating DOM `(declarative)

2) React creates a web page with small and reusable components.

3) React will take care of creating and Updating DOM element .

4) It saves a lot of time cheezein aasan hai pahele se likhi huyi hai .


## Difference between JS vs React.


1) JS is imperative : You define steps to reach your desire state.

2) React is Declarative : You define the targer UI State and  then reat figures out how to react that state.



## Introduction to Components.

React application is a tree of component with App component as the root  bringing everything together.



9) Project Structure.

IMG

.

vite

npm creat vite@latest
npm install
npm run dev




## Chapter 1 : Creating React Components (1:08:05)


10) File Extensions.

.js -> This is javascript file extension .
.jsx -> This stands for javaScript XML ,
 it combines javaScript with HTML-like tags 
- Makes it easier to design UI components.

### TWO ways to define components.

1) Functional components.
2) Class Components( not using anymore)


Attach pic



## What is JSX?


AttacH  Pic

![Alt Text](https://raw.githubusercontent.com/rajvipulraj401/JS_Dsa/main/6-What_is_a_Data_structure/code.png)



We can use our component like normal html like for example 

function App(){
}
export default App;

so the above App component when exported can be used like normal html tag. 
 <App/> in .jsx file.


We can use any component by importing and we can also export our component .


## Exporting Components


example of exporting and importing a button from a different component( jsx file) inside other component (.jsx file).

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


 KgButton.jsx 

function KgButton(){
return <button > Like this Video </button >
}
export default KgButton;


## Different ways of exporting


ATtach pic 



NOte - This concept covered in module notes.


## 14. Other Important Points

1) Naming : Must be capitalized for writing component function ;
lowercase for default HTML.

2) HTML : unlike vanilla JS where you can't directly write HTML, in React, you can embed HTML-like syntax using JSX.

3) CSS: In React, CSS can be directly imported into component files, allowing for modular and component-specific styling.



 ## 15 Dynamic Components 

1) Dynamic Content : JSX allows the creation of dynamic and interactive UI components. 

2) javaScript Expressions : Using {}, we can embed any JS expression directly within JSX. This includes variables , function calls , and more.



Wherever you want to do calculation or want to use javascript codes you can inclose it inside {} .

exp

function Hello(){
let myName = "Vipul";
let number = 456;
let fullName =()=>{
return "Vipul Raj";
}
return <p>
MessageNo: {number} I am your Friend { ()}
</p>
}
export default Hello;


## 16) Reusable Components

1) Modularity : Components are modular, allowing for `easy reuse across different parts` of an application .

2) Consistency :Reusing components ensures `UI consitency` and reduces the chanceof discrepancies .

3) Efficiency : Reduces development time and effort by `avoiding duplication of code.`

4) Maintainability : Changes made to a reused component `reflect everywhere` it's used, simplifying updates and bug fixes.




----------------------------


## 16 Making  a Random component

Random.jsx
------------------


```javascript
function Random(){

let number = Math.random ()*100;
return <h1 style ={{ "background-color":#776691}}>Random number is : {Math.round(number)}</h1>
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
note - Always remember to open and close the componet tag ex

`<Random></Random>
or <Random/>`


-------------
