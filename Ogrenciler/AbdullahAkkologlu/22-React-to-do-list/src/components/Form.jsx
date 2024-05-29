import FormCss from "../ModuleCss/Form.module.css";
const Form = ({ newTask, setNewTask, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setNewTask({ ...newTask, title: e.target.value });
        }}
      />
      <input
        type="date"
        placeholder="deadline"
        onChange={(e) => {
          setNewTask({ ...newTask, deadline: e.target.value });
        }}
      />
      <button type="submit" className={FormCss.button}>
        Submit
      </button>
    </form>
  );
};

export default Form;
