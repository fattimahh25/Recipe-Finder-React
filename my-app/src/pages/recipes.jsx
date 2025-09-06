import React, { useState, useEffect } from "react";
import "../css/recipes.css";
import data from "../data/data.js";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const [cardsData, setCardsData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    setCardsData(data);
    setFilteredRecipes(data);

    const storedSearch = localStorage.getItem("searchTerm");
    if (storedSearch) {
      setSearchTerm(storedSearch);
      localStorage.removeItem("searchTerm");
    }
  }, []);

  useEffect(() => {
    let results = cardsData.filter((recipe) => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        category === "all" || recipe.category === category;
      const matchesDifficulty =
        difficulty === "all" || recipe.difficulty === difficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });

    setFilteredRecipes(results);
  }, [searchTerm, category, difficulty, cardsData]);

  const viewRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <section className="main-section">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">All Recipes</h1>
          <p className="page-subtitle">
            Discover thousands of delicious recipes from around the world
          </p>
        </div>

        <div className="search-filter">
          <input
            type="text"
            placeholder="Search recipes..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="filter-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
            <option value="vegetarian">Vegetarian</option>
          </select>

          <select
            className="filter-select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="recipe-grid">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div
                className="recipe-card"
                key={recipe.id}
                onClick={() => viewRecipe(recipe.id)}
              >
                <div className="recipe-image">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="recipe-content">
                  <p className="recipe-title">{recipe.title}</p>
                  <p className="recipe-description">{recipe.description}</p>
                  <div className="recipe-meta">
                    <span>⏱️ {recipe.time}</span>
                    <span>📊 {recipe.difficulty}</span>
                    <span>⭐ {recipe.rating}</span>
                  </div>
                  <button className="recipe-btn">View Recipe</button>
                </div>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
