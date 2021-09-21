import React, { useState, useContext, useEffect } from "react";
import ImageMen from "../Assests/Images/mentop.PNG";
import "./MenClothing.css";
import { cartContext } from "../../App";

export default function MenClothing() {
  const { cart, setCart } = useContext(cartContext);
  const [Success, setSuccess] = useState(false);
  const [menCloths, setMenCloths] = useState([]);
  useEffect(async () => {
    await fetch("http://localhost:5000/data2")
      .then((req) => req.json())
      .then((data) => {
        setMenCloths(data);
      });
  }, []);
  function addToCart(item) {
    setCart([...cart, item]);
    const time = setTimeout(() => {
      setSuccess(true);
    }, 0);
    const time1 = setTimeout(() => {
      setSuccess(false);
    }, 500);
  }
  return (
    <div className="men-container">
      {Success ? (
        <div className="sucessfully-added">
          <div className="added-to-cart-sucessfully">
            Sucessfully Added To Cart
          </div>
        </div>
      ) : (
        <></>
      )}
      <img src={ImageMen} alt="men" width="100%" height="100%" />
      {menCloths.map((item) => {
        return (
          <div className="men-item">
            <div className="item-image-men">
              <img src={item.imgUrl} alt="item" width="100%" height="100%" />
            </div>
            <div className="item-desc-men">
              <span>{item.desc}</span>
              <div>
                Price :{" "}
                {Number(`${item.price}`).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })}
              </div>
              <div className="men-cart-btn" onClick={() => addToCart(item)}>
                Add to cart
              </div>
              <br />
              <div className="men-cart-btn">Buy</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
