import { useSelector } from 'react-redux'
import './App.css'
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './redux/slices/TodoSlice';

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleAdd = (todo) => {
    dispatch(addTodo(todo));
  }

  return (
    <>
      <h1>Redux Toolkit</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const todo = e.target.elements.todo.value;
        handleAdd({id: self.crypto.randomUUID(), title: todo});
      }}>
        <input type='text' name='todo' />
        <button type='submit'> Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
