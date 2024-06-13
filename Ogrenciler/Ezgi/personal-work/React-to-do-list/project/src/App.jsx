import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Request from './api/API'

function App() {

  const [todos, setTodos] = useState([])

  const fetchTasks = async() => {
    const response = await Request.get('http://localhost:3000/todos')
    setTodos(response)
  }

  useEffect(() => {
    fetchTasks()
  },[])


  const deleteHandler = async (id) => {
    await Request.delete(`http://localhost:3000/todos/${id}`)
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
      <div className="wrapper">
        <h1 className="title">My To Do List</h1>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} deleteHandler={deleteHandler}/>
      </div>

  )
}

export default App
