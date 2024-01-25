// THIS item.jsx will make a single list item

// const Item = (props) => {
//   // THIS IS THE props object
//   return <li className="list-group-item">{props.foodItem}</li>;
// };

// we can also do via destructuring

const Item = ({ foods }) => {
  // THIS IS THE props object
  return <li className="list-group-item">{foods}</li>;
};

export default Item;
