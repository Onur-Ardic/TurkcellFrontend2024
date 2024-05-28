import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import ToDoForm from "./components/ToDoForm";
import { deleteTask, getTasks } from "./service/request";

function App() {
  const [task, setTask] = useState({
    task: "",
    desc: "",
    addDate: new Date().toLocaleString(),
    updateDate: new Date().toLocaleString(),
    status: "pending"
  })

  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const result = await getTasks();
    setTasks(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id!== id));
  }
  return (
    <>
      <ToDoForm tasks={tasks} setTasks={setTasks} task={task} setTask={setTask}/>
      <List tasks={tasks} removeTask={removeTask} setTask={setTask}/>
    </>
  );
}

export default App;
