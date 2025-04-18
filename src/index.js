import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./i18n";

// Hide Splash Screen After Page Load
// Add a delay before hiding the splash screen
window.addEventListener("load", () => {
  const splashScreen = document.getElementById("splash-screen");

  // Set a delay (e.g., 2 seconds)
  setTimeout(() => {
    splashScreen.classList.add("hide");
  }, 800); // 1000ms = 1 second
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
