import styles from '../../CustomStyle.module.css'
import './page.css'
const TodoList = () => {
  return (
    <ul className="todoList">
      <h2 className={styles.size}>TodoList</h2>
      <li className={(styles.list, styles.flex)}>
        <h4>Todo1</h4>
        <div className="button-wrapper">
          <button>Sil</button>
          <button>Düzenle</button>
        </div>
      </li>
    </ul>
  )
}

export default TodoList
