import { useState } from "react";
import TaskCss from "../ModuleCss/Task.module.css";
import { SlCalender } from "react-icons/sl";
const Task = ({
  task,
  handleDelete,
  updatedTask,
  setUpdatedTask,
  handleUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const getStatusClass = (status) => {
    switch (status) {
      case "todo":
        return TaskCss["card-todo"];
      case "inprogress":
        return TaskCss["card-inprogress"];
      case "done":
        return TaskCss["card-done"];
      default:
        return "";
    }
  };
  return (
    <div className={`${TaskCss.card} ${getStatusClass(task.status)}`}>
      {isEditing ? (
        <form
          className={TaskCss.form}
          onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
            handleUpdate(task.id);
          }}
        >
          <input
            type="text"
            placeholder="title"
            value={updatedTask.title}
            onChange={(e) => {
              setUpdatedTask({ ...updatedTask, title: e.target.value });
            }}
          />
          <select
            value={updatedTask.status}
            onChange={(e) => {
              setUpdatedTask({ ...updatedTask, status: e.target.value });
            }}
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <input
            type="date"
            value={updatedTask.deadline}
            onChange={(e) => {
              setUpdatedTask({ ...updatedTask, deadline: e.target.value });
            }}
          />
          <button className={`${TaskCss.button} ${TaskCss.blue}`} type="submit">
            Onayla
          </button>
        </form>
      ) : (
        <>
          <h3 className={TaskCss.title}>{task.title}</h3>
          <p className={TaskCss.deadline}>
            <SlCalender className={TaskCss.calenderIcon} />
            {task.deadline}
          </p>
          <p>{task.createDate}</p>
          <button
            className={`${TaskCss.button} ${TaskCss.purple}`}
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            Delete
          </button>
          <button
            className={`${TaskCss.button} ${TaskCss.green}`}
            onClick={() => {
              setIsEditing(true);
              setUpdatedTask(task);
            }}
          >
            Update
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
