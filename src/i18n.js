import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import meTranslation from "./locales/me/translation.json";
import warmDrinksEN from "./locales/en/warmDrinks.json";
import warmDrinksME from "./locales/me/warmDrinks.json";
import appetizersEN from "./locales/en/appetizers.json";
import appetizersME from "./locales/me/appetizers.json";
import beveragesEN from "./locales/en/beverages.json";
import beveragesME from "./locales/me/beverages.json";
import mainDishesEN from "./locales/en/mainDishes.json";
import mainDishesME from "./locales/me/mainDishes.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
      warmDrinks: warmDrinksEN,
      appetizers: appetizersEN,
      beverages: beveragesEN,
      mainDishes: mainDishesEN,
    },
    me: {
      translation: meTranslation,
      warmDrinks: warmDrinksME,
      appetizers: appetizersME,
      beverages: beveragesME,
      mainDishes: mainDishesME,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
