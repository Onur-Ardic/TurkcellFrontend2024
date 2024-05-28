import Task from "./Task";

const TaskList = ({
  tasks,
  handleDelete,
  updatedTask,
  setUpdatedTask,
  handleUpdate,
}) => {
  return (
    <div>
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
