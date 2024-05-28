import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, {
            text: inputText,
            completed: false,
            id: Math.random()*1000
        }])
        setInputText('')
    }




  return (
    <>
      <form>
        <div className="search">
            <input type="text" className='todo-input' placeholder='What are you doing today?'onChange={inputTextHandler} value={inputText}/>
            <button className='todo-button' type='submit' onClick={submitTodoHandler}>Add Task</button>
        </div>
      </form>
    </>
  )
}

export default Form
