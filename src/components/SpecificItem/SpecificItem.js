import React, { useContext, useEffect, useState } from "react";
import "./Specific.css";
import { useHistory } from "react-router-dom";
import Star from "../Assests/icons/star.png";
import { cartContext } from "../../App";
export default function SpecificItem({ currentitem, setCurrentitem }) {
  const history = useHistory();
  const { cart, setCart } = useContext(cartContext);
  const [Success, setSuccess] = useState(false);
  const reset = {
    desc: "",
    id: "",
    imgUrl: "",
    name: "",
    price: "",
    stars: "",
  };
  const [state, setState] = useState([]);
  useEffect(() => {
    setState([currentitem.stars]);
  }, [currentitem.stars]);
  function addToCart() {
    setCart([...cart, currentitem]);
    setTimeout(() => {
      setSuccess(true);
    }, 0);
    setTimeout(() => {
      setSuccess(false);
    }, 500);
  }
  function buyItem() {
    history.push("/buyitem");
  }

  return (
    <div className="product-details-container">
      {Success ? (
        <div className="sucessfully-added">
          <div className="added-to-cart-sucessfully">
            Sucessfully Added To Cart
          </div>
        </div>
      ) : null}
      <div className="fixed-image-item">
        <div
          className="image-data-item"
          style={{
            backgroundImage: `url(${currentitem.imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="fixed-datacontent-item">
        <div className="desc-container">{currentitem.desc}</div>
        <div className="stars">
          <div>
            <img
              src={Star}
              alt="star"
              style={{ width: "10px", height: "10px" }}
            />
            <span> {state} star</span>
          </div>
        </div>
        <div style={{ color: "black" }}>
          M.R.P. -{" "}
          <span style={{ textDecoration: "line-through", color: "blue" }}>
            {Number(currentitem.price * 1.2).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
          </span>
        </div>
        <div style={{ margin: "10px 0px" }}>
          PRICE. -{" "}
          {Number(currentitem.price).toLocaleString("en-IN", {
            maximumFractionDigits: 2,
            style: "currency",
            currency: "INR",
          })}
        </div>
        <hr />
        <div>
          <span style={{ color: "rgb(243,168,71)" }}>About This Item</span>
          <br />
          <br />
          <div style={{ width: "70%" }}>{currentitem.name}</div>
        </div>

        <div className="buy-item" onClick={buyItem}>
          buy now
        </div>
        <div className="addtocart-btn" onClick={addToCart}>
          Add to Cart
        </div>
        <div className="cancel-btn" onClick={() => setCurrentitem(reset)}>
          Leave
        </div>
      </div>
    </div>
  );
}
