function TodoItem({ todoName, todoDate, onDeleteClick }) {
  // The thing is we are hardcoding the data.

  //   NOTES - now we got the entry props which we passed from the App.js
  // so we destructure the props object which we passed now we have the array and inside that the elements
  // in the object  it now we have an array and using the map method we will iterate and get each index and display it however we want.

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
