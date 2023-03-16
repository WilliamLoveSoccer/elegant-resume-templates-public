import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales';

let userLanguage = 'en';
const defaultLanguage = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;

if (defaultLanguage.includes('zh')) {
    userLanguage = 'zh';
} else {
    userLanguage = 'en';
}

i18n.use(initReactI18next).init({
    resources,
    lng: userLanguage,
    fallbackLng: 'en',
});
// console.log(userLanguage, 'test');
export default i18n;
