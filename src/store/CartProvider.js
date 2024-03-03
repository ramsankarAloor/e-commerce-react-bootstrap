import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  const cartContext = {
    cart: [...cart],
    addToCart,
    removeFromCart,
  };

  function addToCart() {}

  function removeFromCart(id) {
    let res = cart.filter((item)=> item.id !== id)
    setCart(res)
  }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
