import React from "react";
import "../css/categories.css";

const Categories = () => {
  const filterByCategory = (category) => {
    localStorage.setItem("categoryFilter", category);
    window.location.href = "/recipes";
  };

  return (
    <section className="main-section">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Recipe Categories</h1>
          <p className="page-subtitle">
            Explore recipes by category and cuisine type
          </p>
        </div>

        <div className="category-grid">
          <div
            className="category-card"
            onClick={() => filterByCategory("breakfast")}
          >
            <div className="category-image breakfast-bg"></div>
            <div className="category-content">
              <h3 className="category-title">Breakfast</h3>
              <p className="category-description">
                Start your day with delicious morning meals
              </p>
              <div className="category-count">156 Recipes</div>
            </div>
          </div>

          <div
            className="category-card"
            onClick={() => filterByCategory("lunch")}
          >
            <div className="category-image lunch-bg"></div>
            <div className="category-content">
              <h3 className="category-title">Lunch</h3>
              <p className="category-description">
                Perfect midday meals and light dishes
              </p>
              <div className="category-count">243 Recipes</div>
            </div>
          </div>

          <div
            className="category-card"
            onClick={() => filterByCategory("dinner")}
          >
            <div className="category-image dinner-bg"></div>
            <div className="category-content">
              <h3 className="category-title">Dinner</h3>
              <p className="category-description">
                Hearty evening meals for the whole family
              </p>
              <div className="category-count">387 Recipes</div>
            </div>
          </div>

          <div
            className="category-card"
            onClick={() => filterByCategory("dessert")}
          >
            <div className="category-image dessert-bg"></div>
            <div className="category-content">
              <h3 className="category-title">Desserts</h3>
              <p className="category-description">
                Sweet treats and indulgent desserts
              </p>
              <div className="category-count">198 Recipes</div>
            </div>
          </div>

          <div
            className="category-card"
            onClick={() => filterByCategory("vegetarian")}
          >
            <div className="category-image vegetarian-bg"></div>
            <div className="category-content">
              <h3 className="category-title">Vegetarian</h3>
              <p className="category-description">
                Plant-based meals full of flavor
              </p>
              <div className="category-count">289 Recipes</div>
            </div>
          </div>

          <div
            className="category-card"
            onClick={() => filterByCategory("international")}
          >
            <div className="category-image international-bg"></div>
            <div className="category-content">
              <h3 className="category-title">International</h3>
              <p className="category-description">
                Flavors from around the world
              </p>
              <div className="category-count">412 Recipes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
