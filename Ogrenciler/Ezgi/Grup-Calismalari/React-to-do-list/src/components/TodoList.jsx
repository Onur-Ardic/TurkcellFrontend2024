import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos,deleteTask,setEditStatus,setToDo,setTodos}) => {

    return (

        <>
            <div className="container">
                <ul className='todo-list'>
                    {todos.map((todo) => (
                        <Todo
                            todo={todo}
                            todos={todos}
                            setTodos={setTodos}
                            key={todo.id}
                            deleteTask={deleteTask}
                            setEditStatus={setEditStatus}
                            setToDo={setToDo}
                        />
                        
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoList
