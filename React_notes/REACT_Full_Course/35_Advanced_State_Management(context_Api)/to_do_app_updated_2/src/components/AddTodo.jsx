import { useContext, useState } from "react";
import styles from "./AddTodo.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

/* Now i want to send the date and name back to the app component so how to do 
that */

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  // we are changing the state here but we are not using the state
  //  as we will use it when add button is clicked.
  const handleNameChange = (ev) => {
    setTodoName(ev.target.value);
    // now i want to set the name value in the input text as the value of todoName
  };

  const handleDateChange = (ev) => {
    setdueDate(ev.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setdueDate("");
    setTodoName("");
    // after the button is clicked we send the name and date
    // to the parent and we will clear the input fields
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here "
            value={todoName}
            onChange={handleNameChange}
          />
          {/* className={styles["appName_style"] */}
          {/* Bhool gye input tag is self closing tag aur jo input me show
                  karana hai wo placeholder me daalnea padta hai*/}

          {/* NOTE - jsx me comment bhi curly bracket ke andar aata hai  */}

          {/* We need to attach onChange handler in the input so  that whenever there is a change i.e when user enter something 
           we call the function and sent the todoName and todoDate to the app component */}
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2 kg-col">
          <button
            type="button"
            className="btn btn-success  kg-button"
            onClick={handleAddButtonClicked}
            /* we have to make anonymous function in onclick because by default it passes the event object but 
            we want to pass  different things that's why */

            /* What happens is that when we click on the button the event object gets passes
            but we want to pass name and date of the object which got clicked so we need an anonymous function
            so that we can send arguments */
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
