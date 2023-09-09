import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esResources from "./i18n.es.json";

const resources = {
  es: {
    translation: esResources,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLocales()[0].languageCode,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
