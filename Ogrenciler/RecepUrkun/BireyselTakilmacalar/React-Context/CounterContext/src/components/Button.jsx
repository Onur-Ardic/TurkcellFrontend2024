import React from "react";
import { useCounter } from "../context/CounterContext";

const Button = () => {
  const { value, setValue } = useCounter();

  return (
    <div>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Arttir
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        Azalt
      </button>
    </div>
  );
};

export default Button;
