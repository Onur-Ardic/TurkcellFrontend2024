import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLng = () => {
    i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1 className="header">Logo</h1>
      <div style={{ display: "flex", gap: 15 }}>
        <button onClick={changeLng}>{t("ChangeLanguage")}</button>
        <button onClick={() => navigate("/login")}>{t("Login")}</button>
      </div>
    </div>
  );
};

export default Header;
