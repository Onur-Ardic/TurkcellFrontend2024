import { container } from "./styles.module.css";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import PropTypes from "prop-types";

const AddBar = ({
  todoTitle,
  setTodoTitle,
  addTodo,
  updateTodo,
  selectedTodo,
}) => {
  return (
    <div className={container}>
      <Input
        type="text"
        placeholder="Yeni bir görev ekle"
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
      />
      <Button
        text={selectedTodo ? "Güncelle" : "Ekle"}
        handleButton={selectedTodo ? updateTodo : addTodo}
      />
    </div>
  );
};

AddBar.propTypes = {
  setTodoTitle: PropTypes.func,
  todoTitle: PropTypes.string,
  addTodo: PropTypes.func,
  selectedTodo: PropTypes.object,
  updateTodo: PropTypes.func,
};

export default AddBar;
