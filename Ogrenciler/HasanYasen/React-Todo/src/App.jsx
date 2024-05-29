import { useState } from "react"
import InputArea from "./components/InputArea.jsx"

function App() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [todos, setTodos] = useState([])

  function titleChangeFunc(e) {
    setTitle(e.target.value)
  }

  function contentChangeFunc(e) {
    setContent(e.target.value)
  }

  function saveItem() {
    if (title !== "" && content !== "") {
      const createDate = new Date().toLocaleString()

      const newTodo = { "id": todos.length + 1, "title": title, "content": content, "createDate": createDate }

      setTodos((prev) => {
        return [...prev, newTodo]
      })
      setTitle("")
      setContent("")
    }
  }

  function deleteItem(itemID) {
    setTodos((prevValues) => {
      return prevValues.filter((todo, index) => {
        return index !== itemID
      })
    })
  }

  function updateItem(index) {
    const todoWillUpdate = todos[index]
    if (todoWillUpdate) {
      setTitle(todoWillUpdate.title)
      setContent(todoWillUpdate.content)
    }

    if (todoWillUpdate.title !== "" && todoWillUpdate.content !== "") {
      todos[index] = {
        id: todoWillUpdate.id,
        title: todoWillUpdate.title,
        content: todoWillUpdate.content,
        createDate: todoWillUpdate.createDate
      }
    }
  }

  return (
    <>
      <InputArea
        title={title}
        content={content}
        titleChangeFunc={titleChangeFunc}
        contentChangeFunc={contentChangeFunc}
        saveItem={saveItem}
      />

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <div>{todo.title}</div>
              <div>{todo.content}</div>
              <div>{todo.createDate}</div>
              <button onClick={() => updateItem(index)}>Update</button>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App