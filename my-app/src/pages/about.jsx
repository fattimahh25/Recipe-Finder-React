import React, { useState } from "react";
import "../css/about.css";

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <section className="main-section">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">About FlavorFind</h1>
            <p className="page-subtitle">Your culinary journey starts here</p>
          </div>

          <div className="content-card">
            <h2 className="card-title">Our Story</h2>
            <p className="card-text">
              FlavorFind was born from a simple idea: everyone deserves access
              to amazing recipes from around the world. Founded in 2020 by a
              team of passionate food lovers and tech enthusiasts, we've grown
              into a community of over 2 million home cooks sharing their
              favorite dishes.
            </p>
            <p className="card-text">
              Our mission is to make cooking accessible, enjoyable, and
              inspiring for everyone. Whether you're a beginner looking for
              simple weeknight dinners or an experienced chef seeking new
              challenges, FlavorFind has something for you.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3 className="info-title">Our Mission</h3>
              <p className="info-text">
                To democratize cooking by providing easy access to diverse,
                tested recipes from cultures around the world.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">👥</div>
              <h3 className="info-title">Our Community</h3>
              <p className="info-text">
                A vibrant community of home cooks, professional chefs, and food
                enthusiasts sharing their passion for cooking.
              </p>
            </div>
          </div>

          <div className="content-card">
            <h2 className="card-title">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-avatar chef-bg"></div>
                <h4 className="team-name">Hussain</h4>
                <p className="team-role">Head of Recipe Development</p>
              </div>

              <div className="team-member">
                <div className="team-avatar dev-bg"></div>
                <h4 className="team-name">Fatima</h4>
                <p className="team-role">Lead Developer</p>
              </div>

              <div className="team-member">
                <div className="team-avatar manager-bg"></div>
                <h4 className="team-name">Ahmed</h4>
                <p className="team-role">Community Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
