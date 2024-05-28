const Button = ({ addHandler }) => {
  return (
    <button type="submit" onClick={addHandler} id="addTodoButton">
      Todo Ekle
    </button>
  );
};

export default Button;
