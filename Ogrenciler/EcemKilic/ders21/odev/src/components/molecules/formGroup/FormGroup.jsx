import React from "react";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

const FormGroup = ({ type = "text", name, value, onChange, onClick }) => {
  return (
    <>
      <Input type={type} name={name} value={value} onChange={onChange} />
      <Button onClick={onClick} text="Ekle" />
    </>
  );
};

export default FormGroup;
