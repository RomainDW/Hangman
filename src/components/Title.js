import React from "react";
import "./title.scss";

const Title = ({ content, lettersFind, gameOver }) => {
  const sentence = content.split(/[ ,]+/);
  const words = sentence.map(word => word.split(""));
  const letters = words.map((word, index) => (
    <ul className={`word ${gameOver ? "over" : ""}`} key={index}>
      {word.map((letter, index) => (
        <li
          key={index}
          className={lettersFind.includes(letter) ? "finded" : ""}
        >
          <span>{letter}</span>
        </li>
      ))}
    </ul>
  ));
  return <section className="sentence">{letters}</section>;
};

export default Title;
