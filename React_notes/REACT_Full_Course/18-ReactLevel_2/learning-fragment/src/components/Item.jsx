// THIS item.jsx will make a single list item

// const Item = (props) => {
//   // THIS IS THE props object
//   return <li className="list-group-item">{props.foodItem}</li>;
// };

// we can also do via destructuring

import styles from "./Item.module.css";

const Item = ({ foods }) => {
  // THIS IS THE props object
  return (
    <li className={`${styles["kg-item"]}`}>
      <span className={styles["kg-span"]}>{foods}</span>
    </li>
  );
};

export default Item;
