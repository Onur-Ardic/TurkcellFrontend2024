import React from 'react'
import ToDo from "../css/ToDo.module.css"
import Request from '../api/API'

const Todo = ({ todo, setToDo, todos, setTodos, deleteTask, setEditStatus }) => {

  const completeHandler = (id) => {
    setTodos(todos.map((item) => {
      if (item.id === id) {
        const completedItem = { ...item, completed: !item.completed }
        Request.put(`http://localhost:3000/tasks/${completedItem.id}`, completedItem)
        return completedItem
      }
      return item
    }))
  }
  return (
    <>
      <li className={ToDo.todoItem}>
        <button className='complete-btn' onClick={() => completeHandler(todo.id)}>
          <i className='fas fa-check-circle'></i>
        </button>
        <div className={`${ToDo.item} ${todo.completed ? ToDo.completed : ''}`}>{todo.text}
          <div className='addedDate'>
            <i>Added Date: {todo.addDate}</i>
          </div>
          <div className='updatedDate'>
            <i>Updated Date: {todo.updateDate}</i>
          </div>
        </div>
        <button className='trash-btn' onClick={(e) => { e.preventDefault(); deleteTask(todo.id) }}>
          <i className="fa-solid fa-trash-can"/>
        </button>
        <button className='update-btn' onClick={() => {
          setEditStatus(true)
          setToDo(todo)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </li>
    </>
  )
}

export default Todo
