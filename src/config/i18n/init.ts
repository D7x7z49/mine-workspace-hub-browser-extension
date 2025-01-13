import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const backendOptions = {
  loadPath: '/locales/{{lng}}/{{ns}}.json',
  addPath: '/locales/add/{{lng}}/{{ns}}',
  saveMissing: true,
};

const i18nConfig = {
  saveMissing: true,
  debug: process.env.NODE_ENV === 'development',
  ns: ['common', 'page', 'errors'],
  defaultNS: 'common',
  supportedLngs: ['en', 'zh'],
  fallbackLng: 'en',
  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'navigator'],
    caches: ['localStorage', 'cookie'],
  },
  backend: backendOptions,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
};

i18n.use(LanguageDetector).use(Backend).use(initReactI18next).init(i18nConfig);

i18n.on('failedLoading', (lng, ns, msg) => {
  console.error(`Failed to load resource for language ${lng} and namespace ${ns}:`, msg);
});

export default i18n;
export { i18nConfig };
