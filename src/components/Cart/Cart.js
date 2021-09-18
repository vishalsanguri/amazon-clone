import React, { useContext, useState } from "react";
import "./Cart.css";
import Secure from "../Assests/icons/secure.PNG";
import { useHistory } from "react-router-dom";
import { cartContext } from "../../App";

export default function Cart() {
  const [arrow, setArrow] = useState(false);
  const history = useHistory();
  const { cart, setCart } = useContext(cartContext);
  function redirectToMain() {
    history.push("/");
  }
  function deleteitem(index) {
    console.log("h");
    cart.splice(index, 1);
    setCart([...cart]);
  }
  var total = 0;
  cart.forEach((e) => {
    var pointNum = parseFloat(e.price);
    total += pointNum;
  });
  function arrowclick() {
    setArrow(!arrow);
  }
  return (
    <div className="main-cart">
      <div className="cart-container">
        {cart.length !== 0 ? (
          <span className="heading-div-cart">Shopping Cart</span>
        ) : (
          <>
            <span className="heading-div-cart">Your Amazon Cart is empty.</span>
          </>
        )}
        <br />
        {cart.length === 0 ? (
          <div className="go-to-add" onClick={redirectToMain}>
            GO to add items
          </div>
        ) : null}
        {cart.length !== 0
          ? cart.map((item, i) => {
              return (
                <div key={i}>
                  <div className="cart-item-container">
                    <div className="item-image-cart">
                      <img
                        src={item.imgUrl}
                        alt="item"
                        width="65%"
                        height="40%"
                      />
                    </div>
                    <div className="item-desc-cart">
                      <span className="item-head-cart">{item.desc}</span>
                      <div style={{ color: "green", padding: "5px 0px" }}>
                        In-Stock
                      </div>
                      {item.price > 1000 ? (
                        <div style={{ color: "blue" }}>
                          Eligible Free Shipping
                        </div>
                      ) : (
                        <span>
                          shiping charge Rs :{" "}
                          <span style={{ color: "red" }}>40</span>{" "}
                        </span>
                      )}
                      <div style={{ paddingBottom: "35px" }}>
                        price :{" "}
                        <span style={{ color: "green" }}>{item.price}</span>
                      </div>
                      <div
                        className="delete-item-button"
                        onClick={() => {
                          deleteitem(i);
                        }}
                      >
                        <span>Delete</span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="hr-line"></div>
                </div>
              );
            })
          : null}
      </div>
      <div className="cart-total">
        <div className="secure-img">
          <img src={Secure} alt="secure" width="100%" height="100%" />
        </div>
        <div className="subtotal-cart">
          Subtotal ({cart.length} {cart.length > 1 ? "items" : "item"}): RS{" "}
          {total}
          {cart.length !== 0 ? (
            <div className="proceed-to-buy">Proceed to buy</div>
          ) : null}
          <div className="emi-container">
            {total < 1000 ? (
              <span>EMI not available</span>
            ) : (
              <div style={{ position: "relative" }}>
                <span>
                  EMI available{" "}
                  {arrow ? (
                    <span
                      onClick={arrowclick}
                      style={{
                        position: "absolute",
                        right: "0",
                        userSelect: "none",
                        cursor: "pointer",
                      }}
                    >
                      &#8593;
                    </span>
                  ) : (
                    <span
                      onClick={arrowclick}
                      style={{
                        position: "absolute",
                        right: "0",
                        userSelect: "none",
                        cursor: "pointer",
                      }}
                    >
                      &#8595;
                    </span>
                  )}
                  <span
                    onClick={arrowclick}
                    style={{
                      position: "absolute",
                      right: "0",
                      userSelect: "none",
                      cursor: "pointer",
                    }}
                  >
                    &#8595;
                  </span>
                </span>{" "}
                <div className={arrow ? "emi-text-disp" : "emi-text-hide"}>
                  Your order qualifies for EMI with valid credit cards (not
                  available on purchase of Gold, Jewelry, Gift cards and Amazon
                  pay balance top up).
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="vertical-cart-line"></div>
      </div>
    </div>
  );
}
