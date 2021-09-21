import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import Location from "../Assests/icons/white-location.jpg";

export default function Header({ confirm, setConfirm, userInfo }) {
  const history = useHistory();
  const [state, setState] = useState(false);
  function hideData() {
    setState(false);
  }
  function showData1() {
    setState(!state);
  }
  function showData() {
    setState(true);
  }
  function redirectToCart() {
    history.push("/cart");
  }
  function redirecttomain() {
    history.push("/");
  }
  function logoutUser() {
    setConfirm({ ...confirm, ok: false });
  }
  return (
    <>
      <div className="header-container">
        <div className="logo-amazon" onClick={redirecttomain}></div>
        <div className="user-info">
          <img src={Location} alt="location" width="22px" height="22px" />
          <div>
            <span>Deliver to {userInfo.name} </span>
            <br />
            <span> at {userInfo.location}</span>
          </div>
        </div>
        <div className="remaining-data">
          <span className="accountlist" onClick={showData1}>
            Account & List
          </span>
          <div className="cart" onClick={redirectToCart}></div>
        </div>
      </div>
      <div
        className={state ? "account-list-display" : "account-list-displaynone"}
        onMouseOver={showData}
        onMouseLeave={hideData}
      >
        <span style={{ fontSize: "1.2rem" }}> YOUR ACCOUNT </span>
        <div className="hover-text">Your Wishlist</div>
        <div className="hover-text">Your Orders</div>
        <div className="hover-text">Your Prime Video</div>
        <div className="logout-btn" onClick={logoutUser}>
          Logout
        </div>
      </div>
    </>
  );
}
