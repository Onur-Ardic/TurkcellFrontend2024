import i18next from 'i18next';
i18next.init({
    lng: 'en', 
    debug: true,
    resources:{
        en: {
            translation: {
                "defaultText": "hello world",
                "layoutTitle": "E-Commerce",
                "layoutDescription": "turkcell e-commerce"
            }
        },
        tr: {
            translation: {
                "defaultText": "merhaba dunya",
                "layoutTitle": "E-Ticaret",
                "layoutDescription": "turkcell e-ticaret",
            }
        }
    },
});
export default i18next;
