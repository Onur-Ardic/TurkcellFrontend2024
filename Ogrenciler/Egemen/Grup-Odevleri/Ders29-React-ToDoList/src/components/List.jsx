import ListItem from "./ListItem"
import styles from "../CustomStyle.module.css";

const List = ({tasks, removeTask, setTask}) => {

  return (
    <div className={styles.list}>
        {
            tasks.map((item) => {
                return <ListItem key={item.id} item={item} removeTask={removeTask} setTask={setTask}/>
            })
        }
    </div>
  )
}

export default List