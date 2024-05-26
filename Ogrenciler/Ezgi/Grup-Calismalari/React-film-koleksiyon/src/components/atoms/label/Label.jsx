import React from "react";
import "./Label.css";

const Label = ({ htmlFor, text, color }) => {
  return (
    <>
      <label className={`label ${color}`} htmlFor={htmlFor}>
        {text}
      </label>
    </>
  );
};

export default Label;
