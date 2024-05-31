import React from "react";
import "./Input.css";

const Input = ({ type = "text", name, value, onChange, placeholder }) => {
  return (
    <>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
      />
    </>
  );
};

export default Input;
