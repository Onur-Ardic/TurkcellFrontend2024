import React from "react";
import "./input.css";

function Input({ type, onChange, value, Name, placeholder }) {
  return (
    <>
      <input
        className="input"
        type={type}
        name={Name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
