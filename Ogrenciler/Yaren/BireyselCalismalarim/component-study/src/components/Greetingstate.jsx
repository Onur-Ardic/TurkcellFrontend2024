import React, { useState } from "react";

const Greetingstate = () => {
  const [name, setName] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={updateName}
        placeholder="Enter your name"
      />
      <h1>Hi, {name}!</h1>
    </div>
  );
};
export default Greetingstate;
