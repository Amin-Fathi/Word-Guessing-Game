import React from "react";
import classNames from "classnames";
import styles from "./Letter.module.scss";
import Spinner from "react-bootstrap/Spinner";
const Letter = ({ failed, accepted, letter, onClick, isLoading = false }) => {
  const disabled = failed || accepted;
  const classes = classNames(
    styles.Letter,
    accepted && styles.accepted,
    failed && styles.failed,
    disabled && styles.disabled
  );
  
  return (
    <li
      disabled={disabled}
      className={classes}
      onClick={() => onClick(letter)}
      aria-disabled={disabled ? "true" : false}
    >
      {!isLoading ? (
        <span>{letter}</span>
      ) : (
        <Spinner animation="border" variant="primary" size="sm" />
      )}
    </li>
  );
};

export default Letter;
