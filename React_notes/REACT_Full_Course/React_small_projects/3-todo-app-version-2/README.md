# Todo-App version 2 (using props and module.css)



![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/17-Bootstrap/Todoapp1st.png)

`index.html`-----------------

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

`main.jsx---------------`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`App.jsx------------`

```jsx
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem1 from "./components/Todoitem1";
// import TodoItem2 from "./components/Todoitem2";
import TodoItem from "./components/TodoItem";
import "./App.css";

const data = [
  {
    name: "Buy Milk",
    duedate: "20/01/2024",
  },
  {
    name: "Go to College",
    duedate: "20/01/2024",
  },
];
function App() {
  return (
    // Yaha se sara file ko alag krte hai component wise krke .
    <center>
      <AppName />

      <div className="items-container">
        <AddTodo />
        <TodoItem entry={data}></TodoItem>
        {/* instead of making duplicate components send props to one component
        to get things done at one place  */}
        {/* <TodoItem1 />
        <TodoItem2></TodoItem2> */}
      </div>
    </center>
  );
  // center tag makes thing in center NOT GOOD practise as it isnot in html5.
}

export default App;
```

`AppName.jsx`-----------

```jsx
import styles from "./AppName.module.css";

function AppName() {
  return <h1 className={styles["appName_style"]}>Todo App</h1>;
}
export default AppName;

// This is the way to export default ufunction in react .
// Brother it is a function component so it is basically a function so you have to return it .

```

`AppName.module.css`--------------

```css
.appName_style {
  font-weight: 700;
  margin: 10px;
  font-size: 45px;
  margin-bottom: 20px;
}


```

`AddTodo.jsx`--------

```jsx
import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here " />
          {/* className={styles["appName_style"] */}
          {/* Bhool gye input tag is self closing tag aur jo input me show
                  karana hai wo placeholder me daalnea padta hai*/}

          {/* NOTE - jsx me comment bhi curly bracket ke andar aata hai  */}
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2 kg-col">
          <button type="button" className="btn btn-success  kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

```
`AddTodo.module.css..--------`

```css
input {
  width: 100%;
}

/* THERE is no need to give class name in
 addtodo.module.css because this is a tag not a class that's why  */


```

`Todoitem.jsx`-------------------------

```jsx
import "../App.css";
// in order to go one level back

function TodoItem({ entry }) {
  // The thing is we are hardcoding the data.

  //   NOTES - now we got the entry props which we passed from the App.js
  // so we destructure the props object which we passed now we have the array and inside that the elements
  // in the object  it now we have an array and using the map method we will iterate and get each index and display it however we want.

  return (
    <div className="container">
      {/* <div className="row kg-row"> */}
      {entry.map((curr) => {
        return (
          <>
            <div className="row kg-row">
              <div className="col-6">{curr.name}</div>
              <div className="col-4">{curr.duedate}</div>
              <div className="col-2 kg-col">
                <button type="button" className="btn btn-danger  kg-button">
                  Delete
                </button>
              </div>
            </div>
          </>
   
        );
      })}
    </div>
  );
}

export default TodoItem;


```

  `
   **What error I had?**

   *Answer:* The error I faced was that I was not rendering with the `map` method correctly. Also, inside the `map` method, there were multiple lines,
    so I needed to use the `return` keyword and also include parentheses and fragments because there needs to be a parent div. Otherwise, 
    we cannot return so many divs from a function (whether it's inside a `map` method or elsewhere).

   Lastly, when I was rendering with the `map` method, I should have used `**Chrome DevTools**` to inspect the rendered elements and also used `console.log` 
   to see which styles are being applied and which are not. It's important to carefully review how I'm rendering the elements and anticipate what will happen.
`

`App.css---------------`

```css

.items-container {
  text-align: left;
}

.kg-button {
  width: 80px;

  /* min-width: 100px; */
}

.kg-row {
  margin: 20px 0;
}

.kg-col {
  width: auto;
}

```
