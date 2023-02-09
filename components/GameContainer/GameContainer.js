import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./GameContainer.module.scss";
import GuideGame from "./GuideGame";
import Alphabet from "./Alphabet";
import Word from "./Word";
import Chances from "./Chances";
import ModalLost from "./ModalLost";
import ModalWin from "./ModalWin";
import DividerDot from "../DividerDot";
import GameApi from "../../api/game/index.ts";
import { WORD, LETTERS, CHANCE } from "../../constant";

const GameContainer = () => {
  const [letters, setLetters] = useState([]);
  const [word, setWord] = useState([]);
  const [guessedTheWord, setGuessedTheWord] = useState();
  const [guessedLetters] = useState(new Set());
  const [guessesChance, setGuessesChance] = useState(CHANCE);
  const [modalLostShow, setModalLostShow] = useState(false);
  const [modalWinShow, setModalWinShow] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const getLettersArray = (alphabet) => {
    return Array.from(alphabet).map((letter) => ({
      letter,
      failed: false,
      accepted: false,
    }));
  };
  //on select letter
  const onSelectLetter = (selectedLetter) => {
    if (guessesChance > 0 && !guessedTheWord && !isLoading) {
      let guesseTrue = false;
      const alreadyGuessedLetter = guessedLetters.has(selectedLetter);

      word.forEach((letter) => {
        if (letter.letter === selectedLetter) {
          guesseTrue = true;
          letter.accepted = true;
        }
      });

      if (!alreadyGuessedLetter) {
        guessedLetters.add(selectedLetter);
        const letter = letters.find(
          (letter) => letter.letter === selectedLetter
        );

        if (letter && guesseTrue) {
          letter.accepted = true;
        } else {
          letter.failed = true;
        }

        const guessedTheWord2 = word
          .filter((letter) => !["-", " "].includes(letter.letter))
          .every((letter) => guessedLetters.has(letter.letter));

        const lettersFoundInWord =
          word.filter((letter) => letter.letter === selectedLetter).length > 0;

        if (guessedTheWord2) {
          setGuessedTheWord(true);
        } else if (!alreadyGuessedLetter && !lettersFoundInWord) {
          setisLoading(true);
          GameApi.postLostChance().then(() => {
            setisLoading(false);
            setGuessesChance(guessesChance - 1);
          });
        }

        setLetters([...letters]);
        setWord([...word]);
      } else {
        console.log("duplicate word");
      }
    } else {
      if (guessedTheWord) {
        setModalWinShow(true);
      }
      if (guessesChance < 1) {
        setModalLostShow(true);
      }
    }
  };

  useEffect(() => {
    setLetters(getLettersArray(LETTERS));
    setWord(getLettersArray(WORD));
    setisLoading(true);
    GameApi.getAllowGame().then((response) => {
      setGuessesChance(response.data.chance);
      setisLoading(false);
    });
  }, []);

  useEffect(() => {
    if (guessesChance === 0) setModalLostShow(true);
  }, [guessesChance]);

  useEffect(() => {
    if (guessedTheWord) setModalWinShow(true);
  }, [guessedTheWord]);

  useEffect(() => {}, [isLoading]);

  return (
    <>
      <Container id={"game"} fluid="true" className={`${styles.GameContainer}`}>
        <Row className={`justify-content-center align-items-center`}>
          <div className={`${styles.__border}`}>
            <div className={`${styles.__main}`}>
              <Container fluid="true">
                <Row className={"justify-content-center align-items-center"}>
                  <Col
                    xl={9}
                    sm={12}
                    className={"justify-content-start align-items-center mt-2"}
                  >
                    <Row>
                      <p className={`${styles.__title}`}>حدس بزن جایزه ببر!</p>
                    </Row>

                    <Row>
                      <div className={`${styles.__dividerDot}`}>
                        <DividerDot />
                      </div>
                    </Row>
                    <Row>
                      <GuideGame />
                    </Row>
                  </Col>
                </Row>

                <Row className={`${styles.__game}`}>
                  <Alphabet
                    isLoading={isLoading}
                    letters={letters}
                    onClick={onSelectLetter}
                    column={5}
                  />
                  <Chances defaulteChance={CHANCE} remainingChance={guessesChance} />
                  <Word word={word} guessedTheWord={guessedTheWord} />
                </Row>
              </Container>
            </div>
          </div>
        </Row>
      </Container>

      <ModalLost show={modalLostShow} onHide={() => setModalLostShow(false)} />
      <ModalWin show={modalWinShow} onHide={() => setModalWinShow(false)} />
    </>
  );
};

export default GameContainer;
