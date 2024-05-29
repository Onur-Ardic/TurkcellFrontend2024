import { useEffect, useState } from "react";
import { createData, deleteData, readData, updateData } from "./request";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import AppCss from "./ModuleCss/App.module.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    status: "todo",
    updateDate: "",
    deadline: "",
  });
  const [updatedTask, setUpdatedTask] = useState({
    title: "",
    status: "",
    updateDate: "",
    deadline: "",
  });
  const fetchData = async () => {
    const result = await readData();
    setTasks(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const validation = (object) => {
    if (object.title === "" || object.deadline === "") {
      alert("Tüm alanları doldurunuz!");
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = {
      id: crypto.randomUUID(),
      createDate: new Date().toLocaleString(),
      ...newTask,
    };
    if (!validation(task)) return;
    await createData(task);
    setTasks([...tasks, task]);
    setNewTask({ title: "", status: "todo", updateDate: "", deadline: "" });
  };
  const handleDelete = async (id) => {
    await deleteData(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleUpdate = async (id) => {
    if (!validation(updatedTask)) return;
    const newUpdatedTask = {
      ...updatedTask,
      updateDate: new Date().toLocaleString(),
    };
    await updateData(id, newUpdatedTask);
    setTasks(tasks.map((task) => (task.id === id ? newUpdatedTask : task)));
  };
  const filteredData = {
    todo: tasks.filter((task) => task.status === "todo"),
    inprogress: tasks.filter((task) => task.status === "inprogress"),
    done: tasks.filter((task) => task.status === "done"),
  };
  return (
    <div className={AppCss.container}>
      <Form
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <div className={AppCss.taskListDiv}>
        <TaskList
          title={"To Do"}
          tasks={filteredData.todo}
          handleDelete={handleDelete}
          updatedTask={updatedTask}
          setUpdatedTask={setUpdatedTask}
          handleUpdate={handleUpdate}
        />
        <TaskList
          title={"In Progress"}
          tasks={filteredData.inprogress}
          handleDelete={handleDelete}
          updatedTask={updatedTask}
          setUpdatedTask={setUpdatedTask}
          handleUpdate={handleUpdate}
        />

        <TaskList
          title={"Done"}
          tasks={filteredData.done}
          handleDelete={handleDelete}
          updatedTask={updatedTask}
          setUpdatedTask={setUpdatedTask}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}

export default App;
