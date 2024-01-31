import Item from "./Item";
// let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

const FoodItems = ({ groccery }) => {
  return (
    <ul className="list-group">
      {groccery.map((item) => (
        <Item
          key={item}
          foods={item}
          handleBuyButton={() => console.log(`${item} bought`)}
        />
        // Passing the 'foods' prop to the 'Item' component.
        // Note: 'foodItem' will be accessible within 'Item' component via the 'props' object.
        // (props is just the name you can have any name)

        // we have to wrte item inside curly bracketbecause it is jsx code
        // else the browser will interpret it as text and not the variable.

        // NOTE 2 - Ensure each component in the list has a unique "key" prop, required by React for efficient updates.
      ))}
    </ul>
  );
};

export default FoodItems;

// how we pass props

/* 
We pass as an attribute .
examples - <Header title = "My App"/>*/
