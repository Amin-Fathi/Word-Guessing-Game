import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Chances.module.scss";

const Chances = ({ defaulteChance, remainingChance }) => {
  return (
    <div className={styles.Chances}>
      <Row className={"justify-content-center align-items-center"}>
        {Array.from(Array(defaulteChance), (e, i) => {
          return (
            <div
              className={`${styles.__btn}  ${
                i >= remainingChance && styles.failed
              }`}
              key={"chance"+ i}
            ></div>
          );
        })}
      </Row>
    </div>
  );
};

export default Chances;
