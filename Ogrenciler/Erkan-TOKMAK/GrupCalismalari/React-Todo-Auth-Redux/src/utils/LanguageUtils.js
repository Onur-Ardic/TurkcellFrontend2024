import { Languages } from "../constants/language";
import Cookies from 'js-cookie';
import { tr, enUS } from 'date-fns/locale';

export const setSystemLanguage = (language) => {
    Cookies.set('Accept-Language', language, { expires: 365 });
};

export const getSystemLanguage = () => Cookies.get('Accept-Language') || 'tr';

export const getFnsLocale = () => {
    const lang = getSystemLanguage();
    switch (lang) {
        case Languages.TR:
            return tr; 
        case Languages.EN:
            return enUS; 
        default:
            return tr; 
    }
};

export const getLocale = () => {
    const lang = getSystemLanguage();
    switch (lang) {
        case Languages.TR:
            return Languages.TR; 
        case Languages.EN:
            return Languages.EN; 
        default:
            return tr;
    }
};