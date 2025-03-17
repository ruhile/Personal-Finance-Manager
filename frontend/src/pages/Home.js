import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Personal Finance Manager</h1>
        <p>Track your expenses, manage your budget, and achieve financial goals easily.</p>
        <div className="hero-buttons">
          <Link to="/register" className="btn btn-primary">Get Started</Link>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <h2>💰 Expense Tracking</h2>
          <p>Record your daily expenses and categorize them effortlessly.</p>
        </div>
        <div className="feature">
          <h2>📊 Budget Insights</h2>
          <p>Get visual reports to understand your spending habits.</p>
        </div>
        <div className="feature">
          <h2>🔒 Secure & Private</h2>
          <p>Your data is safe with us. Secure authentication ensures privacy.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
