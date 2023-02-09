import React from "react";
import Letter from "../Letter";
import styles from "./Word.module.scss";

const getAriaLabel = (word, guessedTheWord) => {
  const pronouncedWord = guessedTheWord
    ? word
    : [...word]
        .map((letter, index) => (letter.disabled ? letter.letter : "blank"))
        .join(", ");

  return `Word: ${pronouncedWord}`;
};

const Word = ({ guessedTheWord, word }) => {
  const ariaLabel = getAriaLabel(word, guessedTheWord);
  const ariaDescribedBy = "word-description";

  return (
    <>
      <ul
        className={styles.Word}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      >
        {[...word].map((letter, index) => (
          <li
            className={`${styles.__Letter} ${
              letter.accepted && styles.accepted
            }`}
            key={"word" + letter.letter + index}
          >
            <span>{letter.accepted && letter.letter}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Word;
