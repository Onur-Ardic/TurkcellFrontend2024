import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";
import Button from "./Button";
import {
  StyledInput,
  StyledCard,
  StyledItem,
  StyledText,
  ButtonWrapper,
} from "./Styled";

const ToDoCard = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id: id, title: updatedTitle }));
    setEditingTodoId(null);
  };

  return (
    <>
      <StyledCard>
        {todos.map((todo) => (
          <StyledItem key={todo.id}>
            {editingTodoId === todo.id ? (
              <>
                <StyledInput
                  type="text"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                />
                <Button
                  style={{ backgroundColor: "#1679ab", color: "white" }}
                  onClick={() => handleUpdate(todo.id)}
                  text="Save"
                />
              </>
            ) : (
              <>
                <StyledText>
                  {todo.title} - {todo.id}
                </StyledText>
                <ButtonWrapper>
                  <Button
                    style={{ backgroundColor: "#059212" }}
                    onClick={() => setEditingTodoId(todo.id)}
                    text="Edit"
                  />
                  <Button
                    style={{ backgroundColor: "#C80036", color: "white" }}
                    onClick={() => handleDelete(todo.id)}
                    text="Delete"
                  />
                </ButtonWrapper>
              </>
            )}
          </StyledItem>
        ))}
      </StyledCard>
    </>
  );
};

export default ToDoCard;
