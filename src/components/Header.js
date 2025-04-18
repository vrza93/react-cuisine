import React from "react";
import "./Header.css";
import logo from "../assets/images/your_logo.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page when the logo is clicked
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" onClick={handleLogoClick} />
      <h1>{t("header.welcome")}</h1>
      <h2>{t("header.chooseLanguage")}</h2>
      <select className="lang-select" onChange={handleLanguageChange}>
        <option value="en">Eglish</option>
        <option value="me">Montenegrin</option>
      </select>
    </header>
  );
}

export default Header;
