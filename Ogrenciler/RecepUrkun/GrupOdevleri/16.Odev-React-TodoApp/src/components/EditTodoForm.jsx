import React, { useState } from "react";

function EditTodoForm({ todo, updateTitle }) {
  const [title, setTitle] = useState(todo.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTitle(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditTodoForm;
