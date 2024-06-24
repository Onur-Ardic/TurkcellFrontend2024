import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ChangeSelect = styled.select`
  background-color: ${(props) => (props.tema === "dark" ? "#333" : "#fff")};
  color: ${(props) => (props.tema === "dark" ? "#fff" : "#333")};
  border: 2px solid ${(props) => (props.tema === "dark" ? "#fff" : "#333")};
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  appearance: none;
`;

const ChangeLang = () => {
  const { i18n } = useTranslation();
  const { tema } = useSelector((temas) => temas.theme);

  const handleChange = async (event) => {
    const lang = event.target.value;
    await i18n.changeLanguage(lang);
  };

  return (
    <div>
      <ChangeSelect
        onChange={handleChange}
        defaultValue={i18n.language}
        tema={tema}
      >
        <option value="tr">Türkçe</option>
        <option value="en">English</option>
      </ChangeSelect>
    </div>
  );
};

export default ChangeLang;
