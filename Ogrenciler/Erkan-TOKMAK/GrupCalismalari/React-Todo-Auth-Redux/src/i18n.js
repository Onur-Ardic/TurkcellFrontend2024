import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getSystemLanguage } from './utils/LanguageUtils.js';

import authEnglish from './locales/auth/auth-en.json'
import authTurkish from './locales/auth/auth-tr.json'
import todoEnglish from './locales/todo/todo-en.json'
import todoTurkish from './locales/todo/todo-tr.json'

i18n.use(initReactI18next)
    .init({
        resources: {
            en: {
                auth: authEnglish,
                todo: todoEnglish
            },
            tr: {
                auth: authTurkish,
                todo: todoTurkish,
            },
        },
        interpolation: { escapeValue: false },
        lng: getSystemLanguage(), 
        fallbackLng: 'tr',
        whitelist: ['en', 'tr'],
    });

document.documentElement.setAttribute('lang', getSystemLanguage());

export default i18n; 