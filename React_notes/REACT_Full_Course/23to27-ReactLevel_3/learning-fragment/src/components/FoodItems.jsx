import { useState } from "react";
import Item from "./Item";
// let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

const FoodItems = ({ groccery }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    // jo button item wala click hua usko active items me daal do
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {groccery.map((item) => (
        <Item
          key={item}
          foods={item}
          bought={activeItems.includes(item)}
          // handleBuyButton={(clicke) => onBuyButton(item, clicke)}
          handleBuyButton={(clicke) => {
            console.log(clicke);
            onBuyButton(item, clicke);
          }}
        />
      ))}
    </ul>
  );
};

export default FoodItems;

// how we pass props

/* 
We pass as an attribute .
examples - <Header title = "My App"/>*/
