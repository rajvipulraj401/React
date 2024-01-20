
# 17 Bootstrap.

1) Responsive :`Mobile-first` design for all device sizes.

2) Components : `Pre-style elements` like buttons and navbars.

3) Customizalbe : `Modify` default styles as needed.

4) Cross-Browser: `Consistent` look across browsers.

5) Open-Source :`Free` with community support.


How to use.?

1) Install:
`npm i bootstrap@5.3.2`

2) Import (importing just css from bootsrap)

`import "bootstrap/dist/css/bootstrap.min.css";`


Note - In order to use this  in React copy this at top at main.jsx


now------


1) in order to see how elements are in bootstrap go to bootstrap website and see the examples there

2) in order to use those components just `go to docs there and copy the code of any desired element ` for exaple button 

 
### Todo App basic project without using components

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/17-Bootstrap/Todoapp1st.png)


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

 ![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/17-Bootstrap/Todoapp1st.png)


`App.jsx------------`
```jsx

import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";

function App() {
  return (
    // Yaha se sara file ko alag krte hai component wise krke .

    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Todoitem1 />
      <Todoitem2></Todoitem2>
    </center>
  );
  // center tag makes thing in center .
}

export default App;


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


`AppName.jsx`-----------
```jsx
function AppName() {
  return (
    <center className="todo-container">
      <h1>Todo App</h1>
    </center>
  );
}
export default AppName;

// This is the way to export default function in react .
// Brother it is a function component so it is basically a function so you have to return it .

```

`AddTodo.jsx`--------
```jsx

function AddTodo() {
  return (
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
    </div>
  );
}

export default AddTodo;



```


`Todoitem1.jsx`-------------------------
```jsx

function Todoitem1() {
  let name = "Buy Milk";
  let date = "20/01/2024";

  return (
    <div class="container text-center">
      <div class="row 2">
        <div class="col-6">{name}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem1;

```

`Todoitem2.jsx-----------------------`

```jsx

function Todoitem2() {
  let name = "Go to College";
  let date = "20/01/2024";

  return (
    <div class="container text-center">
      <div class="row 2">
        <div class="col-6">{name}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem2;

```
