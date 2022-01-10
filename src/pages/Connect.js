import React, { useState } from "react";
import Login from "../components/Login";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Signup from "../components/Signup";

const Connect = () => {
  const [loginPage, setLoginPage] = useState(false);

  return (
    <div className="connect-page">
      <Logo />
      <Navigation />
      <div className="form-container">
        <button
          style={{ background: loginPage ? null : "salmon" }}
          onClick={() => setLoginPage(false)}
        >
          S'inscrire
        </button>
        <button
          style={{ background: loginPage ? "salmon" : null }}
          onClick={() => setLoginPage(true)}
        >
          Se connecter
        </button>

        {loginPage ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default Connect;
