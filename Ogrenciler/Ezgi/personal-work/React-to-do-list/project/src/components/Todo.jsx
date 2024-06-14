import React from 'react'

const Todo = ({todo, setTodos, todos, deleteHandler}) => {
  return (
    <div className='todo'>
      <li className="todo-item">{todo.text}</li>
      <button className='delete-btn' onClick={(e) => { e.preventDefault(), deleteHandler(todo.id)}}>Delete</button>
    </div>
  )
}

export default Todo
