import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./TargetGameContainer.module.scss";
import Button from "react-bootstrap/Button";
import Countdown from "../Countdown";

const TargetGameContainer = () => {
  const router = useRouter();
const countDownEndData  = "2021/10/28 24:00:00"
  return (
    <>
      <Container id={"home"} className={`${styles.TargetGameContainer}`} fluid="true">
        <img src={"/cloud1.svg"} className={`${styles.__cloud1}`} />
        <img src={"/cloud2.svg"} className={`${styles.__cloud2}`} />

        <Row className={`${styles.__main}  justify-content-sm-center`}>
          <img src={"/Sign.svg"} className={`${styles.__showLogo}`} />
          <Col sm={12} md={12} xl={8}>
            <Row className={`align-content-end`}>
              <Col className={`${styles.__description} align-item-start`}>
                <Row className={`${styles.__countDownContainer}`}>
                  <Countdown endDate={countDownEndData} />
                </Row>
                <Row xs={8} className={`${styles.__description__text} gap-3`}>
                  <h2 className={`${styles.__title} h3`}>
                    فصل نو شدن ایران رنتر!
                  </h2>
                  <div className={`${styles.__text}`}>
                    ایران رنتز قصد دارد همزمان با سالگرد پنجمین سال فعالیتش،
                    <span className={` ${styles._bolder}`}>
                      در اول اردیبهشت 1399 تمامی عناصر برند خود را باز آفرینی
                      کند.
                    </span>
                    <br/>
                      شما می توانید با شرکت در این مسابقه نام جدید ایران رنتر را
                      حدس بزنید.
                    
                  </div>
                </Row>
                <Row className={"justify-content-center mt-4 "}>
                <Link href={"#game"}>
                  <Button className={`${styles.__startButton}`}>
                    شروع مسابقه
                  </Button>
                  </Link>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          className={`${styles.__description__container} justify-content-center`}
        />
      </Container>
    </>
  );
};

export default TargetGameContainer;
