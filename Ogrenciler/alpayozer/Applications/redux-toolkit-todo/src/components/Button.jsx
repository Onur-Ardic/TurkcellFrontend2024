import React from "react";

const Button = ({ icon, onClick }) => {
  return <button onClick={onClick}>{icon}</button>;
};

export default Button;
