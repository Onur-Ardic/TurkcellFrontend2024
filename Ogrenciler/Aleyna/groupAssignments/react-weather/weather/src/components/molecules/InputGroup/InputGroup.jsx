import React from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import styles from "./styles.module.css";

const InputGroup = ({ type, placeholder, id, name, onClick }) => {
  return (
    <div className={styles.container}>
      <Input type={type} placeholder={placeholder} id={id} name={name} />
      <Button onClick={onClick} />
    </div>
  );
};

export default InputGroup;
