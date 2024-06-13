import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo } from '../Redux/Slices/todoSlice'

const TodoListItem = () => {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()
  const [updatedTodo, setUpdatedTodo] = useState('')
  const [editId, setEditId] = useState(null)

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleEdit = (id, title) => {
    setEditId(id)
    setUpdatedTodo(title)
  }

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id: id, title: updatedTodo }))
    setUpdatedTodo('')
    setEditId(null)
  }

  return (
    <>
      <ul className="list-group bg-blue-200 mx-auto w-1/3 p-10 mt-5">
        {todos.map((todo) => (
          <li className="flex justify-between item-center mt-5" key={todo.id}>
            {editId === todo.id ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={updatedTodo}
                  onChange={(e) => setUpdatedTodo(e.target.value)}
                />
                <button className="p-2 bg-white" onClick={() => handleUpdate(todo.id)}>
                  Update
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl">{todo.title}</h2>
                <div className="flex gap-5">
                  <button
                    className="p-2 bg-white rounded-sm hover:bg-gray-200"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                  <button className="p-2 bg-white" onClick={() => handleEdit(todo.id, todo.title)}>
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoListItem
