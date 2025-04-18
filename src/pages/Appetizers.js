import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Appetizers.css";

function WarmDrinks() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Get translated data from appetizers namespace
  const title = t("title", { ns: "appetizers" });
  const backToMenu = t("backToMenu", { ns: "appetizers" });
  const categories = t("categories", { ns: "appetizers", returnObjects: true });

  return (
    <div className="category-page fade-in">
      <h1>{title}</h1>

      {/* Loop through each category */}
      {Object.entries(categories).map(([catKey, category]) => (
        <div key={catKey} className="category-section">
          <h2 className="category-title">{category.title}</h2>

          <div className="items">
            {Object.entries(category.items).map(([itemKey, item]) => (
              <div className="item" key={itemKey}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>

                {item.tags && (
                  <div className="tags">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <button onClick={() => navigate("/")}>{backToMenu}</button>
    </div>
  );
}

export default WarmDrinks;
