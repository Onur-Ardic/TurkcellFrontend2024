import React from "react";
import Input from "../../atom/Input";
import Button from "../../atom/button";
import "./inputGroup.css";
export const InputGroup = ({
  type,
  Name,
  value,
  onChange,
  onClick,
  text,
  placeholder,
}) => {
  return (
    <div className="group">
      <Input
        type={type}
        name={Name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Button onClick={onClick} text={text} />
    </div>
  );
};
