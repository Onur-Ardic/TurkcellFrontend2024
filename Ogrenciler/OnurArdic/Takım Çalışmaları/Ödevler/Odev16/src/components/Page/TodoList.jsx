import { useEffect, useState } from 'react'
import styles from '../../CustomStyle.module.css'
import './page.css'
const TodoList = () => {
  const [onData, setOnData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/todo')
      .then((res) => res.json())
      .then((data) => {
        setOnData(data)
      })
  })

  const deleteHandler = (data) => {
    console.log(data.id)
    fetch(`http://localhost:3000/todo/${data.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setOnData(onData.filter((data) => data.id !== id))
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  return (
    <ul className="todoList">
      <h2 className={styles.size}>TodoList</h2>

      {onData.map((data) => (
        <li key={data.id} className={(styles.list, styles.flex)}>
          <h4>{data.todoTitle}</h4>
          <div className="button-wrapper">
            <button onClick={() => deleteHandler(data)}>Sil</button>
            <button>Düzenle</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
