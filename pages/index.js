import styled from "../styles/Home.module.scss";

import TargetGameContainer from "../components/TargetGameContainer";
import Container from "react-bootstrap/Container";
import GiftsContainers from "../components/GiftsContainers";
import GameContainer from "../components/GameContainer";

export default function Home() {
  return (
    <>
      <Container className={styled.container}>
        <TargetGameContainer />
        <GiftsContainers />
        <GameContainer />
      </Container>
    </>
  );
}
