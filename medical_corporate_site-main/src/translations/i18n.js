import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { sv } from "./sv";
import { pl } from "./pl";

i18n.use(initReactI18next).init({
  resources: { sv: sv, en: en, pl: pl },
  lng: "sv",
  fallbackLng: "sv",
  react: { useSuspence: true },
  interpolation: { escapeValue: false },
});

export default i18n;
