import React from "react";
import "./Button.css";

const Button = ({ onClick, text, type }) => {
  return (
    <>
      <button className={`button ${type}`} type={type} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
