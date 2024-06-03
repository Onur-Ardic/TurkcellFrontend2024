import React from "react";

const Input = ({ type, name, placeholder }) => {
  return (
    <>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </>
  );
};

export default Input;
