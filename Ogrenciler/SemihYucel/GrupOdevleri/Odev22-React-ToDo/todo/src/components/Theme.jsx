import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/slices/themeSlice";

const Theme = () => {
  const { tema } = useSelector((temas) => temas.theme);
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <div>
      <h3>Aktif Tema {`${tema}`}</h3>
      <button onClick={handleTheme}>Temayi Degistir</button>
    </div>
  );
};

export default Theme;
