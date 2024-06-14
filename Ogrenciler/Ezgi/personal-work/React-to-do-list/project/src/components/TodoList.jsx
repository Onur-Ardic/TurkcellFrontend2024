import Todo from './Todo'

const TodoList = ({ todos, setTodos, deleteHandler }) => {
  return (
    <div>
      <ul className='todo-list'>
        {todos?.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos} 
            deleteHandler={deleteHandler}
            />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
