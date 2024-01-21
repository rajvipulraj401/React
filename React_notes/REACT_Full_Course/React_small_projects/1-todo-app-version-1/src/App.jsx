import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";
import TodoItem1 from "./components/Todoitem1";
import TodoItem2 from "./components/Todoitem2";

function App() {
  return (
    // Yaha se sara file ko alag krte hai component wise krke .
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem1 />
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
  // center tag makes thing in center .
}

export default App;
