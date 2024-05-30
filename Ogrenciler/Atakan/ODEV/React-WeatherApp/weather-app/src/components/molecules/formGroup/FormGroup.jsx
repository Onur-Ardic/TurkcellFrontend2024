import React from "react";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

const FormGroup = ({ type = "text", name, value, onChange, onClick }) => {
  return (
    <>
      <Input
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Şehir İsmi Girin"
      />
      <Button onClick={onClick} text="Göster" />
    </>
  );
};

export default FormGroup;
