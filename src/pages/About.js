import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde minima dolorem eius ullam rerum eveniet temporibus aspernatur officiis consequatur?"
  );
  const [editText, setEditText] = useState(false);

  return (
    <div className="about">
      <Logo />
      <Navigation />
      <h1>A PROPOS</h1>

      {editText ? (
        <div>
          <textarea
            onChange={(e) => setText(e.target.value)}
            defaultValue={text}
            cols="90"
            rows="2"
          ></textarea>
          <button onClick={() => setEditText(false)}>Valider édition</button>
        </div>
      ) : (
        <div>
          <p>{text}</p>
          <button onClick={() => setEditText(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default About;
