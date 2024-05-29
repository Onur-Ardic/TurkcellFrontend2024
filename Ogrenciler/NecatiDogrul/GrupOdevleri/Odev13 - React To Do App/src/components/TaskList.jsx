import Task from "./Task";

const TaskList = ({
  tasks,
  handleDelete,
  updatedTask,
  setUpdatedTask,
  handleUpdate,
  title,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          handleDelete={handleDelete}
          updatedTask={updatedTask}
          setUpdatedTask={setUpdatedTask}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default TaskList;
