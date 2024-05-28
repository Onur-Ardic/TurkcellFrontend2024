import ListItem from "./ListItem"

const List = ({tasks, removeTask, setTask}) => {

  return (
    <div>
        {
            tasks.map((item) => {
                return <ListItem key={item.id} item={item} removeTask={removeTask} setTask={setTask}/>
            })
        }
    </div>
  )
}

export default List