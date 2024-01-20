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
