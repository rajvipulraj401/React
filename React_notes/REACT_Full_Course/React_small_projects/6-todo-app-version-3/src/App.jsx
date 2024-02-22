import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

const initialTodoItems = [
  {
    name: "Buy Milk",
    dueDate: "20/01/2024",
  },
  {
    name: "Go to College",
    dueDate: "20/01/2024",
  },
];
function App() {
  // let's make a todoItem state where it will get updated whenver new item is added
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // Now i am getting the name and date and i want to add this in to our todoItems

    /*  We will create an ovject and then add that in the todoItems*/
    //  and send it to TodoItem component to show in the ui
    console.log(`New Item Added : ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName, todoDate) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // In order to delete item use filter method
    // console.log(todoName, todoDate);
  };

  return (
    // Yaha se sara file ko alag krte hai component wise krke .
    <center>
      <AppName />

      <div className="items-container">
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        {/* we are using conditional rendering to show the message  */}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>

        {/* instead of making duplicate components send props to one component
        to get things done at one place  */}
      </div>
    </center>
  );
  // center tag makes thing in center NOT GOOD practise as it isnot in html5.
}

export default App;
