
import FormCss from "../css/Form.module.css"


const Form = ({ todo, setToDo,addUpdate}) => {

    const inputTextHandler = (e,input) => {
      setToDo({...todo, [input]: e.target.value})
    }

    return (
      
        <form className={FormCss.form}>
              <input type="text" className='todo-input' placeholder='What are you doing today?' onChange={(e)=>inputTextHandler(e,"text")} value={todo.text}/>
              <button className='todo-button' type='submit' onClick={addUpdate}>
                Add Task
              </button>              
        </form>
      
    )
}

export default Form
