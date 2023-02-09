import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./GiftsContainers.module.scss";
import DividerDot from "../DividerDot";
const GiftsContainers = () => {
  const router = useRouter();

  return (
    <>
      <Container id={"gifts"} fluid>
        <Row
          className={`${styles.GiftsContainers} justify-content-center align-items-center`}
        >
          <Col
            xl={6}
            sm={12}
            className={"justify-content-center align-items-center p-5"}
          >
            <Row>
              <h2 className={styles.__title}>
                <span className={styles.__count}>5 جایزه</span>
                <span className={styles.__value}>2 میلیون تومانی</span>
              </h2>
            </Row>
            <Row className={"pt-4"}>
              <DividerDot />
            </Row>
            <Row>
              <p className={styles.__text}>
                به 5 برنده خوش شانسی که بتوانند اسم جدید ایران رنتر را درست پیش
                بینی کنند، به قیر قرعه5 جایزه 2 میلیون تومانی هدیه داده می شود!
              </p>
            </Row>
          </Col>

          <Col xl={6} sm={12}>
            <Row className={"justify-content-center align-items-center"}>
              <img src="/gift.svg" className={styles.__giftImage} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GiftsContainers;
