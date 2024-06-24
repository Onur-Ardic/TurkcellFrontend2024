import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateFormTodo, updateTodo } from "../redux/slices/todoSlice";
import { useEffect, useState } from "react";
import { StyledForm, Input, TodoFormButton } from "../../styled";
import { addTodoFirebase, updateTodoFirebase } from "../service/firebase";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.todo.inputValue);
  const { user } = useSelector((state) => state.auth);
  const handleAddTodo = async (todo) => {
    dispatch(addTodo(todo));
    dispatch(updateFormTodo({}));
    await addTodoFirebase(user, todo);
  };
  const [updateValue, setUpdateValue] = useState("");
  useEffect(() => {
    setUpdateValue(Todo.title || "");
  }, [Todo]);
  const handleUpdateValue = async () => {
    dispatch(
      updateTodo({
        id: Todo.id,
        title: updateValue,
      })
    );
    dispatch(updateFormTodo({}));
    await updateTodoFirebase(user);
  };
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        Todo.id
          ? handleUpdateValue()
          : handleAddTodo({ id: self.crypto.randomUUID(), title: updateValue });
      }}
    >
      <Input
        type="text"
        name="todo"
        value={updateValue}
        placeholder={t("addTodo")}
        onChange={(e) => setUpdateValue(e.target.value)}
      />
      <TodoFormButton type="submit">
        {Todo.id ? t("update") : t("add")}
      </TodoFormButton>
    </StyledForm>
  );
};

export default Form;
