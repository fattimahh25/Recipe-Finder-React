import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.js";
import "../css/recipe-detail.css";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="container">
        <p>Recipe not found.</p>
        <button onClick={() => navigate("/recipes")}>Back to Recipes</button>
      </div>
    );
  }

  // ✅ Convert alert to SweetAlert
  const startCooking = () => {
    Swal.fire({
      icon: "info",
      title: "Happy Cooking! 👨‍🍳",
      text: "Enjoy making this delicious recipe!",
      confirmButtonText: "Let's Cook 🚀",
    });
  };

  const saveRecipe = () => {
    Swal.fire({
      icon: "success",
      title: "Recipe Saved! ❤️",
      text: "This recipe is now in your favorites.",
      confirmButtonText: "Great! 👍",
    });
  };

  const shareRecipe = () => {
    navigator.clipboard.writeText(window.location.href);
    Swal.fire({
      icon: "success",
      title: "Link Copied! 📋",
      text: "Recipe link copied to clipboard. Share it with your friends!",
      confirmButtonText: "Done ✅",
    });
  };

  return (
    <section className="main-section">
      <div className="container">
        <button className="back-btn" onClick={() => navigate("/recipes")}>
          ← Back to Recipes
        </button>

        <div className="recipe-card">
          <div className="recipe-hero">
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="recipe-content">
            <div className="recipe-header">
              <h1 className="recipe-title">{recipe.title}</h1>
              <p className="recipe-description">{recipe.description}</p>

              <div className="recipe-tags">
                <span className="tag">⏱️ {recipe.time}</span>
                <span className="tag">📊 {recipe.difficulty}</span>
                <span className="tag">⭐ {recipe.rating}</span>
                <span className="tag">👥 {recipe.servings} servings</span>
              </div>
            </div>

            <div className="recipe-details">
              <div className="instructions-section">
                <h2 className="section-title">Instructions</h2>
                {recipe.instructions.map((step, index) => (
                  <div className="instruction-step" key={index}>
                    <div className="step-number">{index + 1}</div>
                    <p className="step-text">{step}</p>
                  </div>
                ))}
              </div>

              <div className="sidebar">
                <h2 className="section-title">Ingredients</h2>
                <div className="ingredients-card">
                  {recipe.ingredients.map((ingredient, i) => (
                    <div className="ingredient-item" key={i}>
                      <span className="ingredient-bullet">•</span>
                      <span className="ingredient-text">{ingredient}</span>
                    </div>
                  ))}
                </div>

                <h3 className="section-title">Nutrition (per serving)</h3>
                <div className="nutrition-card">
                  <div className="nutrition-grid">
                    <div className="nutrition-item">
                      <div className="nutrition-value">{recipe.nutrition.calories}</div>
                      <div className="nutrition-label">Calories</div>
                    </div>
                    <div className="nutrition-item">
                      <div className="nutrition-value">{recipe.nutrition.protein}</div>
                      <div className="nutrition-label">Protein</div>
                    </div>
                    <div className="nutrition-item">
                      <div className="nutrition-value">{recipe.nutrition.carbs}</div>
                      <div className="nutrition-label">Carbs</div>
                    </div>
                    <div className="nutrition-item">
                      <div className="nutrition-value">{recipe.nutrition.fat}</div>
                      <div className="nutrition-label">Fat</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons with SweetAlerts */}
                <div className="action-buttons">
                  <button className="btn btn-primary" onClick={startCooking}>
                    🍳 Start Cooking
                  </button>
                  <button className="btn btn-primary" onClick={saveRecipe}>
                    💾 Save Recipe
                  </button>
                  <button className="btn btn-secondary" onClick={shareRecipe}>
                    📤 Share Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetail;
