import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const initialTodoItems = [
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
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);

    //  If we want to set new value based on old value then instead
    // of using spread use a method inside setter function of use state
  };

  // React runs in async way .

  const deleteItem = (todoItemName, todoDate) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // In order to delete item use filter method
  };

  return (
    <TodoItemsContext.Provider
      // value={{
      //   todoItems: todoItems,
      //   addNewItem: addNewItem,
      //   deleteItem: deleteItem,
      // }}
      // The below is shortcut in javascript it is known as es6 objects
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        {/* instead of giving state(current value) we can give value as object so that 
      we can get method as well  */}
        {/* Earlier we were declaring state and passing the props but now we are giving it to context provider
      so whoever wants to access the property or method can use it from context provider*/}
        {/* Remember as we change the value of context provider all the things gets re-render*/}

        {/* we can instead of sending just 1 value we can send an object and then in that way we 
        would be able to access all of the value and even method whoever needs whichever property using context providr
        */}
        <AppName />

        <div className="items-container">
          <AddTodo />
          <WelcomeMessage></WelcomeMessage>
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
