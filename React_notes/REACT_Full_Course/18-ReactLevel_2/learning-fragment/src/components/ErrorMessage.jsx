const ErrorMessage = ({ items }) => {
  //   let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      {items.length === 0 && <h3>I am still hungry.</h3>}
      {/* This is optional chaining  so the thing after and operator will run 
      if before and operator statement is true else it willnot run*/}
    </>

    // we are adding fragments because we are writing jsx code inside it that's why .
  );
};

export default ErrorMessage;
