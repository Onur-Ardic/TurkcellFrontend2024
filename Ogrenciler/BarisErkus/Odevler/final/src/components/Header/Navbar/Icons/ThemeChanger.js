"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { ThemeChangerWrapper } from "./styles";
import { useTranslations } from "next-intl";

const ThemeChanger = () => {
  const t = useTranslations("Header");
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  useEffect(() => {
    const button = document.querySelector(".theme-changer-button");
    if (button) {
      button.style.backgroundColor = theme === "dark" ? "#fff" : "#000";
      button.style.color = theme === "dark" ? "#000" : "#fff";
    }
  }, [theme]);

  return (
    <ThemeChangerWrapper
      className="theme-changer-button"
      onClick={changeTheme}
      theme={theme}
    >
      {t("theme")}
    </ThemeChangerWrapper>
  );
};

export default ThemeChanger;
