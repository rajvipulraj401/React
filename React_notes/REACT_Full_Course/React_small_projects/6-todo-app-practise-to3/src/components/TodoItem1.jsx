function TodoItem1() {
  let name = "Buy Milk";
  let date = "20/01/2024";

  // The thing is we are hardcoding the data.

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2 kg-col">
          <button type="button" className="btn btn-danger  kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
