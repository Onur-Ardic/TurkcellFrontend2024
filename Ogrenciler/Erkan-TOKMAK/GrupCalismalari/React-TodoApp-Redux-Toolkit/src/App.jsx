import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, updateTodo} from './redux/slices/todoSlice'

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  }

  const handleEditTodo = (todo) => {
    dispatch(updateTodo(todo));
  }

  const handleValue = (todo) => {

  }

  return (
    <>
      <h1>Redux Todo</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const todo = e.target.elements.todo.value;

        handleAddTodo({ id: self.crypto.randomUUID(), title: todo })
      }}>
        <input type="text" name="todo" />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
      {todos.map((todo)=>   
        (<li key={todo.id}>
          {todo.title} - {todo.id}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => handleValue(todo)}>Edit</button>
        </li>)
      )}
      </ul>
    </>
  )
}

export default App
