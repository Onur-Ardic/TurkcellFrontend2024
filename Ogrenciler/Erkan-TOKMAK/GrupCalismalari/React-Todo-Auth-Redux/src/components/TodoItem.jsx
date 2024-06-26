import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo as reduxDeleteTodo,
  updateTodo as reduxUpdateTodo,
} from "../redux/slices/todoSlice";
import { useTranslation } from "react-i18next";
import { getAuth } from "firebase/auth";

const TodoItem = ({ todo }) => {
  const {t} = useTranslation('todo');
  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(reduxDeleteTodo(id));
  };

  const handleUpdateTodo = (id) => {
    if (editTitle.trim()) {
      dispatch(
        reduxUpdateTodo({
          id,
          title: editTitle,
        })
      );
      setEditMode(false);
      setEditTitle("");
    }
  };
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged((user)=> {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }, [])


  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {editMode ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="form-control mr-2"
          />
          <div>
            <button
              onClick={() => handleUpdateTodo(todo.id)}
              className="btn btn-success mr-2"
            >
              {t('save')}
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="btn btn-secondary"
            >
             {t('cancel')}
            </button>
          </div>
        </>
      ) : (
        <>
          <span>{todo.title}</span>
          {user && <div>
            <button
              onClick={() => setEditMode(true)}
              className="btn btn-warning mr-2"
            >
              {t('edit')}
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="btn btn-danger"
            >
              {t('delete')}
            </button>
          </div>}
        </>
      )}
    </li>
  );
};

export default TodoItem;
