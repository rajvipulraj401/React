import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems =[];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  let textToShow = "Food Item Entered by user";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    /* When we go inside event object in console there is target object inside it and then 
      inside that there is a value property   */
    textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnChange={handleOnChange} />
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems groccery={foodItems} />
      </Container>
    </>
  );
}

export default App;
