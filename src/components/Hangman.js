import React from "react";
import "./hangman.scss";

const Hangman = ({ lettersMiss }) => {
  return (
    <section className="hanglan-draw">
      Essais restants : {6 - lettersMiss.length}
    </section>
  );
};

export default Hangman;
