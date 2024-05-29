import React, { useState, useEffect } from "react";
import { InputGroups } from "../../molecules/inputGroups/InputGroups";
import { Button } from "../../atoms/buttons/Button";
import { getOptions } from "../../../service/Api";
import './ToDoForm.css'

export const ToDoForm = ({ onAdd }) => {
  // const [options, setOptions] = useState([]);
  const [toDo, setToDo] = useState({
    title: "",
    date: "",
    categories: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToDo({ ...toDo, [name]: value });
  };

  // const fetchOptions = async () => {
  //   const allOptions = await getOptions();
  //   setOptions(allOptions);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    toDo.date = new Date().toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    onAdd(toDo);
    setToDo({
      title: "",
      date: "",
      categories: "",
      endDate: "",
      description: "",
    });
  };

  // useEffect(() => {
  //   fetchOptions();
  // }, []);

  return (
    <>
    <div >
      <form className="mt-3" onSubmit={handleSubmit}>
        <InputGroups
          text="Title"
          name="title"
          value={toDo.title}
          onChange={handleChange}
          />
        <InputGroups
          text="Description"
          name="description"
          value={toDo.description}
          onChange={handleChange}
          />
        <InputGroups
          type="select"
          // options={options}
          text="Categories"
          name="categories"
          value={toDo.categories}
          onChange={handleChange}
          />
        <InputGroups
          type="datetime-local"
          text="EndDate"
          name="endDate"
          value={toDo.endDate}
          onChange={handleChange}
          />
        <Button text="ekle" type="submit" />
      </form>
          </div>
    </>
  );
};
