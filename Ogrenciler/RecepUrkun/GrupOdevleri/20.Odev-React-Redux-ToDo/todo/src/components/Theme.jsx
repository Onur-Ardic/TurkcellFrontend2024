import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/slices/themeSlice";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ButtonContainer = styled.div`
  margin-bottom: 20px;
  button {
    background-color: ${(props) => (props.tema === "dark" ? "#333" : "#fff")};
    color: ${(props) => (props.tema === "dark" ? "#fff" : "#333")};
    border: 2px solid ${(props) => (props.tema === "dark" ? "#fff" : "#333")};
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: bold;
  }
`;

const Theme = () => {
  const { tema } = useSelector((temas) => temas.theme);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <ButtonContainer tema={tema}>
      <button onClick={handleTheme}>{t("changeTheme")}</button>
    </ButtonContainer>
  );
};

export default Theme;
