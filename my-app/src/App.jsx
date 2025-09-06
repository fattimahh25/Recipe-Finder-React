import React from 'react';
import Navbar from './components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Home from './pages/home.jsx';
import Recipes from './pages/recipes.jsx';
import RecipeDetail from './pages/recipe-detail.jsx';
import Categories from './pages/categories.jsx';
import About from './pages/about.jsx';
import AuthForm from './pages/Auth-form.jsx';
import Contact from './pages/contact.jsx'; 
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth-form" element={<AuthForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />


    </>
  );
}

export default App;   
