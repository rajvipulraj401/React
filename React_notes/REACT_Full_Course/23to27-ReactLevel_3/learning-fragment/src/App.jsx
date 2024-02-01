import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  let [foodItems, setFoodItems] = useState([
    /*"salad",
    "Green Vegetable",
    "Roti",*/
  ]);

  // let textToShow = "Food Item Entered by user";

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      // This will clean the input value of the input text which i have written in the input field.

      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is " + newFoodItem);
    }
    /* When we go inside event object in console there is target object inside it and then 
      inside that there is a value property   */
    // console.log(event.target.value);
    // textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems groccery={foodItems} />
      </Container>
    </>
  );
}

export default App;
