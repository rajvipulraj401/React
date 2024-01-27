function AddTodo() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here " />
          {/* Bhool gye input tag is self closing tag aur jo input me show
                  karana hai wo placeholder me daalnea padta hai*/}

          {/* NOTE - jsx me comment bhi curly bracket ke andar aata hai  */}
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2 kg-col">
          <button type="button" className="btn btn-success  kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
