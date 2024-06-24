import { useTranslation } from "react-i18next";
import { StyledLngButton, StyledLngButtonsDiv } from "../../styled";
import { useState } from "react";
const LanguageButtons = () => {
  const [activeLng, setActiveLng] = useState("en");
  const { i18n } = useTranslation();
  const handleLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLng(lng);
  };
  return (
    <StyledLngButtonsDiv>
      <StyledLngButton
        className={activeLng === "en" ? "active" : ""}
        onClick={() => handleLanguage("en")}
      >
        En
      </StyledLngButton>
      <StyledLngButton
        className={activeLng === "tr" ? "active" : ""}
        onClick={() => handleLanguage("tr")}
      >
        Tr
      </StyledLngButton>
    </StyledLngButtonsDiv>
  );
};

export default LanguageButtons;
