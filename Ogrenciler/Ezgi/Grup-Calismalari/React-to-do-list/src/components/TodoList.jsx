import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos,setTodos, deleteTask,setEditStatus,setToDo}) => {

    return (

        <>
            <div className="container">
                <ul className='todo-list'>
                    {todos?.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            setToDo={setToDo}
                            todos={todos}
                            setTodos={setTodos}
                            deleteTask={deleteTask}
                            setEditStatus={setEditStatus}
                            
                        />
                        
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoList
