import React, { useState } from "react";
import "./Auth.css";
import icon from "../../assessts/icon.png";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <section className="auth-section">
      <div className="auth-container">
        {!isSignUp && <img src={icon} alt="StackLogo" className="login-logo" />}

        <form>
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <div className="password">
              <h4>Password</h4>
              {!isSignUp && <h4>forgot password?</h4>}
            </div>
            <input type="password" name="password" id="password" />
          </label>
          <button type="submit" className="auth-btn">
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
        <p>
          {isSignUp ? "already have an account ? " : "Dont have an account?"}
          <button
            type="button"
            className="handle-switch-button"
            onClick={handleSwitch}
          >
            {isSignUp ? "Log In" : "sign up"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
