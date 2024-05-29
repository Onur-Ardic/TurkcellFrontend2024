import PropTypes from 'prop-types'
import styles from '../../CustomStyle.module.css'
import Button from '../Uİ/Button'

const Form = ({ selectedDataId }) => {
  const addHandler = () => {
    if (document.getElementById('addTodoButton').textContent == 'Todo Ekle') {
      fetch('http://localhost:3000/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todoTitle: document.getElementById('todoİnput').value,
          date: new Date().toString(),
        }),
      })
    } else {
      fetch(`http://localhost:3000/todo/${selectedDataId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todoTitle: document.getElementById('todoİnput').value,
          date: new Date().toString(),
        }),
      })
    }
    document.getElementById('todoİnput').value = ''
  }
  return (
    <div>
      <input type="text" name="" id="todoİnput" className={styles.inputStyle} />
      <Button addHandler={addHandler} />
    </div>
  )
}

Form.propTypes = {
  selectedDataId: PropTypes.string,
}
export default Form
