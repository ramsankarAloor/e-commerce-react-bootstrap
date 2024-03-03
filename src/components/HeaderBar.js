import { Navbar, Container, Nav, Button } from "react-bootstrap";
import styles from "./HeaderBar.module.css";

const HeaderBar = (props) => {
  return (
    <Navbar
      variant="light"
      bg="light"
      expand="lg"
      className={styles["my-navbar"]}
    >
      <Container>
        <Navbar.Brand href="/">MyShop</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Button variant="outline-secondary">Cart</Button>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
