import { useState } from "react";

const Task = ({
  task,
  handleDelete,
  updatedTask,
  setUpdatedTask,
  handleUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <form
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
          <button type="submit">Onayla</button>
        </form>
      ) : (
        <>
          <h3>{task.title}</h3>
          <h6>{task.status}</h6>
          <p>{task.deadline}</p>
          <p>{task.createDate}</p>
          <button
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            Delete
          </button>
          <button
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
