import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../Logo";
import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Navbar bg="white" expand="xl" className={`${styles.Header}`}>
        <Container className={`${styles.__container} container-fluid`} >
          <Navbar.Toggle className={`${styles.__navbarToggler}`} aria-controls="basic-navbar-nav" />
          <Link href={"#"}>
            <Navbar.Brand >
              <Logo  className={`${styles.__logo}`} />
            </Navbar.Brand>
          </Link>

          <Navbar.Collapse
            className="justify-content-end "
            id="basic-navbar-nav"
          >
            <Nav className="mr-auto gap-5 h6">
              <Link href={"#home"}>
                <Nav.Link
                  as={"a"}
                  href={"#home"}
                  active={router.pathname === "#home"}
                >
                  خانه
                </Nav.Link>
              </Link>
              <Link href={"#gifts"}>
                <Nav.Link
                  as={"a"}
                  href={"#gifts"}
                  active={router.pathname === "#gifts"}
                >
                  جوایز
                </Nav.Link>
              </Link>
              <Link href={"#guide"}>
                <Nav.Link
                  as={"a"}
                  href={"#guide"}
                  active={router.pathname === "#guide"}
                >
                  راهنما
                </Nav.Link>
              </Link>
            </Nav>
            {/*        <Form inline>
                        <Button variant="outline-primary">Search</Button>
                    </Form>*/}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
