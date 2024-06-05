import React from "react";

const Input = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
