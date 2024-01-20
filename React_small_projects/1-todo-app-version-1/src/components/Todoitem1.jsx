function Todoitem1() {
  let name = "Buy Milk";
  let date = "20/01/2024";

  return (
    <div class="container text-center">
      <div class="row 2">
        <div class="col-6">{name}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem1;
