import { useState } from "react";
import styles from "./AddTodo.module.css";

/* Now i want to send the date and name back to the app component so how to do 
that */

function AddTodo({ onAddButtonClick }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here "
            onChange={(ev) => {
              setTodoName(ev.target.value);
            }}
          />
          {/* className={styles["appName_style"] */}
          {/* Bhool gye input tag is self closing tag aur jo input me show
                  karana hai wo placeholder me daalnea padta hai*/}

          {/* NOTE - jsx me comment bhi curly bracket ke andar aata hai  */}
        </div>
        <div className="col-4">
          <input type="date" onChange={(ev) => setTodoDate(ev.target.value)} />
        </div>
        <div className="col-2 kg-col">
          <button
            type="button"
            className="btn btn-success  kg-button"
            onClick={() => onAddButtonClick(todoName, todoDate)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
