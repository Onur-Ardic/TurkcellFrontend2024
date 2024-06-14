import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/slices/themeSlice";
import styled from "styled-components";


const Theme = () => {
  const { tema } = useSelector((temas) => temas.theme);
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(changeTheme());
  };

  const ButtonContainer = styled.div`
    margin-bottom: 20px;
   
    button {
      background-color: ${tema === "dark" ? "#333" : "#fff"};
      color: ${tema === "dark" ? "#fff" : "#333"};
      border-radius: 5px;
      padding: 10px 20px;
      font-weight: bold;

    }
    `;

  return (
    <ButtonContainer>
      <button onClick={handleTheme}>Temayı Değiştir</button>
    </ButtonContainer>
  );
};

export default Theme;
