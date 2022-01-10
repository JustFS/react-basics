import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>à propos</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>contact</li>
        </NavLink>
        <NavLink
          to="/connexion"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>connexion</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
