import styles from "./FoodInput.module.css";

const handleOnChange = (event) => {
  console.log(event.target.value);
  /* When we go inside event object in console there is target object inside it and then 
    inside that there is a value property   */
};

const FoodInput = () => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
