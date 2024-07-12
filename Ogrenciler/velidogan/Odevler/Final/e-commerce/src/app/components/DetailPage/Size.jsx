"use client";
import React, { useState, useTransition } from "react";
import { useTranslation } from "@/app/i18n/client";
const Size = ({lng}) => {
  const [activeButton, setActiveButton] = useState(1);
  const { t } = useTranslation(lng)
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <div className="size-buttons">
      <button
        className={activeButton === 1 ? "size-btn-active" : ""}
        onClick={() => handleButtonClick(1)}
      >
        {t("small")}
      </button>
      <button
        className={activeButton === 2 ? "size-btn-active" : ""}
        onClick={() => handleButtonClick(2)}
      >
        {t("medium")}
      </button>
      <button
        className={activeButton === 3 ? "size-btn-active" : ""}
        onClick={() => handleButtonClick(3)}
      >
        {t("large")}
      </button>
      <button
        className={activeButton === 4 ? "size-btn-active" : ""}
        onClick={() => handleButtonClick(4)}
      >
        {t("x-large")}
      </button>
    </div>
  );
};

export default Size;
