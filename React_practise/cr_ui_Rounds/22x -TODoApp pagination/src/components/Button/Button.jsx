import React, { Children } from "react";

const Button = ({ disabled, handleClick, children }) => {
  return (
    <>
      <button disabled={disabled} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
