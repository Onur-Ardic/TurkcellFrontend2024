import React from "react";
import { Labels } from "../../atoms/labels/Labels";
import { Input } from "../../atoms/inputs/Input";
import { Selects } from "../../atoms/selects/Selects";
import styles from "./InputGroups.module.css";

export const InputGroups = ({ text, onChange, value, type, name }) => {
  return (
    <div className={styles.inputGroup}>
      <Labels htmlFor={name} text={text} />
      {type == "select" ? (
        <Selects value={value} name={name} onChange={onChange} />
      ) : (
        <Input type={type} name={name} onChange={onChange} value={value} />
      )}
    </div>
  );
};
