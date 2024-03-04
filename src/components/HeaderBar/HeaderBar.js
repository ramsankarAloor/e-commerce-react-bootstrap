import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import styles from "./HeaderBar.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderBar = (props) => {

  const cartcontext = useContext(CartContext)
  const cartArr = [...cartcontext.cart]
  const badgeNum = cartArr.reduce((acc, product)=> acc+product.quantity, 0)
  return (
    <Navbar
      variant="light"
      bg="light"
      expand="lg"
      className={`${styles["my-navbar"]}`}
    >
      <Container>
        <Navbar.Brand href="/">MyShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-secondary" onClick={props.onCartClick}>Cart <Badge bg="secondary">{badgeNum}</Badge></Button>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
