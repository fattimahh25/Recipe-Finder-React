import React, { useEffect, useState } from "react";
import data from "../data/data.js"; 
import "../css/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2

function Home() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [cardsData, setCardsData] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [displayedRecipes, setDisplayedRecipes] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCardsData(data);
  }, []);

  const filteredRecipes =
    currentFilter === "all"
      ? cardsData
      : cardsData.filter((r) => r.category === currentFilter);

  const recipesToShow = filteredRecipes.slice(0, displayedRecipes);

  const filterRecipes = (category) => {
    setCurrentFilter(category);
    setDisplayedRecipes(6);
  };

  // ✅ SweetAlert in search
  const searchRecipes = () => {
    if (searchTerm.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please enter a search term!",
      });
      return;
    }
    localStorage.setItem("searchTerm", searchTerm);
    navigate("/recipes");
  };

  // ✅ SweetAlert in load more
  const loadMoreRecipes = () => {
    setDisplayedRecipes(displayedRecipes + 3);
    Swal.fire({
      icon: "success",
      title: "More Recipes Loaded!",
      text: "Scroll down to explore the new recipes 🍽️",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const viewRecipe = (id) => {
    navigate(`/recipe/${id}`); 
  };

  // ✅ SweetAlert in surprise me
  const surpriseMe = () => {
    const surpriseRecipes = [
      {
        title: "Exotic Dragon Fruit Smoothie Bowl",
        cuisine: "Tropical Fusion",
        time: "10 min",
        description:
          "A vibrant pink smoothie bowl topped with coconut flakes and chia seeds",
        emoji: "🐉🥣",
      },
      {
        title: "Moroccan Spiced Lamb Tagine",
        cuisine: "North African",
        time: "2 hours",
        description:
          "Slow-cooked lamb with apricots, almonds, and aromatic spices",
        emoji: "🍖🌶️",
      },
      {
        title: "Japanese Matcha Mochi Ice Cream",
        cuisine: "Japanese",
        time: "45 min",
        description: "Soft mochi wrapped around creamy matcha ice cream",
        emoji: "🍡🍦",
      },
    ];
    const randomRecipe =
      surpriseRecipes[Math.floor(Math.random() * surpriseRecipes.length)];

    Swal.fire({
      title: "🎉 Surprise Recipe!",
      html: `
        <h3>${randomRecipe.emoji} ${randomRecipe.title}</h3>
        <p><strong>${randomRecipe.cuisine}</strong> • ${randomRecipe.time}</p>
        <p>${randomRecipe.description}</p>
      `,
      confirmButtonText: "Yummy! 😋",
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container fade-in">
          <h1>
            Discover Your Next{" "}
            <span className="highlight">Favorite Recipe</span>
          </h1>
          <p>
            Explore thousands of delicious recipes from around the world. Find
            the perfect dish for any occasion.
          </p>

          {/* Search */}
          <div className="search-container">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for recipes, ingredients, or cuisines..."
              className="search-input"
              onKeyPress={(e) => e.key === "Enter" && searchRecipes()}
            />
            <button onClick={searchRecipes} className="search-btn">
              🔍 Search
            </button>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <button onClick={surpriseMe} className="surprise-btn">
              🎲 Surprise Me!
            </button>
            <button className="app-btn">📱 Get App</button>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="category-section">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <div className="category-buttons">
            {["all", "breakfast", "lunch", "dinner", "dessert", "vegetarian"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => filterRecipes(cat)}
                  className={`category-btn ${
                    currentFilter === cat ? "active" : ""
                  }`}
                >
                  {cat === "all" && "All Recipes"}
                  {cat === "breakfast" && "🥞 Breakfast"}
                  {cat === "lunch" && "🥗 Lunch"}
                  {cat === "dinner" && "🍝 Dinner"}
                  {cat === "dessert" && "🍰 Dessert"}
                  {cat === "vegetarian" && "🥬 Vegetarian"}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="recipes-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-title">Featured Recipes</h2>
            <p style={{ fontSize: "1.25rem", color: "#6b7280" }}>
              Hand-picked favorites from our community
            </p>
          </div>

          <div id="recipeGrid" className="recipe-grid">
            {recipesToShow.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card"
                onClick={() => viewRecipe(recipe.id)}
                data-aos="fade-up"
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
            ))}
          </div>

          {/* Load More Button */}
          <div className="load-more">
            <button onClick={loadMoreRecipes} className="load-more-btn">
              Load More Recipes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
