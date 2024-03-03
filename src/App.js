import HeaderBar from "./components/HeaderBar/HeaderBar";
import ProductCards from "./components/Products/ProductCards";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false)

    function handleClose(){
        setShowCart(false)
    }

    function handleOpen(){
      setShowCart(true)
    }

  return (
    <CartProvider>
      {showCart && <Cart onClose={handleClose} show={showCart}/>}
      <HeaderBar onCartClick={handleOpen}/>
      <ProductCards />
    </CartProvider>
  );
}

export default App;
