import React, { useContext } from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import styles from "./HeaderBar.module.css";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/cart-context";

const HeaderBar = (props) => {
  const cartcontext = useContext(CartContext);
  const cartArr = [...cartcontext.cart];
  const badgeNum = cartArr.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <Navbar
      variant="light"
      bg="light"
      expand="lg"
      className={`${styles["my-navbar"]}`}
    >
      <Container>
        <NavLink to="/" className="navbar-brand">
          MyShop
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link" activeclassname="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeclassname="active">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-secondary" onClick={props.onCartClick}>
          Cart <Badge bg="secondary">{badgeNum}</Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
