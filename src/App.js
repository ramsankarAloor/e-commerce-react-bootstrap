import React, { useState } from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import ProductCards from "./components/Products/ProductCards";
import Cart from "./components/Cart/Cart";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import About from "./components/About/About";
import CartProvider from "./store/CartProvider";
import Contact from "./components/Contact/Contact";

function App() {
  const [showCart, setShowCart] = useState(false);

  function handleClose() {
    setShowCart(false);
  }

  function handleOpen() {
    setShowCart(true);
  }

  return (
    <CartProvider>
      {showCart && <Cart onClose={handleClose} show={showCart} />}
      <HeaderBar onCartClick={handleOpen} />
      <Route exact path="/">
        <ProductCards />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </CartProvider>
  );
}

export default App;
