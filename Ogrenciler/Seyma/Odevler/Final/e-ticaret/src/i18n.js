import i18next from 'i18next';
i18next.init({
    lng: 'en', 
    debug: true,
    resources:{
        en: {
            translation: {
                "defaultText": "hello world",
                "layoutTitle": "E-Commerce",
                "layoutDescription": "turkcell e-commerce",
                "menuItem1":"Home"
            }
        },
        tr: {
            translation: {
                "defaultText": "merhaba dunya",
                "layoutTitle": "E-Ticaret",
                "layoutDescription": "turkcell e-ticaret",
                "menuItem1":"Ana Sayfa"
            }
        }
    },
});
export default i18next;
