import React from "react";
import FormGroup from "../../molecules/formGroup/FormGroup";
import Input from "../../atoms/input/Input";
import "./ToDoForm.css";

const ToDoForm = ({ addToDoUI, toDo, setToDo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setToDo({ ...toDo, [name]: value });
  };

  return (
    <>
      <div className="form">
        <Input
          type="date"
          name={"deadline"}
          value={toDo.deadline}
          onChange={handleChange}
        />
        <FormGroup
          type="text"
          name={"content"}
          value={toDo.content}
          placeholder="Yeni Görev Girin..."
          onChange={handleChange}
          onClick={() => {
            addToDoUI(toDo);
          }}
        />
      </div>
    </>
  );
};

export default ToDoForm;
