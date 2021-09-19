import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import Location from "../Assests/icons/white-location.jpg";

export default function Header({ name, location }) {
  const history = useHistory();
  const [state, setState] = useState(false);
  function hideData() {
    setState(false);
  }
  function showData() {
    setState(true);
  }
  function redirectToCart() {
    history.push("/cart");
  }
  function redirecttomain() {
    history.push("/main");
  }
  return (
    <>
      <div className="header-container">
        <div className="logo-amazon" onClick={redirecttomain}></div>
        <div className="user-info">
          <img src={Location} alt="location" width="22px" height="22px" />
          <div>
            <span>Deliver to {name ? { name } : "user"}</span>
            <br />
            <span>{location ? { location } : "location"}</span>
          </div>
        </div>
        <div className="remaining-data">
          <span
            className="accountlist"
            onMouseOver={showData}
            onMouseLeave={hideData}
          >
            Account & List
          </span>
          <div className="cart" onClick={redirectToCart}></div>
        </div>
      </div>
      <div
        className={state ? "account-list-display" : "account-list-displaynone"}
        onMouseOver={showData}
        onMouseLeave={hideData}
      ></div>
    </>
  );
}
