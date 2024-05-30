import { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState();

  return (
    <div className="container">
      <input
        type="text"
        placeholder="City"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>{inputValue} </h1>
    </div>
  );
};

export default Input;
