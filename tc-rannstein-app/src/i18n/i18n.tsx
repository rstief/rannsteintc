import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationDe from "./translation-de.json";
import translationEn from "./translation-en.json";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'de'],
        debug: true,
        resources: {
            en: translationEn,
            de: translationDe
        }
    });

export default i18n;