import React from "react";
import "./digits.scss";

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const Digits = ({ onClick, lettersMiss, lettersFind }) => (
  <section className="digits-list">
    <ul>
      {letters.map((letter, index) => (
        <li
          key={index}
          onClick={() => onClick(letter)}
          className={
            lettersMiss.includes(letter) || lettersFind.includes(letter)
              ? "done"
              : ""
          }
        >
          <span>{letter}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Digits;
