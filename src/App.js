import "./App.css";
import React, { useState } from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
// import useCart from "./components/hooks/useCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const cartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <cartContext.Provider value={{ cart, setCart }}>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} setCart={setCart} />
            </Route>
          </cartContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
