import { useState } from "react";
import styles from "./AddTodo.module.css";

/* Now i want to send the date and name back to the app component so how to do 
that */

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  // we are changing the state here but we are not using the state
  //  as we will use it when add button is clicked.
  const handleNameChange = (ev) => {
    setTodoName(ev.target.value);
  };

  const handleDateChange = (ev) => {
    setdueDate(ev.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setdueDate("");
    setTodoName("");
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
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
