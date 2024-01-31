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

  return (
    <>
      <Container asdf="asdfff">
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput />
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems groccery={foodItems} />
      </Container>

      {/* <Container>
        <p>
          Baby ,Why don't you eat it regualrly and see your body grow boy .You
          can do it . Healthy Mind in a Healthy Body
        </p>
      </Container> */}
    </>
  );
}

export default App;
