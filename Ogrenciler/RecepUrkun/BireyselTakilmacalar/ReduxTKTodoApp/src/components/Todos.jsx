import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/slices/todoSlicer";
import { FormInput, Button, themes } from "../style/styled";
import { ThemeProvider } from "styled-components";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const Todos = () => {
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [updateTodoId, setUpdateTodoId] = useState(null);

  const todos = useSelector((todoX) => todoX.todo.todolar);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return alert("Boş todo eklenemez");
    if (editMode) {
      dispatch(updateTodo({ id: updateTodoId, title: inputValue }));
      setEditMode(false);
      setUpdateTodoId(null);
    } else {
      dispatch(
        addTodo({ id: crypto.randomUUID().slice(0, 3), title: inputValue })
      );
    }
    setInputValue("");
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleUpdateTodo = (todo) => {
    setEditMode(true);
    setUpdateTodoId(todo.id);
    setInputValue(todo.title);
  };

  return (
    <div className="container">
      <div className="col-md-8 mx-auto text-center py-4">
        <form onSubmit={handleFormSubmit} className="mt-3">
          <FormInput
            type="text"
            placeholder="Todo Giriniz"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="mx-3"
          />
          <Button type="submit" className="mt-3 mt-lg-0">
            {editMode ? "Güncelle" : "Ekle"}
          </Button>
        </form>
      </div>
      <div className="col-md-8 mx-auto text-center p-3">
        {todos.length > 0 ? (
          <div className="d-flex flex-column flex-wrap justify-content-center align-items-center">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="d-flex w-75 flex-wrap align-items-center justify-content-center rounded-3 p-3"
              >
                <span className="w-50">
                  <h3>
                    <small>{todo.id}</small> -
                    <b className="text-break ms-2">{todo.title}</b>
                  </h3>
                </span>
                <div>
                  <ThemeProvider theme={themes.delete}>
                    <Button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="m-3"
                    >
                      <i className="d-flex align-items-center py-1">
                        <MdDeleteForever />
                      </i>
                    </Button>
                  </ThemeProvider>
                  <ThemeProvider theme={themes.update}>
                    <Button onClick={() => handleUpdateTodo(todo)}>
                      <i className="d-flex align-items-center py-1">
                        <MdEdit />
                      </i>
                    </Button>
                  </ThemeProvider>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "Todo Yok"
        )}
      </div>
    </div>
  );
};

export default Todos;
