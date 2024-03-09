import React, { useContext } from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import styles from "./HeaderBar.module.css";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

const HeaderBar = (props) => {
  const authCtx = useContext(AuthContext);
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
            {authCtx.isLoggedIn && (
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName={styles.active}
              >
                Products
              </NavLink>
            )}
            <NavLink
              to="/about"
              className="nav-link"
              activeClassName={styles.active}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName={styles.active}
            >
              Contact
            </NavLink>
            {!authCtx.isLoggedIn && (
              <NavLink
                to="/auth"
                className="nav-link"
                activeClassName={styles.active}
              >
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
        {authCtx.isLoggedIn && (
          <div style={{ display: "flex", gap: "10px" }}>
            <Button variant="outline-secondary" onClick={props.onCartClick}>
              Cart <Badge bg="secondary">{badgeNum}</Badge>
            </Button>
            <Button variant="outline-secondary" onClick={authCtx.logout}>
              Logout
            </Button>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
