import React, { Component } from "react";
import Digits from "./components/Digits";
import Title from "./components/Title";
import Hangman from "./components/Hangman";

const SENTENCE = "Je suis romain".toUpperCase();
const SENTENCE_NO_SPACES = SENTENCE.split(" ").join("");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lettersMiss: [],
      lettersFind: [],
      gameStart: true,
      gameOver: false,
      won: false,
      limitToWin: this.removeDuplicateCharacters(SENTENCE_NO_SPACES).length,
      limitToLose: 6
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.lettersMiss !== prevState.lettersMiss ||
      this.state.lettersFind !== prevState.lettersFind
    ) {
      if (this.state.lettersMiss.length === this.state.limitToLose) {
        this.setState({ gameOver: true, won: false });
        return;
      }

      if (this.state.lettersFind.length === this.state.limitToWin) {
        this.setState({ gameOver: true, won: true });
        return;
      }
    }
  }

  removeDuplicateCharacters(string) {
    return string
      .split("")
      .filter(function(item, pos, self) {
        return self.indexOf(item) === pos;
      })
      .join("");
  }

  handleDigitClick = letter => {
    const { lettersMiss, lettersFind } = this.state;

    if (lettersMiss.includes(letter) || lettersFind.includes(letter)) {
      return;
    }

    if (this.isInSentence(letter)) {
      this.setState({ lettersFind: [...lettersFind, ...letter] });
      return;
    }

    this.setState({ lettersMiss: [...lettersMiss, ...letter] });
  };

  isInSentence(letter) {
    return SENTENCE.includes(letter);
  }

  render() {
    return (
      <div className="Hangman">
        <h1>Jeux du Pendu</h1>
        <h2>Développé par Romain Ollier</h2>
        <hr />
        <Hangman lettersMiss={this.state.lettersMiss} />
        <Title
          content={SENTENCE}
          lettersFind={this.state.lettersFind}
          gameOver={this.state.gameOver}
        />
        {this.state.gameOver ? (
          <h3>{this.state.won ? "Vous avez gagné" : "Vous avez perdu"}</h3>
        ) : (
          <Digits
            onClick={this.handleDigitClick}
            lettersMiss={this.state.lettersMiss}
            lettersFind={this.state.lettersFind}
          />
        )}
      </div>
    );
  }
}

export default App;
