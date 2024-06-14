import React from "react";

const Button = ({ text }) => {
  return (
    <button className=" rounded-full bg-lime-400 text-white text-2xl px-1">
      {text}
    </button>
  );
};

export default Button;
