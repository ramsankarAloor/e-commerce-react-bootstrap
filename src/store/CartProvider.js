import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const cartContext = {
    cart: [...cart],
    addToCart,
    removeFromCart,
  };

  console.log("cart => ", cartContext.cart);

  function addToCart(item) {
    let flag = 0;
    let res = cart.map((product) => {
      if (product.id === item.id) {
        product.quantity++;
        flag = 1;
      }
      return product;
    });

    if (flag === 0) {
      item = { ...item, quantity: 1 };
      setCart((prevCart) => [...prevCart, item]);
    } else {
      setCart(res);
    }
  }

  function removeFromCart(id) {
    let res = cart.filter((item) => item.id !== id);
    setCart(res);
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
