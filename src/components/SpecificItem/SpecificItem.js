import React, { useContext, useEffect, useState } from "react";
import "./Specific.css";
import Star from "../Assests/icons/star.png";
import { cartContext } from "../../App";
export default function SpecificItem({ currentitem, setCurrentitem }) {
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
    const time = setTimeout(() => {
      setSuccess(true);
    }, 0);
    const time1 = setTimeout(() => {
      setSuccess(false);
    }, 1000);
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
          M.R.P. Rs -{" "}
          <span style={{ textDecoration: "line-through", color: "red" }}>
            {currentitem.price - currentitem.price / 6}
          </span>
        </div>
        <div style={{ margin: "10px 0px" }}>
          PRICE. RS - {currentitem.price}
        </div>
        <hr />
        <div>
          <span style={{ color: "rgb(243,168,71)" }}>About This Item</span>
          <br />
          <br />
          <div style={{ width: "70%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aut
            inventore rem natus soluta libero, tempora voluptatibus, ad
            similique nihil quo enim eos architecto.
          </div>
        </div>

        <div className="buy-item">buy now</div>
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
