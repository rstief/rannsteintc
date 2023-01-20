import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationDe from "./translation-de.json";
import translationEn from "./translation-en.json";

const language: string = localStorage.getItem("language") ?? 'en';

i18n
    .use(initReactI18next)
    .init({
        lng: language,
        fallbackLng: 'en',
        supportedLngs: ['en', 'de', 'dev'],
        debug: true,
        resources: {
            en: translationEn,
            de: translationDe
        }
    });

export default i18n;