import "./App.css";
import React, { useState } from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Register from "./components/Login/Register";
import Buy from "./components/Buy/Buy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import MenClothing from "./components/MenClothing/MenClothing";
import useContext from "./components/Context/Context";
import SingleBuy from "./components/Buy/SingleBuy";

export const cartContext = React.createContext();
export const currentContext = React.createContext();
function App() {
  const [currentitem, setCurrentitem] = useContext();
  const [confirm, setConfirm] = useState({ ok: false });
  const [userInfo, setUserInfo] = useState({ name: "", location: "" });
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Switch>
          {confirm.ok == false ? (
            <>
              <Route exact path="/">
                <Login
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                  confirm={confirm}
                  setConfirm={setConfirm}
                />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </>
          ) : (
            <>
              <cartContext.Provider value={{ cart, setCart }}>
                <currentContext.Provider
                  value={{ currentitem, setCurrentitem }}
                >
                  <Route exact path="/">
                    <Header
                      confirm={confirm}
                      setConfirm={setConfirm}
                      userInfo={userInfo}
                    />
                    <Main />
                  </Route>
                  <Route exact path="/cart">
                    <Header
                      confirm={confirm}
                      setConfirm={setConfirm}
                      userInfo={userInfo}
                    />
                    <Cart cart={cart} setCart={setCart} />
                  </Route>
                  <Route exact path="/buy">
                    <Buy userInfo={userInfo} cart={cart} />
                  </Route>
                  <Route exact path="/mensection">
                    <MenClothing />
                  </Route>
                  <Route exact path="/buyitem">
                    <SingleBuy userInfo={userInfo} />
                  </Route>
                </currentContext.Provider>
              </cartContext.Provider>
            </>
          )}
        </Switch>
      </Router>
    </>
  );
}

export default App;
