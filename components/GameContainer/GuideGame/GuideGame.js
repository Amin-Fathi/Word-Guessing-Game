import { useRouter } from "next/router";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./GuideGame.module.scss";

const GuideGame = () => {
  const router = useRouter();

  return (
    <>
      <Container id={"guide"} fluid="true" className={styles.GuideGame}>
        <Row className={styles.__container}>
          <p> نام جدید ایران از 4 حرف تشکیل شده است.</p>
          <p>
            شما در هر روز یک بار فرصت شرکت در این مسابقه و در هر بار فرصت دو
            چراغ روشن دارید.
            اگر حرفی را به اشتبا انتخاب کنید، چراغ شما خاموش می شود. در پایان
            اگر نام را به درستی حدس بزنید، با وارد کردن شماره همرا خود،می توانید
            در قرعه کشی شرکت کنید.
          </p>
        </Row>
      </Container>
    </>
  );
};

export default GuideGame;
