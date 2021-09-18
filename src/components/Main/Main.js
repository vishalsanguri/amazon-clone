import React, { useEffect, useState } from "react";
import "./Main.css";
import SpecificItem from "../SpecificItem/SpecificItem";
import ImageSlider from "../ImageSlider/ImageSlider";

export default function Main() {
  const [data, setData] = useState([]);
  const [currentitem, setCurrentitem] = useState({
    desc: "",
    id: "",
    imgUrl: "",
    name: "",
    price: "",
    stars: "",
  });
  function showContentItem(item) {
    setCurrentitem({ ...currentitem, ...item });
  }
  useEffect(async () => {
    await fetch("http://localhost:5000/data")
      .then((req) => req.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      {currentitem.id ? (
        <SpecificItem
          setCurrentitem={setCurrentitem}
          currentitem={currentitem}
        />
      ) : null}

      <div className="main-container">
        <ImageSlider />
        <div className="abc">
          <div className="dummy-data">
            <div className="dummy-data-container1"></div>
            <div className="dummy-data-container2"></div>
            <div className="dummy-data-container3"></div>
          </div>
          <div className="real-data">
            {data
              ? data.map((item, i) => {
                  return (
                    <div
                      onClick={() => showContentItem(item)}
                      key={i}
                      className="item-container"
                    >
                      <img
                        src={item.imgUrl}
                        alt="product"
                        className="image-of-item"
                      />
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}
