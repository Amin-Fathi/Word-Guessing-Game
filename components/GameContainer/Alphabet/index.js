import React from "react";
import Letter from "../Letter";
import styles from "./Alphabet.module.scss";

/*
 *Divide the columns and build each row into a separate array
 * return [[],[],...]
 */
const columnSplite = (columnNo, array) => {
  const countLoop = array.length / columnNo;
  let newArray = [];
  let start = 0;
  let end = columnNo;
  for (let i = 0; i < countLoop; i++) {
    newArray.push(array.slice(start, end));
    start = end;
    end = start + columnNo;
  }
  return newArray;
};

const Alphabet = ({ letters, onClick, column,isLoading }) => {
  const lettersParent = columnSplite(column, letters);

  return (
    <>
      <div className={styles.Alphabet}>
        {lettersParent.map((lettersItem, index) => {
          return (
            <ul key={"alphabetCo" + index} className={styles.__AlphabetRow}>
              {lettersItem.map((letter, index) => {
                return (
                  <Letter
                    key={"alphabet1" + letter.letter + index}
                    letter={letter.letter}
                    failed={letter.failed}
                    accepted={letter.accepted}
                    onClick={onClick}
                    isLoading={isLoading}
                    role="button"
                  />
                );
              })}
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Alphabet;
