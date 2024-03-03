import React from "react";

const CartContext = React.createContext({
    cart : [],
    addToCart: function(item){},
    removeFromCart: function(id){}
})

export default CartContext