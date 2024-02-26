import "../App.css";
import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  /* iske ssath humko ek hook ko import krna hoga jiska naam hai use context .
  aur we will pass context object inside useContext jo humne banaya hai.
  
   we will need to pass value inside the context.provider
  */

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          // as we have kept the icon name unique so let's keep it as key
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
