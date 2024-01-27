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
