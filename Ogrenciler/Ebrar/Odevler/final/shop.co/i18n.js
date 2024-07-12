import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getSystemLanguage } from "./src/app/utils/LanguageUtils";

import navbarTurkish from "./src/app/locales/navbar/navbar-tr.json";
import navbarEnglish from "./src/app/locales/navbar/navbar-en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      navbar: navbarEnglish,
    },
    tr: {
      navbar: navbarTurkish,
    },
  },
  interpolation: { escapeValue: false },
  fallbackNS: "navbar",
  lng: getSystemLanguage(), 
  fallbackLng: "en",
  whitelist: ["en", "tr"],
});

document.documentElement.setAttribute("lang", getSystemLanguage());

export default i18n;
