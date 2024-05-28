import Button from '../Uİ/Button'
import styles from '../../CustomStyle.module.css'

const Form = () => {
  const addHandler = () => {
    fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todoTitle: document.getElementById('todoİnput').value,
        date: new Date().toString(),
      }),
    })
  }
  return (
    <div>
      <input type="text" name="" id="todoİnput" className={styles.inputStyle} />
      {/* <button onClick={addHandler}></button> */}
      <Button addHandler={addHandler} />
    </div>
  )
}

export default Form
