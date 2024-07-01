import React from "react";
import Label from "../../atoms/label/Label";
import Input from "../../atoms/input/Input";
import "./FormGroup.css";

const FormGroup = ({ label, name, value, onChange, type, color }) => {
  return (
    <div className="input-group">
      <Label color={color} htmlFor={name} text={label} />
      <Input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default FormGroup;
