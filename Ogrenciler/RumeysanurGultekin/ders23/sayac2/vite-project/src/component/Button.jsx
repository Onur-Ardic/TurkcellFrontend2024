import React, { useContext } from "react";
import { useCount } from "../context/CountContext";

const Button = () => {
  const { countData, count } = useCount();
  return (
    <div>
      <button onClick={countData}>Count: {count}</button>
      <p>React Context Homework.</p>
    </div>
  );
};

export default Button;
