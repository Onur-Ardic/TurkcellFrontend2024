import React from "react";

function Input({ type, onChange, value, Name, placeholder }) {
  return (
    <input
      type={type}
      name={Name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
