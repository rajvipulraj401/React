# Todo-App version 1

## Todo App basic project without using components

![Alt Text](https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/17-Bootstrap/Todoapp1st.png)

```jsx
import React from "react";

function App() {
  return (
    <center className="tod-container">
      <h1>Todo App</h1>
      <div class="container text-center">
        <div class="row 1">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo Here " />
            {/* Bhool gye input tag is self closing tag aur jo input me show
                    karana hai wo placeholder me daalnea padta hai*/}

            {/* NOTE - jsx me comment bhi curly bracket ke andar aata hai  */}
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>

        <div class="row 2">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div class="row 3">
          <div class="col-6">Go to College</div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        {/* row 3 ends here */}
      </div>
    </center>
  );
  // center tag makes thing in center .
}

export default App;
```

## Todo App by using different different components .

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
import TodoItem1 from "./components/Todoitem1";
import TodoItem2 from "./components/Todoitem2";
import "./App.css";

function App() {
  return (
    // Yaha se sara file ko alag krte hai component wise krke .
    <center className="todo-container">
      <AppName />

      <div className="items-container">
        <AddTodo />
        <TodoItem1 />
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
  // center tag makes thing in center NOT GOOD practise as it isnot in html5.
}

export default App;
```

`AppName.jsx`-----------

```jsx
function AppName() {
  return <h1>Todo App</h1>;
}
export default AppName;

// This is the way to export default function in react .
// Brother it is a function component so it is basically a function so you have to return it .
```

`AddTodo.jsx`--------

```jsx
function AddTodo() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here " />
          {/* Bhool gye input tag is self closing tag aur jo input me show
                  karana hai wo placeholder me daalnea padta hai*/}

          {/* NOTE - jsx me comment bhi curly bracket ke andar aata hai  */}
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
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

`Todoitem1.jsx`-------------------------

```jsx
function TodoItem1() {
  let name = "Buy Milk";
  let date = "20/01/2024";

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger  kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
```

`Todoitem2.jsx-----------------------`

```jsx
function TodoItem2() {
  let name = "Go to College";
  let date = "20/01/2024";

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger  kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
```

`App.css---------------`

```css
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

.todo-container h1 {
  font-weight: 700;
  margin: 10px;
  font-size: 45px;
  margin-bottom: 20px;
}

/* .todo-container {
  padding: 10px 0;
} */

input {
  width: 100%;
}

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
