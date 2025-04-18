import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import WarmDrinks from "./pages/WarmDrinks";
import Appetizers from "./pages/Appetizers";
import Beverages from "./pages/Beverages";
import MainDishes from "./pages/MainDishes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/warm-drinks" element={<WarmDrinks />} />
        <Route path="/appetizers" element={<Appetizers />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/main-dishes" element={<MainDishes />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
