import { postTask, putTask } from "../service/request";

const ToDoForm = ({ tasks, setTasks, task, setTask }) => {
  const addTask = async (e) => {
    e.preventDefault();
    const updatedTask = tasks.find((item) => item.id === task.id)
    if (!updatedTask) {
      const newTask = {
        id: crypto.randomUUID(),
        ...task,
      };
      await postTask(newTask);
      setTasks([...tasks, newTask]);
    } else {
      const renewTask = {
        ...task,
        updateDate: new Date().toLocaleString(),
      };
      await putTask(updatedTask.id, renewTask);
      setTasks(
        tasks.map((item) => (item.id === updatedTask.id? renewTask : item))
      );
    }

    setTask({
      task: "",
      desc: "",
      addDate: new Date().toLocaleString(),
      updateDate: new Date().toLocaleString(),
      status: "pending",
    });
  };
  return (
    <div>
      <form id="form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Görev Adı..."
          onChange={(e) => setTask({ ...task, task: e.target.value })}
          value={task.task}
        />
        <input
          type="text"
          placeholder="Açıklama..."
          onChange={(e) => setTask({ ...task, desc: e.target.value })}
          value={task.desc}
        />
        {/* <input type="checkbox" placeholder="Açıklama..." /> */}
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default ToDoForm;
