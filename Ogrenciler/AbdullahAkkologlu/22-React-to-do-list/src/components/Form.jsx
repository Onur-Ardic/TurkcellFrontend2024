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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
