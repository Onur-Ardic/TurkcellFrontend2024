import { useState } from "react"
import Form from "./components/Form"
import TodoList from "./components/TodoList"

const App = () => {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <>
      <header>
        <h1>My To Do List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList  todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
