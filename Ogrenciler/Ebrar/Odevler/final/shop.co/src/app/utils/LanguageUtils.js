import { LANGUAGE_CODES } from "../constants/language";
import Cookies from "js-cookie";
import { tr, enUS } from "date-fns/locale";

export const setSystemLanguage = (language) => {
  Cookies.set("Accept-Language", language, { expires: 365 });
};


export const getSystemLanguage = () => Cookies.get("Accept-Language") || "enUS";

export const getFnsLocale = () => {
  const lang = getSystemLanguage();
  switch (lang) {
    case LANGUAGE_CODES.TR:
      return tr; 
    case LANGUAGE_CODES.EN:
      return enUS; 
    default:
      return enUS;
  }
};


export const getLocale = () => {
  const lang = getSystemLanguage();
  switch (lang) {
    case LANGUAGE_CODES.TR:
      return LANGUAGE_CODES.TR; 
    case LANGUAGE_CODES.EN:
      return LANGUAGE_CODES.EN; 
    default:
      return enUS;
  }
};
