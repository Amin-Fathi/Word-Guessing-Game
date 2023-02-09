import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./ModalWin.module.scss";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import GameApi from "../../../api/game/index.ts";

function ModalWin(props) {
  const [numberData, setnumberData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const submitForm = () => {
    setIsLoading(true);
    GameApi.postWinGame(numberData)
      .then(() => {
        setIsLoading(false);
        props.onHide();
        console.log("yes");
      })
      .catch(() => {
        console.log("no");
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      className={`${styles.ModalWin}`}
      aria-labelledby="contained-modal-title-vcenter"
      animation={false}
      centered
    >
      <Modal.Header>
        <Button variant="default" onClick={props.onHide}>
          <img src="./Close.svg" />
        </Button>
      </Modal.Header>
      <Modal.Body className={`${styles.__container}`}>
        <Container>
          <Row className={"justify-content-center"}>
            <Col sm={11} lg={7}>
              <div className={`${styles.__baner}`}>
                <img src="./ribbon.svg" />
                <p className={`${styles.__taxt}`}>تبریک</p>
              </div>
              <p className={`${styles.__subtitle1}`}>
                <span> جواب درست</span>
                <b className={`${styles.__brand}`}>لندو</b>
                می باشد.
              </p>
              <p className={`${styles.__subtitle2}`}>
                جهت شرکت در قرعه کشی، شماره همرا تلفن خور را وارد کنید.
              </p>

              <div>
                <Form>
                  <Form.Group className={` mb-3`} controlId="formBasicEmail">
                    <Form.Control
                      className={`${styles.input}`}
                      onChange={(e) => setnumberData(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className={`${styles.__button}`} onClick={submitForm}>
          {isLoading ? (
            <Spinner animation="border" variant="light" size="sm" />
          ) : (
            <>ثبت شماره تلفن شما</>
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWin;
