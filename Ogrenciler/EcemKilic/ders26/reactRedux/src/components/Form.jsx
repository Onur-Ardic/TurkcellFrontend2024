import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateFormTodo, updateTodo } from "../redux/slices/todoSlice";
import { useEffect, useState } from "react";

const Form = () => {
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.todo.inputValue);
  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
    dispatch(updateFormTodo({})); // Ekleme yaptıktan sonra slicedaki inputValue'nun içini temizler.
  };

  // const [updateValue, setUpdateValue] = useState(Todo.title);
  const [updateValue, setUpdateValue] = useState(""); // Controlled to uncontrolled hatası çözümü

  useEffect(() => {
    // setUpdateValue(Todo.title);
    setUpdateValue(Todo.title || ""); // Controlled to uncontrolled hatası çözümü
  }, [Todo]);

  const handleUpdateValue = () => {
    dispatch(
      updateTodo({
        id: Todo.id,
        title: updateValue,
      })
    );
    dispatch(updateFormTodo({})); // Güncelleme yaptıktan sonra slicedaki inputValue'nun içini temizler.
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Id varlığına göre fonksiyon çalıştırma.
        Todo.id
          ? handleUpdateValue()
          : handleAddTodo({ id: self.crypto.randomUUID(), title: updateValue });
      }}
    >
      <input
        type="text"
        name="todo"
        value={updateValue}
        onChange={(e) => setUpdateValue(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Form;
