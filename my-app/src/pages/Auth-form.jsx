import React, { useState } from "react";
import "../css/Auth-form.css";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-container">
      <div className="form-box">
        <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
        <p className="subtitle">
          {isSignUp
            ? "Sign up to get started with your journey"
            : "Sign in to continue"}
        </p>

        <form className="auth-form">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="input-field"
              required
            />
          )}
          <button type="submit" className="btn">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {!isSignUp ? (
          <p className="toggle-text">
            Don’t have an account?{" "}
            <span onClick={() => setIsSignUp(true)}>Sign Up</span>
          </p>
        ) : (
          <p className="toggle-text">
            Already have an account?{" "}
            <span onClick={() => setIsSignUp(false)}>Sign In</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
