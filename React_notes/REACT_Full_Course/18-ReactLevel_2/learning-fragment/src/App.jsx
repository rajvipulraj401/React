import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems =[];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems groccery={foodItems} />
    </>
  );
}

export default App;
