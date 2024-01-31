import styles from "./Item.module.css";
const Item = ({ foods }) => {
  // THIS IS THE props object

  // const handleBuyButtonClicked = (foods) => {
  const handleBuyButtonClicked = () => {
    // this will directly work also
    console.log(`${foods} being bought`);
  };
  return (
    // <li className={`${styles["kg-item"]} list-group-item`}>
    <li className={`list-group-item`}>
      <span className={styles["kg-span"]}>{foods}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // handing click event in react
        // onClick={() => handleBuyButtonClicked(foods)}
        /*we were making anonymous method so that it doesn't get 
          get immediately called*/

        onClick={handleBuyButtonClicked}

        // now passing function reference

        // note - if we are inside jsx and we have to write javascript thenwe will use {} but if we are inside {} only then we won't use another
        // bracket.
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
