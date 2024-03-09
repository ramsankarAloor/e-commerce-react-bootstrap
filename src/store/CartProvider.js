import { useContext, useState } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

const baseUrl = 'https://crudcrud.com/api/5597a6b3c5244d59bc667a13a4c0bdfd'

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext)
  const [cart, setCart] = useState([]);

  const cartContext = {
    cart: [...cart],
    addToCart,
    removeFromCart,
  };

  async function addToCart(item) {
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

    const response = await fetch(`${baseUrl}/cart${authCtx.email}`, {
      method: 'POST',
      body : JSON.stringify({
        item
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    console.log(response)
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
