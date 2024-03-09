import React, { useContext, useState } from "react";
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
import AuthContext from "./store/auth-context";

const baseUrl = 'https://crudcrud.com/api/5597a6b3c5244d59bc667a13a4c0bdfd'

function App() {
  const authCtx = useContext(AuthContext);
  const [showCart, setShowCart] = useState(false);

  function handleClose() {
    setShowCart(false);
  }

  async function handleOpen() {
    const response = await fetch(`${baseUrl}/cart${authCtx.email}`, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    const data = await response.json()
    console.log('cart from db => ', data)

    setShowCart(true);
  }

  return (
    <ProductsProvider>
      <CartProvider>
        {showCart && <Cart onClose={handleClose} show={showCart} />}
        <HeaderBar onCartClick={handleOpen} />
        <Switch>
          <Route exact path="/">
            {authCtx.isLoggedIn ? (
              <Redirect to="/products"></Redirect>
            ) : (
              <Redirect to="/auth"></Redirect>
            )}
          </Route>
          <Route exact path="/products">
            {authCtx.isLoggedIn ? (
              <ProductCards />
            ) : (
              <Redirect to="/auth"></Redirect>
            )}
          </Route>
          <Route path="/products/:productId">
            {authCtx.isLoggedIn ? (
              <ProductDetail />
            ) : (
              <Redirect to="/auth"></Redirect>
            )}
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
          <Route path="*">
            <h3>Page not found</h3>
          </Route>
        </Switch>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
