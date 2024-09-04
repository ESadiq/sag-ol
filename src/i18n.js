import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import azTranslations from './locales/az/translation.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      az: {
        translation: azTranslations
      }
    },
    lng: "en", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

