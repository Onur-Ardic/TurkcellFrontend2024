import { useState } from 'react'
import './App.css'
import Request from "./request/request"
import { useEffect } from 'react'
import Task from "./components/Task"
function App() {
  const [tasks,setTasks] = useState([])

  const fetchTasks = async () => {
    const response = await Request.get("http://localhost:3000/tasks")
    setTasks(response);
  }
  useEffect(()=> {fetchTasks()},[])
  
  
  const deleteTask = async (id) => {
    await Request.delete(`http://localhost:3000/tasks/${id}`)
    setTasks(tasks.filter((task)=> task.id !== id ))
  }
  return (
    <>
    {
      tasks.map((task,index)=> {
        return <Task task={task} key={index} deleteTask={deleteTask}/>
      })
    }      
    </>
  )
}

export default App
