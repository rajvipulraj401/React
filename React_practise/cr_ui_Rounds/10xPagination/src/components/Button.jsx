import React from "react";

const Button = ({ name, handleBtnClick }) => {
  const btnStyles = {
    backgroundColor: "var(--color-primary)",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    cursor: handleBtnClick ? "pointer" : "default",
    opacity: handleBtnClick ? 1 : 0.9,
  };
  return (
    <>
      <button style={btnStyles} onClick={handleBtnClick}>
        {name}
      </button>
    </>
  );
};

export default Button;
