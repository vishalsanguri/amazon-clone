import React, { useEffect, useState } from "react";
import "./Main.css";
import SpecificItem from "../SpecificItem/SpecificItem";
import ImageSlider from "../ImageSlider/ImageSlider";
import Suspense from "../Suspense/Suspense";

export default function Main() {
  const [data, setData] = useState([]);
  const [headphones, setHeadphones] = useState([]);
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
  useEffect(async () => {
    await fetch("http://localhost:5000/data1")
      .then((req) => req.json())
      .then((data) => {
        setHeadphones(data);
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
            <div className="dummy-data-container4"></div>
          </div>
          <div className="real-data">
            {data.length !== 0 ? (
              data.map((item, i) => {
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
            ) : (
              <Suspense />
            )}
          </div>
          <div className="music-no-life"></div>
          <div className="real-data">
            {headphones.length !== 0 ? (
              headphones.map((item, i) => {
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
            ) : (
              <Suspense />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
