import "../App.css";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  // The thing is we are hardcoding the data.

  //   NOTES - now we got the todoItems props which we passed from the App.js
  // so we destructure the props object which we passed now we have the array and inside that the elements
  // in the object  it now we have an array and using the map method we will iterate and get each index and display it however we want.

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
