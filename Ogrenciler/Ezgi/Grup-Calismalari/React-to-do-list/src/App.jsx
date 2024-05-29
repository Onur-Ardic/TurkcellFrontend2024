import { useState,useEffect } from "react"
import Form from "./components/Form"
import TodoList from "./components/TodoList"
import Request from "./api/API"
import AppCss from "./css/App.module.css"

const App = () => {

  const [todos, setTodos] = useState([])
  const [todo,setToDo] = useState({"id":"","text":"","completed":false})
  const [editStatus,setEditStatus] = useState(false);
  
  const fetchTasks = async () =>{
    const response = await Request.get("http://localhost:3000/tasks")
    setTodos(response);
  }
  
  useEffect(() => {
    fetchTasks();
  },[])
  const validationStatus = () => {
    if (todo.text.trim() === "") {
      alert("Task text cannot be empty")
      return false
    }
    return true
  }
  const addUpdate = async (e) => {
    e.preventDefault();
    if(!validationStatus()){
      return
    }
    const currentDateTime = new Date().toLocaleString()
    
    if(!editStatus){
      const newToDo = {...todo,id:crypto.randomUUID(),addDate:currentDateTime}
      await Request.post(`http://localhost:3000/tasks`,newToDo)
      setTodos([...todos,newToDo]);
    }else{
      const updatedToDo = { ...todo, updateDate: currentDateTime }
      await Request.put(`http://localhost:3000/tasks/${updatedToDo.id}`,updatedToDo)
      setTodos(todos.map((todoItem) => (
        todoItem.id == updatedToDo.id ? updatedToDo : todoItem
      )))
      setEditStatus(false);
    }
    setToDo({id:"",text:"" ,completed:false})
  }

  const deleteTask = async (id) => {
    await Request.delete(`http://localhost:3000/tasks/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id ))
    }
    return (
      <>   
        <div className={AppCss.container}>
          <header>
            <h1>My To Do List</h1>
          </header>
          <Form todo={todo} setToDo={setToDo} addUpdate={addUpdate}/>
          <TodoList todos={todos} setTodos={setTodos} deleteTask={deleteTask} setEditStatus={setEditStatus} setToDo={setToDo}/>
        </div>
      </>
    )
}

export default App
