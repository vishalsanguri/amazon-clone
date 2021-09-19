import "./App.css";
import React, { useState } from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";

export const cartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <cartContext.Provider value={{ cart, setCart }}>
            <Route exact path="/main">
              <Header />
              <Main />
            </Route>
            <Route exact path="/cart">
              <Header />
              <Cart cart={cart} setCart={setCart} />
            </Route>
          </cartContext.Provider>
          {/* <Route exact path="/login">
            <Login />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
