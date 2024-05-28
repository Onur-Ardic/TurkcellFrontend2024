import { useEffect, useState } from "react";
import "./App.css";
import { createData, deleteData, readData, updateData } from "./request";
import TaskList from "./components/TaskList";
import Form from "./components/Form";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    id: crypto.randomUUID(),
    title: "",
    status: "todo",
    createDate: new Date().toLocaleString(),
    updateDate: "",
    deadline: "",
  });
  const [updatedTask, setUpdatedTask] = useState({
    title: "",
    status: "",
    createDate: new Date().toLocaleString(),
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
    if (!validation(newTask)) return;
    await createData(newTask);
    setTasks([...tasks, newTask]);
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
    <>
      <Form
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <h1>To Do</h1>
      <TaskList
        tasks={filteredData.todo}
        handleDelete={handleDelete}
        updatedTask={updatedTask}
        setUpdatedTask={setUpdatedTask}
        handleUpdate={handleUpdate}
      />
      <h1>In progress</h1>
      <TaskList
        tasks={filteredData.inprogress}
        handleDelete={handleDelete}
        updatedTask={updatedTask}
        setUpdatedTask={setUpdatedTask}
        handleUpdate={handleUpdate}
      />
      <h1>Done</h1>
      <TaskList
        tasks={filteredData.done}
        handleDelete={handleDelete}
        updatedTask={updatedTask}
        setUpdatedTask={setUpdatedTask}
        handleUpdate={handleUpdate}
      />
    </>
  );
}

export default App;
