import React, { useState } from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import ProductCards from "./components/Products/ProductCards";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  function handleClose() {
    setShowCart(false);
  }

  function handleOpen() {
    setShowCart(true);
  }

  return (
    <Router>
      <CartProvider>
        {showCart && <Cart onClose={handleClose} show={showCart} />}
        <HeaderBar onCartClick={handleOpen} />
        <Routes>
          <Route path="/" element={<ProductCards />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
