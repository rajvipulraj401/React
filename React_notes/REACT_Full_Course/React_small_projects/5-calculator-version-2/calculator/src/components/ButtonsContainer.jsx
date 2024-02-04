import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles["buttonsContainer"]}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
          // so now instead of passing onButtonClick as a reference to parent component we will now
          // call onButtonClick and whenever the button will be click  and AS WE know the button name here cause when we were setting up each button  using map method and we were getting each buttonName so
          // wohi naam toh aa rha tha we can no send this {buttonName} as a parameter in onButtonClick method so that whenever
          // we click on the button and it goes to parent component as the event gets Triggered
        >
          {/* What is the difference between normal function reference and Making a new method and passing its reference  ?
          

          Answer - We are actually not passing onButtonClick 

          when we pass normal reference we just say that this is the reference of the function and please call yourself
          */}
          {buttonName}
        </button>
      ))}

      {/* {buttonNames.map((buttonName) => {
        return <button className={styles.button}>{buttonName}</button>;
      })} */}

      {/* <button className={styles.button}>c </button> */}
    </div>
  );
};

export default ButtonsContainer;
