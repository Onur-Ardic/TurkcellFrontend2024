import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoListItem = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [updatedTodo, setUpdatedTodo] = useState(""); // Güncellenecek değeri state olarak tutuyoruz
  const [editId, setEditId] = useState(null); // Güncellenen todo'nun ID'sini state olarak tutuyoruz

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, title) => {
    setEditId(id); // Düzenleme moduna geçmek için ID'yi state'e kaydediyoruz
    setUpdatedTodo(title); // Todo başlığını input alanına yerleştiriyoruz
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id: id, title: updatedTodo }));
    setUpdatedTodo("");
    setEditId(null); // Güncelleme yapıldıktan sonra düzenleme modunu kapatıyoruz
  };

  return (
    <>
      <ul className="list-group bg-blue-200 mx-auto w-1/3 p-10 mt-5">
        {todos.map((todo) => (
          <li className="flex justify-between item-center mt-5" key={todo.id}>
            {editId === todo.id ? ( // Eğer düzenleme modu açıksa
              <div className="flex gap-2">
                <input
                  type="text"
                  value={updatedTodo}
                  onChange={(e) => setUpdatedTodo(e.target.value)}
                />
                <button className="p-2 bg-white" onClick={() => handleUpdate(todo.id)}>
                  Update
                </button>
              </div>
            ) : (
              // Düzenleme modu kapalıysa
              <>
                <h2 className="text-xl">{todo.title}</h2>
                <div className="flex gap-5">
                  <button className="p-2 bg-white rounded-sm hover:bg-gray-200" onClick={() => handleDelete(todo.id)}>
                    Delete
                  </button>
                  <button className="p-2 bg-white" onClick={() => handleEdit(todo.id, todo.title)}>
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoListItem;
