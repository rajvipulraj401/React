# React Lecture Notes

## 1. Architecture

- **App Component Structure:**
  ```plaintext
  ________________________________
  | App component      |
  |  Navbar Search               |
  |                             |
  |                             |
  |                             |
  |                             |
  |                             |
  |                             |
  |                             |
  |                             | 
  |                             |
  |                             ||__________________________________ |
  ```
  
- **Component Basics:**
  - Components are repeatable and can be used multiple times.and also Everything big is component.
  - **Props:**
  	In order to send data or function, we use props. This is the main data flow.
  	Data Flow Example: PARENTS -> CHILD -> ... -> A -> B -> C -> ... -> H
  - **JSX and Data Flow:**
  - JSX is similar to HTML.
  - JSX can calculate expressions like `{2+2}`, which will result in 4 when out of the brackets.

Note -

->Data is called State.
-> Change State and Component will reCalculate.
-> Props for sending data to child component .
-> Effect runs when Dom is loaded.
-> JSX is similar to HTML, it is calculated. Ex {2+2} 

Every website can be broken down into two parts state and variable. Front framework says Most websites have reusable components, the state, however, changes so you can define your website in two parts: the state and the components.

The premise of every front-end framework is to give me your state and give me your components and I will write the logic of rendering them. It will manipulate your DOM.

Front-end framework says I will do it for you. You will give me two things.

1) How the components should be rendered, and

2) You give me input to that variable which effectively is the state.

**Note --Rendering in web development means turning website code into what users see on their screens. It's the process of displaying a webpage's content visually.**

## 2. React Learning

- **Topics: 2 types of learning of ReactJs**
  1. ReactJS code implementation.
  2. Cracking ReactJS interviews.

- **Questions Addressed:**

## History of React.

Facebook ko ek problem nazar aai ki `real-time mein wo notifications and reactions ko show nahi kr paar rhe`. Unhe reactions, notifications, and other data deliver karne mein page reload karna pad rha hai. Wo isliye kyunki They were using something called PHP. Ab is problem se nipatne ke liye 2013 me ek Facebook ke engineer ne ek library banayi, `ye library khaas thi, Kyunki ye data ko real-time mein dikh paa rahi thi`. Par is library ke `kaam karne ka tareeka different tha, ye main DOM tree ko update nahi karti hai directly, mtlb ki agar page mein kuch bhi change hua to directly main DOM tree update nahi hoga`, Is Library ka khud ka ek DOM TREE HAI USKA naam `VIRTUAL DOM` hai. Ye DOM tree ka exact copy hai real DOM tree k, bas ek difference hai, `wo hai ki jab bhi virtual DOM mein kuch change hoga to sirf use change kiya jayega jo ki change hua hai na ki poora tree ko refresh kiya jayega`.

## What is the problem why we have to use React?

- Browsers ka nature hota hai jab bhi page mein kuch bhi change ho to poora DOM tree refresh karo. Jiske wajah se poora page re-render (RE render means refresh not reload) hoga. Jo ki kaafi inefficient hai, matlab ki socho agar ek change par DOM ek baar refresh ho raha hai to 1 lakh change pe 1 lakh baar refresh hoga so isse browser me dabav pad sakta hai aur Browser crash sakta hai ya jayega.

## What is React??

It is a JS library to maintain the front end efficiently.

Features of React:

1) It makes our website do very very fewer page reloads.
2) Extreme use of reusable components so making a dynamic website is easy.
3) Very efficient for the browser as the browser pe load nahi padega.

## Why React?

- ReactJS is efficient and lightweight.

How we use it.

Create components and make data if you need it and link the data and change data whenever you want and wherever you want. React will react when data is changed.

## How to think in React??

Always think how the final version of your project will look like and then break that down into components (components are the part that is repeated inside the project many times so that we can reuse it again and again )

## When do we use React JS?

Jab aapko ek thoda bade level par APP create karna ho, jismein khoob saari cheezein ho rahi hai and khoob saara reusable component structure hai.

## How we work in React??

We make components aur ye saare components go inside one parent component. Aur parent component ko body mein put kar diya jaata hai.

## Component - 
Anything that is big and also any thing that is repeatable inside our App is a component or can be made a component. So, a component is a function that returns JSX.

## JSX - 
JSX is very similar to HTML with superpowers. Whatever code we write in HTML inside JSX it gets converted into javascript. (using React.createElement).

**Note -
**1) We write above to import React from 'react' because inside the component when jsx code has to get converted into react so it has to import React from 'react'**

**2) Why we write export default App at bottom because the app component gets exported to main.jsx and main.jsx will import it and react will keep all the file inside the ROOT div of index.html.**

## How to do styling in React?

3 ways:
1) Module CSS
2) Tailwind CSS
3) Material UI.

## How do we make a component?

Any file with

 .jsx extension.

## How do we attach a component?

-> Only files inside App.jsx will be visible so we have to import files from other components inside App.jsx

and we can join that component inside at whatever point we want.

For example - A product component.

And we attach it on the 7th line we can do that by

<Products/>

But first, we have to import it at the top and export product at last in product.jsx

## Q) How do we change the reaction of data in a component?

--> We have data in State so we only change the state and react will react whenever state changes, so when we change the state aur baaki jagah react khud change krega.

## Q) How do we send and receive data inside a component?

Example.

<products naam ="value"/> 
and accept this naam in the component function of that products component. and use that naam property anywhere in that component 
note - in order to send an object put inside data={{age ;25, name :Vipul }}

FIRST CURLY BRACKET IS FOR JSX.

Sol-n -> watch reactJs crash course around 1:15:00

## Q) How do we create your data inside a component?

-> When we say we want to create our data inside a component we are basically saying how do we create state and we can create state anywhere in a component.

ex - import React ,{useState } from 'react'

function Products ({age, data}){
const [a,b] = useState(false};
return (
)
}
export default Products

CONDITIONAL RENDERING - CONDITIONAL RENDERING OF class- (using the ternary operator is something happen we can change the class applied to that element.)

## que) How do we change data inside a component??

we do that through the updater function inside the component.



## 3. Declarative vs Imperative in React Components

- **Concepts:**
  - Declarative vs Imperative in React components.
  - Thinking in React: Break projects into reusable components.

- **Code Approach Comparison:**
  - **Imperative Code:**
    - Step-by-step instructions like in JavaScript.
do this and do this it will go step by step like we do in JavaScript code.
  - **Declarative Code:**
    - Describing what we want. We tell what we want; it's like asking for a sandwich at a shop.

**Conclusion:**
- Imperative is like saying how to get to the code, and declarative is like saying what we want.

for example - CREATINg a sandwich - if we create the sandwich step by step ourselves it is called imperative code(i.e in JavaScript) 

for example - if we go to a shop and ask to shopkeeper I want this sandwich and along with this and then we get the sandwich This is called declarative approach ( i.e we do this in react )

- **React Basics:**
  1. Inside HTML, all we have is a root div, and we render our application inside that root div.
  2. Components are functions that start with a capital letter and return JSX.
  3. Use `className` and `htmlFor` instead of `class` and `for` attributes in React.

- **Important Things About Components in React:**
  - We can only return one element.
  - Wrap elements in an extra div or use a fragment (`<> </>`) instead.

** IN order to actually build the modified variables and have things interactive you need  to use something called `state` so what we can do is we can come into here and we can say `useState`  .This is a hook inside react . and we can import  it 
like ->> import {useState } from "react" ** 


- **State and Interactive Elements:**
  - Use `useState` for data. UseState essentially takes a default value.
  - State cannot be mutated; create a new state when changing it.
  - Use `{}` for JavaScript code inside JSX.
  - Event handlers like `onChange` in React.

## The  difference between using a set new value here where we pass a value vs passing it a function 

---REMEMBER ANYTIME WE WANT TO USE CURRENT VALUE PASS A VALUE OTHERWISE PASS A FUNCTION .

--- When we want to run JavaScript code inside JSX we will have to put that code inside the curly bracket .ex {todos.map}


Note - Any time you are dealing with state you cannot change it. so we need to make sure anytime we are changing the state we are not actually mutating it but creating a brand new State  and just changing one property on it..

- **Props Usage:**
  - Allows passing information to custom components.

- **useEffect:**
  - **Effect is basically what we do after the website is looking exactly like we want (after full load) and after that what we want to do is called effect**
  - Takes a function as an argument.
  - Should be called at the top of the function.

The only thing you have to know about hooks in react that they need to be called at the top of  your function . We cannot put hooks conditionally . like if (true) run this hook this will not work and we will get an error."you cannot render hooks conditionlly you cannot put them inside if's , loops or even after return "




## **React with Vite:**
  1. Navigate to the folder where you want to install the React project using Vite.
  2. Open VS Code in the folder.
  3. Open the console and run:
     ```
     npm create vite@latest
     npm i
     npm run dev
     ```
   Now, you'll have local files and a local server.

# conclusion - React ka naam react islea hai kyunki react reacts when we change state react changes at all places where state has been used and this is the main model of the Whole react. This is the way it works.