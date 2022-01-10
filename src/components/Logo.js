import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      <img src="./logo192.png" alt="logo-react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;

// L'image du logo (logo192.png) s'intègre avec une balise <img> => elle se stocke dans le public ./logo192.png

// L'image de fond s'intègre via Sass => doit etre stockée dans src. background: url(../) center/cover
