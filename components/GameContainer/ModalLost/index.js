import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./ModalLost.module.scss";
function ModalLost(props) {
  return (
    <Modal
      {...props}
      size="lg"
      className={`${styles.ModalLost}`}
      aria-labelledby="contained-modal-title-vcenter"
      animation={false}
      centered
    >
      <Modal.Header>
        <button className="btn default" onClick={props.onHide}>
          <img src="./Close.svg" />
        </button>
      </Modal.Header>
      <Modal.Body className={`${styles.__container}`}>
        <p className={`${styles.__text}`}>فرصت امروز شما تمام شده است</p>
        <p className={`${styles.__text}`}>
          می توانید فردا مجددا در مسابقه شرکت کنید.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className={`${styles.__button}`} onClick={props.onHide}>
          بسیار خوب
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLost;
