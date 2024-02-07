import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem1 from "./components/Todoitem1";
// import TodoItem2 from "./components/Todoitem2";
import TodoItem from "./components/TodoItem";
import "./App.css";
import { useState } from "react";

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
  // const [todoItem , setTodoItem]= useState();

  const handleAddButton = (todoName, todoDate) => {
    // console.log(todoName, todoDate);
  };

  return (
    // Yaha se sara file ko alag krte hai component wise krke .
    <center>
      <AppName />

      <div className="items-container">
        <AddTodo onAddButtonClick={handleAddButton} />
        <TodoItem
          entry={data}
          todoName={todoName}
          todoDate={todoDate}
        ></TodoItem>
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
