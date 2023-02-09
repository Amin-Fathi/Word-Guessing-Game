import "../styles/globals.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
