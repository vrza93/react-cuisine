import React from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import warmDrinksImg from "../assets/images/warm-drinks.png";
import appetizers from "../assets/images/appetizers.png";
import mainDish from "../assets/images/main-dish.png";
import beverages from "../assets/images/cocktail.png";

function Menu() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="menu fade-in">
      <div className="menu-item" onClick={() => navigate("/warm-drinks")}>
        {t("menu.warmDrinks")} {/* Translated text */}
        <img src={warmDrinksImg} alt={t("menu.warmDrinks")} />
      </div>
      <div className="menu-item" onClick={() => navigate("/beverages")}>
        {t("menu.beverages")} <img src={beverages} alt={t("menu.beverages")} />
      </div>
      <div className="menu-item" onClick={() => navigate("/appetizers")}>
        {t("menu.appetizers")}{" "}
        <img src={appetizers} alt={t("menu.appetizers")} />
      </div>
      <div className="menu-item" onClick={() => navigate("/main-dishes")}>
        {t("menu.mainDishes")} <img src={mainDish} alt={t("menu.mainDishes")} />
      </div>
    </div>
  );
}

export default Menu;
