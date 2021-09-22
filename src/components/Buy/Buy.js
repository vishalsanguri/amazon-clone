import React from "react";
import "./Buy.css";

export default function Buy({ cart, userInfo }) {
  var total = 0;
  return (
    <div className="buy-page">
      <div className="buy-container">
        <span className="magic">Hi {userInfo.name}</span>
        <div className="magic">
          {" "}
          <span> Your items </span> <hr />
          <div>
            <ul>
              {cart.map((item) => {
                total += Number(item.price);
                return (
                  <li style={{ listStyle: "none" }}>
                    {item.name}{" "}
                    <div style={{ color: "green" }}>
                      {Number(item.price).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="magic">To be delivered at : {userInfo.location}</div>
        <span className="magic">
          Total :{" "}
          {total.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
            style: "currency",
            currency: "INR",
          })}
        </span>
      </div>
      <div className="buy-container1">
        <label>Card Number</label>
        <input type="text" className="input-data" />
        <label>Expiration Date</label>
        <input type="text" className="input-data" />
        <label>Cvv</label>
        <input type="text" className="input-data" />
        <label>Card Owner</label>
        <input type="text" className="input-data" />
        <div className="pay-amount">Pay</div>
      </div>
    </div>
  );
}
