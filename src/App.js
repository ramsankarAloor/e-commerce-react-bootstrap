import React, { useState } from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import ProductCards from "./components/Products/ProductCards";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <HeaderBar onCartClick={handleOpen} />
        <Routes>
          <Route path="/" element={<ProductCards />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
