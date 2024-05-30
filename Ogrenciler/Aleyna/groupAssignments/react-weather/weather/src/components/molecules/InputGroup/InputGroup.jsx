import React from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import styles from "./styles.module.css";

const InputGroup = ({ type, placeholder, name, onClick, setCity }) => {
  return (
    <div className={styles.container}>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        setCity={setCity}
      />
      <Button onClick={onClick} />
    </div>
  );
};

export default InputGroup;
