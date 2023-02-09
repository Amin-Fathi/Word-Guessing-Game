import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "./Footer.module.scss";

const Footer = () => (
  <>
    <Container className={`${styles.Footer}`}>
      <Row>
        <Col>
          <Container>
            <Row className={`${styles.__infoContainer} justify-content-center align-items-center `}>
              <Col xl={6} sm={12}>
                <Row
                  className={`${styles.__right} justify-content-end align-items-center`}
                >
                  <Col xs="auto">
                    <img
                      src={"/phone.svg"}
                      className={`${styles.__rightIcon} ${styles.__icon}`}
                    />
                    <Button
                      variant="primary"
                      className={`${styles.__iconButton}`}
                    >
                      <img src={"/phone.svg"} className={styles.__icon} />
                    </Button>
                  </Col>
                  <Col xs="auto">
                    <p className={styles.__caption}>تماس با ایران رنتر</p>
                  </Col>
                  <Col xs="auto">
                    <p className={styles.__value}>021-24409000</p>
                  </Col>
                </Row>
              </Col>
              <div className={`${styles.__divider}`} />
              <Col xl={6} sm={12}>
                <Row
                  className={`${styles.__left} justify-content-start align-items-center`}
                >
                  <Col xs="auto">
                    <img
                      src={"/social.svg"}
                      className={`${styles.__rightIcon} ${styles.__icon}`}
                    />

                    <Button
                      variant="primary"
                      className={`${styles.__iconButton}`}
                    >
                      <img
                        src={"/instagrambtn.svg"}
                        className={styles.__icon}
                      />
                    </Button>
                  </Col>
                  <Col xs="auto">
                    <p className={styles.__caption}>
                      ایران رنتر در شبکه اجتماعی اینستاگرام
                    </p>
                  </Col>
                  <Col xs="auto">
                    <Button
                      variant="primary"
                      className={`${styles.__ButtonInsta}`}
                    >
                      <img
                        src={"/instagrambtn.svg"}
                        className={styles.__icon}
                      />
                      اینستاگرام
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className={`${styles.__copyrightsContainer}`}>
        <p className={`${styles.__copyrightsText}`}>
          کلیه حقوق این سایت متعلق به شرکت ایران رنتر می باشد{" "}
          <span  className={`${styles.__en}`}>Copyrights - Iranrenter Co. - 1394 © </span>
        </p>
      </Row>
    </Container>
  </>
);

export default Footer;
