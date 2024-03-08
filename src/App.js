import React, { useState } from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import ProductCards from "./components/Products/ProductCards";
import Cart from "./components/Cart/Cart";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./components/About/About";
import CartProvider from "./store/CartProvider";
import Contact from "./components/Contact/Contact";
import ProductDetail from "./components/ProductDetail";
import ProductsProvider from "./store/ProductsProvider";
import AuthForm from "./components/AuthForm";

function App() {
  const [showCart, setShowCart] = useState(false);

  function handleClose() {
    setShowCart(false);
  }

  function handleOpen() {
    setShowCart(true);
  }

  return (
    <ProductsProvider>
      <CartProvider>
        {showCart && <Cart onClose={handleClose} show={showCart} />}
        <HeaderBar onCartClick={handleOpen} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/products"></Redirect>
          </Route>
          <Route exact path="/products">
            <ProductCards />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/auth">
            <AuthForm />
          </Route>
        </Switch>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
